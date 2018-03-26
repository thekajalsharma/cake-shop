import React from 'react';

class Cart extends React.Component {
    render() {
        const orderIds = Object.keys(this.props.cart);
        console.log(orderIds)
        return (
            <React.Fragment>
                <p>Order</p>
                <ul>{orderIds.map(key => (<li>{key}:{this.props.cart[key]}</li>))}</ul>
            </React.Fragment>
        );
    };
}

export default Cart;