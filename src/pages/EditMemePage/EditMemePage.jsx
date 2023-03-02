import {useParams} from "react-router-dom";

export const EditMemePage = () => {

    let { id } = useParams();

    return (
        <div>
            <h1>Edit meme page</h1>
            <h1>{id}</h1>
        </div>
    );
}