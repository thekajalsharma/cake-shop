import React from 'react';

import Photogrid from './Photogrid';
import Cart from './Cart';
import samplecakes from '../data/sample-cakes';

import '../styles/style.css';

class App extends React.Component {

    state = {
        cakes: { ...samplecakes },
        cart: { cake4: 6, cake2: 2 }
    };

    addToCart = key => {
        console.log("Adding to Cart....");
        console.log(key);
        // 1. take a copy of state
        const cart = { ...this.state.cart };
        // 2. Either add to the cart, or update the number in our cart
        cart[key] = cart[key] + 1 || 1;
        // 3. Call setState to update our state object
        console.log(cart);
        this.setState({ cart });
    }

    render() {

        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <div className="left-margin-class">
                        <p>Left Margin</p>
                    </div>
                    <Photogrid cakes={this.state.cakes} addToCart={this.addToCart} />
                    <div className="right-margin-class">
                        <Cart cakes={this.state.cakes} cart={this.state.cart} />
                    </div>

                </div>
            </React.Fragment >
        );
    }
}

export default App;

export const Header = () => {
    return (
        <h1>Mom's Magic</h1>
    );
}
