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

// show all of p tag == an array
const data16 = $3("p");
data16.each((index, element) => {
  console.log(index, $3(element).text());
});

// show p tag index 1 of array == an array
const data17 = $3("p:eq(1)");
data17.each((index, element) => {
  console.log(index, $3(element).text()); // Node.js
});

// show Previous p tag index 1 of array == an array
const data18 = $3("p:eq(1)").prev();
data18.each((index, element) => {
  console.log(index, $3(element).text()); // javascript
});

// show 2 Previous p tag index 1 of array == an array
const data19 = $3("p:eq(1)").prev().prev();
data19.each((index, element) => {
  console.log(index, $3(element).text()); // nothing
});

// show all of next p tag after the first p == an array
const data20 = $3("p:first").nextAll();
data20.each((index, element) => {
  console.log(index, $3(element).text());
});

// show all of Previous p tag bofore the last p == an array
const data21 = $3("p:last").prevAll();
data21.each((index, element) => {
  console.log(index, $3(element).text()); // nothing
});

// show all of Previous p tag in the article bofore the last p == an array
const data22 = $3("article p:last").prevAll();
data22.each((index, element) => {
  console.log(index, $3(element).text());
});

// show all of  p tag in the article == an array
const data23 = $3("article p");
data23.each((index, element) => {
  console.log(index, $3(element).text());
});

// show all of  p tag in the article with andis 1 in the array == an array
const data24 = $3("article p:eq(1)");
data24.each((index, element) => {
  console.log(index, $3(element).text());
});

// show all of p tag in the article with andis 1 in the array and in the same level == an array
const data25 = $3("article p:eq(1)").siblings();
data25.each((index, element) => {
  console.log(index, $3(element).text());
});

// show all of p tag in the article from first to last == an array
const data26 = $3("article p:first").nextUntil("article p:last");
data26.each((index, element) => {
  console.log(index, $3(element).text());
});

// show all of p tag in the article from last to first == an array
const data27 = $3("article p:last").prevUntil("article p:first");
data27.each((index, element) => {
  console.log(index, $3(element).text());
});

// فیلتر کردن عناصر

// use first method for show first p tag in the article == an array
const data28 = $3("article p").first();
data28.each((index, element) => {
  console.log(index, $3(element).text());
});

// use last method for show last p tag in the article == an array
const data29 = $3("article p").first();
data29.each((index, element) => {
  console.log(index, $3(element).text());
});

// use eq() method for show andis of tag in the article == an array
const data30 = $3("article p").eq(2);
data30.each((index, element) => {
  console.log(index, $3(element).text());
});

// use filter method for filter class of tag in the article == an array
const data31 = $3("article p").filter(".selected"); // Node.js
data31.each((index, element) => {
  console.log(index, $3(element).text());
});

// use not method for revers filter class of tag in the article == an array
const data32 = $3("article p").not(".selected");
data32.each((index, element) => {
  console.log(index, $3(element).text());
});

// use has method for filter div that has article tag in it == an array
const data33 = $3("div").has(".article");
data33.each((index, element) => {
  console.log(index, $3(element).text());
});

// دستکاری عناصر DOM
//تغییر محتوا
// show p tags in the article
const data34 = $3("article p");

// change the first p tag content
data34.first().text("java-script");

console.log(data34.parents().html());

// show div tags in the article
const data35 = $3("div");

// change html of element that has content class
data35.filter(".content").html("<h2>New Text</h2>");
console.log(data35.parents().html());

//تغییر ویژگی ها
//َAttribute
//Property
//show href attribute value
const href = $3("a").attr("href");
console.log("HREF: ", href);


//show href attribute value
const href1 = $3("a").prop("href");
console.log("HREF: ", href1);


