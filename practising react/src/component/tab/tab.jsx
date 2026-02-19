import { useState } from "react";

export default function Tab({ content }) {
  const [curTab, setCurTab] = useState(0);
  function handleTab(index) {
    setCurTab(index);
  }
  return (
    <>
      {content.map((tabItem, index) => (
        <div
          key={tabItem.label}
          onClick={() => handleTab(index)}
          style={{ background: index === curTab ? "red" : null }}
        >
          {tabItem.label}
        </div>
      ))}
      {content[curTab]?.content}
    </>
  );
}
