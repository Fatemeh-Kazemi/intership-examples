const socialLinks = [
  {
    img: "assets/images/Social media icons.svg",
    alt: "telegram link",
  },
  {
    img: "assets/images/Social media icons (1).svg",
    alt: "telegram link",
  },
  {
    img: "assets/images/Social media icons (2).svg",
    alt: "youtube link",
  },
  {
    img: "assets/images/Social media icons (3).svg",
    alt: "instagram link",
  },
  {
    img: "assets/images/_Facebook.svg",
    alt: "facebook link",
  },
  {
    img: "assets/images/Social media icons (4).svg",
    alt: "tweeter link",
  },
];

export async function GET(request: Request) {
  return Response.json({
    results: socialLinks,
  });
}
