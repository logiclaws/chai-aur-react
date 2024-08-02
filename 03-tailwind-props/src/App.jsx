import Card from "./components/Card"

function App() {
// let obj = {
//   username: 'Rahul',
//   age: 29
// }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test</h1>
      <Card username = "Chai aur Code" btnText = "View Channel" />
      <Card username = "Rahul Kapoor" btnText="View User" />
      {/* <Card response = {obj} /> */}
    </>
  )
}

export default App
