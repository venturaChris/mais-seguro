import { Routes, Route, Navigate } from 'react-router-dom';
import Portable from "../shared/components/Portable/Portable";
import Residence from "../shared/components/Residence/Residence";
import Travel from "../shared/components/Travel/Travel";


export const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/login' element={<a href='/portable'>Entre!</a>}></Route>
            <Route path='/portable'element={<Portable/>}></Route>
            <Route path='/residence'element={<Residence/>}></Route>
            <Route path='/travel'element={<Travel/>}></Route>
            <Route path='*' element={<Navigate to={"/login"}/>}></Route>
        </Routes>
    );
};