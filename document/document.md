## 入门

- 先看项目的入门 ../README.md

- https://create-react-app.dev/docs/folder-structure 构建发布

`

    # 更改文件夹用户权限
    sudo chown -R $USER /Users/jiangshanchen/Desktop/Code/Code-JavaScript/rect1/src/document
    sudo chmod -R 755 /Users/jiangshanchen/Desktop/Code/Code-JavaScript/rect1/src/document

`

### vscode 自动格式化 html 文件

如果你在 VS Code 中安装了 Prettier 插件，并希望在按下 Command + S（Mac）或 Ctrl + S（Windows/Linux）时自动格式化当前的 HTML 文件，你可以按照以下步骤设置：

确保安装 Prettier 插件：

打开 VS Code，进入 Extensions (扩展) 面板。
搜索并安装 "Prettier - Code formatter" 插件。
设置 VS Code 的配置：

打开 VS Code 的用户设置（Cmd + , 或 Ctrl + ,）。
在搜索框中输入 "format on save"，找到 "Editor: Format On Save" 设置项。
启用 Format On Save：

将 "Editor: Format On Save" 设置为 true，这样每次保存文件时，VS Code 将会自动运行 Prettier 来格式化你的代码。
确保 Prettier 配置文件存在：

在你的项目根目录或者 HTML 文件所在的目录中，确保存在一个 .prettierrc 或者 .prettierrc.json、.prettierrc.yaml 等 Prettier 的配置文件。这个文件告诉 Prettier 如何格式化代码。
保存 HTML 文件： -（这一步并不是重要的）

现在，当你在 VS Code 中编辑并保存 HTML 文件时（使用 Command + S 或 Ctrl + S），Prettier 将会自动应用其配置并格式化你的 HTML 代码。

## 快捷键 mac

- 1.  打开谷歌浏览器调试工具 command + option + I
- 2.  长按 f5 mac 电脑显示 f1-f12

## 常用地址

- 构建发布
  https://create-react-app.dev/docs/folder-structure
- React Router 路由管理
  https://reactrouter.com/en/main
- https://react.dev/learn React 官网
- https://redux.js.org Redux 状态管理

## 常见错误

1.0 vscode eslint 报错

解决：

```
ERROR in [eslint]
src/routes/contact.jsx
Line 68:18:  Unexpected use of 'confirm'  no-restricted-globals

Search for the keywords to learn more about each error.

fix:
/* eslint-disable no-restricted-globals */
// Your code using confirm
/* eslint-enable no-restricted-globals */

```

## VSCode 插件

- CodeRunner: 可以单独执行某个 js 文件，当前其他文件也可以单独 执行

## technologic

- arr 的 unshift 和 push 的区别

  - unshift: 向数组的开头添加一个或更多元素，并返回新的长度
  - push: 向数组的末尾添加一个或更多元素，并返回新的长度

- 数组的 slice 方法
  - slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括 end）。原始数组不会被改变。
- Object.assign(contact, updates)
  - 用于直接更新 contact 的对象 更新
- console.log(`1234${'我猜了也猜不透啊'}`)

  - 打印字符串

  # 资源

  ## 常用 json 地址

  - https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json

  ```
  async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroesText = await response.text();

  const superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  populateHeroes(superHeroes);
  }
  ```
