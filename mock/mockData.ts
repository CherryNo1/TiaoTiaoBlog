import Mock from "mockjs";
export const MockData = Mock.mock({
  code: "0",
  msg: "success",
  "list|5": [{ name: "@name", age: "@integer(18, 25)" }],
});
