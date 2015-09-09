const MusicList = [{
    "id": 0,
    "song": "A Step You Can¡¯t Take Back",
    "album": "¡¶Begin Again¡·",
    "songUrl": "./assets/music/A Step You Can¡¯t Take Back.mp3"
}, {
    "id": 1,
    "song": "Like A Fool",
    "album": "¡¶Begin Again¡·",
    "songUrl": "./assets/music/Like A Fool.mp3"
}, {
    "id": 2,
    "song": "Lost Stars",
    "album": "¡¶Begin Again¡·",
    "songUrl": "./assets/music/Lost Stars.mp3"
}];

export default function(state = MusicList,action){
	switch(action.type){
		case "ADD":
			break;
		default:
			return state;
			break;
	}
}
