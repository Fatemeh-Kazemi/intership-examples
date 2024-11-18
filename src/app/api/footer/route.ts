const footerMenu = [
  { title: "درباره ما", link: "#" },
  { title: "تماس با ما", link: "#" },
  { title: "استرداد بلیط", link: "#" },
  { title: "راهنمای خرید بلیط", link: "#" },
  { title: "قوانین و مقررات", link: "#" },
];

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
    result: {
      footerMenu,
      socialLinks,
      trustLinks,
    },
  });
}
