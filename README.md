[![Build Status](https://travis-ci.org/silvestreh/onScreen.svg?branch=master)](https://travis-ci.org/silvestreh/onScreen)
[![Codecov](https://img.shields.io/codecov/c/github/silvestreh/onScreen.svg?maxAge=2592000?style=flat-square)](https://codecov.io/gh/silvestreh/onScreen)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5a103aa9fe86436a8e619333dfdff2a5)](https://www.codacy.com/app/silvestre-herrera/onScreen?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=silvestreh/onScreen&amp;utm_campaign=Badge_Grade)
[![npm](https://david-dm.org/silvestreh/onScreen/dev-status.svg)](https://david-dm.org/silvestreh/onScreen#info=devDependencies&view=table)
[![npm](https://david-dm.org/silvestreh/onScreen.svg)](https://david-dm.org/silvestreh/onScreen#info=dependencies&view=table)
[![npm](https://img.shields.io/npm/dt/onscreen.svg?maxAge=2592000)](https://www.npmjs.com/package/onscreen)
[![npm](https://img.shields.io/npm/v/onscreen.svg)](https://www.npmjs.com/package/onscreen)
[![npm](https://img.shields.io/npm/l/onscreen.svg)](https://www.npmjs.com/package/onscreen)

# OnScreen

A light library that does stuff when the matched elements enter or leave the viewport. Tested to work in IE9+, Edge, Gecko, Blink, and Webkit.

## Documentation

> Hint: demos now have their own repository. Be sure to [check them out](https://github.com/silvestreh/onScreen-demo).

### Installation

OnScreen is available on NPM. To install it open a terminal and run…

```shell
npm install onscreen --save
```

Not using NPM? While I would **strongly** recommend you to use NPM to manage your app's dependencies, you can still [download it manually](https://unpkg.com/onscreen/dist/on-screen.umd.min.js).

#### Using bower?

While OnScreen is no longer published as a bower package you can still pull it from UnPKG by adding this to your `bower.json` file:

```json
dependencies: {
    "onscreen": "https://unpkg.com/onscreen/dist/on-screen.umd.min.js"
}
```

Or, from your command line, run the following:

```shell
bower install --save onscreen=https://unpkg.com/onscreen/dist/on-screen.umd.min.js
```

### Usage

Once installed you can use it with your favorite module bundler.

```javascript
// Using ES6 syntax (requires a transpiler)
import OnScreen from 'onscreen';
const os = new OnScreen();

// Using ES5 syntax
var OnScreen = require('onscreen');
var os = new OnScreen();
```

Not using a module bundler? No problem! If you include OnScreen using a `<script>` tag it will expose a global `OnScreen` constructor which you can use.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Your regular head tags -->
    </head>
    <body>
        <!-- Your regular body -->
        <script type="text/javascript" src="https://unpkg.com/onscreen/dist/on-screen.umd.min.js"></script>
        <script type="text/javascript">
            var os = new OnScreen();
        </script>
    </body>
</html>
```

The constructor accepts an `options` object which defaults to:

```javascript
var os = new OnScreen({
    tolerance: 0,
    debounce: 100,
    container: window
});
```

#### Options

The instance, `os`, has the following options:

`options.tolerance` is the number of pixels an element is allowed to enter its container boundaries before calling its callback. Defaults to `0`.

`options.debounce` is the number of milliseconds to wait before calling an element's callback after the user has stopped scrolling. You can set this to `false` to disable debouncing. Defaults to `100`.

`options.container` is the container of the elements you want to track. It accepts a string representing a CSS selector or an `HTMLElement` object. Defaults to `window`.

#### Methods

The instance, `os`, has the following methods:

##### `on(event, selector, [callback])`
Starts tracking DOM nodes that match the CSS `selector` and calls the supplied `callback` when the `event` occurs. Allowed events are `'enter'` and `'leave'`.

If no `callback` is given, it will re-evaluate the DOM and start tracking Nodes that were appended after the page was rendered. It's not necessary to do this manually as OnScreen is smart enough to notice when a Node was appended to the DOM.

```javascript
// Do something when an element enters the viewport
os.on('enter', '.someCSSSelector', (element, event) => {
    // makes's the element's text red
    element.style.color = 'red';

    // `event` is a string that tells you what type of event it is.
    // in this case it would be 'enter'
});

// Do something else when an element leaves
os.on('leave', '.someCSSSelector', (element, event) => {
    // makes's the element's text black
    element.style.color = 'black';

    // `event` is a string that tells you what type of event it is.
    // in this case it would be 'leave'
});

// Do another thing when the element enters the viewport
os.on('enter', '.someCSSSelector', function myCallback(element, event) {
    // This callback won't override the previous one. Both will run.

    // makes the element's font size 32px
    element.style.fontSize = '32px';

    // `event` is a string that tells you what type of event it is.
    // in this case it would be 'enter'
});
```

As you can see in the above snippet, you can use `.on()` multiple times and all functions will be called.

##### `off(event, selector, [handler])`

Removes the `handler` (optional parameter) callback of a given `selector` for a given `event`.

```javascript
// Stop tracking when .someCSSSelector leaves the viewport
os.off('leave', '.someCSSSelector', myFunction);

// Stop tracking when .someCSSSelector enters the viewport
os.off('enter', '.someCSSSelector', myOtherFunction);
```

If no `handler` is given, it'll remove all `event` handlers. If you want to remove an anonymous callback function you should pass the string `'anonymous'` as the `handler` parameter.

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

##### `check(selector, container)`

This is a static method that doesn't require instantiation. The `selector` and `container` parameters can be a CSS selector string or a HTMLElement object instance. If no `container` is provided it will default to `window`. This method can be invoked with `OnScreen.check('.elment', '.container')`.

## Contributing

It's pretty straight forward:

* Fork this repo
* Write a feature or fix a bug
* Update or create the tests
* Pass those tests
* Send a pull request and wait…

#### Code style

OnScreen _(mostly)_ follows [AirBnb's Javascript Styleguide](https://github.com/airbnb/javascript) so make sure to check it out.

There's an `.editorconfig` that should take care of setting up your text editor. If your editor doesn't support it, then make sure to use 4 spaces per indent, trim trailing white-space, and insert a final new line.

#### Testing

You'll need to run the tests through an HTTP server. I'm using `http-server -s &` to serve `./` on `http://localhost:8080` and then run the tests with `npm test`.

## jQuery

If you're upset that I decided to ditch jQuery don't be. I plan to write a wrapper and enable OnScreen to work as a jQuery plugin, though the API will break, that's for sure. You'll need to update your code if you plan to upgrade.
