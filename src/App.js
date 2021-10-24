import React, { useEffect, useState } from "react";
import EventCard from "./components/EventCard.component";
import Footer from "./components/Footer.component";
import Header from "./components/Header.component";
import "./index.css";
import { fetchEvents } from "./utils/API/MarvelApi";

const App = () => {
  const [events, setEvents] = useState([]);

  const fetchEventsData = async () => {
    const result = await fetchEvents();
    console.log(result);
    return await result.map(event => {
      return (
        <EventCard
          key={event.id}
          description={event.description}
          title={event.title}
          image={event.thumbnail}
          start={event.start}
          end={event.end}
          previous={event.previous}
          next={event.next}
        />
      );
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const events = await fetchEventsData();
      setEvents(events);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className='max-w-5xl mx-auto flex flex-row flex-wrap justify-center gap-3'>
        {events}
      </div>
      <Footer />
    </div>
  );
};

export default App;