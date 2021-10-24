import React from 'react';

const Card = ({ title, body, header, footer, image }) => {
  return (
    <div className="flex flex-col border-2 gap-3 rounded max-w-xs">
      <div className="card__image rounded">
        <img src={image} alt={title} />
      </div>
      <div className="card__content p-3 pt-0 flex flex-col h-full">
        {header ? <div className="card__header border-b pb-3 mb-3">{header}</div> : null}
        <div className="card__body justify-self-start flex-auto">
          {body}
        </div>
        {footer ? <div className="card__footer border-t pt-3 mt-3 flex-shrink-0">{footer}</div> : null}
      </div>
    </div >

  );
}

export default Card;