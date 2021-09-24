import React, {useState} from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";


export interface PlanetDetails {
    climate:string,
    created:Date,
    diameter:string,
    edited:Date,
    films:string[],
    gravity:string,
    name:string,
    orbital_period:string,
    population:string,
    residents:string[],
    rotation_period: string,
    surface_water: string,
    terrain: string,
    url: string
}