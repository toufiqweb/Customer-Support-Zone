import { useState } from "react";
import "./App.css";
import CustomerTicketsSection from "./componets/homepage/CustomerTicketsSection/CustomerTicketsSection";
import Footer from "./componets/homepage/Footer";
import Navbar from "./componets/homepage/Navbar";
import TicketStatus from "./componets/homepage/TicketStatus";

const customerTicketDataFetch = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const promiseCustomerTicket = customerTicketDataFetch();

function App() {
  const [tickets, setTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  // console.log(tickets);
  console.log(resolvedTickets);

  return (
    <>
      <Navbar />
      <TicketStatus tickets={tickets} resolvedTickets={resolvedTickets}/>
      <CustomerTicketsSection
        promiseCustomerTicket={promiseCustomerTicket}
        tickets={tickets}
        setTickets={setTickets}
        resolvedTickets={resolvedTickets}
        setResolvedTickets={setResolvedTickets}
      />
      <Footer />
    </>
  );
}

export default App;
