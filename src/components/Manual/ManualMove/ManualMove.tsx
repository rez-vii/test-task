import React from 'react';
import {Button, ButtonGroup, Col} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {WorkerType} from "../../../utils/types";
import {SITES} from "../../../utils/constants";
import {RootState} from "../../../store/store";
import {setTotalCount, setWorkers} from "../../../store/actionCreators";
import './style.css';

export const ManualMove: React.FC = () => {
  const dispatch = useDispatch();
  const {selectedWorker, workers, totalCount} = useSelector((state: RootState) => state.main);

  const moveAction = (to: string) => {
    let newItems: WorkerType[] = [...workers];
    let newTotalCount: number = totalCount;
    newItems = newItems.map(worker => {
      if (selectedWorker && worker.id === selectedWorker.id) {
        worker.site = to;
        worker.count++;
      }
      return worker
    })
    newTotalCount++;
    dispatch(setWorkers(newItems))
    dispatch(setTotalCount(newTotalCount));

  }

  return (
    <>
      <Col md={2}>
        <ButtonGroup className="manualMoveBtn">
          <Button
            color="primary"
            disabled={
              !selectedWorker ||
              (selectedWorker && selectedWorker.site === SITES.SITE_1.id) ||
              (selectedWorker && selectedWorker.count === 10)
            }
            onClick={() => moveAction(SITES.SITE_1.id)}
          >
            {`<`}
          </Button>
          <Button
            color="primary"
            disabled={
              !selectedWorker ||
              (selectedWorker && selectedWorker.site === SITES.SITE_2.id) ||
              (selectedWorker && selectedWorker.count === 10)
            }
            onClick={() => moveAction(SITES.SITE_2.id)}
          >
            {`>`}
          </Button>
        </ButtonGroup>
      </Col>
    </>

  )
}
