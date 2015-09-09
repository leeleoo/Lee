import musiclist  from "../data";
export default function name(state = musiclist,action) {
  switch(action.type){
  	case "init":
  		console.info(state);
  	default:
  	return state;
  }
}
