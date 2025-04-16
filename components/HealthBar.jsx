import classes from "./HealthBar.module.css"

export default function HealthBar() {
    const currentHp = 90;
    const maxHp = 200;

    return <div className={classes.bar}>
        <p>HP({currentHp}/{maxHp})</p>
        <progress value={currentHp} max={maxHp} />
    </div>;
}