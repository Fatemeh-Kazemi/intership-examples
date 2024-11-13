import flightsData from "../mock/mockFlightData"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("from");

  const filteredFlights = flightsData.filter((flight) => flight.from === city);

  return Response.json({
    results: filteredFlights,
  });
}
