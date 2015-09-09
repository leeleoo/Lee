import MusicList from "../data";
export function changeVOL(VOL) {
    return {
        type: "onChangeVOL",
        VOL: VOL
    }
}
export function changeSong(index) {
    return {
        type: "CHANGESONG",
        currentSong: MusicList[index]
    }
}
export function play() {
    return {
        type: "PLAY"
    }
}
export function pause() {
    return {
        type: "PAUSE"
    }
}
export function updateProgress(Progress) {
    return {
        type: "updateProgress",
        Progress: Progress
    }
}
export function setDuration(duration) {

    return {
        type: "SETDURATION",
        duration: duration
    }
}
