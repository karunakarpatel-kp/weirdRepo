import seoImage from "/public/seo.jpg";
import nextjsInstallImage from "/public/nextjs_install.png";
import welcomePatelsImage from "/public/welcome-page.png";
import escapeRoadImg from "@Public/escape-road.png";

export const DateMonthYearForBlogPost = (lastUpdateTime: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(lastUpdateTime);
  const day = date.getDate();
  const month = months[date.getMonth()]; // Months are 0-based in JavaScript Dates
  const year = date.getFullYear();
  // console.log(`${day}/${month}/${year}`, "DATE");
  return `${day}, ${month}, ${year}`;
};

export const dynamicLastUpdatedTime = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are 0-indexed
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
  return formattedDate;
};

interface Base_Url_Props {
  HOME_PAGE_BASE_URL: string;
  // BLOG_PAGE_BASE_URL: string;
}

export const BASE_URLS: Base_Url_Props = {
  HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL!,
  // BLOG_PAGE_BASE_URL: `${process.env.HOME_PAGE_BASE_URL}/Blog`,
};

interface Blog_Post_URL_Props {
  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;

  PRIVACY_PAGE_ABSOLUTE: string;
  PRIVACY_PAGE_RELATIVE: string;

  CONTACT_PAGE_ABSOLUTE: string;
  CONTACT_PAGE_RELATIVE: string;

  DISCLAIMER_PAGE_ABSOLUTE: string;
  DISCLAIMER_PAGE_RELATIVE: string;

  ESCAPE_ROAD_ABSOLUTE: string;
  ESCAPE_ROAD_RELATIVE: string;
}

export const blogPostURLS: Blog_Post_URL_Props = {
  HOME_PAGE_ABSOLUTE: BASE_URLS.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",

  PRIVACY_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/privacy`,
  PRIVACY_PAGE_RELATIVE: "/privacy",

  CONTACT_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/contact`,
  CONTACT_PAGE_RELATIVE: "/contact",

  DISCLAIMER_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/disclaimer`,
  DISCLAIMER_PAGE_RELATIVE: "/disclaimer",

  ESCAPE_ROAD_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/escape-road`,
  ESCAPE_ROAD_RELATIVE: "/escape-road",
};

interface blogPostsObjProps {
  id: number;
  url: string;
  title: string;
  subtitle?: string;
  description?: string;
  lastUpdateTime: string;
  publishedTime: string;
  tags: { tag: string; href: string }[];
  featuredImage: any;
  featuredImageAltText: string;
  ogImageURL: string;
}

interface SEO_OBJ_Props {
  [key: string]: {
    absoluteURL: string;
    relativeURL: string;
    title: string;
    subtitle?: string;
    description?: string;
    lastUpdateTime: string;
    publishedTime: string;
    tags?: { tag: string; href: string }[];
    featuredImage: any;
    featuredImageAltText: string;
    ogImageURL: string;
    changeFrequency?: "weekly" | "daily" | "monthly" | "yearly";
    category?: string;
  };
}

export const SEO_OBJ: SEO_OBJ_Props = {
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "Free Online Games on CrazyPokiGames🎮 | Play Now!",
    description:
      "Crazypokigames features the latest and best free online games which are ready to play for free. You can enjoy gamesh without any interruptions from downloads and ads",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-09-04T10:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "HomePage", href: "/" }],
  },

  POLICY_PAGE: {
    absoluteURL: blogPostURLS.PRIVACY_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.PRIVACY_PAGE_RELATIVE,
    title: "Privacy Policy | CrazyPokiGames🎮",
    description:
      "Welcome to crazypokigames privacy policy. In here you can find all the details about privacy policy of online crazypokigames in here.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-09-04T10:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "Privacy", href: "/privacy" }],
  },

  CONTACT_PAGE: {
    absoluteURL: blogPostURLS.CONTACT_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CONTACT_PAGE_RELATIVE,
    title: "Contact Us | CrazyPokiGames🎮",
    description:
      "Welcome to crazypokigames contact page. In here you can find all the details of about crazypokigames contact information and a way to contact administrator of the Crazypokigames site.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-09-04T10:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "contact", href: "/contact" }],
  },

  DISCLAIMER_PAGE: {
    absoluteURL: blogPostURLS.DISCLAIMER_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.DISCLAIMER_PAGE_RELATIVE,
    title: "Disclaimer | CrazyPokiGames🎮",
    description:
      "Welcome to CrazyPokiGames disclaimer page. In here you can find all the details of about KarunakarPatel's Disclaimer and its policies.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-09-04T10:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "disclaimer", href: "/disclaimer" }],
  },

  ESCAPE_ROAD: {
    absoluteURL: blogPostURLS.ESCAPE_ROAD_ABSOLUTE,
    relativeURL: blogPostURLS.ESCAPE_ROAD_RELATIVE,
    title: "Escape Road 🎮 Play on CrazyPokiGames",
    description:
      "This high-speed car chase game will get your adrenaline pumping as soon as you put your foot on the gas. Police cars will start tailing you from the moment you start the car.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-09-04T10:07:55+00:00",
    featuredImage: escapeRoadImg,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "disclaimer", href: "/disclaimer" }],
  },
};

export const blogPostsObj: blogPostsObjProps[] = [
  {
    id: 0,
    url: `${blogPostURLS.ESCAPE_ROAD_RELATIVE}`,
    title: `${SEO_OBJ.ESCAPE_ROAD.title}`,
    description: `${SEO_OBJ.ESCAPE_ROAD.description}`,
    lastUpdateTime: `${SEO_OBJ.ESCAPE_ROAD.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.ESCAPE_ROAD.publishedTime}`,
    tags: SEO_OBJ.ESCAPE_ROAD.tags!,
    featuredImage: SEO_OBJ.ESCAPE_ROAD.featuredImage,
    featuredImageAltText: `${SEO_OBJ.ESCAPE_ROAD.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.ESCAPE_ROAD.ogImageURL}`,
  },

  {
    id: 1,
    url: `${blogPostURLS.ESCAPE_ROAD_RELATIVE}`,
    title: `${SEO_OBJ.ESCAPE_ROAD.title}`,
    description: `${SEO_OBJ.ESCAPE_ROAD.description}`,
    lastUpdateTime: `${SEO_OBJ.ESCAPE_ROAD.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.ESCAPE_ROAD.publishedTime}`,
    tags: SEO_OBJ.ESCAPE_ROAD.tags!,
    featuredImage: SEO_OBJ.ESCAPE_ROAD.featuredImage,
    featuredImageAltText: `${SEO_OBJ.ESCAPE_ROAD.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.ESCAPE_ROAD.ogImageURL}`,
  },

  {
    id: 2,
    url: `${blogPostURLS.ESCAPE_ROAD_RELATIVE}`,
    title: `${SEO_OBJ.ESCAPE_ROAD.title}`,
    description: `${SEO_OBJ.ESCAPE_ROAD.description}`,
    lastUpdateTime: `${SEO_OBJ.ESCAPE_ROAD.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.ESCAPE_ROAD.publishedTime}`,
    tags: SEO_OBJ.ESCAPE_ROAD.tags!,
    featuredImage: SEO_OBJ.ESCAPE_ROAD.featuredImage,
    featuredImageAltText: `${SEO_OBJ.ESCAPE_ROAD.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.ESCAPE_ROAD.ogImageURL}`,
  },
];
