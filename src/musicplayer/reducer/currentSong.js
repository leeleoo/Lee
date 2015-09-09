let initialSong = {
    "song": "Heaven Please",
    "album": "《My Beautiful Sinking Ship》",
    "songUrl": "http://yinyueshiting.baidu.com/data2/music/37443010/1374403911160032.m4a?xcode=9fb8e27ce1e80c385990d376263109e0"
}
export default function(state = initialSong, action) {
    switch (action.type) {
        case 'NEXTSONG':
            return action.song
        case 'LASTSONG':
            return action.song
        case 'PLAYTHIS':
            return action.currentSong
        default:
            return state
    }
}
