import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
    // throw new Error("oh dang!");

  /// 这个只是删除的方法
  await deleteContact(params.contactId);

  /// 重定向 跟路由， 也就是Routes  index = true那个路由
  return redirect("/");
}