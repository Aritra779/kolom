import { useState, useImperativeHandle, forwardRef} from 'react';
import Effects from '../../Effects/Effects';
import SwiperBook from './SwiperBook';
import FlipBook from './FlipBook';

const links = [
    "https://drive.google.com/file/d/0BwkrBjJCA8wwdEQ5ZVdEVXB2YUk/view?usp=sharing&resourcekey=0-2KMKUDa-s_J-6FUW_P8pvQ",
    "https://drive.google.com/file/d/18BqjcgzhnkoaG8Jka7kLQchww2UozThl/view?usp=sharing",
    "https://drive.google.com/file/d/1juPtOWirk5liS2Y1mebVjE0nA9YhcLAv/view?usp=sharing",
    "https://drive.google.com/file/d/1-DF7snfgtztXM6IadKoBxVFuY2oUhEjb/view?usp=sharing",
    "https://drive.google.com/file/d/1-Mwum1eQJ2WU4UWSDDCTDShpQQggVkqn/view?usp=sharing",
    "https://drive.google.com/file/d/1q3DGIg8ORUEvxJsgmBHBJ_JtcLhqYCPw/view?usp=sharing"
];

const Options = forwardRef(({content},ref) => {
    const [loadid, setLoadid] = useState(0);
    const [show, setShow] = useState(false);

    useImperativeHandle(ref, () => ({
        hide() {
            setShow(false);
        }
    }));

    const load = (id) => {
        var contentBox;
        contentBox = document.getElementById("fourth");
        if (!contentBox) {
            contentBox = document.getElementById("magazine-content");
        }
        contentBox.scrollIntoView({ block: 'center' });
        setLoadid(id);
        setShow(true);
    }

    return (
        <div>
            <Effects
                id="Archive_Options"
                title={`Edition ${content}`}
            />
            <div className="card bg-color mt-3 mb-5">
                <div className="card-header text-center bg-success text-white">
                    Please choose one of the prefered options
                </div>
                <div className="card-body border-bottom">
                    <h5 className="card-title  text-center">External <i>Google Drive</i> Link</h5>
                    <p className="card-text">On clicking the link below you'll be re-directed to google drive where the pdf version of the magazine is available.</p>
                    <p className="card-text  text-muted">This option is recommended for users on mobile data as google drive will only load the page you're reading and not the entire pdf.</p>
                    <a href={links[content-1]} className="btn btn-outline-dark" target="_blank" rel = "noreferrer">Drive Link for Edition {content}</a>
                </div>
                <div className="card-body border-bottom">
                    <h5 className="card-title  text-center">Carousel</h5>
                    <p className="card-text">On clicking the button below the magazine will be loaded in a carousel where you can slide / swipe to move between pages. You can use the arrow keys in the keyboard as well if you're viewing in a large screen device. You can also double click / tap to zoom.</p>
                    <p className="card-text  text-muted">This option is small screen (eg. mobile devices) friendly. The images will also get loaded only when it's on display (i.e., images aren't pre-loaded) so as to save data.</p>
                    <button className="btn btn-outline-dark" onClick={() => load(1)}>Load Magazine as Carousel</button>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">Book</h5>
                    <p className="card-text">On clicking the button below the magazine will be loaded in a interactive book manner where you can slide / swipe to turn pages.</p>
                    <p className="card-text  text-muted">This option is best for large screen (eg. desktops, laptops etc). This is also small screen compatible. Mobile data use is highly disencouraged for this option.</p>
                    <button className="btn btn-outline-dark" onClick={() => load(2)}>Load Magazine as a Book</button>
                </div>
                <div className="card-footer  text-center text-white bg-success">
                    Happy Reading
                </div>
            </div>
            <div id="magazine-content">
                {((loadid !== 0) && show) ?
                    loadid === 1 ? (
                        <SwiperBook
                            content={content}
                        />
                    )
                        :
                        (
                            <FlipBook
                                content={content}
                            />
                        )
                    :
                    ""
                }
            </div>
        </div>
    );
});

export default Options;