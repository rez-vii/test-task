import React from 'react';
import {DroppableProvided} from "react-beautiful-dnd";
import './style.css';


interface SiteInterface {
  children: React.ReactNode | JSX.Element
  site: {
    title: string,
    id: string
  },
  dragDropCard: boolean,
  provided: DroppableProvided | null,

}


export const Site: React.FC<SiteInterface> = ({ site, dragDropCard, provided, children }:SiteInterface ) => {

  const generateProps = dragDropCard && provided ? {
    ...provided.droppableProps,
  } : {};

  return (
    <>
          <div key={site.id}
               {...generateProps}
               ref={dragDropCard && provided ? provided.innerRef : null}
               className={`site ${dragDropCard ? 'dragDropSite' : 'manualSite'}`}>
            <h3>{site.title}</h3>
            {children}
            {dragDropCard && provided ? provided.placeholder : null}
          </div>
    </>
  )
}
