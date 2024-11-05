const footerMenu = [
  { title: "درباره ما", link: "#" },
  { title: "تماس با ما", link: "#" },
  { title: "استرداد بلیط", link: "#" },
  { title: "راهنمای خرید بلیط", link: "#" },
  { title: "قوانین و مقررات", link: "#" },
];


export async function GET(request: Request) {
  return Response.json({
    results: footerMenu,
  });
}
