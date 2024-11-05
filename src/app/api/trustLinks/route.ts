const trustLinks = [
  {
    img: "assets/images/foot (4).svg",
    alt: "link",
  },
  {
    img: "assets/images/foot (6).svg",
    alt: "link",
  },
  {
    img: "assets/images/foot (5).svg",
    alt: "link",
  },
  {
    img: "assets/images/foot (3).svg",
    alt: "link",
  },
  {
    img: "assets/images/foot (2).svg",
    alt: "link",
  },
];

export async function GET(request: Request) {
    return Response.json({
      results: trustLinks,
    });
  }
  