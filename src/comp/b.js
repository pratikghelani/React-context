import React,{useContext} from 'react';
import Notecontext from '../Context/Notecontext';
// import C from './c'
const B = () => {
    const a  = useContext(Notecontext);
    return (
        <div class="card w-75">
            <div class="card-body">
                <h5 class="card-title">B</h5>
                <p class="card-text">  <h1 class="card-title">{a.data}</h1></p>
            </div>
        </div>
    );
}

export default B;
