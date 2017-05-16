import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test1 from '@/components/Test1'
import color from '@/components/color'
import page from '@/components/page'
import AdminTable from '@/components/demo/adminTable'
import AdminIndex from '@/components/demo/adminIndex'
import Admin404 from '@/components/demo/admin404'
import AdminForm from '@/components/demo/adminForm'
import AdminGallery from '@/components/demo/adminGallery'
import AdminLog from '@/components/demo/adminLog'
import AdminUser from '@/components/demo/adminUser'
import AdminHelp from '@/components/demo/adminHelp'
import Element from '@/components/element-ui/Element.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {default: AdminIndex}
    },
    {
      path: '/admin-table',
      components: {default: AdminTable}
    },
    {
      path: '/admin-404',
      components: {default: Admin404}
    },
    {
      path: '/admin-form',
      components: {default: AdminForm}
    },
    {
      path: '/admin-gallery',
      components: {default: AdminGallery}
    },
    {
      path: '/admin-log',
      components: {default: AdminLog}
    },
    {
      path: '/admin-user',
      components: {default: AdminUser}
    },
    {
      path: '/admin-help',
      components: {default: AdminHelp}
    },
    {
      path: '/test1',
      components: {default: Test1, header: Hello, footer: Test1}
    },
    {
      path: '/color',
      components: {default: color}
    },
    {
      path: '/page',
      components: {default: page}
    },
    {
      path: '/element',
      components: {default: Element}
    }
  ]
})
