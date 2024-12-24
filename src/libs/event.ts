import axios from "@/helpers/axios";

export async function getEvents() {
  try {
    const { data } = await axios.get("/events");

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
    throw error;
  }
}
