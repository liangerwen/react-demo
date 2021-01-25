import { Menu } from "antd";
import "./b.less";
const { SubMenu, Item } = Menu;
export default function B(props) {
  console.log(props);
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
  //递归菜单
  const diffMenu = (r, prePath = "") => {
    return (
      <>
        {r.map((rr) => {
          if (rr.ch)
            return (
              <SubMenu key={rr.name} title={prePath + "/" + rr.path}>
                {diffMenu(rr.ch, prePath + "/" + rr.path)}
              </SubMenu>
            );
          else return <Item key={rr.name}>{prePath + "/" + rr.path}</Item>;
        })}
      </>
    );
  };

  let lockStr = (str) => {
    let len = str.length;
    let count = 1;
    let curC = str[0];
    let countArr = [];
    let curcharArr = [curC];
    for (let i = 1; i < len; i++) {
      if (str[i] === curC) {
        count++;
      } else {
        curC = str[i];
        curcharArr.push(curC);
        countArr.push(count);
        count = 1;
      }
    }
    countArr.push(count);
    return curcharArr.map((r, i) => r + countArr[i] + "").join("");
  };

  let unloadStr = (str) => {
    let resArr = [];
    for (let i = 0; i < str.length; i += 2) {
      let count = parseInt(str[i + 1]);
      const char = str[i];
      let chars = "";
      while (count-- > 0) {
        chars += char;
      }
      resArr.push(chars);
    }
    return resArr.join("");
  };

  let myFlat = (arr) => {
    return arr.reduce((pre, cur) => {
      if (Array.isArray(cur)) return pre.concat(myFlat(cur));
      else return pre.concat(cur);
    }, []);
  };

  return (
    <>
      <Menu
        mode="inline"
        theme="dark"
        style={{ width: "240px", height: "100%" }}
        onClick={(e) => {
          console.log(
            props.location.pathname + "/" + e.keyPath.reverse().join("/")
          );
        }}
      >
        {diffMenu(mr)}
      </Menu>
    </>
  );
}
