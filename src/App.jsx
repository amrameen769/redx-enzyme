import Header from "./components/header";
import "./app.scss";
import Headline from "./components/headline";

const tempArr = [
  {
    fName: "Doe",
    lName: "John",
    age: 24,
    onlineStatus: true,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click below to get posts."
          userArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
