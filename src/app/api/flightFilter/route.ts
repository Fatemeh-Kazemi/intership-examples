import { type NextRequest } from 'next/server'

const flightFilter = [
  {
    id: 1,
    from: "تهران",
    to: "مشهد",
    date: "1403-10-28",
    passCount: "2",
    flightType: "first",
    price: "1200000",
  },
  {
    id: 2,
    from: "تهران",
    to: "اصفهان",
    date: "1403-10-29",
    passCount: "25",
    flightType: "economy",
    price: "800000",
  },
  {
    id: 3,
    from: "شیراز",
    to: "تبریز",
    date: "1403-10-30",
    passCount: "20",
    flightType: "business",
    price: "1500000",
  },
  {
    id: 4,
    from: "مشهد",
    to: "تهران",
    date: "1403-10-31",
    passCount: "15",
    flightType: "first",
    price: "1300000",
  },
  {
    id: 5,
    from: "اصفهان",
    to: "شیراز",
    date: "1403-11-01",
    passCount: "10",
    flightType: "economy",
    price: "700000",
  },
  {
    id: 6,
    from: "تبریز",
    to: "مشهد",
    date: "1403-11-02",
    passCount: "5",
    flightType: "business",
    price: "1600000",
  },
  {
    id: 7,
    from: "تهران",
    to: "شیراز",
    date: "1403-11-03",
    passCount: "12",
    flightType: "first",
    price: "1400000",
  },
  {
    id: 8,
    from: "مشهد",
    to: "اصفهان",
    date: "1403-11-04",
    passCount: "18",
    flightType: "economy",
    price: "900000",
  },
  {
    id: 9,
    from: "شیراز",
    to: "تهران",
    date: "1403-11-05",
    passCount: "22",
    flightType: "business",
    price: "1550000",
  },
  {
    id: 10,
    from: "تبریز",
    to: "اصفهان",
    date: "1403-11-06",
    passCount: "28",
    flightType: "first",
    price: "1250000",
  },
  {
    id: 11,
    from: "تهران",
    to: "تبریز",
    date: "1403-11-07",
    passCount: "30",
    flightType: "economy",
    price: "850000",
  },
  {
    id: 12,
    from: "مشهد",
    to: "شیراز",
    date: "1403-11-08",
    passCount: "20",
    flightType: "business",
    price: "1450000",
  },
  {
    id: 13,
    from: "اصفهان",
    to: "تبریز",
    date: "1403-11-09",
    passCount: "15",
    flightType: "first",
    price: "1350000",
  },
  {
    id: 14,
    from: "شیراز",
    to: "مشهد",
    date: "1403-11-10",
    passCount: "10",
    flightType: "economy",
    price: "750000",
  },
  {
    id: 15,
    from: "تبریز",
    to: "تهران",
    date: "1403-11-11",
    passCount: "5",
    flightType: "business",
    price: "1650000",
  },
  {
    id: 16,
    from: "تهران",
    to: "اصفهان",
    date: "1403-11-12",
    passCount: "12",
    flightType: "first",
    price: "1100000",
  },
  {
    id: 17,
    from: "مشهد",
    to: "تبریز",
    date: "1403-11-13",
    passCount: "18",
    flightType: "economy",
    price: "920000",
  },
  {
    id: 18,
    from: "شیراز",
    to: "اصفهان",
    date: "1403-11-14",
    passCount: "22",
    flightType: "business",
    price: "1500000",
  },
];

    export function GET(request: NextRequest) {
        const searchParams = request.nextUrl.searchParams;
        const from = searchParams.get('from');
        const to = searchParams.get('to');
        const date = searchParams.get('date');
        const passengerCount = searchParams.get('passengerCount');
        const flightClass = searchParams.get('flightClass');
        
        if (!from || !to || !date || !passengerCount || !flightClass) {
            return new Response("لطفاً همه پارامترهای جستجو را وارد کنید", { status: 400 });
        }
        else{
            const filteredFlights = flightFilter.filter(flight => 
                flight.from === from &&
                flight.to === to &&
                flight.date === date &&
                flight.passCount === passengerCount &&
                flight.flightType === flightClass
            );
    
            return new Response(JSON.stringify(filteredFlights), { status: 200 });
        }
    }