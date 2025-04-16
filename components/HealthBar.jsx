import classes from "./Trainer.module.css"

export default function HealthBar() {
    return <>
        <p className={classes["center-it"]}>HP(200/200)</p>
        <p className={classes["center-it"]}>Health Bar</p>
    </>;
}