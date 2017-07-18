// import 'babel-polyfill';
// import configs from './configs'
// import { takeScreenshot, saveImageFile } from './screenshot'

// configs.urls.forEach(async (url) => {
//   const data64 = await takeScreenshot(url)
//   saveImageFile(data64)
// })
var ProgressBar = require('progress');

var bar = new ProgressBar(':bar', { total: 10 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);