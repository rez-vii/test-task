import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DraggableProvided, DraggableStateSnapshot} from "react-beautiful-dnd";
import {WorkerType} from "../../../utils/types";
import {setSelectedWorker} from "../../../store/actionCreators";
import {RootState} from "../../../store/store";
import './style.css';

interface CardInterface {
  worker: WorkerType,
  dragDropCard: boolean,
  provided: DraggableProvided | null,
  snapshot: DraggableStateSnapshot | null,
}

export const Card: React.FC<CardInterface> = ({
                                                worker,
                                                dragDropCard,
                                                provided,
                                                snapshot }: CardInterface) => {
  const dispatch = useDispatch();
  const {name, surname, matriculationNumber, id, count} = worker;
  const {selectedWorker} = useSelector((state: RootState) => state.main);


  const toggleSelection = (worker: WorkerType) => {
    let newWorker: WorkerType | null = worker;
    if (selectedWorker && selectedWorker.id === newWorker.id) {
      newWorker = null;
    }
    dispatch(setSelectedWorker(newWorker));
  };

  const generateClassname = `card 
    ${dragDropCard && snapshot && snapshot.isDragging ? 'cardWithOpacity' : ''}
    ${selectedWorker && selectedWorker.id === id ? 'cardSelected' : ''}
    ${(count === 10) ? 'cardDisabled': ''}`;

  const generateProps = dragDropCard && provided && snapshot ? {
    ...provided.draggableProps,
    ...provided.dragHandleProps
  } : {};

  return (
    <>
          <div
            {...generateProps}
            ref={dragDropCard && provided ? provided.innerRef : null}
            onClick={() => toggleSelection(worker)}
            className={generateClassname}
          >
            <span className="cardTitle">
              {name} {surname}
            </span>
            {
              selectedWorker && selectedWorker.id === id && (
                <span className="cardDescription">
                  <p>
                    Count: {count}
                  </p>
                  <p>
                    ID: {matriculationNumber}
                  </p>
                </span>
              )
            }
          </div>
    </>

  )
}
