import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// 
import MainlayOut from './components/Todo/MainlayOut';

function App() {
    
    return (
        <Routes>
            <Route path='/' element={<MainlayOut/>}>
            </Route>
        </Routes>
    );
}
export default App;