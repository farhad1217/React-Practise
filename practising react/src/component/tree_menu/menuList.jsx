import { useState } from "react";

export default function MenuList({ menus }) {
  const [opened, setOpened] = useState({});
  function handleClick(label) {
    setOpened((prev) => ({ ...prev, [label]: !prev[label] }));
  }
  return (
    <ul>
      {menus.map((menuItem) => (
        <li key={menuItem.label}>
          <div onClick={() => handleClick(menuItem.label)}>
            {menuItem.label}
            {menuItem.children ? (opened[menuItem.label] ? "-" : "+") : null}
          </div>
          {menuItem.children && opened[menuItem.label] ? (
            <MenuList menus={menuItem.children} />
          ) : null}
        </li>
      ))}
    </ul>
  );
}
