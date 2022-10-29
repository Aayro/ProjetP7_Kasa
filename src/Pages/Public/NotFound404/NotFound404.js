import React from "react";
import { NavLink } from 'react-router-dom';

import "@/Pages/Public/NotFound404/NotFound404.css";

const Erreur404 = () => {
    return (
        <section className="Erreur404">
            <h1 className="error_404">404</h1>
            <p className="p_404">Oups! La page que vous avez demandez n'existe pas.</p>
            <NavLink to="/home" className="navlink_404">Retourner sur la page d'accueil.</NavLink>
        </section>
    )
}

export default Erreur404;