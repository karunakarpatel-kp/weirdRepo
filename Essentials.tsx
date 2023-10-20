import seoImage from "@Public/seo.jpg";
import nextjsInstallImage from "@Public/nextjs_install.png";

interface blogPostURLSProps {
  NEXTJS_INSTALLATION_RELATIVE: string;
  NEXTJS_INSTALLATION_ABSOLUTE: string;
  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;
  BLOG_PAGE_RELATIVE: string;
  BLOG_PAGE_ABSOLUTE: string;
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
  };
}

export const BASE_URL: { HOME_PAGE_BASE_URL: string; BLOG_PAGE_BASE_URL: string } = {
  HOME_PAGE_BASE_URL: "https://www.karunakarpatel.com",
  BLOG_PAGE_BASE_URL: "https://www.karunakarpatel.com/Blog",
};

export const blogPostURLS: blogPostURLSProps = {
  HOME_PAGE_ABSOLUTE: BASE_URL.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",
  BLOG_PAGE_ABSOLUTE: BASE_URL.BLOG_PAGE_BASE_URL,
  BLOG_PAGE_RELATIVE: "/Blog",
  NEXTJS_INSTALLATION_RELATIVE: "/Blog/nextjs_installation",
  NEXTJS_INSTALLATION_ABSOLUTE: `${BASE_URL.BLOG_PAGE_BASE_URL}/nextjs_installation`,
};

export const SEO_OBJ: SEO_OBJ_Props = {
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "Karunakar Patel: Navigating the landscape of programming knowledge",
    description:
      "Explore the world of programming with Karunakar Patel, where we delve into the exciting landscape of programming knowledge. Here, you'll find simplified explanations, hands-on tutorials, practical tips, and personal experiences about programming. let's learn together step by step.",
    lastUpdateTime: "2023-10-20T19:07:55+00:00",
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: nextjsInstallImage,
    featuredImageAltText: "a-person-with-computer",
  },
  // BlogPage  /Blog/
  BLOG_PAGE: {
    absoluteURL: blogPostURLS.BLOG_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.BLOG_PAGE_RELATIVE,
    title: "Karunakar Patel Blog: A hub for programming enthusiasts.",
    description:
      "Welcome to Karunakar Patel's Blog! This is the perfect place for people who love programming. You'll find easy-to-understand articles and tutorials for beginners and experienced coders alike. Join our community and let's learn and grow together in the world of coding!",
    lastUpdateTime: "2023-10-20T19:19:55+00:00",
    publishedTime: "2023-10-20T19:19:55+00:00",
    featuredImage: nextjsInstallImage,
    featuredImageAltText: "a-person-with-computer",
  },
  // nextjs_installation
  NEXTJS_INSTALLATION: {
    absoluteURL: blogPostURLS.NEXTJS_INSTALLATION_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_INSTALLATION_RELATIVE,
    title: "Next.js Installation: Everything You Need to Know to Get Started",
    description:
      "Learn how to install Next.js in an easy way. This guide provides step-by-step instructions for a smooth setup. If you are looking for seamless Next.js installation,  this tutorial has got you covered. Start building efficient and powerful web applications with Next.js today!",
    publishedTime: "2023-10-20T19:07:55+00:00",
    lastUpdateTime: "2023-10-20T19:07:55+00:00",
    tags: [
      { tag: "Next.js Install", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Next.js", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsInstallImage,
    featuredImageAltText: "a-person-with-computer",
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
  },
];
