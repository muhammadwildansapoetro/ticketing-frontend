import axios from "@/helpers/axios";

export async function getEvents(page: string = "1") {
  try {
    const { data } = await axios.get(`/events/?page=${page}`);

    return data.events;
  } catch (error) {
    console.log("Error get events:", error);
    throw error;
  }
}

export async function getEventDetail(eventId: string) {
  try {
    const { data } = await axios.get(`/events/${eventId}`);

    return data.event;
  } catch (error) {
    console.log("Error get event detail:", error);
  }
}

export async function getCustomerEvents(status: "upcoming" | "attended") {
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.get(`/customers/events?status=${status}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.events;
  } catch (error) {
    console.log("Error get customer events:", error);
  }
}
