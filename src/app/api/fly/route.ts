const flightsData = [
  {
    id: 1,
    from: "تهران",
    to: "مشهد",
    price: "1,200,000 تومان",
    image: "assets/images/3-3.png",
  },
  {
    id: 2,
    from: "تهران",
    to: "شیراز",
    price: "1,500,000 تومان",
    image: "assets/images/4-4.png",
  },
  {
    id: 3,
    from: "تهران",
    to: "کیش",
    price: "2,000,000 تومان",
    image: "assets/images/1-2.png",
  },
  {
    id: 4,
    from: "مشهد",
    to: "شیراز",
    price: "1,300,000 تومان",
    image: "assets/images/3-3.png",
  },
  {
    id: 5,
    from: "شیراز",
    to: "مشهد",
    price: "1,200,000 تومان",
    image: "assets/images/1-1.png",
  },
  {
    id: 6,
    from: "شیراز",
    to: "اصفهان",
    price: "1,500,000 تومان",
    image: "assets/images/4-4.png",
  },
  {
    id: 7,
    from: "کیش",
    to: "تهران",
    price: "2,000,000 تومان",
    image: "assets/images/1-2.png",
  },
  {
    id: 8,
    from: "کیش",
    to: "کرج",
    price: "1,300,000 تومان",
    image: "assets/images/4-4.png",
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("from");

  const filteredFlights = flightsData.filter((flight) => flight.from === city);

  return Response.json({
    results: filteredFlights,
  });
}
