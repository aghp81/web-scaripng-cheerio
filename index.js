// دسترسی به کتابخانه Cheerio
const cheerio  = require("cheerio");

// مشخص کردن محتوای html
const $ = cheerio.load(`
    <html><head><title>
        Hello, World!
    </title></head></html>
`)

console.log($('title').text()); // node index.js == Hello, World!
console.log($('head').text()); // node index.js == Hello, World!
console.log($('head').html()); // node index.js == <html code>
