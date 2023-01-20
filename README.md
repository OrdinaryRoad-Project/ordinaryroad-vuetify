# ordinaryroad-vuetify

基于Vuetify封装了新的组件

## 发布前的调试

```shell
npm link
```

```shell
npm link ordinaryroad-vuetify
```

## 发布

```shell
npm publish --tag beta
```

```shell
npm publish
```

## 使用

### 组件

> 先引入样式
```javascript
import 'ordinaryroad-vuetify/src/styles/ordinaryroad.css'
```

> 引用所有组件

```javascript
import Vue from 'vue'
import OrVuetify from 'ordinaryroad-vuetify'

Vue.use(OrVuetify)
```

> 按需引入

```javascript
import Vue from 'vue'
import {
    BaseMaterialCard,
    OrBaseDataIterator,
    OrBaseDataTable,
    OrBaseMenu,
    OrBaseTreeList,
    OrEmpty,
    OrLoadMoreFooter,
    OrNoMoreData,
    OrNotFound
} from 'ordinaryroad-vuetify/src/components'

Vue.component('BaseMaterialCard', BaseMaterialCard)
Vue.component('OrBaseDataIterator', OrBaseDataIterator)
Vue.component('OrBaseDataTable', OrBaseDataTable)
Vue.component('OrBaseMenu', OrBaseMenu)
Vue.component('OrBaseTreeList', OrBaseTreeList)
Vue.component('OrEmpty', OrEmpty)
Vue.component('OrLoadMoreFooter', OrLoadMoreFooter)
Vue.component('OrNoMoreData', OrNoMoreData)
Vue.component('OrNotFound', OrNotFound)
```

### 工具类等

> 注意先后顺序，这里是先注册了`vue-i18n`插件，所以可以用`rules.init(i18n.$t)`，否则需要在注册国际化插件时调用`$or.rules.init(VueI18n)`方法

```javascript
import Vue from 'vue'
/* 表单校验规则 */
import rules from 'ordinaryroad-vuetify/src/rules'
/* 自定义工具类 */
import util from 'ordinaryroad-vuetify/src/utils'

export default function (context, inject) {
    const {app} = context
    const i18n = app.i18n

    rules.init(i18n.$t)

    Vue.prototype.$or = {
        util,
        rules,
        locales: {
            en: require('ordinaryroad-vuetify/src/locales/en.json'),
            zhHans: require('ordinaryroad-vuetify/src/locales/zh-Hans.json')
        }
    }

    // 将$or注入到nuxt上下文
    inject('or', Vue.prototype.$or)
}
```
