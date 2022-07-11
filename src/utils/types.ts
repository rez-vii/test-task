export type WorkerType = {
  id: string,
  name: string,
  surname: string,
  matriculationNumber: number,
  site: string,
  count: number,
}

export type SiteType = {
    title: string,
    id: string
}

export type MainState = {
  workers: WorkerType[],
  selectedWorker: WorkerType | null
  totalCount: number
}

export type MainAction = {
  type: string
  payload?: any
}
