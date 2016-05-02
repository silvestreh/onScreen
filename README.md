# OnScreen [![Build Status](https://travis-ci.org/silvestreh/onScreen.svg?branch=master)](https://travis-ci.org/silvestreh/onScreen)

A light UI library that does stuff when the matched elements enter or leave the viewport. Tested to work in IE9+, Edge, Gecko, Blink, and Webkit.

## Documentation

#### Installation

OnScreen is available on NPM. To install it open a terminal and run…

```shell
npm install onscreen
```

#### Usage

Once installed you can use it with your favorite module bundler.

```javascript
// With Babel
import OnScreen from 'OnScreen';
const os = new OnScreen();

// Without Babel using Browserify
var OnScreen = require('OnScreen');
var os = new OnScreen();
```

The constructor accepts an `options` object which defaults to:

```javascript
var os = new OnScreen({
    tolerance: 0,
    debounce: 100
});
```

Not using a module bundler? No problem! If you include a OnScreen using `<script>` tag it will expose a global variable OnScreen which you can use.

```html
<html>
    <head>
        <!-- Your regular head tags -->
    </head>
    <body>
        <!-- Your regular body -->
        <script type="text/javascript" src="OnScreen.umd.js"></script>
        <script type="text/javascript">
            var os = new OnScreen();
        </script>
    </body>
</html>
```

#### Properties

The instance, `os`, has the following properties:

`options.tolerance` is the number of pixels an element is allowed to enter the viewport before calling its callback. Defaults to `0`.

`options.debounce` is the number of milliseconds to wait to call an element's callback after the user has stopped scrolling. Defaults to `100`.

#### Methods

The instance, `os`, has the following methods:

##### `on(event, selector, [callback])`
Starts tracking DOM nodes that match the CSS `selector` and calls the supplied `callback` when the `event` occurs. Allowed events are `'enter'` and `'leave'`.

If no `callback` is given, it will re-evaluate the DOM and start tracking Nodes that were appended after the page was rendered. Is not be necessary to do this manually as OnScreen is smart enough to notice when a Node was appended to the DOM.

```javascript
// Do something when an element enters the viewport
os.on('enter', '.someCSSSelector', (element) => {
    // makes's the element's text red
    element.style.color = 'red';
});

// Do something else when an element leaves
os.on('leave', '.someCSSSelector', (element) => {
    // makes's the element's text black
    element.style.color = 'black';
});
```

##### `off(event, selector)`

Removes the `event` callback of a given `selector`.

```javascript
// Stop tracking when .someCSSSelector leaves the viewport
os.off('leave', '.someCSSSelector');

// Stop tracking when .someCSSSelector enters the viewport
os.off('enter', '.someCSSSelector');
```

##### `destroy()`

Removes the scroll event listener attached to the `window` object.

```javascript
os.destroy();
```

##### `attach()`

Adds a scroll event listener to the `window` object. This method is called automatically on instantiation and should only be used if you destroyed the instance.

```javascript
os.attach();
```

## jQuery

If you're upset that I decided to ditch jQuery don't be. I plan to write a wrapper and enable OnScreen to work as a jQuery plugin, though the API will break, that's for sure. You'll need to update your code if you plan to upgrade.
