import Image from "next/image";
import classes from "./Welcome.module.css"
import Button from "../UiElements/Button";
export default function Welcome() {
    return( <section className={classes["welcome"]}>
        <div className={classes["text"]}>
            <p className={classes["welcome-text"]}>welcome</p>
            <p className={classes["vision"]}>Learning Web programing Today</p>
            <p className={classes["desc"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        
        <div className={classes["buttons"]}>
            <Button href="/blog">Blog</Button>
            <Button outline href="cources">cources</Button>
        </div>
        </div>
        <div className={classes["img"]}>
            <Image src="/assets/butterfly.jpg" alt="beautiful img"
             width={270} height={148} loading="eager" />
        </div>
    </section>)
}