import Tab from "./tab";

function randomContent() {
  return <h1>this the random content for tab 3</h1>;
}

export default function TabList() {
  const data = [
    {
      label: "tab a",
      content: <span>this is the content for tab 1</span>,
    },
    {
      label: "tab b",
      content: <div>this is the content for tab 2</div>,
    },
    {
      label: "tab c",
      content: randomContent(),
    },
    {
      label: "tab d",
      content: <strong>this is tab 4</strong>,
    },
  ];
  return (
    <div>
      <Tab content={data} />
    </div>
  );
}
