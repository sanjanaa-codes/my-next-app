import Image from "next/image";

type DeliveryProps = {
  type: "single" | "range" | "prime" | "scheduled";
  date?: string;
  endDate?: string;
  time?: string;
};

export default function DeliveryInfo({
  type,
  date,
  endDate,
  time,
}: Readonly<DeliveryProps>) {
  // For "prime", we render an image, for others we render text
  if (type === "prime") {
    return (
      <div>
        <Image
          src="/images/download.png"
          alt="Assured Badge"
          width={80}
          height={20}
          className="h-5 w-auto ml-1"
        />
      </div>
    );
  }

  // For other types
  let message = "";
  switch (type) {
    case "single":
      message = `${date}`;
      break;
    case "range":
      message = `${date} - ${endDate}`;
      break;
    case "scheduled":
      message = `as soon as ${date}, ${time}`;
      break;
  }

  return <p className="text-sm font-semibold text-gray-900">{message}</p>;
}
