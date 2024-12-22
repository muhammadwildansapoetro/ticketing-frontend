import axios from "@/helpers/axios";

export async function getTickets(eventId: string) {
  try {
    const { data } = await axios.get(`/tickets/${eventId}`);

    return data;
  } catch (error) {
    console.log("Error get tickets", error);
  }
}
