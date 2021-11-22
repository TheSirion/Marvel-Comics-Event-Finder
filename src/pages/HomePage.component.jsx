import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard.component';
import Footer from "../components/Footer.component";
import Header from "../components/Header.component";
import { fetchEvents } from "../utils/API/MarvelApi";

const HomePage = () => {
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
      <main className='max-w-5xl mx-auto'>
        <div className='flex flex-row flex-wrap justify-center gap-3'>
          {events}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;