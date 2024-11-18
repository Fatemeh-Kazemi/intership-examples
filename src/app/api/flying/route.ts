import flightsData from "../mock/mockFlightData"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("to");

  const filteredFlights = flightsData.filter((flight) => flight.to === city);

  return Response.json({
    results: filteredFlights,
  });
}
