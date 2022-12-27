import { MenuProps } from "antd";

type ResponseData = {
  status?: number;
  message?: string;
  success?: boolean;
  data?: any;
};

//菜单类型
type MenuItem = Required<MenuProps>["items"][number];

export { ResponseData, MenuItem };
