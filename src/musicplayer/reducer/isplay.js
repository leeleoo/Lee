export default function(state = false, action) {
    switch (action.type) {
        case 'PLAY':
            return true;
        case 'PAUSE':
            return false;
        default:
            return state;
    }
}
