const ContactForm = () => {

    /*const [mail, setMail] = useState({
        sender : "",
        sub : "",
        body : ""
    });

    const addClassSent = () => {
        const tgt = document.getElementById('sendLetter');
        if(!tgt.classList.contains('sent')){
            tgt.classList.add('sent');
        }
    }

    const removeClassSent = () => {
        const tgt = document.getElementById('sendLetter');
        tgt.classList.remove('sent');
    }

    const addClassExpand = () => {
        const tgt = document.getElementById('sendLetter');
        if(tgt.classList.contains('ExpandedForm')){
            tgt.classList.remove('ExpandedForm');
        }else{
            tgt.classList.add('ExpandedForm');
            tgt.classList.remove('sent');
        }
    }


    useEffect(()=>{
        const sendLetter = document.querySelectorAll('.envelope');
        sendLetter.forEach(nd => {
            nd.addEventListener('click', removeClassSent);
        });
        const mailBtn = document.getElementById('mailButton');
        mailBtn.addEventListener("click", addClassExpand);
    },[]);*/

     
    return(
        <>
            <button id="mailButton" type="button" className = "btn btn-danger contactbutton" onClick={() => {window.open("mailto:dba.kolom@gmail.com")}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <i style={{marginLeft : "5%"}}>forum.kolom@gmail.com</i>
                
            </button>
            {/*<section className="sec" id= 'sendLetter'>
                <div className="wrapper centered">
                    <article className="letter">
                        <div className="side">
                            <h1>Contact us</h1>
                            <p>
                                <textarea placeholder="Your message"/>
                                <span className="bottom"></span>
                                <span className="right"></span>
                                <span className="top"></span>
                                <span className="left"></span>
                            </p>
                        </div>
                        <div className="side">
                        <p>
                            <input type="text" placeholder="Your name" />
                                <span className="bottom"></span>
                                <span className="right"></span>
                                <span className="top"></span>
                                <span className="left"></span>

                        </p>
                        <p>
                            <input type="email" placeholder="Your email" />
                            <span className="bottom"></span>
                            <span className="right"></span>
                            <span className="top"></span>
                            <span className="left"></span>
                        </p>
                        <p>
                            <button type="button" className="btn btn-outline-info" onClick={() => addClassSent()}>Send</button>
                        </p>
                        </div>
                    </article>
                    <div className="envelope front"></div>
                    <div className="envelope back"></div>
                </div>
            </section>*/}
        </>
    );
}

export default ContactForm;