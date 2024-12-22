import axios from "@/helpers/axios";

export async function getOrderDetail(orderId: number) {
  try {
    const { data } = await axios.get(`/orders/${orderId}`);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getOrderToken(orderId: number, finalPrice: number) {
  try {
    const { data } = await axios.post("/orders/payment", {
      order_id: orderId,
      gross_amount: finalPrice,
    });

    return data.token;
  } catch (error) {
    console.log(error);
  }
}
