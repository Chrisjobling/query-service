import React, {useState}from "react";
import { useQuery } from "react-query";
import Person from "./Person";


const fetchPeople = async (page) => {
    const res = await fetch(`http://swapi.dev/api/people?page=${page}`)
    return res.json();
}

const People = (): JSX.Element => {
    const [page, setPage] = useState(1)
    const { isLoading,
        isError,
        isSuccess,
        data
    } = useQuery(['people',page],() => fetchPeople(page));
    return(
        <>
        <>People</>       
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
               {data.results.map((person: any) => <Person key={person.name} person={person}></Person>)}
           </div>
        )}
        </>

    )
}

export default People
