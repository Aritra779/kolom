import { useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Effects.css';

gsap.registerPlugin(ScrollTrigger);

const Effects = ({id , title , color}) => {

    useLayoutEffect(() => {
        /*const gsap_trig = ScrollTrigger.getAll();
        for (let trig of gsap_trig) {
            if (trig !== null) {
                trig.kill();
            }
        }*/
        const rerun = (head) => {
            let word = document.getElementById(head.id);
            let word1 = document.getElementById(head.id);
            let word2 = document.getElementById(head.id);
            if (word) {
                word = word.childNodes[0].childNodes[0].childNodes[0];
                word1 = word1.childNodes[0].childNodes[0].childNodes[1];
                word2 = word2.childNodes[0].childNodes[0].childNodes[2];;
                word.classList.remove("block");
                word1.classList.remove("text");
                word2.classList.remove("underline");
                void word.offsetWidth;
                word.classList.add("block");
                word1.classList.add("text");
                word2.classList.add("underline");
            }
        }

        const heads = gsap.utils.toArray('.contain');
        heads.forEach(head => {
            ScrollTrigger.create({
                id: `${head.id}`,
                trigger: head,
                start: "top 80%",
                end: "bottom 25%",
                //markers: true,
                onEnter: () => rerun(head),
                onEnterBack: () => rerun(head),
            });
        });
    }, []);


    return (
            <div id={ id } className="contain">
                <div className="box-con">
                    <div className="title">
                    <span className="block"></span>
                    <h1 className="text" style={{ color: color || 'Black' }}>{title}</h1>
                        <div className="underline"></div>
                    </div>
                </div>
            </div>
    );
}

export default Effects;