import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  return (
    <>
      <Header />
      <Meme />
    </>
  );
}
export default App;

// <main>
//   <Form />
// </main>

// <main>
//   {jokes_data.map((joke) => {
//     return <Joke {...joke} />;
//   })}
// </main>

// <div>
//   <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//     Get Next Data
//   </button>
//   <pre style={{ color: "white" }}>
//     {JSON.stringify(starWarsData, null, 2)}
//   </pre>
// </div>
