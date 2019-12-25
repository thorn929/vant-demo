import Vue from 'vue'
import { hasPermission } from './permission'

const plugins = [
  hasPermission,
]
plugins.map((plugin) => {
  Vue.use(plugin)
})

export default Vue
