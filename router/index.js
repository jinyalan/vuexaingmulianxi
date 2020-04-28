import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import htop from '@/components/htop'
// import work from '@/components/work'
// import first from '@/components/first'
// const user = {
//   template: `<div>
//   </font><h2><font color="blue">我是父组件 {{$route.params.id}}</font></h2>
//   </div>`
// }
const notfound = {
  template: `<div>
  </font><h2>404您访问的页面不存在</h2>
  </div>`
}
const profile={
  template: `<div>
  <h2><font color="green">我是profile子组件 </font></h2>
  </div>`
}
const posts={
  template: `<div>
  <h2><font color="green">我是posts子组件 </font></h2>
  </div>`
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'nav',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/page'   //表示打开浏览器时默认的页面屎粑粑page
      // component: HelloWorld
    },
    {
      path: '/page',
      name: 'page',
      component: page
    },
    {
      path: '/work',
      name: 'work',
      component: work
    },
    {
      path: '/first/:id',
      name: 'first',
      component: first
    },
    {
      path: '/user/:id',
      name: 'user',
      component: user,
      children: [
        {
          path: 'profile',
          name: 'profile',
          component: profile,
        },{
          path: '/posts',
          name: 'posts',
          component: posts,
        }
      ]
    },
    // 路由的重定向：将你原来在转发列表中发向路由的路径改成另一条路由的路径。
    //说明你的数据会存到另一个路由的服务器上。优点是数据会畅通一点，缺点是有延迟。
    {
      path: "*",
      // component: "notfound",
      redirect:(to) =>{
        console.log(to);
        if (to.path === "/aaa") {
          return "/page"
        } else if(to.path === "/bbb"){
          return "/work"
        }else{
          return "/"
        }
      }
    }
  ]
})
