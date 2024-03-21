//import ListGroup from "./components/ListGroup";

//import Alert from "./components/Alert";

import Button from "./components/Button";

// function App() {
//   let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Alert>
//         Hi! <span>I am an alert.</span>
//       </Alert>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        Hi! I am a button.
      </Button>
    </div>
  );
}

export default App;
