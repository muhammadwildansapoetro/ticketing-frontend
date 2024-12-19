export default function DateFormatter({ date }: { date: string | Date }) {
  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

  return <>{formattedDate}</>;
}
