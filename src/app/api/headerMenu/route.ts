const headerMenu = [
  { title: "صفحه اصلی", link: "#", children: [] },
  { title: "بیمه مسافرتی", link: "#", children: [] },
  { title: "سفرهای من", link: "#", children: [] },
  {
    title: "سایر موارد",
    link: "#",
    children: [
      { title: "اکانت شما", link: "#", children: [] },
      { title: "علاقه مندی ها", link: "#", children: [] },
    ],
  },
];

export async function GET(request: Request) {
  return Response.json({
    results: headerMenu,
  });
}
