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
       tolerance: 0
    });

The `tolerance` option is an integer value. The `doIn()` method will be executed when the matched element is `N` pixels inside the viewport.

To-do
-----

1. Teach the plugin to do its thing while scrolling horizontally.
2. Tell the plugin to track a specified attribute to do lazy-loading of images
