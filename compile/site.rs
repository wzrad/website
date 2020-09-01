use std::path as p;
use std::{fs, io};
use thiserror::Error;

#[derive(Error, Debug)]
pub enum Error {
    #[error("Failed to scaffold site.")]
    FailedToScaffold(#[from] io::Error),
}

// -- types --
pub struct Site {}

// -- impls --
impl Site {
    // -- impls/lifetime
    pub fn new() -> Site {
        return Site {};
    }

    // -- impls/commands
    pub fn compile(&self) -> Result<(), Error> {
        // scaffold dir
        let dist_path = p::Path::new("./public");
        fs::create_dir_all(dist_path)?;

        // compile contents of site directory
        let site_dir = p::Path::new("./site");

        // compile static pages in site/pages
        let page_dir = site_dir.join("./pages");

        for page in page_dir.read_dir()?.flatten() {
            let page_src_path = page.path();
            let page_suffix = page_src_path.strip_prefix(&page_dir).unwrap();
            let page_dst_path = dist_path.join(page_suffix);
            fs::copy(page_src_path, page_dst_path)?;
        }

        return Ok(());
    }
}
