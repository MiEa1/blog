export type Site = {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives?: boolean;
  showBackButton?: boolean;
  editPost: { // 注意：这里的问号已经被去掉了！
    enabled: boolean;
    text: string;
    url: string;
  };
  dynamicOgImage?: boolean;
  dir?: "ltr" | "rtl" | "auto";
  lang?: string;
  timezone?: string;
};