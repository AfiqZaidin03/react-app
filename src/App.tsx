import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "Selangor",
    "Kuala Lumpur",
    "Putrajaya",
    "Negeri Sembilan",
    "Pahang",
  ];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
