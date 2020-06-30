const statuses = {
  backlog: {
    formatted: 'Backlog',
  },
  discovery: {
    formatted: 'Discovery',
  },
  alpha: {
    formatted: 'Alpha',
  },
  'private-beta': {
    formatted: 'Private Beta',
  },
  beta: {
    formatted: 'Public Beta',
  },
  live: {
    formatted: 'Live',
  }
};

const formatRawProductData = (data) => data.map((item) => ({
  key: item.sys.id,
  productName: item.fields.productName,
  serviceOwner: item.fields.serviceOwner,
  productStatus: item.fields.productStatus,
  productTheme: item.fields.productTheme,
  teamLocation: item.fields.teamLocation,
  productDescription: item.fields.productDescription,
}));

const formatRawThemeData = (data) => data.map((item) => ({
  key: item.sys.id,
  productTheme: item.fields.productTheme,
}));

module.exports = {
  formatRawThemeData,
  formatRawProductData,
  statuses,
};
