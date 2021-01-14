import React from "react";
import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';

const BreadcrumbCom = ({ pathList = [] }) => {
  console.log(window.location, 'window')
  return (
    <Breadcrumb>
      {
        pathList.map((item, index) => {
          return (
            <Breadcrumb.Item key={item.path}>
              {index === 0 ? <NavLink to={pathList[0].path}>{item.title}</NavLink> : <span>{item.title}</span>}
            </Breadcrumb.Item>
          )
        })
      }
    </Breadcrumb>
  )
};

export default BreadcrumbCom;
