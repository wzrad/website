include ./Makefile.base.mk

# -- cosmetics --
help-column-width = 8

# -- context --
tools-cargo = cargo
tools-webfs = webfsd

# -- init --
## setup the dev environment
init: i/pre i/system
.PHONY: init

i/pre:
ifeq ("$(shell command -v brew)", "")
	$(info ✘ brew is not installed, please see:)
	$(info - https://brew.sh)
	$(error 1)
endif
ifeq ("$(shell command -v cargo)", "")
	$(info ✘ cargo is not installed, please install rust:)
	$(info - https://www.rust-lang.org/tools/install)
	$(error 1)
endif
.PHONY: i/pre

i/system:
	HOMEBREW_NO_AUTO_UPDATE=1 brew bundle -v
.PHONY: i/system

# -- build --
## build the compiler
build: b
.PHONY: build

b:
	$(tools-cargo) build
.PHONY: b

# -- generate --
## generate the site
generate: g
.PHONY: gen

g:
	$(tools-cargo) run
.PHONY: g

# -- start --
## start the dev server
start: s
.PHONY: start

s:
	$(tools-webfs) -F -r public -f index.html
.PHONY: s

# -- test --
## alias for t/unit
test: t
.PHONY: test

t: t/unit
.PHONY: t

## runs unit tests
t/unit:
	$(tools-cargo) test
.PHONY: t/unit
