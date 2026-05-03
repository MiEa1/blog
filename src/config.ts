export const SITE = {
  website: "https://govfucker.vercel.app/", // 部署前可以先填入你预期的Vercel域名，或者暂时保留原样
  author: "你的名字或昵称", // 例如："张三"
  profile: "https://bpmiea.com", // 如果没有可以留空 ""
  desc: "这里写一段你的博客简介，比如：分享关于技术、生活和阅读的思考。", // 搜索引擎抓取时会显示这段话
  title: "你的博客名字", // 例如："张三的数字花园"
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true, // 是否开启明暗主题切换
  postPerIndex: 4, // 首页显示的文章数量
  postPerPage: 4, // 归档/列表页每页显示的文章数量
  scheduledPostMargin: 15 * 60 * 1000, 
  showArchives: true,
  showBackButton: true, 
  editPost: {
    enabled: false, // 建议新手先改为 false（关闭“在Github编辑此页”的功能），等熟悉Github后再开启
    text: "Edit page",
    url: "https://github.com/你的用户名/你的仓库名/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", 
  lang: "zh-CN", // 如果你主要用中文写作，强烈建议改为 "zh-CN"
  timezone: "Asia/Tokyo", // 根据你所在的时区修改，如果在国内就写 "Asia/Shanghai"，如果在日本就是 "Asia/Tokyo"
} as const;