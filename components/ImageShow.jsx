"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import classes from "./ImageShow.module.css"

import BulbasaurImg from "@/assets/bulbasaur.svg"
import CharmanderImg from "@/assets/charmander.svg"
import MeowthImg from "@/assets/meowth.svg"
import PikachuImg from "@/assets/pikachu.svg"
import SquirtleImg from "@/assets/squirtle.svg"
import Link from "next/link";

const images = [
    { image: BulbasaurImg, alt: 'Bulbasaur' },
    { image: CharmanderImg, alt: 'Charmander' },
    { image: MeowthImg, alt: 'Meowth' },
    { image: PikachuImg, alt: 'Pikachu' },
    { image: SquirtleImg, alt: 'Squirtle' }
];

export default function ImageShow() {
    const [imageIndex, setImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(previousIndex => previousIndex === images.length - 1 ? 0 : previousIndex + 1);
        }, 2000);

        return () => clearInterval(interval)
    }, []);

    return <div className={classes.slideshow}>
        {images.map((image, index) =>
            <Image
                key={index}
                src={image.image}
                alt={image.alt}
                className={index === imageIndex ? classes.active : ''}
            />)}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link href=".">Back to Home</Link>
    </div>
}