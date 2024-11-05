const banners = [
  {
    img: "assets/images/1.png",
    title: "بهترین فصل شنا",
    btnText: "خرید بلیط پروازهای کیش",
  },
  {
    img: "assets/images/2.png",
    title: "سفر به ترکیه",
    btnText: "خرید بلیط پروازهای ترکیه",
  },
  {
    img: "assets/images/4.png",
    title: "دنیایی از تاریخ و هنر",
    btnText: "خرید بلیط پروازهای شیراز",
  },
  {
    img: "assets/images/3.png",
    title: " شگفتی در صحرا",
    btnText: "خرید بلیط پروازهای دبی",
  },
];

export async function GET(request: Request) {
  return Response.json({
    results: banners,
  });
}
