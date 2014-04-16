
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

node_modules: package.json
	@npm install

clean:
	rm -fr build components template.js

test: build
	mocha-phantomjs test/index.html

.PHONY: clean test