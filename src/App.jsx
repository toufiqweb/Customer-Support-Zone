import './App.css'
import CustomerTicketsSection from './componets/homepage/CustomerTicketsSection/CustomerTicketsSection'
import Footer from './componets/homepage/Footer'
import Navbar from './componets/homepage/Navbar'
import TicketStatus from './componets/homepage/TicketStatus'

function App() {

  return (
    <>

      <Navbar/>
      <TicketStatus/>
      
      <CustomerTicketsSection/>
      <Footer/>
    </>
  )
}

export default App
