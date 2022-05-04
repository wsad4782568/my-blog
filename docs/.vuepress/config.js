const { defaultTheme } = require("@vuepress/theme-default");
module.exports = {
  title: "耀的博客",
  description: "耀的博客",
  theme: defaultTheme({
    // 导航栏
    navbar: [
      {
        text: "Foo",
        link: "/foo/",
      },
      {
        text: "Bar",
        link: "/bar",
      },
      {
        text: "掘金",
        link: "https://juejin.cn/user/4300945219657303",
      },
      {
        text: "Github",
        link: "https://github.com",
      },
    ],
    // 侧边栏
    sidebar: [
      {
        text: "Foo",
        collapsible: false,
        children: [
          // SidebarItem
          {
            text: "202205",
            link: "/20220504",
          },
          {
            text: "202206",
            link: "/202206",
          },
        ],
      },
    ],
  }),
};
