const benefits = [
  {
    img: "assets/images/frame1.svg",
    reason: "دسترسی آسان و راحت",
  },
  {
    img: "assets/images/frame2.svg",
    reason: "پاسخگویی 24 ساعته",
  },
  {
    img: "assets/images/frame3.svg",
    reason: "خدمات آنلاین",
  },
  {
    img: "assets/images/frame4.svg",
    reason: "کمترین نرخ خرید بلیط",
  },
];

export async function GET(request: Request) {
  return Response.json({
    results: benefits,
  });
}
