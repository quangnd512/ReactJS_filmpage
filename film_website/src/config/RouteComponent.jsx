import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import Home from '../components/pages/Home';
import Detail from '../components/pages/Detail';
import Catalog from '../components/pages/Catalog';


const RouteComponent = () => {
    return (
        <Routes>
            <Route path='/:category/search/:keyword'
                element={<Catalog/>}
            />

            <Route path='/:category/:id'
                element={<Detail/>}
            />

            <Route path='/:category'
                element={<Catalog/>}
            />

            <Route path='/'
                exact
                element={<Home/>}
            />
        </Routes>
    );
}

export default RouteComponent;
