import seoImage from "@Public/seo.jpg";
import nextjsInstallImage from "@Public/nextjs_install.png";
import welcomePatelsImage from "@Public/welcome-page.png";
import youtubeVideoDownloaderImage from "@Public/youtube-video-downloader.png";
import youtubevideotomp3 from "@Public/youtube-to-mp3.png";
import youtubevideotomp4 from "@Public/youtube-to-mp4.png";
import reduceImageSizeInKB from "@Public/reduce-image-size-to-kb.png";

interface blogPostURLSProps {
  NEXTJS_INSTALLATION_RELATIVE: string;
  NEXTJS_INSTALLATION_ABSOLUTE: string;

  YOUTUBE_VIDEO_DOWNLOAD_PAGE_ABSOLUTE: string;
  YOUTUBE_VIDEO_DOWNLOAD_PAGE_RELATIVE: string;

  YOUTUBE_VIDEO_TO_MP3_PAGE_ABSOLUTE: string;
  YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE: string;

  YOUTUBE_VIDEO_TO_MP4_PAGE_ABSOLUTE: string;
  YOUTUBE_VIDEO_TO_MP4_PAGE_RELATIVE: string;

  REDUCE_IMAGE_SIZE_IN_KB_PAGE_ABSOLUTE: string;
  REDUCE_IMAGE_SIZE_IN_KB_PAGE_RELATIVE: string;

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
}

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
  };
}

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

export const BASE_URL: { HOME_PAGE_BASE_URL: string; BLOG_PAGE_BASE_URL: string } = {
  HOME_PAGE_BASE_URL: "https://www.karunakarpatel.com",
  BLOG_PAGE_BASE_URL: "https://www.karunakarpatel.com/Blog",
};

export const blogPostURLS: blogPostURLSProps = {
  HOME_PAGE_ABSOLUTE: BASE_URL.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",

  BLOG_PAGE_ABSOLUTE: BASE_URL.BLOG_PAGE_BASE_URL,
  BLOG_PAGE_RELATIVE: "/Blog",

  PRIVACY_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/privacy`,
  PRIVACY_PAGE_RELATIVE: "/privacy",

  CONTACT_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/contact`,
  CONTACT_PAGE_RELATIVE: "/contact",

  DISCLAIMER_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/disclaimer`,
  DISCLAIMER_PAGE_RELATIVE: "/disclaimer",

  NEXTJS_INSTALLATION_ABSOLUTE: `${BASE_URL.BLOG_PAGE_BASE_URL}/nextjs_installation`,
  NEXTJS_INSTALLATION_RELATIVE: "/Blog/nextjs_installation",

  YOUTUBE_VIDEO_DOWNLOAD_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/youtube-video-downloader`,
  YOUTUBE_VIDEO_DOWNLOAD_PAGE_RELATIVE: "/youtube-video-downloader",

  YOUTUBE_VIDEO_TO_MP3_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/youtube-to-mp3`,
  YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE: "/youtube-to-mp3",

  YOUTUBE_VIDEO_TO_MP4_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/youtube-to-mp4`,
  YOUTUBE_VIDEO_TO_MP4_PAGE_RELATIVE: "/youtube-to-mp4",

  REDUCE_IMAGE_SIZE_IN_KB_PAGE_ABSOLUTE: `${BASE_URL.HOME_PAGE_BASE_URL}/reduce-image-size-in-kb`,
  REDUCE_IMAGE_SIZE_IN_KB_PAGE_RELATIVE: "/reduce-image-size-in-kb",
};

