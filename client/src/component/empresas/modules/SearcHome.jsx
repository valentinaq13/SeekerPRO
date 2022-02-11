import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getVacancy,
    getTech,
    getSeniority,
    getLanguage,
    filterVacancies
} from "../../../redux/actions/index";
import { GrFormClose } from "react-icons/gr";

function SearcHome() {
    const dispatch = useDispatch();
    const technology = useSelector((state) => state.rootReducer.technology);
    const seniority = useSelector((state) => state.rootReducer.seniority);
    const language = useSelector((state) => state.rootReducer.language);
    const filtro = useSelector((state)=> state.rootReducer.filteredVacancy)

    const [input, setInput] = useState({
        technology: [],
        seniority: [],
        language: []
    })
    useEffect(() => {
       
        dispatch(getTech());
        dispatch(getSeniority());
        dispatch(getLanguage());
    }, [dispatch]);

    function handleSelectTechno(e) {
        console.log(input.technology);
        if (input.technology.includes(e.target.value)) {
            alert("Already in the list");
        } else {
            setInput({
                ...input,
                technology: [...input.technology, e.target.value],
            });
        }
    }
    function handleSelectLenguge(e) {
        if (input.language.includes(e.target.value)) {
            alert("Already in the list");
        } else {
            setInput({
                ...input,
                language: [...input.language, e.target.value],
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
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(filterVacancies(input));
        setInput({
            technology: [],
            language: [],
            seniority: [],
        }, console.log(input));
    }
    ///////////delete///////
    const handleDeleteSeniority = (e) => {
        setInput({
            ...input,
            seniority: input.seniority.filter((el) => el !== e),
        });
    };

    const handleDeleteLanguage = (e) => {
        setInput({
            ...input,
            language: input.language.filter((el) => el !== e),
        });
    };

    const handleDeleteTechnology = (e) => {
        setInput({
            ...input,
            technology: input.technology.filter((el) => el !== e),
        });
    };
    return (
        <div>
            <form className=" flex flex-row" onSubmit={(e) => handleSubmit(e)}>
                <div className="bg-verdeOscuro p-2">
                    <div className="bg-verdeMedio rounded-2xl p-2 w-full h-full">
                        <h1 className=" font-bold  text-center mb-3">Filtros:</h1>
                        <h1 className=" font-bold  text-center mb-3">(in work)</h1>
                        <div>
                            <div className="w-full flex flex-col m-0 justify-center">
                                <label> Buscar:</label>
                                <input
                                    className="w-full xl:w-60 m-0 border-verdeMuyClaro rounded-2xl bg-verdeClaro"
                                    type="text"
                                />
                            </div>
                            <div className="w-full my-3 flex flex-col m-0 justify-center">
                                <label> Tecnologias:</label>
                                <select
                                    className="w-full xl:w-52 rounded-2xl bg-verdeClaro"
                                    name="technology"
                                    onChange={(e) => handleSelectTechno(e)}
                                >
                                    <option
                                        className="rounded-2xl bg-verdeClaro"
                                        selected="false"
                                    >
                                    </option>
                                    {technology.map((e) => (
                                        <option className="rounded-2xl bg-verdeClaro">{e.name}</option>
                                    ))}
                                </select>
                                <div>
                                    {input.technology.map((el, i) => (
                                        <li
                                            className="flex flex-row w-fit list-none m-1 rounded-2xl bg-verdeHover"
                                            key={i}
                                        >
                                            {el}
                                            <button
                                                className="rounded-2xl hover:bg-verdeClaro"
                                                type="reset"
                                                onClick={() => handleDeleteTechnology(el)}
                                            >
                                                <GrFormClose />
                                            </button>
                                        </li>
                                    ))}
                                </div>
                                {/* <ul><li>{input.technology.map(el => el + " ,")}</li></ul> */}
                            </div>
                            <div className="w-full my-3 flex flex-col m-0 justify-center">
                                <label> Lenguaje:</label>
                                <select
                                    className="w-full xl:w-52 rounded-2xl bg-verdeClaro"
                                    name="language"
                                    onChange={(e) => handleSelectLenguge(e)}
                                >
                                    <option selected="false">-</option>
                                    {language.map((e) => (
                                        <option value={e.name}>{e.name}</option>
                                    ))}
                                </select>
                                <div>
                                    {input.language.map((el, i) => (
                                        <li
                                            className="flex flex-row w-fit list-none m-1 rounded-2xl bg-verdeHover"
                                            key={i}
                                        >
                                            {el}
                                            <button
                                                className=" rounded-2xl hover:bg-verdeClaro"
                                                type="reset"
                                                onClick={() => handleDeleteLanguage(el)}
                                            >
                                                <GrFormClose />
                                            </button>
                                        </li>
                                    ))}
                                </div>
                                {/*  <ul><li>{input.language.map(el => el + " ,")}</li></ul> */}
                            </div>

                            <div className="w-full my-3 flex flex-col m-0 justify-center">
                                <label> Seniority:</label>
                                <select className="w-full xl:w-52 rounded-2xl bg-verdeClaro"
                                    name="seniority"
                                    onChange={(e) => handleSelectSeniority(e)}>
                                    <option selected="false">-</option>
                                    {seniority.map((e) => (
                                        <option className="rounded-2xl bg-verdeClaro" value={e.name}>
                                            {e.name}
                                        </option>
                                    ))}
                                </select>
                                <div>
                                    {input.seniority.map((el, i) => (
                                        <li
                                            className="flex flex-row w-fit  list-none m-1 rounded-2xl bg-verdeHover"
                                            key={i}
                                        >
                                            {el}
                                            <button
                                                className=" rounded-2xl hover:bg-verdeClaro"
                                                type="reset"
                                                onClick={() => handleDeleteSeniority(el)}
                                            >
                                                <GrFormClose />
                                            </button>
                                        </li>
                                    ))}
                                </div>
                                {/*  <ul><li>{input.seniority.map(el => el + " ,")}</li></ul> */}
                            </div>
                            <div className="w-full  my-3 flex m-0 justify-center">
                                <button className=" w-32 shadow-lg shadow-black rounded-2xl text-verdeHover bg-verdeOscuro hover:bg-verdeClaro">
                                    Buscar
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearcHome