/* eslint-disable no-console */
module.exports = function products(contentfulClient) {
  async function getEntries(contentType) {
    try {
      const entries = await contentfulClient.getEntries({
        content_type: contentType,
      });
      if (entries.items) {
        return entries.items;
      }
      console.log(`Error getting Entries for ${contentType}.`);
    } catch (error) {
      console.log(error);
    }

    return false;
  }
  async function getEntry(id) {
    try {
      const entry = await contentfulClient.getEntry(id);
      if (entry) {
        return entry;
      }
      console.log(`Error getting entry for ${id}.`);
    } catch (error) {
      console.log(error);
    }

    return false;
  }

  return {
    getEntry,
    getEntries,
  };
};
