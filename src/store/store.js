import { reducerfn } from "./reducer";
import { applyMiddleware, createStore } from "redux";
import { middleware } from "./middleware";
export const store=createStore(reducerfn,applyMiddleware(middleware))