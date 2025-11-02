export const getEventStatus = (start, end) => {
  const now = new Date();
  const startDate = new Date(start);
  const endDate = new Date(end);

  if (now < startDate) return "Upcoming";
  if (now >= startDate && now <= endDate) return "Ongoing";
  return "Ended";
};
