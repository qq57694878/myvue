import Page from './components/page'
const components = [
  Page
]
function install (Vue) {
  components.map(component => {
    Vue.component(component.name, component)
    console.log('222')
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
