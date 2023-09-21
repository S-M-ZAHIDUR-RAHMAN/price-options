
// import DaisyNav from './components/DaisyNav/DaisyNav.jsx'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions.jsx'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'
function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='flex justify-center text-7xl font-bold'>GYM Packages</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>

    </>
  )
}

export default App
