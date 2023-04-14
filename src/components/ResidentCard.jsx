import React from "react";
import useFetch from "../hooks/useFetch";

const ResidentCard = ({ url }) => {
  
    const resident = useFetch(url);
    
    const circle = "blink_me" +resident?.status+ " circle " + resident?.status;

  return (
  <article className="resident__card">
    <header className="resident__header">
        <img className="resident__img" src={resident?.image} alt="" />
        <div className="status">
            <div className={circle}></div>
            <span>{resident?.status}</span>
        </div>
    </header>
    <section className="resident__section">
        <h3>{resident?.name}</h3>
        <hr className="new"/>
        <ul className="resident_info">
            <li><span>Specie </span>{resident?.species}</li>
            <li><span>Origin </span>{resident?.origin.name}</li>
            <li><span>Episodes where appear </span>{resident?.episode.length}</li>
        </ul>
    </section>
  </article>
  );
};

export default ResidentCard;
