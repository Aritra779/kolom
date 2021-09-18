import HTMLFlipBook from 'react-pageflip';
import { forwardRef, useRef, useState } from 'react';
import Effects from '../Effects/Effects';

const turn = (e, book , page) => {
    e.preventDefault();
    book.current.pageFlip().flip(parseInt(page));
}

const open = (content) => {
    let modal = document.getElementById('Modal');
    let external;
    if (modal) {
        modal = modal.childNodes[0].childNodes[0].childNodes[1];
    }
    if (content) {
        modal.innerHTML = content;
    } else {
        modal.innerHTML = '<div>How the hell did you get here?</div>';
    }
}
const Page = forwardRef((props, ref) => {
    return (
        <div className="page" ref={ref}>
            <div className="page-content">
                <img className="page-image" src={props.img}/>
                <div>
                    {props.data && props.data.map(item => {
                        if (item.page) {
                            return (
                                <a
                                    key={props.data.indexOf(item)}
                                    onClick={(e) => turn(e, props.book, item.page)}
                                    href="#"
                                    style=
                                    {{
                                        position: 'absolute',
                                        height: `${item.height}%`,
                                        width: `${item.width}%`,
                                        left: `${item.x}%`,
                                        top: `${item.y}%`,
                                        backgroundColor: `rgba(178, 194, 219,0.5)`,
                                        borderRadius: '10px'
                                    }}
                                />
                            );
                        }
                        else if (item.link) {
                            return (
                                <a
                                    key={props.data.indexOf(item)}
                                    href={item.link}
                                    target="_blank"
                                    style=
                                    {{
                                        position: 'absolute',
                                        height: `${item.height}%`,
                                        width: `${item.width}%`,
                                        left: `${item.x}%`,
                                        top: `${item.y}%`,
                                        backgroundColor: `rgba(178, 194, 219,0.5)`,
                                        borderRadius: '10px'
                                    }}
                                />
                            );
                        }
                        else if (item.box) {
                            return (
                                <button
                                    key={props.data.indexOf(item)}
                                    type="button"
                                    className="btn btn-outline-success"
                                    data-bs-toggle="modal"
                                    data-bs-target="#Modal"
                                    onClick={() => open(item.box)}
                                    style=
                                    {{
                                        position: 'absolute',
                                        height: `${item.height}%`,
                                        width: `${item.width}%`,
                                        left: `${item.x}%`,
                                        top: `${item.y}%`,
                                        backgroundColor: `rgba(178, 194, 219,0.5)`,
                                        borderRadius: '10px'
                                    }}
                                /> 
                            );
                        }
                    })}
                </div>
            </div>
        </div>
        );
});


const importAllImages = (r) => {
    let images = {};
    r.keys().map(item => {
        images[item.replace('./', '').replace('jpg','')] = r(item);
    });
    return images;
}

const importAllData = (r) => {
    let data = {};
    r.keys().map(item => {
        data[item.replace('./', '').replace('json','')] = r(item);
    });
    return data;
}

const FlipBook = ({ content }) => {
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const book = useRef();
    var images;
    var data;
    switch (content) {
        case 1: images = importAllImages(require.context('../../../../Materials/1424', false, /\.jpg/));
            data = importAllData(require.context('../../../../Materials/1424/Data', false, /\.json/));
            break;
        case 2: images = importAllImages(require.context('../../../../Materials/1425', false, /\.jpg/));
            data = importAllData(require.context('../../../../Materials/1425/Data', false, /\.json/));
            break;
        case 3: images = importAllImages(require.context('../../../../Materials/1426', false, /\.jpg/));
            data = importAllData(require.context('../../../../Materials/1426/Data',false, /\.json/));
            break;
        case 4: images = importAllImages(require.context('../../../../Materials/1427', false, /\.jpg/));
            data = importAllData(require.context('../../../../Materials/1427/Data', false, /\.json/));
            break;
        case 5: images = importAllImages(require.context('../../../../Materials/1427', false, /\.jpg/));
            data = importAllData(require.context('../../../../Materials/1427/Data', false, /\.json/));
            break;
        case 6: images = importAllImages(require.context('../../../../Materials/1427', false, /\.jpg/));
            data = importAllData(require.context('../../../../Materials/1427/Data', false, /\.json/));
            break;
        default: break;
    }
    if ((Object.keys(images).length) % 2 !== 0) {
        images[`${Object.keys(images).length + 1}.`] = images[Object.keys(images)[Object.keys(images).length - 1]];
    }

    const onFlip = (e) => {
        setPage(e.data);
    }

    const onInit = () => {
        if (book && book.current) {
            setTotalPage(book.current.pageFlip().getPageCount());

        }
    }

    const prevButtonClick = () => {
        if (book.current && book.current.pageFlip()) {
            book.current.pageFlip().flipPrev();
        }
    }

    const nextButtonClick = () => {
        if (book.current && book.current.pageFlip()) {
            book.current.pageFlip().flipNext();
        } 
    }

    return (
        <div>
            <Effects
                id="fourth"
                title={`Edition ${content} Book`}
            />
            <div id="book">
                <HTMLFlipBook
                    width={500}
                    height={650}
                    minWidth={200}
                    maxWidth={1400}
                    minHeight={250}
                    maxHeight={1533}
                    maxShadowOpacity={0.5}
                    mobileScrollSupport={true}
                    size="stretch"
                    showCover={true}
                    renderOnlyPageLengthChange={true}
                    onFlip={(e) => onFlip(e)}
                    onInit={onInit}
                    ref={book}
                    className="flip-book"
                >
                    {
                        Object.entries(images).map(image => {
                            if (data[image[0]]) {
                                return (
                                    <Page
                                        key={image}
                                        img={images[image[0]]['default']}
                                        data={data[image[0]]}
                                        book={book}
                                    />
                                );
                            }
                            else {
                                return (
                                    <Page
                                        key={image}
                                        img={images[image[0]]['default']}
                                    />
                                );
                            }
                            
                        })
                    }
                </HTMLFlipBook>
                <div className="navigation row">

                    <span className="col-sm-4 g-2"><button className="btn btn-outline-success" type="button" onClick={prevButtonClick}>Previous Page</button></span>
                    <span className="col-sm-4 g-2">[<span>{page + 1}</span> of <span>{totalPage}</span>]</span>
                    <span className="col-sm-4 g-2"><button className="btn btn-outline-success" type="button" onClick={nextButtonClick}>Next Page</button></span>

                </div>
               
                <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FlipBook;
