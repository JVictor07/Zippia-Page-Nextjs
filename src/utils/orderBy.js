const orderByLargestToSmallest = (items, propertyToCompare) =>
  items.slice().sort((a, b) => {
    if (a[propertyToCompare] < b[propertyToCompare]) return 1;
    if (a[propertyToCompare] > b[propertyToCompare]) return -1;
    return 0;
  });

const orderBySmallestToLargest = (items, propertyToCompare) =>
  items.slice().sort((a, b) => {
    if (a[propertyToCompare] > b[propertyToCompare]) return 1;
    if (a[propertyToCompare] < b[propertyToCompare]) return -1;
    return 0;
  });

export { orderBySmallestToLargest, orderByLargestToSmallest };
