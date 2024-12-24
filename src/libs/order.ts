const base_url_be = process.env.NEXT_PUBLIC_BASE_URL_BE;

export async function getOrderDetail(orderId: number) {
  try {
    const res = await fetch(`${base_url_be}/orders/${orderId}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch order detail for order ID ${orderId}: ${res.status} ${res.statusText}`,
      );
    }

    const data = await res.json();
    return data.order;
  } catch (error) {
    console.log("Error fetching order detail:", error);
  }
}

export async function getOrderToken(orderId: number, finalPrice: number) {
  try {
    const res = await fetch(`${base_url_be}/orders/payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_id: orderId,
        gross_amount: finalPrice,
      }),
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch order token: ${res.statusText}`);
    }

    const data = await res.json();
    return data.token;
  } catch (error) {
    console.error("Error fetching order token:", error);
    throw error;
  }
}
