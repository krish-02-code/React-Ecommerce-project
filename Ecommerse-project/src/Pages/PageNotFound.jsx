import { Header } from "../Components/Header";
import './PageNotFound.css';

export function PageNotFound(){
    return(
        <>
        <title>Page Not Found</title>
        <link rel="stylesheet" type="image/svg+xml" href="home-favicon.png"/>
        <Header/>

        <div className="not-found-message">Page Not Found</div>
        </>
    );
}