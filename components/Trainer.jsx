import Image from "next/image";
import bulbasaurImg from "../assets/bulbasaur.svg"
import classes from "./Trainer.module.css"

export default function Trainer() {
    return <div className={classes.trainer}>
        <div>
            <p className={classes.trainerName}>Name</p>
            <p className={classes["center-it"]}>Pokemon-Icons</p>
            <p className={classes["center-it"]}>
                <button className={classes["center-it"]}>Pokemon-List</button>
            </p>
        </div>

        <div>
            <p className={classes["center-it"]}>HP(200/200)</p>
            <p className={classes["center-it"]}>Health Bar</p>
            <Image src={bulbasaurImg} />

            <ul>
                <li>Attack 1</li>
                <li>Attack 2</li>
                <li>Attack 3</li>
                <li>Attack 4</li>
            </ul>
        </div>
    </div>;
}