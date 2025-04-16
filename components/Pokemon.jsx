import Image from "next/image";
import bulbasaurImg from "../assets/bulbasaur.svg"
import HealthBar from "./HealthBar";
import Attacks from "./Attacks";


export default function Pokemon() {
    return <div>
        <HealthBar />
        <Image src={bulbasaurImg} alt="test" />
        <Attacks />
    </div>;
}
