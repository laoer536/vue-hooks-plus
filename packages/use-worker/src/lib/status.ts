/* eslint-disable no-unused-vars */
export enum WORKER_STATUS {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  RUNNING = 'RUNNING',
  ERROR = 'ERROR',
  TIMEOUT_EXPIRED = 'TIMEOUT_EXPIRED',
  KILLED = 'KILLED',
}

export default WORKER_STATUS
