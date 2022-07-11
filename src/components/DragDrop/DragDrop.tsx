import React from 'react';
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";
import {Col} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {SITES_ARRAY} from "../../utils/constants";
import {RootState} from "../../store/store";
import {reorder} from "../../utils/helpers";
import {setTotalCount, setWorkers} from "../../store/actionCreators";
import {Site} from "../Universal/Site/Site";
import {Card} from "../Universal/Card/Card";
import './style.css';


export const DragDrop: React.FC = () => {
  const { workers, totalCount } = useSelector((state: RootState) => state.main);
  const dispatch = useDispatch();
  const onDragEnd = ({destination, source}: DropResult) => {
    if (!destination) return;
    const anotherSite = !!(destination?.droppableId && destination.droppableId !== source.droppableId);
    let { result: newItems, totalCount: newTotalCount } = reorder(workers, source, destination, anotherSite, totalCount);
    dispatch(setWorkers(newItems))
    dispatch(setTotalCount(newTotalCount))
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        {
          SITES_ARRAY.map((site, index) => {
            return (
              <Col md={5} key={index}>
                <Droppable droppableId={site.id}>
                  {provided => (
                    <Site site={site} key={site.id} dragDropCard={true} provided={provided}>
                      {workers.map((worker, index) => (
                        worker.site === site.id &&
                        <Draggable draggableId={worker.id} key={worker.id} index={index} isDragDisabled={worker.count === 10}>
                          {(provided, snapshot) => (
                            <Card worker={worker}
                                  key={index}
                                  dragDropCard={true}
                                  provided={provided}
                                  snapshot={snapshot}
                            />
                          )}
                        </Draggable>
                      ))}
                    </Site>
                  )}
                </Droppable>
              </Col>
            )
          })
        }
      </DragDropContext>
    </>
  )
}
