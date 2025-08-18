import seoImage from "/public/seo.jpg";
import nextjsInstallImage from "/public/nextjs_install.png";
import welcomePatelsImage from "/public/welcome-page.png";
import americanRdTrpImg from "@Public/escape-road.png";

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
  BLOG_PAGE_BASE_URL: string;
}

export const BASE_URLS: Base_Url_Props = {
  HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL!,
  BLOG_PAGE_BASE_URL: `${process.env.HOME_PAGE_BASE_URL}/Blog`,
};

interface Blog_Post_URL_Props {
  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;

  BLOG_PAGE_RELATIVE: string;
  BLOG_PAGE_ABSOLUTE: string;

  PRIVACY_PAGE_ABSOLUTE: string;
  PRIVACY_PAGE_RELATIVE: string;

  CONTACT_PAGE_ABSOLUTE: string;
  CONTACT_PAGE_RELATIVE: string;

  DISCLAIMER_PAGE_ABSOLUTE: string;
  DISCLAIMER_PAGE_RELATIVE: string;

  AMERICAN_ROAD_TRIP_RELATIVE: string;
  AMERICAN_ROAD_TRIP_ABSOLUTE: string;
}

export const blogPostURLS: Blog_Post_URL_Props = {
  HOME_PAGE_ABSOLUTE: BASE_URLS.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",

  BLOG_PAGE_ABSOLUTE: BASE_URLS.BLOG_PAGE_BASE_URL,
  BLOG_PAGE_RELATIVE: "/Blog",

  PRIVACY_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/privacy`,
  PRIVACY_PAGE_RELATIVE: "/privacy",

  CONTACT_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/contact`,
  CONTACT_PAGE_RELATIVE: "/contact",

  DISCLAIMER_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/disclaimer`,
  DISCLAIMER_PAGE_RELATIVE: "/disclaimer",

  AMERICAN_ROAD_TRIP_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/racing`,
  AMERICAN_ROAD_TRIP_RELATIVE: "/racing",
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
    title: "Karunakar Patel: Navigating the landscape of programming knowledge",
    description:
      "Explore programming with Karunakar Patel. Find simplified explanations, hands-on tutorials, practical tips, and personal experiences about programming",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "HomePage", href: "/" }],
  },
  // BlogPage  /Blog/
  BLOG_PAGE: {
    absoluteURL: blogPostURLS.BLOG_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.BLOG_PAGE_RELATIVE,
    title: "Karunakar Patel Blog: A hub for programming enthusiasts.",
    description:
      "Welcome to Karunakar Patels Blog! This is the perfect place for people who love programming. You'll find easy-to-understand articles and tutorials for beginners and experienced coders alike. Join our community and let's learn and grow together in the world of coding!",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:19:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "Blog", href: "/Blog" }],
  },

  POLICY_PAGE: {
    absoluteURL: blogPostURLS.PRIVACY_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.PRIVACY_PAGE_RELATIVE,
    title: "Privacy Policy | KarunakarPatel Blog",
    description:
      "Welcome to KarunakarPatel privacy policy. In here you can find all the details about privacy policy of Karunakar Patel",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "Privacy", href: "/privacy" }],
  },

  CONTACT_PAGE: {
    absoluteURL: blogPostURLS.CONTACT_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CONTACT_PAGE_RELATIVE,
    title: "Contact Us | KarunakarPatel",
    description:
      "Welcome to KarunakarPatel contact page. In here you can find all the details of about KarunakarPatel contact information and a way to contact administrator of the KarunakarPatel site.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "contact", href: "/contact" }],
  },

  DISCLAIMER_PAGE: {
    absoluteURL: blogPostURLS.DISCLAIMER_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.DISCLAIMER_PAGE_RELATIVE,
    title: "Disclaimer | KarunakarPatel",
    description:
      "Welcome to KarunakarPatel disclaimer page. In here you can find all the details of about KarunakarPatel's Disclaimer and its policies.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "disclaimer", href: "/disclaimer" }],
  },

  // nextjs_installation
  RACING: {
    absoluteURL: blogPostURLS.AMERICAN_ROAD_TRIP_ABSOLUTE,
    relativeURL: blogPostURLS.AMERICAN_ROAD_TRIP_RELATIVE,
    title: "AMERICAN GAME",
    description: "AMERICAN GAME IN HERE",
    publishedTime: "2023-10-20T19:07:55+00:00",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Next.js Install", href: `${blogPostURLS.AMERICAN_ROAD_TRIP_RELATIVE}` },
      { tag: "Next.js", href: `${blogPostURLS.AMERICAN_ROAD_TRIP_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.AMERICAN_ROAD_TRIP_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.AMERICAN_ROAD_TRIP_RELATIVE}` },
    ],
    featuredImage: americanRdTrpImg,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/racing.png`,
  },
};

export const blogPostsObj: blogPostsObjProps[] = [
  {
    id: 0,
    url: `${blogPostURLS.AMERICAN_ROAD_TRIP_RELATIVE}`,
    title: `${SEO_OBJ.RACING.title}`,
    description: `${SEO_OBJ.RACING.description}`,
    lastUpdateTime: `${SEO_OBJ.RACING.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.RACING.publishedTime}`,
    tags: SEO_OBJ.RACING.tags!,
    featuredImage: SEO_OBJ.RACING.featuredImage,
    featuredImageAltText: `${SEO_OBJ.RACING.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.RACING.ogImageURL}`,
  },

  {
    id: 1,
    url: `${blogPostURLS.AMERICAN_ROAD_TRIP_RELATIVE}`,
    title: `${SEO_OBJ.RACING.title}`,
    description: `${SEO_OBJ.RACING.description}`,
    lastUpdateTime: `${SEO_OBJ.RACING.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.RACING.publishedTime}`,
    tags: SEO_OBJ.RACING.tags!,
    featuredImage: SEO_OBJ.RACING.featuredImage,
    featuredImageAltText: `${SEO_OBJ.RACING.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.RACING.ogImageURL}`,
  },

  {
    id: 2,
    url: `${blogPostURLS.AMERICAN_ROAD_TRIP_RELATIVE}`,
    title: `${SEO_OBJ.RACING.title}`,
    description: `${SEO_OBJ.RACING.description}`,
    lastUpdateTime: `${SEO_OBJ.RACING.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.RACING.publishedTime}`,
    tags: SEO_OBJ.RACING.tags!,
    featuredImage: SEO_OBJ.RACING.featuredImage,
    featuredImageAltText: `${SEO_OBJ.RACING.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.RACING.ogImageURL}`,
  },
  {
    id: 3,
    url: `${blogPostURLS.AMERICAN_ROAD_TRIP_RELATIVE}`,
    title: `${SEO_OBJ.RACING.title}`,
    description: `${SEO_OBJ.RACING.description}`,
    lastUpdateTime: `${SEO_OBJ.RACING.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.RACING.publishedTime}`,
    tags: SEO_OBJ.RACING.tags!,
    featuredImage: SEO_OBJ.RACING.featuredImage,
    featuredImageAltText: `${SEO_OBJ.RACING.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.RACING.ogImageURL}`,
  },
  {
    id: 4,
    url: `${blogPostURLS.AMERICAN_ROAD_TRIP_RELATIVE}`,
    title: `${SEO_OBJ.RACING.title}`,
    description: `${SEO_OBJ.RACING.description}`,
    lastUpdateTime: `${SEO_OBJ.RACING.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.RACING.publishedTime}`,
    tags: SEO_OBJ.RACING.tags!,
    featuredImage: SEO_OBJ.RACING.featuredImage,
    featuredImageAltText: `${SEO_OBJ.RACING.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.RACING.ogImageURL}`,
  },
  {
    id: 5,
    url: `${blogPostURLS.AMERICAN_ROAD_TRIP_RELATIVE}`,
    title: `${SEO_OBJ.RACING.title}`,
    description: `${SEO_OBJ.RACING.description}`,
    lastUpdateTime: `${SEO_OBJ.RACING.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.RACING.publishedTime}`,
    tags: SEO_OBJ.RACING.tags!,
    featuredImage: SEO_OBJ.RACING.featuredImage,
    featuredImageAltText: `${SEO_OBJ.RACING.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.RACING.ogImageURL}`,
  },
  {
    id: 6,
    url: `${blogPostURLS.AMERICAN_ROAD_TRIP_RELATIVE}`,
    title: `${SEO_OBJ.RACING.title}`,
    description: `${SEO_OBJ.RACING.description}`,
    lastUpdateTime: `${SEO_OBJ.RACING.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.RACING.publishedTime}`,
    tags: SEO_OBJ.RACING.tags!,
    featuredImage: SEO_OBJ.RACING.featuredImage,
    featuredImageAltText: `${SEO_OBJ.RACING.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.RACING.ogImageURL}`,
  },
  {
    id: 2,
    url: `${blogPostURLS.AMERICAN_ROAD_TRIP_RELATIVE}`,
    title: `${SEO_OBJ.RACING.title}`,
    description: `${SEO_OBJ.RACING.description}`,
    lastUpdateTime: `${SEO_OBJ.RACING.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.RACING.publishedTime}`,
    tags: SEO_OBJ.RACING.tags!,
    featuredImage: SEO_OBJ.RACING.featuredImage,
    featuredImageAltText: `${SEO_OBJ.RACING.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.RACING.ogImageURL}`,
  },
  {
    id: 2,
    url: `${blogPostURLS.AMERICAN_ROAD_TRIP_RELATIVE}`,
    title: `${SEO_OBJ.RACING.title}`,
    description: `${SEO_OBJ.RACING.description}`,
    lastUpdateTime: `${SEO_OBJ.RACING.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.RACING.publishedTime}`,
    tags: SEO_OBJ.RACING.tags!,
    featuredImage: SEO_OBJ.RACING.featuredImage,
    featuredImageAltText: `${SEO_OBJ.RACING.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.RACING.ogImageURL}`,
  },
  {
    id: 2,
    url: `${blogPostURLS.AMERICAN_ROAD_TRIP_RELATIVE}`,
    title: `${SEO_OBJ.RACING.title}`,
    description: `${SEO_OBJ.RACING.description}`,
    lastUpdateTime: `${SEO_OBJ.RACING.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.RACING.publishedTime}`,
    tags: SEO_OBJ.RACING.tags!,
    featuredImage: SEO_OBJ.RACING.featuredImage,
    featuredImageAltText: `${SEO_OBJ.RACING.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.RACING.ogImageURL}`,
  },
];
