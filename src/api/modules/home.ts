import { post } from '../http'
// import getConfig from '../../../config/index'
// const { proxyUrl } = getConfig(import.meta.env)
// const PROXY_URL_ENUM:  any = {
//   development: 'http://www.historicalai.cn',
//   alpha: 'http://www.historicalai.cn',
//   production: 'http://www.historicalai.cn'
// }
// const apiUrl = PROXY_URL_ENUM[import.meta.env.VITE_MODE_ENV]


export default {
  submit: (data: any) => post('/api/apply/submit', data), // 提交
}
