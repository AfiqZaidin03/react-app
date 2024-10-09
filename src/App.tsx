import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "Selangor",
    "Kuala Lumpur",
    "Putrajaya",
    "Negeri Sembilan",
    "Pahang",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
