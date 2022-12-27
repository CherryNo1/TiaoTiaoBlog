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
function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[],): MenuItem {
    return { key, label, icon, children, } as MenuItem;
}
export { getItem }