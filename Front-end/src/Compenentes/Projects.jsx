import React from "react";
import one from "../public/gestion de recour.jpg"
import two from "../public/hotell.jpg"
import three from "../public/380512810-ca97d344-3834-4875-bb4c-c994ae08cdc6.png"
import { Navbarepricipale } from "./Navbarepricipale";
export const Projects = () => {
  return (
    <div >
      <Navbarepricipale />
      <h1 data-aos="flip-left" data-aos-duration="1000" data-aos-delay="200" className="titreprojects">My Projects</h1>
      <div data-aos="flip-right" data-aos-duration="1000" data-aos-delay="900" className="Projects ">
        <div className="carde" >
          <img
            className="gestionrecoure"
            src={one}
          />
          <p className="colorp">
            This website handles objections to points in students’ models. The
            student enters his name and the model name, and then the director
            handles this objection.
          </p>
          <a href="https://github.com/yasserderbale/gestion-des-recoures.git">
            <button className="btnproject">LinkCode</button>
          </a>
        </div>
        <div className="carde">
          <img className="gestionrecoure" src={two} />
          <p className="colorp">
            This website checks the hotel reservations of the customers who book
            through this website where they choose the time, room and time
            available.time and number of people.
          </p>
          <a href="https://github.com/yasserderbale/reservation-hotell.git">
            <button className="btnproject">LinkCode</button>
          </a>
        </div>
        <div className="carde">
          <img
            className="gestionrecoure"
            src={three}
          />
          <p className="colorp">
            This website uses an internet-connected API and is built with REdux,
            where it displays real movies from the API, where the client enters
            the name of the movie to watch it.
          </p>
          <a
            target="_blanck"
            href="https://github.com/yasserderbale/Mouvie-Db-onligne.git"
          >
            <button className="btnproject">LinkCode</button>
          </a>
        </div>
      </div>
    </div>
  );
};
