//   ----------------------------
export const capitalizeFirstLetter = (str: string) => {
  if (!str || typeof str !== "string") return "";

  return str.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};
