import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import BluePotato from './images/blue_potato.png'
import GreenDrop from './images/green_drop.png'
import RedVase from './images/red_vase.png'
import YellowThingy from './images/yellow_thingy.png'


class Product extends React.Component {
  onBuyClick() {
    alert('Congrats, you just bought the product!');
    const transactionId = 'transaction_id'
    ReactGA.plugin.execute('ecommerce', 'addTransaction', {
      id: transactionId,
      revenue: this.props.priceUsd,
    });

    ReactGA.plugin.execute('ecommerce', 'addItem', {
      id: transactionId,
      name: this.props.name,
      sku: this.props.sku,
      price: this.props.priceUsd,
      quantity: 1
    });

  }

  render() {
    return (
      <div className="product">
        <div>
          <img src={this.props.img} alt={this.props.name}/>
        </div>
        <div className="product-description">
          <h3>{this.props.name}</h3>
          <div>Description: {this.props.description}</div>
          <div>Price: ${this.props.priceUsd}</div>
          <button onClick={()=> this.onBuyClick()}>Buy</button>
        </div>
      </div>
    );
  }
}

class ShopApp extends React.Component {
  componentDidMount(){
    ReactGA.initialize('UA-122917699-1', {debug: true});
    ReactGA.plugin.require('ecommerce')
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    return (
      <div className="shop-app">
        <h1>Alessandro's store</h1>
        <Product name="Blue potato"
          description="This is an interesting blue potato"
          priceUsd={11}
          sku="blue_potato_sku"
          img={BluePotato}
        />
        <Product name="Green drop"
          description="You've never seen a green drop like this"
          priceUsd={21}
          sku="green_drop_sku"
          img={GreenDrop}
        />
        <Product name="Red vase"
          description="This red vase is amazing"
          priceUsd={31}
          sku="red_vase_sku"
          img={RedVase}
        />
        <Product name="Yellow thingy"
          description="What's this exactly? I don't know"
          priceUsd={24}
          sku="yellow_thingy_sku"
          img={YellowThingy}
        />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <ShopApp />,
  document.getElementById('root')
);

