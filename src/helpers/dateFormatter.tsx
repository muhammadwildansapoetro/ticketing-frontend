export default function DateFormatter(date: string) {
  const dateObj = new Date(date);

  dateObj.setHours(dateObj.getHours() + 7);

  return new Intl.DateTimeFormat("en-EN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(dateObj);
}
