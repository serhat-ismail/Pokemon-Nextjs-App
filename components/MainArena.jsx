import classes from "./MainArena.module.css"
import Trainer from "./Trainer"

export default function MainArena() {
    return <main className={classes.mainArena}>
        <Trainer />
        <Trainer />
    </main>
}