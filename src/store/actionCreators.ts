import * as actionTypes from "./actionTypes"
import {WorkerType} from '../utils/types'

export function setWorkers(workers: WorkerType[]) {
  return {
    type: actionTypes.SET_WORKERS,
    payload: workers,
  }
}

export function setSelectedWorker(selectedWorker: WorkerType | null) {
  return {
    type: actionTypes.SET_SELECTED_WORKER,
    payload: selectedWorker,
  }
}
export function setTotalCount(totalCount: number) {
  return {
    type: actionTypes.SET_TOTAL_COUNT,
    payload: totalCount,
  }
}
