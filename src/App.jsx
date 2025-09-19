import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Diary from './pages/Diary';
import Quest from './pages/Quest';
import Schedule from './pages/Schedule';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/diary' element={<Diary />} />
			<Route path='/quest' element={<Quest />} />
			<Route path='/schedule' element={<Schedule />} />
		</Routes>
	);
}

export default App;
