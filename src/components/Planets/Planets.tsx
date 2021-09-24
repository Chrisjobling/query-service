import React, {useState} from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";
import { PlanetDetails } from "./PlanetDetails";

const fetchPlanets = async (page) => {
    const res = await fetch(`http://swapi.dev/api/planets?page=${page}`)
    return res.json();
}

const Planets = (): JSX.Element => {
    const [page, setPage] = useState(1)
    const { isLoading,
        isError,
        isSuccess,
        data
    } = useQuery(['planets',page],() => fetchPlanets(page));
    
    return(
        <>
            <>Planets</>       

            <button 
            onClick={()=> setPage((oldValue : number)=> Math.max(oldValue -1, 1))} 
            disabled={page ===1}>Previous Page</button>
            <span> {page} </span>
            <button disabled={!data || !data.next} onClick={()=> setPage((oldValue : number) => (!data || !data.next ? oldValue : oldValue + 1))}>Next Page</button>
            {isLoading && (
                <div>Loading data...</div>
            )}
            {isError && (
                <div>Error fetching data</div>
            )}
            {isSuccess && (
            <div>
                {data.results.map((planet: PlanetDetails) => <Planet key={planet.name} planet={planet}></Planet>)}
            </div>
            )}
        </>

    )
}

export default Planets