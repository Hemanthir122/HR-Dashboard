export const generateMockRating = () => {
  return Math.floor(Math.random() * 5) + 1;
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
