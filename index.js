// دسترسی به کتابخانه Cheerio
const cheerio  = require("cheerio");

// خواندن اطلاعات از آدرس اینترنتی با استفاده از پکیج اکسیوس




// خواندن محتوای یک فایل
const fs = require("fs")

// ماژول path برای کار با مسیرها
const path = require("path")

// مشخص کردن مسیر فایل
const file_path = path.join(__dirname, "index1.html"); // __dirname == مسیر پروژه

//خواندن محتوای فایل
const html_content = fs.readFileSync(file_path, "utf-8"); // file_path == مسیر فایل


// مشخص کردن محتوای فایل
const $ = cheerio.load(html_content);
console.log($.html()); // همه محتوای html را لود می کند
console.log("Title: ", $("title").text()); // متن تایتل را نمایش می دهد
console.log("H2: ", $("h2").text()); // متن h2 را نمایش می دهد = اولین
console.log("P: ", $("p").text()); // متن p را نمایش می دهد


    


// مشخص کردن محتوای html
const $1 = cheerio.load(`
    <html><head><title>
        Hello, World!
    </title></head></html>
    <p>sample text</p>
`)

console.log($1('title').text()); // node index.js == Hello, World!
console.log($1('head').text()); // node index.js == Hello, World!
console.log($1('head').html()); // node index.js == <html code>
console.log($1.html()); // همه محتوای html را لود می کند
