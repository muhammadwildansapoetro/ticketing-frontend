export default function DateFormatter(date: string) {
  const dateObj = new Date(date);

  dateObj.setHours(dateObj.getHours() + 7);

  const optionsDay: Intl.DateTimeFormatOptions = { weekday: "long" };
  const dayOfWeek = new Intl.DateTimeFormat("en-US", optionsDay).format(
    dateObj,
  );

  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const optionsMonth: Intl.DateTimeFormatOptions = { month: "short" };
  const month = new Intl.DateTimeFormat("en-US", optionsMonth).format(dateObj);

  return `${dayOfWeek}, ${day} ${month} ${year}`;
}
