import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";


/// 根据查询条件查询联系人
export async function getContacts(query) {
  await fakeNetwork(`getContacts:${query}`);
  let contacts = await localforage.getItem("contacts");
  if (!contacts) contacts = [];
  if (query) {

    ///  3个参数， 第一个是数组，第二个是查询字符串，第三个是配置对象的先顺序
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }

  // contact = { id : id , createdAt: Date.now() }
  // 单独理解为脾虚就行了
  return contacts.sort(sortBy("last", "createdAt"));
}

/// 联系人
// 导出一个异步函数，用于创建联系人
export async function createContact() {

  // 如果没创建过的 会模拟一个延迟时间
  await fakeNetwork();
  // 生成一个随机id
  let id = Math.random().toString(36).substring(2, 9);
  // 创建一个联系人对象
  let contact = { id, createdAt: Date.now() };
  // 获取所有联系人
  let contacts = await getContacts();
  // 将新联系人添加到联系人列表中  在数组头部添加一个元素
  contacts.unshift(contact);
  // 设置联系人列表
  await set(contacts);
  // 返回新联系人
  return contact;
}

/// 通过id获取联系人
export async function getContact(id) {
  await fakeNetwork(`contact:${id}`);
  let contacts = await localforage.getItem("contacts");
  let contact = contacts.find(contact => contact.id === id);

  // 如果有conatct 就返回，没有的话就返回null
  return contact ?? null;
}

/// 通过id 更新联系人
export async function updateContact(id, updates) {
  await fakeNetwork();
  let contacts = await localforage.getItem("contacts");
  let contact = contacts.find(contact => contact.id === id);
  if (!contact) throw new Error("No contact found for", id);

  /// 更新联系人， 这里用Object.assign覆盖查询到的 contact,不需要重复进行赋值
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

/// 根据 id删除联系人
export async function deleteContact(id) {
  let contacts = await localforage.getItem("contacts");
  let index = contacts.findIndex(contact => contact.id === id);
  if (index > -1) {

    /// 移除当前所在index中的 contact，重新设置 contacts
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

/// 更新contacts列表
function set(contacts) {
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

// face a network that this function can fallback a  promise
async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}



