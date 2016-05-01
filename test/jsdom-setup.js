const jsdom = require('jsdom').jsdom;
const fs = require('fs');
const html = fs.readFileSync(`${__dirname}/test.html`, 'utf-8');

global.document = jsdom(html);
global.window = global.document.defaultView;
