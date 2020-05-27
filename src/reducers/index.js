import { combineReducers } from 'redux'

const songsReducer = () => {
	return [
		{ title: 'OK', duration: '4:05' },
		{ title: 'OK 1', duration: '1:35' },
		{ title: 'OK 2', duration: '2:15' },
	];
}

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
}

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});