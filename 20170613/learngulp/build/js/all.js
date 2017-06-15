"use strict";

var render = function render(html, dom) {
    dom.innerHTML = html;
};
'use strict';

render('<h1>1111</h1>', document.getElementById('app'));