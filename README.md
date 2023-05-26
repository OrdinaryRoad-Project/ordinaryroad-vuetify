# ordinaryroad-vuetify

基于Vuetify，组件封装、通用样式、工具类、表单校验规则、常用国际化

## 发布前的调试

现在当前项目执行

```shell
npm link
```

然后就能在其他项目里调试了

```shell
npm link ordinaryroad-vuetify
```

取消调试

```shell
npm unlink ordinaryroad-vuetify 
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
    OrBaseDialog,
    OrBaseMenu,
    OrBaseTreeList,
    OrEmpty,
    OrInputDialog,
    OrLoadMoreFooter,
    OrNoMoreData,
    OrNotFound,
    OrSearch
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
Vue.component('OrSearch', OrSearch)
Vue.component('OrBaseDialog', OrBaseDialog)
Vue.component('OrInputDialog', OrInputDialog)
```

### 工具类等

> 注意先后顺序，这里是先注册了`vue-i18n`插件，所以可以用`rules.init(i18n.$t)`
> ，否则需要在注册国际化插件时调用`$or.rules.init(VueI18n)`方法

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
