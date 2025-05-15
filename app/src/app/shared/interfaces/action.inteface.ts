import { Action } from "@ngrx/store";

export interface IAction <T extends any> extends Action {
  payload: T
}
