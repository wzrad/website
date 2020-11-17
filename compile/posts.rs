// use std::ops::Range;
use nom as n;
use nom::bytes::complete as p;
use nom::multi as m;
use nom::combinator as c;
use nom::sequence as s;
use nom::character as b;

// -- impls --
fn headers(i: &[u8]) -> n::IResult<&[u8], Vec<(&str, &str)>> {
    return s::delimited(
        tag_rule(),
        m::many0(header()),
        tag_rule(),
    )(i);
}

fn header<'a>() -> impl FnMut(&'a [u8]) -> n::IResult<&'a [u8], (&'a str, &'a str)> {
    return s::terminated(
        s::pair(
            header_key(),
            header_val()
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

fn tag_rule<'a>() -> impl FnMut(&'a [u8]) -> n::IResult<&'a [u8], &'a [u8]> {
    return p::tag("---\n");
}

fn tag_quote<'a>() -> impl FnMut(&'a [u8]) -> n::IResult<&'a [u8], &'a [u8]> {
    return p::tag("\"");
}

#[inline]
pub fn is_not_quote(chr: u8) -> bool {
  return chr != b'"'
}

#[cfg(test)]
mod tests {
    use super::*;

    // -- tests --
    #[test]
    fn it_parses_the_headers() {
        let input = trim(r#"
---
key1: "value1"
key2: "value2"
---

# body
        "#);

        let rest = trim_end(r#"
# body
        "#);

        let res = headers(input);
        assert_eq!(res, Ok((&rest[..], vec![("key1", "value1"), ("key2", "value2")])));
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
