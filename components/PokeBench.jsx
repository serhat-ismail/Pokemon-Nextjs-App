import Image from "next/image";
import PokeballImg from "../assets/pokeball.svg"
import classes from "./PokeBench.module.css"

export default function PokeBench({max}) {
    const numbers = []
    for (let i = 0; i <= max - 1; i++) {
        numbers.push(i)
    }

    return <div className={classes.bench}>
        {numbers.map(number => <Image key={number} src={PokeballImg} alt="Pokeball"/>)}
    </div>;
}