export default function formatDate(isoDate: string): string {
  const date = new Date(isoDate);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short", // Short name of the day (e.g., "Wed")
    year: "numeric", // Numeric year
    month: "short", // Short month name (e.g., "Jan")
    day: "numeric", // Numeric day
    hour: "2-digit", // 2-digit hour
    minute: "2-digit", // 2-digit minute
    hour12: false, // 24-hour format
  };

  return date.toLocaleString("en-GB", options).replace(",", "");
}
