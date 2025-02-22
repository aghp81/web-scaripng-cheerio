const cheerio = require("cheerio");
const axios = require("axios");

const fetchCategorise = async () => {
  try {
    const url = "https://www.tabnak.ir/";

    const response = await axios.get(url, {
      timeout: 10000, // 10000ms wait for response the data from site
      // به سرور اعلام می شود کلاینتی که درخواست را میفرستد از چه مرورگری استفاده می کند و یک کاربر واقعی است
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59",
      },
    });

    const $ = cheerio.load(response.data);

    // console.log($.html()); // show all of faradars html home page

    return $;
  } catch (error) {
    console.log("Error Fetching Categorise: ", error);
  }
};

// fetchCategorise();

// پارس یا پردازش کردن اطلاعات
const parseCategoriseContent = async () => {
  const $ = await fetchCategorise();

  const links = $("div.text a"); // list h2 in div in main tag

const categories = []; // empty array for hold title

  links.each((index, element) => {
    categories.push({
      id: index + 1, 
      title: $(element).text().trim()
    });
    // console.log(index, $(element).html());
    // console.log("-------------------");
  });
  console.log(categories);
};


parseCategoriseContent();