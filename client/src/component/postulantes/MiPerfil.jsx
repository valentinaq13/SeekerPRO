import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProfile } from "../../redux/actions/indexP";
//import NavBar from "./NavBar";
import s from "../postulantes/Styles/miperfil.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { getUsers } from "../../redux/actions/indexL";

function MiPerfil() {
  const dispatch = useDispatch();
  const perfil = useSelector((state) => state.rootReducerPostulante.profile);
  //console.log(perfil) --. Buscar la foto con "file\\1645198160606-batiseñal.jpg"

  const { user, isAuthenticated } = useAuth0();

  const email = JSON.stringify(user.email);
  const email2 = email.substring(1, email.length - 1);

  useEffect(() => {
    dispatch(getProfile(email2));

  }, [dispatch]);
  return (
    <div>
      <div className={s.botones}></div>
      <div className={s.info}>
        {perfil.length === 0 ? (
          <div>
            {" "}
            <Link to="/homep/create">
              {" "}
              <button className={s.btn}> Create Profile </button>{" "}
            </Link>{" "}
          </div>
        ) : (
          <div>
            <Link to="/homep/create/modifyprofile">
              {" "}
              <h1 className={s.head}> {perfil[0].name} </h1>{" "}
            </Link>
            <div>
              <h1 className={s.puesto}> Full Stack Developer </h1>
              {isAuthenticated && (
                <div className="flex m-0 justify-center">
                  <img className=" rounded-full" alt="" src={user.picture} />
                </div>
              )}
            </div>

            <h2 className={s.extras}>

              <br /> {perfil[0].extras}
            </h2>
            <h2 className={s.items}>
              {" "}
              {perfil[0].gender}{" "}
            </h2>
            <h2 className={s.items}>{" "}{perfil[0].technologies?.map((t) => t.name).join(" - ")}{" "} </h2>
            <h2 className={s.items} > {perfil[0].locations?.map((loc) => loc.name).join(" - ")}</h2>
            <h2 className={s.items}>
              {" "}
              {perfil[0].seniorities?.map((s) => s.name).join(" - ")}


            </h2>

            <h2 className={s.items}>
              {" "}
              {perfil[0].skills?.map((sk) => sk.name).join(" - ")}{" "}
            </h2>
            <h2 className={s.items}>
              {" "}
              {perfil[0].languages?.map((l) => l.name).join(" -  ")}{" "}
            </h2>
            <h1 className={s.puesto}>Contact me:</h1>
            <h2>
              {" "}
              Telefono <br /> {perfil[0].phone}{" "}
            </h2>
            <h2>
              {" "}
              GitHub <br /> {perfil[0].github}{" "}
            </h2>
            <h2>
              {" "}
              LinkedIn <br /> {perfil[0].linkedIn}{" "}
            </h2>
            <h2>
              Portfolio <br /> {perfil[0].portfolio}
            </h2>
            <h3> Want to be premium? </h3>
            <a href="https://mpago.la/1ooRuhT"> MERCADO PAGO </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default MiPerfil;
