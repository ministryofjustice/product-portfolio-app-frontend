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

const formatRawThemeData = data => {
  return data.map(item => ({
    key: item.sys.id,
    productTheme: item.fields.productTheme
  }))
}

module.exports = {
  formatRawThemeData,
  formatRawProductData
}
