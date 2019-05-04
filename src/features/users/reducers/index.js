import {likedTracks} from "./likedTracks";
import {tracks} from "./tracks";
import {user} from "./user";
import {combineReducers} from "redux";

export const userReducer = combineReducers({likedTracks, tracks, user});