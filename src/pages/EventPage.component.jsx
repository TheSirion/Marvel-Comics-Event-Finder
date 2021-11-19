import React, {useState, useEffect} from "react";
import {fetchEvent} from "../utils/API/MarvelApi";

const EventPage = ({id}) => {
  const [event, setEvent] = useState({});

  useEffect(() => {
    const eventData = async () => fetchEvent(id)();
    console.log(eventData);
    setEvent(eventData.results)
  }, [])


  return (
  <div>
    <h1>{event.title}</h1>
  </div>
  )
}

export default EventPage;