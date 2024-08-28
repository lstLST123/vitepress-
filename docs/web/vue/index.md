# VUE 后台管理项目

## 前言

后台管理的项目，我反复折腾了不下数十次，但是每次都没有写到最后，有的动态权限弄完就不想写了，有的因为样式折磨放弃了，有的因为工作忙搁置了之后就再也没有打开过，反正来来回回折腾始终没能完成一个健全的后台管理系统，后来也尝试过总结归纳，发现其中细节还是很多，网上的教程也看了不少，大多是一些浅尝辄止的应付式教学，脱离现实。

我希望自己可以整理出一份完善的后台搭建笔记，从0到1的完整过程。代码全部开源，地址 https://gitee.com/cao-shen-yang/zz-admin-vue.git

## 约定

阅读文档时我们注意这些标注

::: info
强调用户在快速浏览文档时也不应忽略的重要信息。
:::

::: tip
有助于用户更顺利达成目标的建议性信息。
:::

::: warning
因为可能存在风险，所以需要用户立即关注的关键内容。
:::

::: danger
行为可能带来的负面影响。
:::



## 技术文档地址

技术框架无时无刻不在更新，这里我会列出所有项目中会用到的第三方文档地址，方便版本有出入时查找问题：

|                       项目                       | 文档地址                                                     |
| :----------------------------------------------: | :----------------------------------------------------------- |
|                      vscode                      | https://code.visualstudio.com/                               |
|                       vue                        | https://cn.vuejs.org/                                        |
|                    vue-router                    | https://router.vuejs.org                                     |
|                       码云                       | https://gitee.com                                            |
|                       git                        | https://git-scm.com/                                         |
|                 Angular 团队规范                 | https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines |
| Conventional Commits specification（约定式提交） | https://www.conventionalcommits.org/zh-hans/v1.0.0/          |
|                      ESLint                      | https://eslint.org/  https://zh-hans.eslint.org/             |
|                     Prettier                     | https://prettier.io/   https://www.prettier.cn/              |
|                     githooks                     | https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90 |
|                    commitlint                    | https://github.com/conventional-changelog/commitlint         |
|                      husky                       | https://typicode.github.io/husky/                            |
|                   lint-staged                    | https://github.com/lint-staged/lint-staged                   |
|                   element-plus                   | https://element-plus.org/zh-CN/                              |
|                   tailwindcss                    | https://www.tailwindcss.cn                                   |
|                       sass                       | https://www.sass.hk/                                         |
|                      axios                       | https://axios-http.com/zh/                                   |
|                      mockjs                      | http://mockjs.com/                                           |
|                 vite-plugin-mock                 | https://github.com/vbenjs/vite-plugin-mock/blob/main/README.zh_CN.md |
|                      pinia                       | https://pinia.vuejs.org/                                     |
|           pinia-plugin-persistedstate            | https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/ |
|                    nprogress                     | https://rstacruz.github.io/nprogress/                        |



快速生成代码片段

```json
{
	"Vue3快速生成模板": {
		"prefix": "vue3",
		"body": [
			"<script setup lang=\"ts\"></script>",
			"<template>",
			"  <div>${0}</div>",
			"</template>",
			"<style scoped lang=\"scss\"></style>",
			""
		],
		"description": "Log output to console"
	},
	"Vue2快速生成模板": {
		"prefix": "vue2",
		"body": [
			"<template>",
			"  <div></div>",
			"</template>",
			"<script>",
			"export default {",
			"  name: \"\",",
			"  components: {},",
			"};",
			"</script>",
			"<style>",
			"</style>"
		],
		"description": "Log output to console"
	}
}
```





