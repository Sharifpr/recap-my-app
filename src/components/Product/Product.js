import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props)
    const { name, img, price, seller, stock, star } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div style={{ marginLeft: "8px" }}>
                <h3>{name}</h3>
                <p>By: {seller}</p>
                <h5>Price: ${price}</h5>
                <p><small>only {stock} left in stock - order soon</small></p>

                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star star-color"
                ></Rating>
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-style">{element}  add to cart</button>
            </div>

        </div >
    );
};

export default Product;