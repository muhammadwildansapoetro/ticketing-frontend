const base_url_be = process.env.NEXT_PUBLIC_BASE_URL_BE;

export async function getEvents() {
  try {
    const res = await fetch(`${base_url_be}/events`, {
      next: { tags: ["events"] },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch events: ${res.status} ${res.statusText} `,
      );
    }

    const data = await res.json();

    return data.events;
  } catch (error) {
    console.log("Error get events", error);
    throw error;
  }
}

export async function getEventDetail(eventId: string) {
  try {
    const res = await fetch(`${base_url_be}/events/${eventId}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch event detail for event ID ${eventId}: ${res.status} ${res.statusText} `,
      );
    }

    const data = await res.json();

    return data.event;
  } catch (error) {
    console.log("Error get event detail:", error);
    throw error;
  }
}
