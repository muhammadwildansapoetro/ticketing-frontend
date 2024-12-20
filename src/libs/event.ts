import axios from "@/helpers/axios";

export const getEvents = async () => {
  try {
    const { data } = await axios.get("/events");

    return data;
  } catch (error) {
    console.log("Error get events", error);
  }
};

export const getEventDetail = async (eventId: string) => {
  try {
    const { data } = await axios.get(`/events/${eventId}`);

    return data;
  } catch (error) {
    console.log("Error get event detail", error);
  }
};
