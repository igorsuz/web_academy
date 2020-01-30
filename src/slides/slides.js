import "./slides.css";
import { Slideshow } from "./slideshow";

const body = document.querySelector("body");
const slideshow = new Slideshow(body);

slideshow.init();
