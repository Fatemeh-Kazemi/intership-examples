import { type NextRequest } from "next/server";

const flightFilter = [
  {
    id: 1,
    from: "تهران",
    to: "مشهد",
    date: "1403-10-28",
    fromTime: "02:50",
    toTime: "21:50",
    passCount: "2",
    flightType: "فرست",
    price: "1200000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی ایران",
      logo: "assets/images/Airline logo.png",
      baggage: "30kg",
    },
    distanceTime: "",
  },
  {
    id: 2,
    from: "تهران",
    to: "اصفهان",
    date: "1403-10-29",
    fromTime: "8:24",
    toTime: "18:32",
    passCount: "1",
    flightType: "فرست",
    price: "1500000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی آسمان",
      logo: "assets/images/Airline logo.png",
      baggage: "20kg",
    },
    distanceTime: "",
  },
  {
    id: 3,
    from: "شیراز",
    to: "تهران",
    date: "1403-10-30",
    fromTime: "8:24",
    toTime: "20:00",
    passCount: "3",
    flightType: "فرست",
    price: "1800000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی ماهان",
      logo: "assets/images/Airline logo.png",
      baggage: "25kg",
    },
    distanceTime: "",
  },
  {
    id: 4,
    from: "مشهد",
    to: "تبریز",
    date: "1403-10-31",
    fromTime: "8:24",
    toTime: "10:15",
    passCount: "2",
    flightType: "فرست",
    price: "1300000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی قشم",
      logo: "assets/images/Airline logo.png",
      baggage: "30kg",
    },
    distanceTime: "",
  },
  {
    id: 5,
    from: "تهران",
    to: "کرمان",
    date: "1403-11-01",
    fromTime: "8:24",
    toTime: "12:45",
    passCount: "1",
    flightType: "فرست",
    price: "1600000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی ایران ایر",
      logo: "assets/images/Airline logo.png",
      baggage: "20kg",
    },
    distanceTime: "",
  },
  {
    id: 6,
    from: "اصفهان",
    to: "شیراز",
    date: "1403-11-02",
    fromTime: "8:24",
    toTime: "14:00",
    passCount: "2",
    flightType: "فرست",
    price: "1400000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی زاگرس",
      logo: "assets/images/Airline logo.png",
      baggage: "25kg",
    },
    distanceTime: "",
  },
  {
    id: 7,
    from: "تبریز",
    to: "مشهد",
    date: "1403-11-03",
    fromTime: "8:24",
    toTime: "09:30",
    passCount: "1",
    flightType: "فرست",
    price: "1700000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی کاسپین",
      logo: "assets/images/Airline logo.png",
      baggage: "30kg",
    },
    distanceTime: "",
  },
  {
    id: 8,
    from: "کرمان",
    to: "تهران",
    date: "1403-11-04",
    fromTime: "8:24",
    toTime: "16:20",
    passCount: "3",
    flightType: "فرست",
    price: "1900000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی آسمان",
      logo: "assets/images/Airline logo.png",
      baggage: "20kg",
    },
    distanceTime: "",
  },
  {
    id: 9,
    from: "مشهد",
    to: "اصفهان",
    date: "1403-11-05",
    fromTime: "8:24",
    toTime: "11:10",
    passCount: "2",
    flightType: "فرست",
    price: "1500000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی ایران",
      logo: "assets/images/Airline logo.png",
      baggage: "30kg",
    },
    distanceTime: "",
  },
  {
    id: 10,
    from: "شیراز",
    to: "تبریز",
    date: "1403-11-06",
    fromTime: "8:24",
    toTime: "13:00",
    passCount: "1",
    flightType: "فرست",
    price: "1600000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی ماهان",
      logo: "assets/images/Airline logo.png",
      baggage: "25kg",
    },
    distanceTime: "",
  },
  {
    id: 11,
    from: "تهران",
    to: "کرمان",
    date: "1403-11-07",
    fromTime: "8:24",
    toTime: "17:45",
    passCount: "2",
    flightType: "فرست",
    price: "1800000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی قشم",
      logo: "assets/images/Airline logo.png",
      baggage: "30kg",
    },
    distanceTime: "",
  },
  {
    id: 12,
    from: "اصفهان",
    to: "مشهد",
    date: "1403-11-08",
    fromTime: "8:24",
    toTime: "09:00",
    passCount: "1",
    flightType: "فرست",
    price: "1400000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی زاگرس",
      logo: "assets/images/Airline logo.png",
      baggage: "25kg",
    },
    distanceTime: "",
  },
  {
    id: 13,
    from: "تبریز",
    to: "تهران",
    date: "1403-11-09",
    fromTime: "8:24",
    toTime: "14:30",
    passCount: "3",
    flightType: "فرست",
    price: "1900000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی کاسپین",
      logo: "assets/images/Airline logo.png",
      baggage: "30kg",
    },
    distanceTime: "",
  },
  {
    id: 14,
    from: "کرمان",
    to: "شیراز",
    date: "1403-11-10",
    fromTime: "8:24",
    toTime: "12:00",
    passCount: "2",
    flightType: "فرست",
    price: "1600000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی ایران ایر",
      logo: "assets/images/Airline logo.png",
      baggage: "20kg",
    },
    distanceTime: "",
  },
  {
    id: 15,
    from: "مشهد",
    to: "اصفهان",
    date: "1403-11-11",
    fromTime: "8:24",
    toTime: "10:15",
    passCount: "1",
    flightType: "فرست",
    price: "1500000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی ایران",
      logo: "assets/images/Airline logo.png",
      baggage: "30kg",
    },
    distanceTime: "",
  },
  {
    id: 16,
    from: "شیراز",
    to: "تبریز",
    date: "1403-11-12",
    fromTime: "8:24",
    toTime: "13:30",
    passCount: "2",
    flightType: "فرست",
    price: "1700000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی ماهان",
      logo: "assets/images/Airline logo.png",
      baggage: "25kg",
    },
    distanceTime: "",
  },
  {
    id: 17,
    from: "تهران",
    to: "کرمان",
    date: "1403-11-13",
    fromTime: "8:24",
    toTime: "15:00",
    passCount: "3",
    flightType: "فرست",
    price: "1800000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی آسمان",
      logo: "assets/images/Airline logo.png",
      baggage: "20kg",
    },
    distanceTime: "",
  },
  {
    id: 18,
    from: "اصفهان",
    to: "مشهد",
    date: "1403-11-14",
    fromTime: "8:24",
    toTime: "09:45",
    passCount: "1",
    flightType: "فرست",
    price: "1400000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی زاگرس",
      logo: "assets/images/Airline logo.png",
      baggage: "25kg",
    },
    distanceTime: "",
  },
  {
    id: 19,
    from: "تبریز",
    to: "تهران",
    date: "1403-11-15",
    fromTime: "8:24",
    toTime: "11:30",
    passCount: "2",
    flightType: "فرست",
    price: "1900000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی کاسپین",
      logo: "assets/images/Airline logo.png",
      baggage: "30kg",
    },
    distanceTime: "",
  },
  {
    id: 20,
    from: "کرمان",
    to: "شیراز",
    date: "1403-11-16",
    fromTime: "8:24",
    toTime: "12:00",
    passCount: "1",
    flightType: "فرست",
    price: "1600000",
    buyingWay: "سیستمی",
    airline: {
      name: "هواپیمایی ایران ایر",
      logo: "assets/images/Airline logo.png",
      baggage: "20kg",
    },
    distanceTime: "",
  },
].map((flight) => {
  const [fromHour, fromMinute] = flight.fromTime.split(":").map(Number);
  const [toHour, toMinute] = flight.toTime.split(":").map(Number);

  const fromTimeInMinutes = fromHour * 60 + fromMinute;
  const toTimeInMinutes = toHour * 60 + toMinute;

  const distanceTimeInMinutes = toTimeInMinutes - fromTimeInMinutes;
  const distanceHours = Math.floor(distanceTimeInMinutes / 60);
  const distanceMinutes = distanceTimeInMinutes % 60;

  flight.distanceTime = `${String(distanceHours).padStart(2, "0")}:${String(
    distanceMinutes
  ).padStart(2, "0")}`;
  return flight;
});

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");
  const passengerCount = searchParams.get("passengerCount");
  const flightClass = searchParams.get("flightClass");

  if (from || to || date || passengerCount || flightClass) {
    const filteredFlights = flightFilter.filter(
      (flight) =>
        flight.from == from ||
        flight.to == to ||
        flight.date == date ||
        flight.passCount == passengerCount ||
        flight.flightType == flightClass
    );

    const jsonResponse = JSON.stringify(filteredFlights);
    return new Response(jsonResponse, { status: 200 });
  } else {
    return new Response(JSON.stringify(flightFilter), {
      status: 200,
    });
  }
}
