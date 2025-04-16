import ImageShow from "@/components/ImageShow";
import classes from './page.module.css';

export default function PreviewPage() {
    return <div className={classes.slideshow}><ImageShow /></div>;
}