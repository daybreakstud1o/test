import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  let selectedIndex = 0;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(
    selectedIndex
  );

  const handleClick = (event: MouseEvent) => console.log(event.clientX);
  function handleTest(test: string, event: MouseEvent, index: number) {
    // Fix: Add index parameter
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
            onMouseOver={(event) => handleTest(item, event, index)} // Fix: Pass both item, event, and index parameters to handleTest
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// import { useState } from "react";
// import { MouseEvent } from "react";

// function ListGroup() {
//   let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <>
//       <h1>List</h1>
//       {items.length === 0 && <p>No items found</p>}
//       <ul className="list-group">
//         {items.map((item, index) => (
//           <li
//             key={item}
//             className={
//               hoveredIndex === index
//                 ? "list-group-item active"
//                 : "list-group-item"
//             }
//             onMouseOver={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)} // Reset index when mouse leaves
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ListGroup;
