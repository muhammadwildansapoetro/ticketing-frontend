import axios from "@/helpers/axios";

export async function getTickets(eventId: string) {
  try {
    const { data } = await axios.get(`/tickets/${eventId}`);

    return data.tickets;
  } catch (error) {
    console.error("Error get tickets:", error);
    throw error;
  }
}
