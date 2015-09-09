const PLAYSTATE = {
    isPlay: false,
    VOL: 50,
    currentSong: {
        "id": 0,
        "song": "A Step You Can’t Take Back",
        "album": "《Begin Again》",
        "songUrl": "./assets/music/A Step You Can’t Take Back.mp3"
    },
    currentTime: -100,
    durationTime: "0:00"
}
export default function(state = PLAYSTATE, action) {
    switch (action.type) {
        case "PLAY":
            let PLAY = state;
            PLAY.isPlay = true;
            return {...PLAY
            };
            break;
        case "PAUSE":
            let PAUSE = state;
            PAUSE.isPlay = false;
            return {...PAUSE
            };
            break;
        case "onChangeVOL":
            let onChangeVOL = state;
            onChangeVOL.VOL = action.VOL;
            return {...onChangeVOL
            };
        case "CHANGESONG":
            let CHANGESONG = state;
            CHANGESONG.currentSong = action.currentSong;
            return {...CHANGESONG
            }
        case "updateProgress":
            return Object.assign({}, {...state
            }, {
                currentTime: action.Progress
            });
        case "SETDURATION":
            return Object.assign({},{...state},{
                durationTime:action.duration
            });
        default:
            return state
    }
}
