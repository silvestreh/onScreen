onScreen
========

A jQuery plugin that does stuff when the matched elements are visible (as inside the viewport)

The plugin works something like this:

    $('elements').onScreen({
       doIn: function() {
         // Do something to the matched elements as they come in
       },
       doOut: function() {
         // Do something to the matched elements as they get off scren
       },
       tolerance: 0,
       toggleClass: true,
       lazyAttr: null
    });

Options
-------

`doIn`: `function`. Is executed whenever the matched elements enter the viewport.<br>
`doOut`: `function`. Is executed whenever the matched elements leave the viewport.<br>
`tolerance`: `integer`. The `doIn()` method will be executed when the matched element is `N` pixels inside the viewport.<br>
`toggleClass`: `boolean`. Tells the plugin to add the `onScreen` class when the elements enter the viewport and remove it when they leave.<br>
`lazyAttr`: `string`. onScreen will look for this attribute on `<img>` tags and replace the `src` attribute with this one's.<br>

To-do
-----

1. Teach the plugin to do its thing while scrolling horizontally. duh.
