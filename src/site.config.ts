import { withBase } from "./utils/helpers";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    eyebrowText?: string;
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type About = {
    title?: string;
    text?: string;
};

export type Blog = {
    description?: string;
};

export type ContactInfo = {
    title?: string;
    text?: string;
    email?: {
        text?: string;
        href?: string;
        email?: string;
    };
    socialProfiles?: {
        text?: string;
        href?: string;
    }[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    contactInfo?: ContactInfo;
    subscribe?: Subscribe;
    blog?: Blog;
    postsPerPage?: number;
    recentPostLimit: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: "https://chise-chronicle.github.io",
    title: "Chise Chronicle",
    description: "A personal blog and evolving notebook for essays, notes, experiments, and works in progress.",
    image: {
        src: "/chise-chronicle-logo.svg",
        alt: "Chise Chronicle logo"
    },
    headerNavLinks: [
        {
            text: "Home",
            href: withBase("/")
        },
        {
            text: "Blog",
            href: withBase("/blog")
        },
        {
            text: "Tags",
            href: withBase("/tags")
        },
        {
            text: "About",
            href: withBase("/about")
        },
        {
            text: "Contact",
            href: withBase("/contact")
        }
    ],
    footerNavLinks: [
        {
            text: "About",
            href: withBase("/about")
        },
        {
            text: "Archive",
            href: withBase("/blog")
        },
        {
            text: "RSS Feed",
            href: withBase("/rss.xml")
        },
        {
            text: "Sitemap",
            href: withBase("/sitemap-index.xml")
        }
    ],
    socialLinks: [
        {
            text: "GitHub",
            href: "https://github.com/chise-chronicle"
        }
    ],
    hero: {
        eyebrowText: "Personal blog and digital notebook",
        title: "Chise Chronicle",
        text: "Essays, notes, experiments, and in-progress ideas collected in one place.",
        image: {
            src: "/assets/images/pixeltrue-space-discovery.svg",
            alt: "An illustrated desk setup for writing and research"
        },
        actions: [
            {
                text: "Read the archive",
                href: withBase("/blog")
            },
            {
                text: "About the site",
                href: withBase("/about")
            }
        ]
    },
    about: {
        title: "About",
        text: "Chise Chronicle is a home for longer essays, shorter notes, project logs, and unfinished questions worth keeping around. The goal is to make the site feel like an archive in motion: thoughtful, a little curious, and comfortable publishing ideas before they are perfectly polished."
    },
    contactInfo: {
        title: "Contact",
        text: "This page is ready for your preferred contact details. For now, the easiest place to point people is the GitHub organization while you decide on email, forms, or social links.",
        socialProfiles: [
            {
                text: "GitHub",
                href: "https://github.com/chise-chronicle"
            }
        ]
    },
    blog: {
        description: "Browse the latest entries, process notes, and experiments from Chise Chronicle."
    },
    postsPerPage: 4,
    recentPostLimit: 3
};

export default siteConfig;
