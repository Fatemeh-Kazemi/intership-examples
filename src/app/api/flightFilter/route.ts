import { type NextRequest } from "next/server";
import flightFilter from "../mock/mockFlightData";

flightFilter.map((flight) => {
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
