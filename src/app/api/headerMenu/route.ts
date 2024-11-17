const headerMenu = [
  { title: "صفحه اصلی", to: "/", children: [] },
  { title: "همه پروازها", to: "/filter", children: [] },
  { title: "همراه ما" , to: "/us", children: [] },
  {
    title: "سایر موارد",
    to: "/",
    children: [
      { title: "اکانت شما", to: "#", children: [] },
      { title: "مراحل خرید بلیط", to: "steps", children: [] },
    ],
  },
];

export async function GET(request: Request) {
  return Response.json({
    results: headerMenu,
  });
}
