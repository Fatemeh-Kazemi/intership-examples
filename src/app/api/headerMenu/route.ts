const headerMenu = [
  { title: "صفحه اصلی", to: "/", children: [] },
  { title: "فیلتر بلیط ها", to: "/filter", children: [] },
  { title: "همراه ما" , to: "/us", children: [] },
  {
    title: "سایر موارد",
    to: "#",
    children: [
      { title: "اکانت شما", to: "#", children: [] },
      { title: "علاقه مندی ها", to: "#", children: [] },
    ],
  },
];

export async function GET(request: Request) {
  return Response.json({
    results: headerMenu,
  });
}
