const jsdom = require('jsdom');
const fs = require('fs');
const html = fs.readFileSync(`${__dirname}/test.html`, 'utf-8');

global.document = jsdom.jsdom(html);
global.window = global.document.defaultView;
