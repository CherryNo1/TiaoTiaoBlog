import { MenuItem } from "@/typings";
/**
 *
 * 菜单Item类型
 * @param label 菜单名字
 * @param key 菜单key
 * @param icon 菜单图标
 * @param children 子菜单
 *
 */
export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return { key, label, icon, children } as MenuItem;
}
/**
 * setCookie
 *
 * @export
 * @param {string} name
 * @param {string} value
 * @param {number} [expiredays=365]
 */
export function setCookie(name: string, value: string, expiredays = 365) {
  const exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = `${name}=${escape(value)};expires=${exdate.toUTCString()}`
}

/**
* getCookie
*
* @export
* @param {string} name
* @returns
*/
export function getCookie(name: string) {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(name + '=')
    if (cStart !== -1) {
      cStart = cStart + name.length + 1
      let cEnd = document.cookie.indexOf(';', cStart)
      if (cEnd === -1) {
        cEnd = document.cookie.length
      }
      return unescape(document.cookie.substring(cStart, cEnd))
    }
  }
  return ''
}

/**
* clearCookie
*
* @export
* @param {string} name
*/
export function clearCookie(name: string) {
  setCookie(name, '')
}

/**
* 从url获取参数
*
* @export
* @param {string} name
* @returns {string}
*/
export function queryURL(name: string): string {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const result = window.location.search.substr(1).match(reg)
  if (result !== null) {
    return decodeURI(result[2])
  }
  return ''
}

