// دسترسی به کتابخانه Cheerio
const cheerio  = require("cheerio");

// خواندن محتوای یک فایل
const fs = require("fs")

// ماژول path برای کار با مسیرها
const path = require("path")

// مشخص کردن مسیر فایل
const file_path = path.join(__dirname, "index1.html"); // __dirname == مسیر پروژه


// مشخص کردن محتوای html
const $ = cheerio.load(`
    <html><head><title>
        Hello, World!
    </title></head></html>
    <p>sample text</p>
`)

console.log($('title').text()); // node index.js == Hello, World!
console.log($('head').text()); // node index.js == Hello, World!
console.log($('head').html()); // node index.js == <html code>
console.log($.html()); // همه محتوای html را لود می کند
