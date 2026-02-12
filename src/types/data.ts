// Types to replace Basehub CMS fragments

export interface MediaFragment {
    __typename: "BlockImage" | "BlockVideo";
    url: string;
    width?: number;
    height?: number;
    alt?: string;
    blurDataURL?: string;
    aspectRatio?: string;
}

export interface RichTextFragment {
    json: {
        content: any[]; // Using any for now to simplify RichText adaptation
    };
    plainText?: string;
}

export interface SocialLinkFragment {
    _title: string;
    link: string;
}

export interface ProjectItemFragment {
    _id: string;
    _slug: string;
    _title: string;
    description?: RichTextFragment | string; // Allow string for simpler local data
    year: string;
    client?: RichTextFragment | string;
    category: string[];
    opengraphImage?: {
        url: string;
        width?: number;
        height?: number;
    };
    media: {
        items: {
            media: MediaFragment;
        }[];
    };
}

export interface AboutFragment {
    _title: string;
    bio: RichTextFragment | string;
    clients?: RichTextFragment | string;
    awards?: RichTextFragment | string;
    aboutPhoto: MediaFragment;
}

export interface InfoFragment {
    title: string;
    subtitle: string;
    heading: string;
    email: string;
    phone?: string;
    address?: string;
    baseUrl?: string;
    socialLinks: {
        items: SocialLinkFragment[];
    };
}
