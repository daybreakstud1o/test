import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  let selectedIndex = 0;

  const handleClick = (event: MouseEvent) => console.log(event.clientX);
  function handleTest(test: string, event: MouseEvent, index: number) {
    console.log(test, event.clientX);
    const className =
      selectedIndex === index ? "list-group-item active" : "list-group-item";
  }

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onMouseOver={(event) => handleTest(item, event, index)} // Fix: Pass both item, event, and index parameters to handleTest
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
