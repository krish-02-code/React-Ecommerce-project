import { Header } from "../../Components/Header";
import './PageNotFound.css';

export function PageNotFound({cart}){
    return(
        <>
        <title>Page Not Found</title>
        <link rel="stylesheet" type="image/svg+xml" href="home-favicon.png"/>
        <Header cart={cart}/>

        <div className="not-found-message">Page Not Found</div>
        </>
    );
}