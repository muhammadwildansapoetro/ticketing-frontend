export default function TimeFormatter({ date }: { date: string | Date }) {
  const formattedTime = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));

  return <>{formattedTime}</>;
}
