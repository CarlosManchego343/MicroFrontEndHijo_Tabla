import React, { useEffect, useState } from "react";
import "./tabla.css";

export default function Tabla() {

    const [datos, setDatos] = useState([]);

    const API_KEY = "cc93e84753e512008781069269da7463";

    useEffect(() => {
        const rellenarDatos = async () => {
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY + "&language=en-US&page=1&include_adult=false",
                {
                    method: "GET"
                }
            ).then(res => res.json()).then(data => {
                console.log(data.results);
                setDatos(data.results);
            }).catch(error => {
                console.log(error)
            })
        };

        rellenarDatos();
    }
        , [])


    return (
        <>
            <div>
                <table className="table tabla">
                    <thead>
                        <tr>
                            <th scope="col">Titulo</th>
                            <th scope="col">Lenguaje</th>
                            <th scope="col">Fecha de lanzamiento</th>
                            <th scope="col">Promedio de votos</th>
                            <th scope="col">Número de votos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                datos.map((dato, index) => (
                                    <tr key={index}>
                                        <td>{dato.title}</td>
                                        <td>{dato.original_language}</td>
                                        <td>{dato.release_date}</td>
                                        <td>{dato.vote_average}</td>
                                        <td>{dato.vote_count}</td>
                                    </tr>
                                ))
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}