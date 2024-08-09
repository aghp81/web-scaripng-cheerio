// دسترسی به کتابخانه Cheerio
const cheerio = require("cheerio");

// خواندن اطلاعات از آدرس اینترنتی با استفاده از پکیج اکسیوس
const axios = require("axios");

// دریافت اطلاعات از آدرس اینترنتی
const fetchAndParseURL = async (url) => {
  try {
    // دریافت اطلاعات
    const response = await axios.get(url);
    const $2 = cheerio.load(response.data); // دریافت محتوای اچ تی ام ال سایت
    console.log("Title: ", $2("title").text()); // نمایش تایتل سایت
  } catch (error) {
    console.log("Error fetching the URL: ", error);
  }
};

const url = "https://stackoverflow.com/";
fetchAndParseURL(url); // فراخوانی آردس سایت

// خواندن محتوای یک فایل
const fs = require("fs");

// ماژول path برای کار با مسیرها
const path = require("path");

// مشخص کردن مسیر فایل
const file_path = path.join(__dirname, "index1.html"); // __dirname == مسیر پروژه

//خواندن محتوای فایل و ذخیره آن
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
`);

console.log($1("title").text()); // node index.js == Hello, World!
console.log($1("head").text()); // node index.js == Hello, World!
console.log($1("head").html()); // node index.js == <html code>
console.log($1.html()); // همه محتوای html را لود می کند

console.log("---------------------");

console.log("نمایش محتوای index2");

// فایل index2.html

// خواندن محتوای یک فایل
const fs1 = require("fs");

// ماژول path برای کار با مسیرها
const path1 = require("path");
// مشخص کردن مسیر فایل
const file_path1 = path1.join(__dirname, "index2.html"); // __dirname == مسیر پروژه

//خواندن محتوای فایل و ذخیره آن
const html_content1 = fs1.readFileSync(file_path1, "utf-8"); // file_path == مسیر فایل

// مشخص کردن محتوای فایل
const $3 = cheerio.load(html_content1);
console.log($3(".content").text()); // نمایش تکست کلاس content
console.log($3("[id=sub-text]").text()); // نمایش تکست id sub-text
console.log($3("p.selected").text()); // show text for p tag with selected class
console.log($3("div p").text()); // show all of p tags in the div == Text 1Text 2Text 3

// show all of p tags in the div == an array
const data = $3("div p");
data.each((index, element) => {
  console.log(index, $3(element).text());
});

// show all of p tags directly in the div == an array == text 4
const data1 = $3("div > p");
data1.each((index, element) => {
  console.log(index, $3(element).text());
});

// show first of p tag in the div == an array
const data2 = $3("div p:first");
data2.each((index, element) => {
  console.log(index, $3(element).text());
});

// show last of p tag in the div == an array
const data3 = $3("div p:last");
data3.each((index, element) => {
  console.log(index, $3(element).text());
});

// show  p tags in the div that contains 2 == an array
const data4 = $3("div p:contains('Node')");
data4.each((index, element) => {
  console.log(index, $3(element).text());
});

// پیمایش به سمت پایین
// show all of the p tags in the div
const data5 = $3("div").find("p");
data5.each((index, element) => {
  console.log(index, $3(element).text());
});

// show all of the p tags that directly in the div == Material UI
const data6 = $3("div").children("p");
data6.each((index, element) => {
  console.log(index, $3(element).text());
});

// show all of the the div children == an array
const data7 = $3("div").contents();
data7.each((index, element) => {
  console.log(index, $3(element).text());
});

// پیمایش به سمت بالا
// show first of the html content article parent == an array
const data8 = $3("article").parent();
data8.each((index, element) => {
  console.log(index, $3(element).html());
});

// show all of the html content article parents == an array
const data9 = $3("article").parents();
data9.each((index, element) => {
  console.log(index, $3(element).html());
});

// show all of the html content article parents Until body == an array
const data10 = $3("article").parentsUntil("body");
data10.each((index, element) => {
  console.log(index, $3(element).html());
});

// show closest article to p tag == an array
const data11 = $3("p").closest("article");
data11.each((index, element) => {
  console.log(index, $3(element).html());
});

// show closest div to p tag == an array
const data12 = $3("p").closest("article");
data12.each((index, element) => {
  console.log(index, $3(element).html());
});

// show closest body to p tag == an array
const data13 = $3("p").closest("body");
data13.each((index, element) => {
  console.log(index, $3(element).html());
});

// پیمایش به سمت کنار
// show next of p tag after the first p == an array
const data14 = $3("p:first").next();
data14.each((index, element) => {
  console.log(index, $3(element).text());
});

// show 2 next of p tag after the first p == an array
const data15 = $3("p:first").next().next();
data15.each((index, element) => {
  console.log(index, $3(element).text());
});


