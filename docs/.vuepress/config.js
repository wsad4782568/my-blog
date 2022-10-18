import { defaultTheme } from "@vuepress/theme-default";

module.exports = {
  title: "耀的博客",
  description: "耀的博客",
  footer: "asd",
  theme: defaultTheme({
    // 导航栏
    navbar: [
      {
        text: "日记",
        link: "/encourage_learn",
      },
      {
        text: "掘金",
        link: "https://juejin.cn/user/4300945219657303",
      },
      {
        text: "Github",
        link: "https://github.com/wsad4782568",
      },
    ],
    // 侧边栏
    sidebar: [
      {
        text: "日记",
        collapsible: false,
        children: [
          {
            text: "劝学",
            link: "/encourage_learn",
          },
          {
            text: "简历",
            link: "/resume",
          },
          {
            text: "《胆小鬼》、《阿Q正传》观后感",
            link: "/20220913",
          },
          {
            text: "IP成交",
            link: "/20220826",
          },
          {
            text: "读黄峥公众号文章",
            link: "/20220810",
          },
          {
            text: "腾讯云开发到阿里云的迁移过程",
            link: "/20220723",
          },
          {
            text: "简单",
            link: "/20220720",
          },
          {
            text: "互联网上重拳出击",
            link: "/20220627",
          },
          {
            text: "论技术力",
            link: "/20220608",
          },
          {
            text: "谈嫉妒",
            link: "/20220601",
          },
          {
            text: "精力管理",
            link: "/20220517",
          },
          {
            text: "什么才是程序员的核心竞争力？",
            link: "/20220509",
          },
          {
            text: "厚积薄发",
            link: "/20220508",
          },
          {
            text: "勇敢迈出那一步",
            link: "/20220507",
          },
          {
            text: "人类金字塔结构",
            link: "/20220506",
          },
          {
            text: "谈学习",
            link: "/20220505",
          },
          {
            text: "五一假期",
            link: "/20220504",
          },
          {
            text: "新的路程",
            link: "/20210630",
          },
          {
            text: "那最好的两年",
            link: "/best_two_year",
          },
        ],
      },
    ],
  }),
};
