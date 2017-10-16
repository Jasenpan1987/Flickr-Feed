const axios = require("axios");
var parser = require('xml2json');

const URI = 'https://api.flickr.com/services/feeds/photos_public.gne'

const getEntry = feedObj => feedObj.entry;

const mapEntry = records => {
  return records.map(record => {
    return {
      title: re
    }
  });
}

module.exports = app => {
  app.get("/api/feed", async (req, res) => {
    try {
      const resp = await axios.get(URI);
      const jsonResp = parser.toJson(resp.data);
      return res.json(JSON.parse(jsonResp));
    } catch(error) {
      res.send(error);
    }
  });
};
