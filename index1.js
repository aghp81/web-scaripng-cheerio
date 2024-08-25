const cheerio = require("cheerio");
const axios = require("axios");

const fetchCategorise = async () => {
  try {
    const url = "https://faradars.org";

    const response = await axios.get(url);
  } catch (error) {
    console.log("Error Fetching Categorise: ", error);
  }
};
