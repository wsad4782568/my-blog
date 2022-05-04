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
        link: "/20220504",
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
          // SidebarItem
          {
            text: "202205",
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
