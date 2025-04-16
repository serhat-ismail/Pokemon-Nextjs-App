import classes from "./Trainer.module.css"
import PokeBench from "./PokeBench";
import Pokemon from "./Pokemon";

export default function Trainer() {
    return <div className={classes.trainer}>
        <div>
            <p className={classes.trainerName}>Name</p>
            <PokeBench max={6} />
            <p className={classes["center-it"]}>
                <button className={classes.pokeList}>Pokemon-List</button>
            </p>
        </div>

        <Pokemon />
    </div>;
}