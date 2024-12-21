export default function OrderDetailPage({
  params,
}: {
  params: { orderId: string };
}) {
  return <div>Order Detail Page of order ID: {params.orderId}</div>;
}
