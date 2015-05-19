var symdiffHTML = require('symdiff-html'),
  ejs = require('ejs');

function symdiffEjs (content) {
  var html = content.replace(/\<%.*?\>/gi, '');

  return symdiffHTML(ejs.render(html));
}

module.exports = symdiffEjs;
