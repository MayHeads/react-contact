import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './error-page';
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";
import  {
   loader as rootLoader,
   templeAction as rootAction,


 } from "./routes/root";

 import EditContact, {
  action as editAction,
} from "./routes/edit";

import { action as destroyAction } from "./routes/destroy";
import Index1 from "./routes/index1";

const router = createHashRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    loader: rootLoader,
  action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          //  index: true 代表outlet没有匹配到值的时候 给一个默认的Index1 element位置
          { index: true, element: <Index1 /> },
    
          {
            // :contactId 通过路由匹配的contactId, 在contactLoader中可以直接获取到

            // 这里的loader和 edit中的loader是同一个，一个是显示一个是编辑
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction
          },
          
          {
            // contactId对应的路由的时候，直接用相对路径直接指向edit
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            // 同理上面的信息 可以没有element,在对应的action方法中重新定义根路由
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
    
          },
        ]

      }
      
    ]
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App></App>
  
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
