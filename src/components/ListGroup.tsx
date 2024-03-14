import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // useState to alter active index

  //const handleClick = (event: MouseEvent) => console.log(event.clientX);
  function handleTest(test: string, event: MouseEvent, index: number) {
    console.log(test, event.clientX);
    setHoveredIndex(index);
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
              hoveredIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={(event) => handleTest(item, event, index)} // Fix: Pass both item, event, and index parameters to handleTest
            //onMouseLeave={() => setHoveredIndex(null)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
