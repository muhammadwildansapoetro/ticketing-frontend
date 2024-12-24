const base_url_be = process.env.NEXT_PUBLIC_BASE_URL_BE;

export async function getTickets(eventId: string) {
  try {
    const res = await fetch(`${base_url_be}/tickets/${eventId}`, {
      next: { tags: ["tickets"] },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch tickets for event ID ${eventId}: ${res.status} ${res.statusText}`,
      );
    }

    const data = await res.json();
    return data.tickets;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error;
  }
}
