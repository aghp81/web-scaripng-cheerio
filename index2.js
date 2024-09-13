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
const parseCarsContent = async () => {
  const $ = await fetchCars();

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
      year
    });
  });
    console.log(cars);
};

parseCarsContent();
