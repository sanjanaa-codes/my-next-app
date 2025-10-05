type DeliveryProps = {
  type: "single" | "range" | "prime" | "scheduled";
  date?: string;
  endDate?: string;
  time?: string;
};
// Readonly why
export default function DeliveryInfo({ type, date, endDate, time }: Readonly<DeliveryProps>) {
  let message = "";

  switch (type) {
    case "single":
      message = `${date}`;
      break;
    case "range":
      message = `${date} - ${endDate}`;
      break;
    case "prime":
      message = "for Prime members";
      break;
    case "scheduled":
      message = `as soon as ${date}, ${time}`;
      break;
  }

  return <p className="text-sm font-semibold text-gray-900">{message}</p>;
}
