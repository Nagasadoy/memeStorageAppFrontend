import {TagCollection} from "../TagCollection/TagCollection";
import {useEffect, useState} from "react";
import {getMemeById} from "../../actions/file";
import {toast, Toaster} from "react-hot-toast";

export const MemeCardForEdit = ({meme=null}) => {

    return (
        <div>
            <h1>Edit meme Page</h1>
            <div className='wrapper'>
                <div className='card'>
                    <div className='card-title'>
                        {meme?.userMemeName}
                    </div>
                    <div>
                        <img className='card-img' src={meme?.fileLink} alt=''/>
                    </div>
                    <hr/>

                    <section className='tags'>
                        <TagCollection tags={meme?.tags}/>
                    </section>
                </div>
            </div>
        </div>
    );
}