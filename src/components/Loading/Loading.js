import './Loading.css';

const Loading = () => {
    return (
        <div className="loading">
            <div className="wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <span>Loading...</span>
            </div>
        </div>
        );
}

export default Loading;