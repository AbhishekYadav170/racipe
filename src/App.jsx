
// import './App.css'



// function App() {
//   return (
//     <>
//     <h1>hello</h1>
//     </>
//   )
// }
// export default App


import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className= "py-10 px-[10%] w-screen h-screen text-white font-thin bg-gray-800">

      <Navbar />
      <Mainroutes />

    </div>
  )
};

export default App;