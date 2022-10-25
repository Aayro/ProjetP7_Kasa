// import des modules necessaires
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Apropos, Logement, NotFound404 } from '@/Pages/Public/index';

import Layout from '@/Layouts/Layout';

// fonction de routage des pages publique
const PublicRouter = () => {
    return (

        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/a-propos" element={<Apropos />} />
                <Route path="*" element={<NotFound404 />} />
            </Route>

        </Routes>

    );
};
// export du sous routage pour le router principal
export default PublicRouter;