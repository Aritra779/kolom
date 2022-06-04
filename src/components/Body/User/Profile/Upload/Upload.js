import UploadContent from './UploadContent';
import './Upload.css';

const Upload = () => {
    return (
        <div id="Upload" className="container pt-5 pb-5">
            <div className="p-3 p-sm-5">
                <p className="text-white" style={{ textAlign: 'justify' }}>
                    Before uploading any document we recommend going through
                    the rules and regulations so that there won't be any problem later.
                </p>
                <h2 className="mt-3 mb-3 pt-2 pb-2 text-center text-white ">Rules & Regulations</h2>
                <section className="accordion" id="Rules">
                    <div className="accordion-item">
                        <h3 className="accordion-header" id="prose_poem">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#prose_poem_body" aria-expanded="false" aria-controls="prose_poem_body">
                                Prose and Poems
                            </button>
                        </h3>
                        <div id="prose_poem_body" className="accordion-collapse collapse" aria-labelledby="prose_poem" data-bs-parent="#Rules">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h3 className="accordion-header" id="audio_video">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#audio_video_body" aria-expanded="false" aria-controls="audio_video_body">
                                Audio and Video
                            </button>
                        </h3>
                        <div id="audio_video_body" className="accordion-collapse collapse" aria-labelledby="audio_video" data-bs-parent="#Rules">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h3 className="accordion-header" id="painting_photograph">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#painting_photograph_body" aria-expanded="false" aria-controls="painting_photograph_body">
                                Painting and Photography
                            </button>
                        </h3>
                        <div id="painting_photograph_body" className="accordion-collapse collapse" aria-labelledby="painting_photograph" data-bs-parent="#Rules">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </section>
                <UploadContent/>
            </div>
        </div>
        );
}

export default Upload;