import * as components from './components'

const install = function(Vue) {
    if(install.installed) return
    for (let key in components) {
        Vue.component(key, components[key])
    }
}

export default {
    install,
    components
}