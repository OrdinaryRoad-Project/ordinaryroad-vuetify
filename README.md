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

> 引用所有组件
```javascript
import Vue from 'vue'
import OrVuetify from 'ordinaryroad-vuetify'

Vue.use(OrVuetify)
```


> 按需引入
```javascript
import Vue from 'vue'
import { OrBaseMaterialCard } from 'ordinaryroad-vuetify/src/components'

Vue.component('OrBaseMaterialCard', OrBaseMaterialCard)
```