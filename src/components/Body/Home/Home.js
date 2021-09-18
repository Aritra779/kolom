
import { useState, useLayoutEffect } from 'react';
import { Parallax } from "react-parallax";
import "./Home.css";
import Particles from 'react-particles-js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import settings from './particlesjs-config.json';
import img1 from "../../../Images/img-01.jpg";
import img2 from "../../../Images/img-02.jpg";
import img3 from "../../../Images/img-03.jpg";
import img4 from "../../../Images/img-04.jpg";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    
    useLayoutEffect(() => {
        const gsap_trig = ScrollTrigger.getAll();
        gsap_trig.map(trig => {
            if (trig !== null) {
                trig.kill();
            }
        });
        

        const boxes = gsap.utils.toArray('.box');
        boxes.forEach(box => {
            gsap.to(box, {
                scrollTrigger: {
                    id : "fade",
                    trigger: box,
                    start: "top 75%",
                    end: "bottom 20%",
                    
                    toggleActions: "restart reset restart reset"
                },
                opacity: 1,
                duration: 2,
            })
        });   
    },[]);
    const click = () => {
        const word = document.querySelector("#ani h2");
        word.classList.remove("animate");
        void word.offsetWidth;
        word.classList.add("animate");
    }

    return (
        <div className="main" id = "Home">
            <Parallax bgImage={img1} strength={500}>
                <div style={{ height: 500 }}>
                    <div id = "ani">
                        <h2 className="animate" id="title" onClick={click}> আমাদের স্বাধীন কলম </h2>
                    </div>
                </div>
            </Parallax>
            <div className="container-fluid intro" >
                    <Particles
                    className="particles-js"
                    params={settings} 
                />
                <div className="box" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien sem, lacinia ut risus nec, maximus facilisis velit. Cras nec metus non ligula suscipit mollis. Donec diam justo, ullamcorper in suscipit non, condimentum a nunc. Ut eget dui a ipsum facilisis facilisis. Etiam tincidunt metus vitae quam ultrices commodo. Vivamus at libero porttitor, rutrum lectus ac, viverra mi. Suspendisse lobortis quam metus, eget egestas felis tincidunt et. Donec ex est, porttitor et velit a, venenatis dignissim lorem. Aliquam vitae mollis nunc, a elementum turpis. Proin volutpat interdum lorem, quis tempor elit finibus nec. Donec pharetra et mi ac pulvinar. Aliquam volutpat justo elit, sit amet viverra orci venenatis eu.
                    Praesent ornare non ante id venenatis. Nullam pellentesque eu tellus nec consequat. Integer nec interdum odio. Aliquam erat volutpat. Phasellus euismod id justo malesuada vehicula. Duis ipsum quam, consectetur ac tempus vitae, volutpat id eros. In scelerisque varius tempor. In auctor tellus ut feugiat luctus. Cras ultrices aliquam lacus non efficitur. Etiam rhoncus hendrerit lacus et tincidunt.
                    Duis rhoncus leo at ultrices hendrerit. Maecenas in urna tristique, aliquam quam ut, semper enim. In congue, massa ut mattis varius, metus arcu pretium enim, eget pellentesque sem purus et libero. Quisque vitae pretium ante. Sed interdum magna pretium, sollicitudin quam sed, sodales leo. Vestibulum bibendum imperdiet pellentesque. Curabitur ac nunc nisl.
                    Praesent hendrerit, erat et pellentesque ultrices, justo libero pellentesque nisl, ac sollicitudin sapien risus sed augue. In vel maximus leo, quis condimentum augue. Mauris faucibus iaculis mi. Aliquam commodo mattis eros, scelerisque commodo eros imperdiet id. Donec tempus tellus eros, quis semper ligula consectetur ac. Pellentesque ullamcorper, nisi sit amet accumsan egestas, sapien mauris gravida ex, quis dignissim magna ante in justo. Phasellus sed laoreet lorem. Quisque porttitor, massa a viverra pretium, velit leo auctor est, tristique vestibulum sapien nisi sit amet orci. Nullam et sapien lobortis, suscipit magna et, condimentum lorem. Curabitur imperdiet sagittis justo et sollicitudin. Vivamus posuere in sapien nec hendrerit. Proin sed lacus sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris nisi dolor, posuere sed auctor nec, commodo sed leo. Mauris sit amet turpis erat.
                    Pellentesque ac faucibus mauris. Sed nec neque vel lacus volutpat vestibulum. Nam vitae lacinia sem. Curabitur quis suscipit felis. Sed tempor, eros eget eleifend efficitur, dolor justo pharetra tellus, eu vestibulum purus sem eget metus. Duis vitae suscipit mauris. Nulla vel facilisis erat, eu sodales libero. Pellentesque sodales, nisi id posuere viverra, ligula odio mattis lorem, et suscipit ligula justo eu nibh. Quisque vitae metus sed ligula sollicitudin auctor. Praesent in ante tortor.
                </div>
            </div>
            <Parallax bgImage={img3} strength={200}>
                <div style={{ height: 500 }}>
                    <div className="overimg1">Dynamic Blur</div>
                </div>
            </Parallax>
            <div className="container-fluid intro" >
                <Particles
                    className="particles-js"
                    params={settings}        
                />
                <div className = "box">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien sem, lacinia ut risus nec, maximus facilisis velit. Cras nec metus non ligula suscipit mollis. Donec diam justo, ullamcorper in suscipit non, condimentum a nunc. Ut eget dui a ipsum facilisis facilisis. Etiam tincidunt metus vitae quam ultrices commodo. Vivamus at libero porttitor, rutrum lectus ac, viverra mi. Suspendisse lobortis quam metus, eget egestas felis tincidunt et. Donec ex est, porttitor et velit a, venenatis dignissim lorem. Aliquam vitae mollis nunc, a elementum turpis. Proin volutpat interdum lorem, quis tempor elit finibus nec. Donec pharetra et mi ac pulvinar. Aliquam volutpat justo elit, sit amet viverra orci venenatis eu.
                    Praesent ornare non ante id venenatis. Nullam pellentesque eu tellus nec consequat. Integer nec interdum odio. Aliquam erat volutpat. Phasellus euismod id justo malesuada vehicula. Duis ipsum quam, consectetur ac tempus vitae, volutpat id eros. In scelerisque varius tempor. In auctor tellus ut feugiat luctus. Cras ultrices aliquam lacus non efficitur. Etiam rhoncus hendrerit lacus et tincidunt.
                    Duis rhoncus leo at ultrices hendrerit. Maecenas in urna tristique, aliquam quam ut, semper enim. In congue, massa ut mattis varius, metus arcu pretium enim, eget pellentesque sem purus et libero. Quisque vitae pretium ante. Sed interdum magna pretium, sollicitudin quam sed, sodales leo. Vestibulum bibendum imperdiet pellentesque. Curabitur ac nunc nisl.
                    Praesent hendrerit, erat et pellentesque ultrices, justo libero pellentesque nisl, ac sollicitudin sapien risus sed augue. In vel maximus leo, quis condimentum augue. Mauris faucibus iaculis mi. Aliquam commodo mattis eros, scelerisque commodo eros imperdiet id. Donec tempus tellus eros, quis semper ligula consectetur ac. Pellentesque ullamcorper, nisi sit amet accumsan egestas, sapien mauris gravida ex, quis dignissim magna ante in justo. Phasellus sed laoreet lorem. Quisque porttitor, massa a viverra pretium, velit leo auctor est, tristique vestibulum sapien nisi sit amet orci. Nullam et sapien lobortis, suscipit magna et, condimentum lorem. Curabitur imperdiet sagittis justo et sollicitudin. Vivamus posuere in sapien nec hendrerit. Proin sed lacus sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris nisi dolor, posuere sed auctor nec, commodo sed leo. Mauris sit amet turpis erat.
                    Pellentesque ac faucibus mauris. Sed nec neque vel lacus volutpat vestibulum. Nam vitae lacinia sem. Curabitur quis suscipit felis. Sed tempor, eros eget eleifend efficitur, dolor justo pharetra tellus, eu vestibulum purus sem eget metus. Duis vitae suscipit mauris. Nulla vel facilisis erat, eu sodales libero. Pellentesque sodales, nisi id posuere viverra, ligula odio mattis lorem, et suscipit ligula justo eu nibh. Quisque vitae metus sed ligula sollicitudin auctor. Praesent in ante tortor.
                </div>
            </div>
            <Parallax bgImage={img2} strength={300}>
                <div style={{ height: 500 }}>
                    <div className="overimg1">Reverse direction</div>
                </div>
            </Parallax>
            <div className="container-fluid intro" >
                <Particles
                    className="particles-js"
                    params={settings} 
                />
                <div className = "box">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien sem, lacinia ut risus nec, maximus facilisis velit. Cras nec metus non ligula suscipit mollis. Donec diam justo, ullamcorper in suscipit non, condimentum a nunc. Ut eget dui a ipsum facilisis facilisis. Etiam tincidunt metus vitae quam ultrices commodo. Vivamus at libero porttitor, rutrum lectus ac, viverra mi. Suspendisse lobortis quam metus, eget egestas felis tincidunt et. Donec ex est, porttitor et velit a, venenatis dignissim lorem. Aliquam vitae mollis nunc, a elementum turpis. Proin volutpat interdum lorem, quis tempor elit finibus nec. Donec pharetra et mi ac pulvinar. Aliquam volutpat justo elit, sit amet viverra orci venenatis eu.
                    Praesent ornare non ante id venenatis. Nullam pellentesque eu tellus nec consequat. Integer nec interdum odio. Aliquam erat volutpat. Phasellus euismod id justo malesuada vehicula. Duis ipsum quam, consectetur ac tempus vitae, volutpat id eros. In scelerisque varius tempor. In auctor tellus ut feugiat luctus. Cras ultrices aliquam lacus non efficitur. Etiam rhoncus hendrerit lacus et tincidunt.
                    Duis rhoncus leo at ultrices hendrerit. Maecenas in urna tristique, aliquam quam ut, semper enim. In congue, massa ut mattis varius, metus arcu pretium enim, eget pellentesque sem purus et libero. Quisque vitae pretium ante. Sed interdum magna pretium, sollicitudin quam sed, sodales leo. Vestibulum bibendum imperdiet pellentesque. Curabitur ac nunc nisl.
                    Praesent hendrerit, erat et pellentesque ultrices, justo libero pellentesque nisl, ac sollicitudin sapien risus sed augue. In vel maximus leo, quis condimentum augue. Mauris faucibus iaculis mi. Aliquam commodo mattis eros, scelerisque commodo eros imperdiet id. Donec tempus tellus eros, quis semper ligula consectetur ac. Pellentesque ullamcorper, nisi sit amet accumsan egestas, sapien mauris gravida ex, quis dignissim magna ante in justo. Phasellus sed laoreet lorem. Quisque porttitor, massa a viverra pretium, velit leo auctor est, tristique vestibulum sapien nisi sit amet orci. Nullam et sapien lobortis, suscipit magna et, condimentum lorem. Curabitur imperdiet sagittis justo et sollicitudin. Vivamus posuere in sapien nec hendrerit. Proin sed lacus sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris nisi dolor, posuere sed auctor nec, commodo sed leo. Mauris sit amet turpis erat.
                    Pellentesque ac faucibus mauris. Sed nec neque vel lacus volutpat vestibulum. Nam vitae lacinia sem. Curabitur quis suscipit felis. Sed tempor, eros eget eleifend efficitur, dolor justo pharetra tellus, eu vestibulum purus sem eget metus. Duis vitae suscipit mauris. Nulla vel facilisis erat, eu sodales libero. Pellentesque sodales, nisi id posuere viverra, ligula odio mattis lorem, et suscipit ligula justo eu nibh. Quisque vitae metus sed ligula sollicitudin auctor. Praesent in ante tortor.
                </div>
            </div>
            <Parallax
                bgImage={img4}
                strength={200}
                renderLayer={(percentage) => (
                    <div>
                        <div
                            style={{
                                position: "absolute",
                                background: `rgba(255, 125, 0, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                borderRadius: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 500,
                                height: percentage * 500
                            }}
                        />
                    </div>
                )}
            >
                <div style={{ height: 500 }}>
                    <div className="overimg1">renderProp</div>
                </div>
            </Parallax>
            <div className="container-fluid intro" >
                <Particles
                    className="particles-js"
                    params={settings}
                />
                <div className = "box">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien sem, lacinia ut risus nec, maximus facilisis velit. Cras nec metus non ligula suscipit mollis. Donec diam justo, ullamcorper in suscipit non, condimentum a nunc. Ut eget dui a ipsum facilisis facilisis. Etiam tincidunt metus vitae quam ultrices commodo. Vivamus at libero porttitor, rutrum lectus ac, viverra mi. Suspendisse lobortis quam metus, eget egestas felis tincidunt et. Donec ex est, porttitor et velit a, venenatis dignissim lorem. Aliquam vitae mollis nunc, a elementum turpis. Proin volutpat interdum lorem, quis tempor elit finibus nec. Donec pharetra et mi ac pulvinar. Aliquam volutpat justo elit, sit amet viverra orci venenatis eu.
                    Praesent ornare non ante id venenatis. Nullam pellentesque eu tellus nec consequat. Integer nec interdum odio. Aliquam erat volutpat. Phasellus euismod id justo malesuada vehicula. Duis ipsum quam, consectetur ac tempus vitae, volutpat id eros. In scelerisque varius tempor. In auctor tellus ut feugiat luctus. Cras ultrices aliquam lacus non efficitur. Etiam rhoncus hendrerit lacus et tincidunt.
                    Duis rhoncus leo at ultrices hendrerit. Maecenas in urna tristique, aliquam quam ut, semper enim. In congue, massa ut mattis varius, metus arcu pretium enim, eget pellentesque sem purus et libero. Quisque vitae pretium ante. Sed interdum magna pretium, sollicitudin quam sed, sodales leo. Vestibulum bibendum imperdiet pellentesque. Curabitur ac nunc nisl.
                    Praesent hendrerit, erat et pellentesque ultrices, justo libero pellentesque nisl, ac sollicitudin sapien risus sed augue. In vel maximus leo, quis condimentum augue. Mauris faucibus iaculis mi. Aliquam commodo mattis eros, scelerisque commodo eros imperdiet id. Donec tempus tellus eros, quis semper ligula consectetur ac. Pellentesque ullamcorper, nisi sit amet accumsan egestas, sapien mauris gravida ex, quis dignissim magna ante in justo. Phasellus sed laoreet lorem. Quisque porttitor, massa a viverra pretium, velit leo auctor est, tristique vestibulum sapien nisi sit amet orci. Nullam et sapien lobortis, suscipit magna et, condimentum lorem. Curabitur imperdiet sagittis justo et sollicitudin. Vivamus posuere in sapien nec hendrerit. Proin sed lacus sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris nisi dolor, posuere sed auctor nec, commodo sed leo. Mauris sit amet turpis erat.
                    Pellentesque ac faucibus mauris. Sed nec neque vel lacus volutpat vestibulum. Nam vitae lacinia sem. Curabitur quis suscipit felis. Sed tempor, eros eget eleifend efficitur, dolor justo pharetra tellus, eu vestibulum purus sem eget metus. Duis vitae suscipit mauris. Nulla vel facilisis erat, eu sodales libero. Pellentesque sodales, nisi id posuere viverra, ligula odio mattis lorem, et suscipit ligula justo eu nibh. Quisque vitae metus sed ligula sollicitudin auctor. Praesent in ante tortor.
                </div>
            </div>
        </div>
    );
}

export default Home;