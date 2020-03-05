module.exports = function products (contentfulClient) {
  async function getEntries (contentType) {
    try {
      const entries = await contentfulClient.getEntries({
        content_type: contentType
      })
      if (entries.items) return entries.items
      console.log(`Error getting Entries for ${contentType}.`)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    getEntries
  }
}
