import axios from "@/helpers/axios";

export const getEvents = async () => {
  try {
    const { data } = await axios.get("/events");
    console.log("get events:", data);

    return data;
  } catch (error) {
    console.log("Error get events", error);
  }
};

export const getEventDetail = async (eventId: string) => {
  try {
    const { data } = await axios.get(`/events/${eventId}`);
    console.log("axios get event detail", data);

    return data;
  } catch (error) {
    console.log("Error get event detail", error);
  }
};
