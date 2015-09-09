import musiclist  from "../data";
export function play(audio) {
  return {
  	type:'PLAY',
  	audio:audio
  }
}
export function pause(audio) {

  return {
  	type:'PAUSE',
  	audio:audio
  }
}

export function playDefault(){
	return {
		type:"default"
	}
}

export function playthis(index) {
  return {
  	type:"PLAYTHIS",
  	currentSong:musiclist[index]
  }
}
export function setduration(duration){
  return {
    type:"SETDURATION",
    duration:duration
  }
}
