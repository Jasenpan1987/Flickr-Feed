
const axios = require("axios");
const parser = require("xml2json");
const Flickr = require("flickrapi");
const config = require("../config");
const {
  getEntryFromData, mapCategories, cutString, mapEntry, mapPhotoResult
} = require("../utils");
const URI = 'https://api.flickr.com/services/feeds/photos_public.gne';

const flickrOptions = {
  api_key: config.API_KEY,
  secret: config.API_SECRET,
  progress: false
};

module.exports = app => {
  app.get("/api/publicfeed", async (req, res) => {
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

  app.post("/api/feed", (req, res) => {
    const { tags } = req.body; // i.e. red,apple,pie
    
    Flickr.tokenOnly(flickrOptions, function(err, flickr) {
      if(err) return res.send(err);

      flickr.photos.search({
        tags,
        content_type: 1,
        per_page: 20,
        page:1
      }, function(error, result) {
        if(error) return res.send(error);

        res.send({ photos: mapPhotoResult(result)});
      });
    });
  })
};

