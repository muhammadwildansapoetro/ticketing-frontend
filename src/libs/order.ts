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
    if (typeof window === "undefined") {
      throw new Error("localStorage is not available in this environment.");
    }
    const storedToken = localStorage.getItem("token");
    const { data } = await axios.post(
      "/orders/payment",
      {
        order_id: orderId,
        gross_amount: +finalPrice,
      },
      {
        headers: { Authorization: `Bearer ${storedToken}` },
      },
    );

    return data.orderToken;
  } catch (error) {
    console.error("Error getting order token:", error);
  }
}

export async function getCustomerCoupon() {
  try {
    const storedToken = localStorage.getItem("token");
    const { data } = await axios.get("/customers/coupon", {
      headers: { Authorization: `Bearer ${storedToken}` },
    });

    return data.coupon;
  } catch (error) {
    console.log("Error get customer coupon:", error);
  }
}

export async function getCustomerPoints() {
  try {
    const storedToken = localStorage.getItem("token");
    const { data } = await axios.get("/customers/points", {
      headers: { Authorization: `Bearer ${storedToken}` },
    });

    return data.totalPoints || 0;
  } catch (error) {
    console.log("Error get customer points:", error);
  }
}
