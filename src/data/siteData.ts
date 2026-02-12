import { InfoFragment, SocialLinkFragment } from "@/types/data";
import { personalInfo } from "./personalInfo";

// Adapt existing personalInfo to InfoFragment structure
export const siteInfo: InfoFragment = {
    title: personalInfo.name,
    subtitle: personalInfo.role,
    heading: personalInfo.tagline,
    email: personalInfo.email,
    phone: personalInfo.phone,
    address: personalInfo.location,
    socialLinks: {
        items: [
            { _title: "LinkedIn", link: personalInfo.social.linkedin },
            { _title: "GitHub", link: personalInfo.social.github },
            { _title: "Twitter", link: personalInfo.social.twitter },
            { _title: "Instagram", link: personalInfo.social.instagram },
        ].filter(link => link.link) as SocialLinkFragment[],
    },
};
