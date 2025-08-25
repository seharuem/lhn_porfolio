import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Diary from './pages/Diary';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/diary' element={<Diary />} />
		</Routes>
	);
}

export default App;
