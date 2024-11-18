import flightsData from "../mock/mockFlightData"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const filteredFlight = flightsData.filter((flight) => flight.id === id);

  return Response.json({
    results: filteredFlight,
  });
}
