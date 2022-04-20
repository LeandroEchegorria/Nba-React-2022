import CircularProgress from '@mui/material/CircularProgress';
import './Loading.css';

const Loading = () => {
    return (
        <div className="container-loader">
            <h2 >Cargando...</h2>
            <CircularProgress color='inherit'/>

        </div>
    )
}

export default Loading;