export const SEO_OBJ: SEO_OBJ_Props = {
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "Karunakar Patel: Navigating the landscape of programming knowledge",
    description:
      "Explore the world of programming with Karunakar Patel, where we delve into the exciting landscape of programming knowledge. Here, you'll find simplified explanations, hands-on tutorials, practical tips, and personal experiences about programming. let's learn together step by step.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
  },
  // BlogPage  /Blog/
  BLOG_PAGE: {
    absoluteURL: blogPostURLS.BLOG_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.BLOG_PAGE_RELATIVE,
    title: "Karunakar Patel Blog: A hub for programming enthusiasts.",
    description:
      "Welcome to Karunakar Patel's Blog! This is the perfect place for people who love programming. You'll find easy-to-understand articles and tutorials for beginners and experienced coders alike. Join our community and let's learn and grow together in the world of coding!",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:19:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
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
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
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
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
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
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/welcome-page.png`,
  },

  // nextjs_installation
  NEXTJS_INSTALLATION: {
    absoluteURL: blogPostURLS.NEXTJS_INSTALLATION_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_INSTALLATION_RELATIVE,
    title: "Next.js Installation: Everything You Need to Know to Get Started",
    description:
      "Learn how to install Next.js in an easy way. This guide provides step-by-step instructions for a smooth setup. If you are looking for seamless Next.js installation,  this tutorial has got you covered. Start building efficient and powerful web applications with Next.js today!",
    publishedTime: "2023-10-20T19:07:55+00:00",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Next.js Install", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Next.js", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsInstallImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/nextjs_install.png`,
  },

  // Youtube Video Downloader
  YOUTUBE_VIDEO_DOWNLOAD_PAGE: {
    absoluteURL: blogPostURLS.YOUTUBE_VIDEO_DOWNLOAD_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.YOUTUBE_VIDEO_DOWNLOAD_PAGE_RELATIVE,
    title: "Youtube Video Downloader | Best Place To Download Youtube Videos",
    description:
      "Here is the best place where you can use youtube video downloader, youtube video to mp3, download youtube videos for free. This is the best tool to download youtube videos.",
    // publishedTime: "2024-01-05T22:22:25+05:30",
    publishedTime: "2024-01-05T23:01:17+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "youtube-video-downloader", href: `${blogPostURLS.YOUTUBE_VIDEO_DOWNLOAD_PAGE_RELATIVE}` },
      { tag: "Video", href: `${blogPostURLS.YOUTUBE_VIDEO_DOWNLOAD_PAGE_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: youtubeVideoDownloaderImage,
    featuredImageAltText: "a-simple-youtube-image",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/youtube-video-downloader.png`,
  },

  // Youtube Video Convert MP3
  YOUTUBE_VIDEO_TO_MP3_PAGE: {
    absoluteURL: blogPostURLS.YOUTUBE_VIDEO_TO_MP3_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE,
    title: "Youtube Video MP3| Best Place To Convert Youtube Videos to MP3",
    description:
      "Here is the best place where you can convert youtube videos to mp3 and download youtube videos mp3 for free. This is the best tool to convert youtube videos to mp3.",
    // publishedTime: "2024-01-05T22:22:25+05:30",
    publishedTime: "2024-01-05T23:01:17+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "youtube-mp3", href: `${blogPostURLS.YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE}` },
      { tag: "video-to-mp3", href: `${blogPostURLS.YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: youtubevideotomp3,
    featuredImageAltText: "youtube-video-to-mp3",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/youtube-to-mp3.png`,
  },

  // Youtube Video Convert MP3
  YOUTUBE_VIDEO_TO_MP4_PAGE: {
    absoluteURL: blogPostURLS.YOUTUBE_VIDEO_TO_MP4_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.YOUTUBE_VIDEO_TO_MP4_PAGE_RELATIVE,
    title: "Youtube To MP4| Best Place To Convert Youtube Videos to MP4",
    description:
      "Here is the best place where you can convert youtube videos to mp4 and download youtube videos mp4 for free. This is the best tool to convert youtube videos to mp4.",
    publishedTime: "2024-01-06T22:04:03+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "youtube-mp4", href: `${blogPostURLS.YOUTUBE_VIDEO_TO_MP4_PAGE_RELATIVE}` },
      { tag: "video-to-mp4", href: `${blogPostURLS.YOUTUBE_VIDEO_TO_MP4_PAGE_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: youtubevideotomp4,
    featuredImageAltText: "youtube-video-to-mp4",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/youtube-to-mp4.png`,
  },

  REDUCE_IMAGE_SIZE_TO_KB_PAGE: {
    absoluteURL: blogPostURLS.REDUCE_IMAGE_SIZE_IN_KB_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.REDUCE_IMAGE_SIZE_IN_KB_PAGE_RELATIVE,
    title: "Reduce Image Size In KB - Compress Images Online in Seconds For Free.",
    description:
      "Reduce image size in kb without compromising image quality, enhancing web performance. Easily reduce the image size to your desired kb using this free tool. Upload the image and compress it with ease in seconds in just a few clicks.",
    // publishedTime: "2024-01-06T22:04:03+05:30",
    publishedTime: "2024-01-08T23:54:44+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "compress-image-online", href: `${blogPostURLS.REDUCE_IMAGE_SIZE_IN_KB_PAGE_RELATIVE}` },
      { tag: "reduce-image-size-to-kb", href: `${blogPostURLS.REDUCE_IMAGE_SIZE_IN_KB_PAGE_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: reduceImageSizeInKB,
    featuredImageAltText: "reduce-image-size-in-kb",
    ogImageURL: `${BASE_URL.HOME_PAGE_BASE_URL}/reduce-image-size-to-kb.png`,
  },
};

export const blogPostsObj: blogPostsObjProps[] = [
  {
    id: 0,
    url: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}`,
    title: `${SEO_OBJ.NEXTJS_INSTALLATION.title}`,
    description: `${SEO_OBJ.NEXTJS_INSTALLATION.description}`,
    lastUpdateTime: `${SEO_OBJ.NEXTJS_INSTALLATION.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.NEXTJS_INSTALLATION.publishedTime}`,
    tags: SEO_OBJ.NEXTJS_INSTALLATION.tags!,
    featuredImage: SEO_OBJ.NEXTJS_INSTALLATION.featuredImage,
    featuredImageAltText: `${SEO_OBJ.NEXTJS_INSTALLATION.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.NEXTJS_INSTALLATION.ogImageURL}`,
  },
  {
    id: 1,
    url: `${blogPostURLS.YOUTUBE_VIDEO_DOWNLOAD_PAGE_RELATIVE}`,
    title: `${SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.title}`,
    description: `${SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.description}`,
    lastUpdateTime: `${SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.publishedTime}`,
    tags: SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.tags!,
    featuredImage: SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.featuredImage,
    featuredImageAltText: `${SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.YOUTUBE_VIDEO_DOWNLOAD_PAGE.ogImageURL}`,
  },
  {
    id: 2,
    url: `${blogPostURLS.YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE}`,
    title: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.title}`,
    description: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.description}`,
    lastUpdateTime: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.publishedTime}`,
    tags: SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.tags!,
    featuredImage: SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.featuredImage,
    featuredImageAltText: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.ogImageURL}`,
  },
  {
    id: 3,
    url: `${blogPostURLS.YOUTUBE_VIDEO_TO_MP4_PAGE_RELATIVE}`,
    title: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP4_PAGE.title}`,
    description: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP4_PAGE.description}`,
    lastUpdateTime: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP4_PAGE.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP4_PAGE.publishedTime}`,
    tags: SEO_OBJ.YOUTUBE_VIDEO_TO_MP4_PAGE.tags!,
    featuredImage: SEO_OBJ.YOUTUBE_VIDEO_TO_MP4_PAGE.featuredImage,
    featuredImageAltText: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP4_PAGE.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP4_PAGE.ogImageURL}`,
  },
  {
    id: 4,
    url: `${blogPostURLS.REDUCE_IMAGE_SIZE_IN_KB_PAGE_RELATIVE}`,
    title: `${SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.title}`,
    description: `${SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.description}`,
    lastUpdateTime: `${SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.publishedTime}`,
    tags: SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.tags!,
    featuredImage: SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.featuredImage,
    featuredImageAltText: `${SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.ogImageURL}`,
  },
];
