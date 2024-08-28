export default [
  { text: '首页', link: '/' },
  {text: 'Git', link: '/web/git/Git分布式版本控制工具'},  
  {
    text: '前端',
    items: [
      {
        text: '基础知识',
        items: [
          {
            text: 'HTML',
            link: '/web/html/',
          },
          {
            text: 'JavaScript',
            link: '/web/js/',
          },
          {
            text: 'CSS',
            link: '/web/css/',
          },
        ],
      },
      {
        text: '框架学习',
        items: [
          {
            text: 'VUE',
            link: '/web/vue/',
          },
          {
            text: 'React',
            link: '/web/react/',
          },
        ],
      },
    ],
  },
  {
    text: '后端',
    items: [
      {
        text: '框架学习',
        items: [
          {
            text: 'springBoot',
            link: '/server/java/springboot/',
          },
        ],
      },
    ],
  },
  {
    text: '编程秘籍',
    items: [
      {
        text: '开发工具',
        items: [
          {
            text: 'WEB',
            link: '/code/',
          },
        ],
      },
    ],
  },
]
