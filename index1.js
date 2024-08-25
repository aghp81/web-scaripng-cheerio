const cheerio = require("cheerio");
const axios = require("axios");

const fetchCategorise = async () => {
  try {
    const url = "https://faradars.org";

    const response = await axios.get(url);

    const $ = cheerio.load(response.data);

    console.log($.html()); // show all of faradars html home page

    return $;
  } catch (error) {
    console.log("Error Fetching Categorise: ", error);
  }
};

fetchCategorise();
