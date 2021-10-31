import React from 'react';
import { formatDate } from '../utils/formatDate';
import Card from "./Card.component";

const EventCard = ({ title, description, image, start, end, next, previous }) => {
  const buildHeader = () => {
    return (
      <h1 className="text-xl font-semibold">{title}</h1>
    )
  }

  const buildBody = () => {
    return (
      <div className="flex flex-col h-full">
        <p className="flex-grow flex-shrink-0">{description}</p>
        <div className="text-sm flex-grow-0 flex-shrink">
          {previous ? <p><strong>Previous:</strong> {previous.name}</p> : null}
          {next ? <p><strong>Next:</strong> {next.name}</p> : null}
        </div>
      </div>
    )
  }

  const buildFooter = () => {
    return (
      <p className="text-right">
        {formatDate(new Date(start), "MM/YYYY")} - {formatDate(new Date(end), "MM/YYYY")}
      </p>
    )
  }

  return (
    <div className='rounded hover:bg-red-500 hover:text-white cursor-pointer'>
      <Card
        title={title}
        header={buildHeader()}
        body={buildBody()}
        image={`${image.path}.${image.extension}`}
        footer={buildFooter()}
      />
    </div>
  )
}

export default EventCard;