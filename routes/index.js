const { getEntryFromData, mapCategories, cutString, mapEntry } = require("../utils");

const axios = require("axios");
const parser = require("xml2json");
const URI = 'https://api.flickr.com/services/feeds/photos_public.gne';

module.exports = app => {
  app.get("/api/feed", async (req, res) => {
    try {
      // can be cached
      const resp = await axios.get(URI);
      const data = JSON.parse(parser.toJson(resp.data));
      const records = mapEntry(getEntryFromData(data));
      return res.json(records);
    } catch(error) {
      res.send({ error });
    }
  });
};
