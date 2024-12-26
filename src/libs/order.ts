import axios from "@/helpers/axios";

export async function getOrderDetail(orderId: number) {
  try {
    const { data } = await axios.get(`/orders/${orderId}`);

    return data.order;
  } catch (error) {
    console.log("Error get order detail:", error);
  }
}

export async function getOrderToken(finalPrice: number, orderId: string) {
  try {
    const { data } = await axios.post("/orders/payment", {
      order_id: +orderId,
      gross_amount: +finalPrice,
    });
    console.log("order token", data.orderToken);

    return data.orderToken;
  } catch (error) {
    console.log("Error get order token:", error);
  }
}
