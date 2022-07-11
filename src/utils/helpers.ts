import {WorkerType} from './types';
import {DraggableLocation} from "react-beautiful-dnd";
import {SITES} from "./constants";

export const reorder = (
  workers: WorkerType[],
  source: DraggableLocation,
  destination: DraggableLocation,
  anotherSite: boolean,
  totalCount: number
) => {
  const result = Array.from(workers);
  const [removed] = result.splice(source.index, 1);
  if (anotherSite) {
    removed.count++;
    totalCount++;
    removed.site = destination.droppableId;
    if(destination.droppableId === SITES.SITE_2.id) {
      result.splice(destination.index - 1, 0, removed);
    } else {
      result.splice(destination.index, 0, removed);
    }
  } else {
    result.splice(destination.index, 0, removed);
  }

  return {
    result,
    totalCount
  };
};
