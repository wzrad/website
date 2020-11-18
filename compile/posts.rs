// use std::ops::Range;
use nom as n;
use nom::bytes::complete as p;
use nom::multi as m;
use nom::combinator as c;
use nom::sequence as s;
use nom::character as b;

// -- types --
#[derive(PartialEq, Debug)]
struct Post<'a> {
    pub headers: Vec<Header<'a>>,
    pub body: Vec<Text<'a>>,
}

#[derive(PartialEq, Debug)]
struct Header<'a> {
    pub key: &'a str,
    pub val: &'a str,
}

#[derive(PartialEq, Debug)]
struct Text<'a> {
    pub val: &'a str,
}

// -- impls --
impl<'a> Post<'a> {
    fn new(elements: (Vec<Header<'a>>, Vec<Text<'a>>)) -> Post<'a> {
        return Post {
            headers: elements.0,
            body: elements.1,
        };
    }
}

fn post<'a>() -> impl FnMut(&'a [u8]) -> n::IResult<&'a [u8], Post<'a>> {
    return c::map(
        s::pair(
            headers(),
            body(),
        ),
        Post::new,
    );
}

// -- impls/headers
impl<'a> Header<'a> {
    fn new(pair: (&'a str, &'a str)) -> Header<'a> {
        return Header { key: pair.0, val: pair.1 };
    }
}

fn headers<'a>() -> impl FnMut(&'a [u8]) -> n::IResult<&'a [u8], Vec<Header<'a>>> {
    return s::delimited(
        tag_rule(),
        m::many0(header()),
        tag_rule(),
    );
}

fn header<'a>() -> impl FnMut(&'a [u8]) -> n::IResult<&'a [u8], Header<'a>> {
    return s::terminated(
        c::map(
            s::pair(
                header_key(),
                header_val()
            ),
            Header::new
        ),
        p::tag("\n")
    );
}

fn header_key<'a>() -> impl FnMut(&'a [u8]) -> n::IResult<&'a [u8], &'a str> {
    return s::terminated(
        c::map_res(
            p::take_while(b::is_alphanumeric),
            std::str::from_utf8,
        ),
        p::tag(": "),
    );
}

fn header_val<'a>() -> impl FnMut(&'a [u8]) -> n::IResult<&'a [u8], &'a str> {
    return s::delimited(
        tag_quote(),
        c::map_res(
            p::take_while(is_not_quote),
            std::str::from_utf8,
        ),
        tag_quote(),
    );
}

// -- impls/body
impl<'a> Text<'a> {
    fn new(val: &'a str) -> Text<'a> {
        return Text { val };
    }
}

fn body<'a>() -> impl FnMut(&'a [u8]) -> n::IResult<&'a [u8], Vec<Text<'a>>> {
    return m::many0(
        text(),
    )
}

fn text<'a>() -> impl FnMut(&'a [u8]) -> n::IResult<&'a [u8], Text<'a>> {
    return c::map(
        c::map_res(
            p::take_while1(|_| true),
            std::str::from_utf8,
        ),
        Text::new,
    );
}

// -- impls/primitives
fn tag_rule<'a>() -> impl FnMut(&'a [u8]) -> n::IResult<&'a [u8], &'a [u8]> {
    return p::tag("---\n");
}

fn tag_quote<'a>() -> impl FnMut(&'a [u8]) -> n::IResult<&'a [u8], &'a [u8]> {
    return p::tag("\"");
}

// -- impls/tests
#[inline]
pub fn is_not_quote(chr: u8) -> bool {
  return chr != b'"'
}

// -- tests --
#[cfg(test)]
mod tests {
    use super::*;

    // -- tests --
    #[test]
    fn it_parses_the_post_headers() {
        let input = trim(r#"
---
key1: "value1"
key2: "value2"
---

body
        "#);

        let rest = trim_end(r#"
        "#);

        let post = post()(input);
        assert_eq!(post, Ok((&rest[..], Post::new((
            vec![
                Header::new(("key1", "value1")),
                Header::new(("key2", "value2")),
            ],
            vec![
                Text::new("\nbody"),
            ],
        )))));
    }

    // -- helpers --
    const SP: &'static [char] = &[' '];
    const WS: &'static [char] = &['\n', ' '];

    fn trim(raw: &str) -> &[u8] {
        return raw.trim_matches(&WS[..]).as_bytes();
    }

    fn trim_start(raw: &str) -> &[u8] {
        return raw.trim_start_matches(&WS[..]).trim_end_matches(&SP[..]).as_bytes();
    }

    fn trim_end(raw: &str) -> &[u8] {
        return raw.trim_start_matches(&SP[..]).trim_end_matches(&WS[..]).as_bytes();
    }
}
