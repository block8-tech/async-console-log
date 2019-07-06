const async_console = require('./index');

const myPromise = (delay) => new Promise(resolve => setInterval(() => resolve('test text'), delay));

async_console.log(myPromise(3000));