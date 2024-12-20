import axios from "@/helpers/axios";

export const getTickets = async (eventId: string) => {
  try {
    const { data } = await axios.get(`/tickets/${eventId}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
