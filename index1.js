const cheerio = require("cheerio");
const axios = require("axios");

const fetchCategorise = async () => {
  try {
    const url = "https://faradars.org";

    const response = await axios.get(url);

    const $ = cheerio.load(response.data);

    console.log($.html());

    return $;
  } catch (error) {
    console.log("Error Fetching Categorise: ", error);
  }
};

fetchCategorise();
