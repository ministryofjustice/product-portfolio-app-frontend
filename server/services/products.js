module.exports = function products (contentfulClient) {
  async function getContent (contentType) {
    const entries = await contentfulClient.getEntries({
      content_type: contentType
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType}.`)
  }

  return {
    getContent
  }
}
