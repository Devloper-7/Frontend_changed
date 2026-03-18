const ORDER_IDS = ["ORD-2890", "ORD-2891", "ORD-2889", "ORD-2888", "ORD-2887", "ORD-2886", "ORD-2885", "ORD-2884"];

export function generateStaticParams() {
  return ORDER_IDS.map((id) => ({ id }));
}

export default function OrderIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
