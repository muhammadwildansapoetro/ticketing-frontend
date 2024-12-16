export const getEvents = async (filters: {
  category: string;
  location: string;
}) => {
  const query = new URLSearchParams(filters).toString();
  const res = await fetch("http://localhost:8000/api/events?${query}", {
    next: { tags: ["events"] },
  });
  const data = await res.json();
  return data.events;
};

export const getEventDetail = async (id: string) => {
  const res = await fetch(`http://localhost:8000/api/events/events/${id}`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data.event;
};
