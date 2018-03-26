import React from 'react';
import Photo from './Photo';

const Photogrid = (props) => {
    const cakes = props.cakes;

    return (
        <div className="photo-grid">
            {Object.keys(cakes)
                .map(key => <Photo key={key} index={key} details={cakes[key]} addToCart={props.addToCart} />)
            }
        </div>
    );


}

export default Photogrid;