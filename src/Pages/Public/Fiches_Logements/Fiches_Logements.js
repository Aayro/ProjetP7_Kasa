import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import "@/Pages/Public/Fiches_Logements/Fiches_Logements.css"
import LogementService from "@/_Services/Logement.service.js"

import DropDown from "@/Components/DropDown/DropDown";
import Stars from "@/Components/Stars/Stars";
import Profil from "@/Components/Profil/Profil";
import Tags from "@/Components/Tag/Tag";
import Gallery from "@/Components/Gallery/Gallery";

// fonction de la page Logement
const Logement = () => {

    const [logement, setLogement] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        FunctionLogement();
    }, [])


    const FunctionLogement = async () => {
        const OneLogement = await LogementService.GetOneLogement(id);
        if (OneLogement) {
            setLogement(OneLogement);
            setIsLoading(false);
        } else {
            navigate('/404');
        }
    };


    const displayTags = (tags) => {

        if (tags) {
            return (
                <div className="tags_container">
                    {tags.map((tag, index) => {
                        return (
                            <Tags tag={tag} key={index} />
                        )
                    })}
                </div>
            );
        }
    }

    const displayEquipments = (equipments) => {
        if (equipments) {
            return (
                <ul>
                    {equipments.map((equipement, index) => {

                        return (
                            <li key={index}>
                                {equipement}
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }

    if (isLoading) return (<h3>Chargement...</h3>)
    return (

        <section className="logement">
            <Gallery pictures={logement.pictures} />
            <div className="details_container">
                <div className="details_title_container">
                    <article className="title_container">
                        <h2 className="about_title">{logement.title}</h2>
                        <h3 className="about_subtitle">{logement.location}</h3>
                    </article>
                    {displayTags(logement.tags)}
                </div>
                <div className="details_profil_container">
                    <Profil host={logement.host} />
                    <Stars rating={logement.rating} />
                </div>
            </div>
            <div className="accordeon_container">
                <DropDown title={"Description"} description={logement.description}></DropDown>
                <DropDown title={"Équipements"} description={displayEquipments(logement.equipments)}>
                </DropDown>
            </div>

        </section >

    )

};


// export de la page Logement pour l'appeler dans le router 

export default Logement;
