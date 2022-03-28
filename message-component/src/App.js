import logo from "./logo.svg";
import Message from "./components/Message";
import Card from "./components/Card";
import "./App.css";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    link: "www.toiletpaper.com",
  },
  {
    id: "e2",
    title: "Car Insurance",
    link: "www.toiletpaper.com",
  },
  {
    id: "e3",
    title: "New Desk (Wooden)",
    link: "www.toiletpaper.com",
  },
];

const App = () => {
  return (
    <Card className="expenses">
      <Message />
      <Message />
    </Card>
  );
};

export default App;
