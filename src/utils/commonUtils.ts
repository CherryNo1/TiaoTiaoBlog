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
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return { key, label, icon, children } as MenuItem;
}
/**
 * 脱敏处理
 * import Utils from '@/utils/utils'
 * const columns = [
	{
	  title: '患者姓名',
	  dataIndex: 'name',
	  key: 'name',
	  render:(val)=><span>{Utils.onlySeeSome(val,'name')}</span>
    },
    {
      title: '手机号',
      dataIndex: 'mobile',
      key: 'mobile',
      render:(val)=><span>{Utils.onlySeeSome(val,'phone')}</span>
    },
]
//html中
<span>{Utils.onlySeeSome(order.name,'name')}</span>

 * @param str
 * @param type
 * @returns
 */
function onlySeeSome(str, type) {
  //str文本-type类型：name/姓名；phone/手机号
  let arr = JSON.parse(localStorage.getItem("user"))?.roleList;
  let isAdmin = arr?.find((item) => item.roleKey == "administrator"); //权限数组是否有最高权限

  if (isAdmin || !str) {
    return str;
  } else {
    //脱敏
    if (type == "name") {
      return new Array(str?.length).join("*") + str?.substr(-1);
    } else if (type == "phone") {
      return str?.replace(/(\d{3})\d*(\d{4})/, "$1****$2");
    }
  }
}
export { getItem };
