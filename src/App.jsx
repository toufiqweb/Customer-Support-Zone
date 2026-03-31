import './App.css'
import Footer from './componets/homepage/Footer'
import Navbar from './componets/homepage/Navbar'
import TicketStatus from './componets/homepage/TicketStatus'

function App() {

  return (
    <>

      <Navbar/>
      <TicketStatus/>
      
      <h1 className='h-[30vh]'>hello react</h1>
      <Footer/>
    </>
  )
}

export default App
