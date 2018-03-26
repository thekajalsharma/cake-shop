import React from 'react';

const Photo = (props) => {

    const { display_src, caption, price, weight } = { ...props.details };

    return (
        <div>
            <figure className="grid-figure">
                <img src={display_src} alt="1" className="photo" />
                <figcaption className="figcaption-class">
                    <p className="cake-name">{caption}</p>
                    <div className="caption-ctrls">
                        <span className="cake-price">{price}</span>
                        <span className="cake-weight">{weight}</span>
                        <button className="cake-add-to-cart" onClick={() => { props.addToCart(props.index) }}>Add to cart</button>
                    </div>
                </figcaption>
            </figure>
        </div>
    );

}
export default Photo;