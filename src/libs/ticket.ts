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

export async function getCustomerTickets(eventId: string) {
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.get(`/customers/tickets/${eventId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.tickets;
  } catch (error) {
    console.log("Error get customer tickets:", error);
  }
}
