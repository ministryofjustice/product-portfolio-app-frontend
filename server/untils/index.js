const formatRawProductData = data => {
  return data.map(item => ({
    key: item.sys.id,
    productName: item.fields.productName,
    serviceOwner: item.fields.serviceOwner,
    productStatus: item.fields.productStatus,
    productTheme: item.fields.productTheme,
    teamLocation: item.fields.teamLocation,
    productDescription: item.fields.productDescription
  }))
}

module.exports = {
  formatRawProductData
}
