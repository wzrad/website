include ./Makefile.base.mk

# -- cosmetics --
help-column-width = 6

# -- context --
tools-cargo = cargo

# -- init --
## setup the dev environment
init: i/pre
.PHONY: init

i/pre:
ifeq ("$(shell command -v cargo)", "")
	$(info ✘ cargo is not installed, please install rust:)
	$(info - https://www.rust-lang.org/tools/install)
	$(error 1)
endif
.PHONY: i/pre

# -- build --
## build the compiler
build: b
.PHONY: build

b:
	$(tools-cargo) build
.PHONY: b

# -- run --
## run the compiler
run: r
.PHONY: run

r:
	$(tools-cargo) run
.PHONY: r

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
