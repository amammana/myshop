import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BluePotato from './images/blue_potato.png'
import GreenDrop from './images/green_drop.png'
import RedVase from './images/red_vase.png'
import YellowThingy from './images/yellow_thingy.png'


class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <div>
          <img src={this.props.img}/>
        </div>
        <div className="product-description">
          <h3>{this.props.name}</h3>
          <div>Description: {this.props.description}</div>
          <div>Price: {this.props.price}</div>
        </div>
      </div>
    );
  }
}

class ShopApp extends React.Component {
  render() {
    return (
      <div className="shop-app">
        <h1>Alessandro's store</h1>
        <Product name="Blue potato"
          description="This is an interesting blue potato"
          price="11$"
          img={BluePotato}
        />
        <Product name="Green drop"
          description="You've never seen a green drop like this"
          price="21$"
          img={GreenDrop}
        />
        <Product name="Red vase"
          description="This red vase is amazing"
          price="31$"
          img={RedVase}
        />
        <Product name="Yellow thingy"
          description="What's this exactly? I don't know"
          price="24$"
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

