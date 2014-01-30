
# expression

  Execute a JS expression in a context

## Installation

  Install with [component(1)](http://component.io):

    $ component install ripplejs/expression

## API

```js
var exp = new Expression("one + (two * one)");

var result = exp.exec({
  two: 10,
  one: 2
});

assert(result === 22);
```

Create a new Expression, passing in a string.

```js
var exp = new Expression("one + (two * one)");
```

Execute this expression using a given context. For example, this expression
above depends on the variables `one` and `two`. So we can pass in an object
with these properties.

```js
var result = exp.exec({
  two: 10,
  one: 2
});
```

## Properties

### .props

Returns the properties used in the expression

## License

  The MIT License (MIT)

  Copyright (c) 2014 Anthony Short

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.