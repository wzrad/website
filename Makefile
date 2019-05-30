include ./Makefile.base.mk

# -- cosmetics --
help-column-width = 5

# -- context --
tools-js=./node_modules/.bin
tools-gatsby=$(tools-js)/gatsby

# -- start/stop --
## alias for s/dev
start: s/dev
.PHONY: start

## starts the dev server
s/dev:
	$(tools-gatsby) develop
.PHONY: s/dev
