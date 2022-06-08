import Loading from '../../../../Loading/Loading';
import './Status.css';

const Status = () => {
    return (
        <div style={{ position: "absolute", height: "100%", width: "100%" }}>
            <Loading />
        </div>
        );
}

export default Status;