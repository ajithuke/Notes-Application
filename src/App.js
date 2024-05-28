import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import SignupPage from './pages/Signup';
import MyNavbar from './components/MyNavbar';

function App() {

    return (
        <div>
            <MyNavbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
            </Routes>
        </div>
    );
}

export default App;
