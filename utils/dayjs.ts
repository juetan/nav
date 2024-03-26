import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import localData from 'dayjs/plugin/localeData'
import relativeTime from 'dayjs/plugin/relativeTime'

declare module 'dayjs' {
  export var DATETIME: 'YYYY-MM-DD HH:mm'
  export var DATE: 'YYYY-MM-DD'
  export var TIME: 'HH:mm:ss'
  interface Dayjs {
    _format: Dayjs['format']
  }
}

/**
 * 中文语言包
 */
dayjs.locale('zh-cn')

/**
 * 相对时间插件
 * @see https://dayjs.gitee.io/docs/zh-CN/plugin/relative-time
 */
dayjs.extend(relativeTime)

/**
 * 本地化插件
 * @see https://dayjs.gitee.io/docs/zh-CN/plugin/locale-data
 */
dayjs.extend(localData)

/**
 * 默认时间格式
 */
dayjs.DATETIME = 'YYYY-MM-DD HH:mm'

/**
 * 默认日期格式
 */
dayjs.DATE = 'YYYY-MM-DD'

/**
 * 默认时间格式
 */
dayjs.TIME = 'HH:mm:ss'

/**
 * 保留原方法
 */
dayjs.prototype._format = dayjs.prototype.format

/**
 * 重写，设置默认时间格式
 */
dayjs.prototype.format = function (format: string = dayjs.DATETIME) {
  return this._format(format)
}

export { dayjs }
