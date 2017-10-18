
const axios = require("axios");
const parser = require("xml2json");
const {
  getEntryFromData, mapCategories, cutString, mapEntry
} = require("../utils");

const URI = 'https://api.flickr.com/services/feeds/photos_public.gne';

const processPublicFeed = async (URI, tags) => {
  const finalURI = tags ? `${URI}?tags=${tags}` : URI;
  try {
    const resp = await axios.get(finalURI);
    const data = JSON.parse(parser.toJson(resp.data));
    const records = mapEntry(getEntryFromData(data));
    return records
  } catch(error) {
    return { error };
  }
}

module.exports = app => {
  app.get("/api/publicfeed", async (req, res) => {
    const recordsOrError = await processPublicFeed(URI);
    return res.send(recordsOrError)
  });

  app.post("/api/publicfeed/tags", async (req, res) => {
    const { tags } = req.body; // i.e. red,apple,pie
    const recordsOrError = await processPublicFeed(URI, tags);
    return res.send(recordsOrError)
  });
};
