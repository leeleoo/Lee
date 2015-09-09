import {combineReducers} from "redux";
import player from "./player";
import music_list from "./music_list";
export default combineReducers({
	player,
	music_list
});
