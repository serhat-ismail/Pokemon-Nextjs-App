import classes from "./HealthBar.module.css"

export default function HealthBar({currentHp, maxHp}) {
    return <div className={classes.bar}>
        <p>HP({currentHp}/{maxHp})</p>
        <progress value={currentHp} max={maxHp} />
    </div>;
}