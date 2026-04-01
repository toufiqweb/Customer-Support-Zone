import './App.css'
import CustomerTicketsSection from './componets/homepage/CustomerTicketsSection/CustomerTicketsSection'
import Footer from './componets/homepage/Footer'
import Navbar from './componets/homepage/Navbar'
import TicketStatus from './componets/homepage/TicketStatus'



const customerTicketDataFetch = async ()=> {

  const res = await fetch("/data.json")
  return res.json()
}

const promiseCustomerTicket = customerTicketDataFetch()


function App() {

  return (
    <>

      <Navbar/>
      <TicketStatus/>
      <CustomerTicketsSection promiseCustomerTicket={promiseCustomerTicket}/>
      <Footer/>
    </>
  )
}

export default App
