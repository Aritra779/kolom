import { useEffect, useRef} from 'react';
import "./Footer.css";
import ContactForm from './ContactForm';

const Footer = () => {
    const width = useRef(window.innerWidth);
    const spansSlow = useRef(null);
    const spansFast = useRef(null);
    const visible = useRef(false);

    useEffect(() => {
        spansSlow.current = document.querySelectorAll('.spanSlow');
        spansFast.current = document.querySelectorAll('.spanFast');
        window.addEventListener('resize', handleWindowResize);
    },[]);

    const handleMouseMove = (e) => {
        const tgt = document.getElementById('control');
        width.current = tgt.clientWidth;
        let normalizedPosition = e.pageX / (width.current / 2) -1;

        let speedSlow = (100 * normalizedPosition);
        let speedFast = (200 * normalizedPosition);
        spansSlow.current.forEach((span) => {

            span.style = `transform : translate(${speedSlow}px)`;
        });
        spansFast.current.forEach((span) => {
            span.style.transform = `translate(${speedFast}px)`
        });
    }

    const handleMouseLeave = (e) => {
        spansSlow.current.forEach((span) => {

            span.style = `transform : translate(0px)`;
        });
        spansFast.current.forEach((span) => {
            span.style.transform = `translate(0px)`
        });
    }

    const handleWindowResize = () => {
        width.current = window.innerWidth;
    }

    const show = () => {
        const left = document.getElementById('MoveLeft');
        const right = document.querySelectorAll('#check h2 .showup');
        const showup = document.querySelectorAll('#check h2 .showup_move');
        const description = document.querySelector('.description');
        if (!visible.current) {
            left.style.transition = 'ease-out 0.7s';
            left.style.transform = `translate(-20px)`;
            showup.forEach(span => {
                span.style.opacity = '1';
                span.style.transform = `translate(-20px)`;
            });
            right.forEach(span => {
                span.style.opacity = '1';
            });
            description.classList.add('visibleDescription');
        } else if (visible.current) {
            left.style.transition = 'ease-out 0.7s 0.9s';
            left.style.transform = `translate(200%)`;
            showup.forEach(span => {
                span.style.opacity = '0';
                span.style.transform = `translate(0)`;
            });
            right.forEach(span => {
                span.style.opacity = '0';
            });
            description.classList.remove('visibleDescription')
        }
        visible.current = !visible.current;
    }

    return (
        <footer className="footer bg-dark">
            <div className="container-fluid pt-5 pb-3">
                <div className="row" lang = "bn">
                    <div
                        id = "control"
                        className="col-md-9 row"
                        onMouseMove={(e) => handleMouseMove(e)}
                        onMouseLeave={(e) => handleMouseLeave(e)}
                    >
                    <div className="col-sm-6">
                        <div className="line">
                            <div className="left">
                                <div className="content">
                                    <span className="spanSlow">আমাদের</span>
                                </div>
                            </div>
                            <div className="right">
                                <div className="content">
                                    <span className="spanSlow">আমাদের</span>
                                </div>
                            </div>
                        </div>
                        <div className="line">
                            <div className="left">
                                <div className="content">
                                    <span className="spanFast">স্বাধীন</span>
                                </div>
                            </div><div className="right">
                                <div className="content">
                                    <span className="spanFast">স্বাধীন</span>
                                </div>
                            </div>
                        </div>
                        <div className="line">
                            <div className="left">
                                <div className="content">
                                    <span className="spanSlow">কলম </span>
                                </div>
                            </div>
                            <div className="right">
                                <div className="content">
                                    <span className="spanSlow">কলম</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6" style={{zIndex : 1}}>
                        <div className="info">
                            <h4>Reach Us:</h4>
                            <span className='socialIcon facebook'>
                                <a href="https://www.facebook.com/duurdeshi" target="_blank" rel = "noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </a>
                            </span>
                            <span className='socialIcon twitter'>
                                <a href="https://twitter.com/AmaderKolom?s=09" target="_blank" rel = "noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </a>
                            </span>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 pt-3 pb-3">
                        <div className="creator">
                            <span>Website created by</span>
                            <div id="check">
                                <h2 onClick={show}>
                                    <span className = "stay" id = "MoveLeft">A</span>
                                    <span className = "showup_move">r</span>
                                    <span className = "showup_move">i</span>
                                    <span className = "showup_move">t</span>
                                    <span className = "showup_move">r</span>
                                    <span className = "showup_move">a</span>
                                    <span className = "stay">D</span>
                                    <span className = "showup">u</span>
                                    <span className = "showup">t</span>
                                    <span className = "showup">t</span>
                                    <span className = "showup">a</span>
                                </h2>
                            </div>
                        </div>
                        <div className = "description m-4">
                            An undergraduate student persuing B.Tech in Computer Science and Engineering specialised in Artificial Intelligence and Machine Learning.
                        </div>
                </div>
            </div>
            <div className = "copyright" lang = "bn">
                    &#169; আমাদের স্বাধীন কলম
            </div>
        </div>  
        </footer>
    );
}

export default Footer;