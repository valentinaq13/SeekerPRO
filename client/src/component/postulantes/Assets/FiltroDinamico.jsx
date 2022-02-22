import {
  filterCombinated,
  getLanguage,
  getSeniority,
  //getSkills,
  getTechnology,
} from "../../../redux/actions/indexP";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { useEffect } from "react";
//import s from "../Styles/home.module.css";

export default function FiltroDinamico() {
  const dispatch = useDispatch();
  const tecno = useSelector((state) => state.rootReducerPostulante.technology);
  const lenguaje = useSelector((state) => state.rootReducerPostulante.language);
  const experiencia = useSelector(
    (state) => state.rootReducerPostulante.seniority
  );

  let [input, setInput] = useState({
    technology: [],
    language: [],
    seniority: [],
    skill: [],
  });

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(filterCombinated(input));
    setInput({
      technology: [],
      language: [],
      seniority: [],
      skill: [],
    });
  }
  //console.log(input);
  function handleSelectTechnology(e) {
    if (input.technology.includes(e.target.value)) {
      alert("Already in the list");
    } else {
      setInput({
        ...input,
        technology: [...input.technology, e.target.value],
      });
    }
  }

  function handleLanguage(e) {
    if (input.language.includes(e.target.value)) {
      alert("Already in the list");
    } else {
      setInput({
        ...input,
        language: [...input.language, e.target.value],
      });
    }
  }

  function handleSkill(e) {
    if (input.skill.includes(e.target.value)) {
      alert("Already in the list");
    } else {
      setInput({
        ...input,
        skill: [...input.skill, e.target.value],
      });
    }
  }

  function handleSelectSeniority(e) {
    if (input.seniority.includes(e.target.value)) {
      alert("Already in the list");
    } else {
      setInput({
        ...input,
        seniority: [...input.seniority, e.target.value],
      });
    }
  }
  // function handleChange(e) {
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value,
  //   });
  // }
  const handleDelete = (e) => {
    setInput({
      ...input,
      technology: input.technology.filter((el) => el !== e),
    });
  };

  const handleDeleteLanguage = (e) => {
    setInput({
      ...input,
      language: input.language.filter((el) => el !== e),
    });
  };

  // const handleDeleteSkills = (e) => {
  //   setInput({
  //     ...input,
  //     skill: input.skill.filter((el) => el !== e),
  //   });
  // };

  const handleDeleteSeniority = (e) => {
    setInput({
      ...input,
      seniority: input.seniority.filter((el) => el !== e),
    });
  };

  useEffect(() => {
    dispatch(getSeniority());
    dispatch(getLanguage());
    dispatch(getTechnology());
  }, []);

  return (
    <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col md:flex-row my-2">
        <div className=" flex flex-col mx-1">
          <label className="text-white text-center font-bold">
            {" "}
            Technology
          </label>
          <select
            className="rounded-xl text-black"
            placeholder="technology"
            value={input.technology}
            name="technology"
            onChange={(e) => handleSelectTechnology(e)}
          >
            <option className="text-black" selected="false" disabled>
              Selection Tecnology
            </option>
            {tecno?.map((el) => (
              <option className="text-black" value={el.name} key={el.id}>
                {el.name}
              </option>
            ))}
          </select>
          {input.technology.map((el, i) => (
            <li key={i}>
              {el}
              <button type="reset" onClick={() => handleDelete(el)}>
                X
              </button>
            </li>
          ))}
        </div>
        <div className=" flex flex-col mx-1">
          <label className="text-white text-center font-bold mx-1">
            {" "}
            Languages
          </label>
          <select
            className="rounded-xl text-black"
            placeholder="languages"
            value={input.language}
            name="language"
            onChange={(e) => handleLanguage(e)}
          >
            <option className="text-black" selected="false" disabled>
              Selecction Languages
            </option>
            {lenguaje?.map((el) => (
              <option className="text-black" value={el.name} key={el.id}>
                {el.name}
              </option>
            ))}
          </select>
          <div>
            {input.language.map((el, i) => (
              <li key={i}>
                {el}
                <button type="reset" onClick={() => handleDeleteLanguage(el)}>
                  X
                </button>
              </li>
            ))}
          </div>
        </div>
        <div className=" flex flex-col mx-1">
          <label className="text-white  text-center font-bold">Seniority</label>
          <div>
            <select
              className="rounded-xl text-black"
              placeholder="Seniority"
              value={input.seniority}
              name="seniority"
              onChange={(e) => handleSelectSeniority(e)}
            >
              <option className="text-black" selected="false" disabled>
                Selecction Siniority
              </option>
              {experiencia?.map((el) => (
                <option className="text-black" value={el.name} key={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            {input.seniority?.map((el, i) => (
              <li key={i}>
                {el}
                <button type="reset" onClick={() => handleDeleteSeniority(el)}>
                  X
                </button>
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="flex m-0 justify-center my-2">
        <button
          className="h-fit  mx-4 px-2 shadow-lg mb-5 shadow-black rounded-2xl text-white bg-verdeOscuro hover:bg-verdeClaro"
          type="submit"
        >
          filter
        </button>
      </div>
    </form>
  );
}
