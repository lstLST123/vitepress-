# js

<Badge type="info" text="default" />

### Title <Badge type="info" text="default" />

asdasdsasd这一逻辑乍一看很简单，其实有很多小坑在里面。其中最容易踩的的坑是动态`路由尚未渲染完成`就已经触发路由跳转了，这时候肯定是404，因为路由并不存在；另一个容易踩的坑是`路由重复加载`，此时页面会显示空白，需要手动刷新才能正常显示。

首先想到的就是使用 `Promise` 函数解决，结果行不通。`addRoute` 是一个宏任务 和 `resolve` 是微任务，所以 `Promise` 结束的时候并不能代表动态路由已经添加完成。

其次又想到使用 `async` 函数来确保获取到登录成功结果的时候，路由已经添加完成，结果一番尝试后依然行不通。因为添加路由的操作不是异步的，没有返回 `Promise` 对象，因此这里的 `await` 是不会产生效果的。（PS：事后使用 `Promise.all` 解决了这一问题，后面的具体方法上会说。）

作者：前端学习笔记\_zxh
链接：https://juejin.cn/post/7257048132063297592
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

### Title <Badge type="tip" text="^1.9.0" />

### Title <Badge type="warning" text="beta" />

### Title <Badge type="danger" text="caution" />
