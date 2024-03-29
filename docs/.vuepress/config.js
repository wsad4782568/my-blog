import { defaultTheme } from "@vuepress/theme-default";

module.exports = {
  title: "耀的博客",
  description: "耀的博客",
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
            text: "caoz的梦呓公众号文章列表",
            link: "/caoz_articles.md"
          },
          {
            text: "阿布扎比游记",
            link: "/20230814.md"
          },
          {
            text: "高少谈终身成长",
            link: "/20230810.md"
          },
          {
            text: "前端自己有一个迷你技术栈",
            link: "/20230603.md"
          },
          {
            text: "应该怎么完善自己的知识体系，才能成长为技术大牛？",
            link: "/20230602.md"
          },
          {
            text: "黄峥谈常识",
            link: "/20230525.md"
          },
          {
            text: "人才成长攻略",
            link: "/20230515.md"
          },
          {
            text: "五四青年节",
            link: "/20230504.md"
          },
          {
            text: "caoz文章收藏——从一头卖出27万的猪说起",
            link: "/20230218.md"
          },
          {
            text: "caoz谈社交价值",
            link: "/20230217.md"
          },
          {
            text: "吴萌谈用户体验",
            link: "/20221122.md"
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
