import BulbasaurImg from "@/assets/bulbasaur.svg"
import CharmanderImg from "@/assets/charmander.svg"
import MeowthImg from "@/assets/meowth.svg"
import PikachuImg from "@/assets/pikachu.svg"
import SquirtleImg from "@/assets/squirtle.svg"

export function getImageByName(name) {
    switch (name) {
        case "Bulbasaur": return BulbasaurImg;
        case "Charmander": return CharmanderImg;
        case "Meowth": return MeowthImg;
        case "Pikachu": return PikachuImg;
        case "Squirtle": return SquirtleImg;
    
        default:
            throw Error(`Pokemon image for ${name} does not exist.`)
    }
}