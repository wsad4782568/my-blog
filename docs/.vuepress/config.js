const { defaultTheme } = require("@vuepress/theme-default");
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
            text: "那最好的两年",
            link: "/best_two_year",
          },
        ],
      },
    ],
  }),
};
