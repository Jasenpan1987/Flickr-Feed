const pick = require("lodash/pick");

const getEntryFromData = data => data.feed.entry;

const mapCategories = categories => {
  return Array.isArray(categories) ? categories.map(category => category.term) : [];
};

const cutString = maxCount => str => str.length > maxCount ? `${str.slice(0, maxCount)}...` : str;
const cut50 = cutString(50);

const mapEntry = records => {
  return records.map(({ id, title, link, author, category, published }) => {
    return {
      id,
      title: cut50(title) || 'Untitled', // cut title if more than 50 characters
      links: link.map(l => pick(l, ['rel', 'href'])), // format link
      author: pick(author, ['name', 'uri']), // format author
      tags: mapCategories(category), // format tags, returns [] if omitted
      published
    }
  });
};

module.exports = {
  getEntryFromData, mapCategories, cutString, mapEntry
}