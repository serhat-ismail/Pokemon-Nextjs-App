"use client"
import Image from "next/image";
import HealthBar from "./HealthBar";
import Attacks from "./Attacks";
import { getImageByName } from "@/utils/imageProvider";

export default function Pokemon({trainerId, activePokemon}) {
    const image = getImageByName(activePokemon.pokemon.name)

    return <div>
        <HealthBar currentHp={activePokemon.currentHp} maxHp={activePokemon.pokemon.maxHp} />
        <Image src={image} alt="test" />
        <Attacks trainerId={trainerId} pokemonName={activePokemon.pokemon.name}/>
    </div>;
}
