const contactData = [
  {
    description: "آدرس",
    data: "تهران، میدان آزادی، خیابان آزادی، خیابان جیحون، طوس غربی.",
  },
  {
    description: "شماره تماس",
    data: "98 76 54 32_021",
  },
  {
    description: "ایمیل",
    data: "kazemifk484@gmail.com",
  },
];

export async function GET(request: Request) {
  return Response.json({
    results: contactData,
  });
}
