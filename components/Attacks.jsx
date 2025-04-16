import classes from "./Attacks.module.css"

export default function Attacks() {
    return <div className={classes.attacks}>
        <ul>
            <li><button>Attack 1</button></li>
            <li><button>Attack 2</button></li>
            <li><button>Attack 3</button></li>
            <li><button>Attack 4</button></li>
        </ul>
    </div>
}