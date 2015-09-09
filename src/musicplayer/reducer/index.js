import {combineReducers} from "redux";
import isplay from "./isplay";
import currentSong from './currentSong';
import musiclist  from "./musiclist";
export default combineReducers({
	isplay,
	currentSong,
	musiclist
});
