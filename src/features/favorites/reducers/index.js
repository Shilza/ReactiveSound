import {tracks} from "./tracks";
import {player} from "./player";
import {combineReducers} from "redux";

export const favoriteReducer = combineReducers({tracks, player});