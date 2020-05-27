import React from 'react';
import SongList from '../components/SongList'
import SongDetail from './SongDetail'

const App = () => {
	return (
		<>
			<div className="ui container grid">
				<div className="ui row">
					<div className="column five wide">
						<SongList />
					</div>
					<div className="column eight wide">
						<SongDetail />
					</div>
				</div>
			</div>
		</>
	)
}

export default App;
