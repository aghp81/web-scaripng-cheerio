const cheerio = require("cheerio");
const axios = require("axios");
const ppt = require("puppeteer-core"); // puppeteer-core fore scroll the web page and web scrap all of the page

const fetchCars = async () => {
  try {
    const url = "https://bama.ir/car";

    const response = await axios.get(url, {
      timeout: 10000, // 10000ms wait for response the data from site
      // به سرور اعلام می شود کلاینتی که درخواست را میفرستد از چه مرورگری استفاده می کند و یک کاربر واقعی است
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59",
      },
    });

    const $ = cheerio.load(response.data.replaceAll("<!---->", ""));

    // console.log($.html()); // show all of faradars html home page

    return $;
  } catch (error) {
    console.log("Error Fetching Cars    : ", error);
  }
};

// fetchCategorise();

// پارس یا پردازش کردن اطلاعات
const parseCarsContent = async (html_content) => {
  let $;

  if (html_content) {
    $ = cheerio.load(html_content);
  } else {
    $ = await fetchCars();
  }

  const cars_items = $(".bama-ad-holder"); // list h2 in div in main tag

  const cars = []; // empty array for hold title

  cars_items.each((index, element) => {
    const title = $(element).find(".text").text().trim(); // find element with text class and show the its text
    const year = $(element)
      .find(".bama-ad__detail-row > span:first")
      .text()
      .trim(); // find element with bama-ad__detail-row class and show the first span text and trim

    // console.log(index);
    // console.log("Title: ", title);
    // console.log("Year: ", year);
    // console.log("-------------------");

    cars.push({
      id: index + 1,
      title,
      year,
    });
  });
  console.log(cars);
};

// fetch data from the site with scroll
const fetchCrsWithScroll = async () => {
  // open google chrom browser and launch
  const browser = await ppt.launch({
    headless: false,
    ignoreHTTPSErrors: true, // ignore https errors
    waitForInitialPage: true, // wait for load page
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", // addres of chrom exe file in my pc
  });

  const page = await browser.newPage();

  await page.waitForNetworkIdle(); // wait for check and connect to newwork
  console.log("Network Connected...");

  const url = "https://bama.ir/car"; // url of site

  await page.goto(url); // go to url
  console.log("Page Loaded...");

  // after the load page screenshot the page
  await page.screenshot({
    path: "cars.png",
  });

  // scroll the page - evaluate scrollHeight
  const first_height = await page.evaluate("document.body.scrollHeight");
  console.log("scroll Height: ", first_height); // 2747px for this site

  // scroll for 3 times in this page - ofcourse we can scroll all of page in 1 time
  let lastHeight = 0;
  let html = "";

  //  حلقه بینهایت
  while (true) {
    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)"); // from 0 to end of scroll down page

    // ایجاد وقفه که فرصت داشته باشه اطلاعات رو بخونه
    // مکث بعد از اسکرول کردن 3 ثانیه
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // به دست آورن ارتفاع جدید بعد از اسکرول
    const newHeight = await page.evaluate("document.body.scrollHeight"); // هر بار که اسکرول میشه فضای اسکرول مجددا اضافه میشه

    // اگر به آخر صفحه رسیدیم اطلاعات صفحه رو بخونیم و بریک کن از صفحه برو بیرون
    // if (newHeight === lastHeight){
    // حالا ما نمیخواهیم همه صفحه رو تا آخر بخونیم میخواهیم فقط سه بار  خونده شه سه بار اسکرول شه
    if (lastHeight > 3 * first_height) {
      html = await page.content();
      break;
    }

    lastHeight = newHeight; // هر بار آخرین ارتفاع رو برابر ارتفاع جدید قرار بده
  }

  console.log(" -------- Finished -------- ");
  await browser.close(); // مرورگر رو بنند.
  console.log("Browser Closed...");

  return html; // در نهایت برگرداندن html
};

const run = async () => {
  const content = await fetchCrsWithScroll();

  await parseCarsContent(content);
};

run();
