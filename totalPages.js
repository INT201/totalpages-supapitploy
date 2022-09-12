const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  if (arrayItems == null) {
    return undefined;
  }

  if (rowsPerPage == null || rowsPerPage == 0) {
    return 1;
  }

  if (arrayItems.length % rowsPerPage == 0) {
    return arrayItems.length / rowsPerPage;
  } else {
    return Math.floor(arrayItems.length / rowsPerPage) + 1;
  }
}
module.exports = totalPages