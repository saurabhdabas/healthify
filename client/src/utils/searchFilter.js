export const searchFilter = (arr,search) => {
  // search exercises
  return arr.filter((item) => item.bodyPart.toLowerCase() === search)
};
