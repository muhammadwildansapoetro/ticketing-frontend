import axios from "@/helpers/axios";

export async function getEvents() {
  try {
    const { data } = await axios.get("/events");

    return data;
  } catch (error) {
    console.log("Error get events", error);
  }
}

export async function getEventDetail(eventId: string) {
  try {
    const { data } = await axios.get(`/events/${eventId}`);

    return data;
  } catch (error) {
    console.log("Error get event detail", error);
  }
}

