import React from 'react';
import { formatDate } from '../utils/formatDate';
import Card from "./Card.component";

const EventCard = ({ title, description, image, start, end, next, previous }) => {
  const buildHeader = () => {
    return (
      <h1 className="text-xl">{title}</h1>
    )
  }

  const buildBody = () => {
    return (
      <div>
        <p>{description}</p>
        <div className="text-sm">
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

  return <Card
    className="cursor-pointer hover:translate-x-1"
    title={title}
    header={buildHeader()}
    body={buildBody()}
    image={`${image.path}.${image.extension}`}
    footer={buildFooter()}
  />
}

export default EventCard;