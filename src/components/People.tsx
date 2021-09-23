import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";


const fetchPeople = async () => {
    const res = await fetch('http://swapi.dev/api/people/')
    return res.json();
}

const People = () => {
    const {data, status} = useQuery('people', fetchPeople)
    return(
        <>
        <>People</>       
        {status === "loading" && (
            <div>Loading data...</div>
        )}
        {status === "error" && (
            <div>Error fetching data</div>
        )}
         {status === "success" && (
           <div>
               {data.results.map((person: any) => <Person key={person.name} person={person}></Person>)}
           </div>
        )}
        </>

    )
}

export default People
