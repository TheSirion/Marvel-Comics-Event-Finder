import React from 'react';

const Card = ({ title, body, header, footer, image }) => {
  return (
    <div className="flex flex-col border-2 gap-3 rounded max-w-xs h-full">
      <div className="rounded">
        <img src={image} alt={title} />
      </div>
      <div className="p-3 pt-0 flex flex-col h-full">
        {header ? <div className="border-b pb-3 mb-3">{header}</div> : null}
        <div className="justify-self-start flex-auto">
          {body}
        </div>
        {footer ? <div className="border-t pt-3 mt-3 flex-shrink-0">{footer}</div> : null}
      </div>
    </div >

  );
}

export default Card;