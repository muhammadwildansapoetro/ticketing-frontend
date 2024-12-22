export default function DateFormatter(date: string) {
  return new Intl.DateTimeFormat("en-EN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}
