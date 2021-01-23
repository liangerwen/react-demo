import React from "react";
import { Menu } from "antd";
import "./b.less";
const { SubMenu } = Menu;
export default function B(props) {
  console.log(props)
  let mr = [
    {
      name: "1",
      path: "1",
      ch: [
        {
          name: "1.1",
          path: "1.1",
          ch: [
            {
              name: "1.1.1",
              path: "1.1.1",
            },
            {
              name: "1.1.2",
              path: "1.1.2",
            },
          ],
        },
      ],
    },
    {
      name: "2",
      path: "2",
    },
  ];
  const diffMeno = (r) => {
    return (
      <>
        {r.map((rr) => {
          if (rr.ch)
            return (
              <SubMenu key={rr.name} title={rr.path}>
                {diffMeno(rr.ch)}
              </SubMenu>
            );
          else
            return (
              <Menu.Item key={rr.name}>{rr.path}</Menu.Item>
            );
        })}
      </>
    );
  };

  return (
    <>
      <h1>BBBBBBBBBB</h1>
      <h1>BBBBBBBBBB</h1>
      <h1>BBBBBBBBBB</h1>
      <h1>BBBBBBBBBB</h1>
      <h1>BBBBBBBBBB</h1>
      <h1>BBBBBBBBBB</h1>
      <h1>BBBBBBBBBB</h1>
      {/* {diffMeno(mr)} */}
    </>
  );
}