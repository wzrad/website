use compile::Site;

fn main() {
    let site = Site::new();

    if let Err(error) = site.compile() {
        println!("{}", error)
    } else {
        println!("site built in 0.01s.")
    }
}
