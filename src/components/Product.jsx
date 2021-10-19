import React from 'react';
import { Link } from 'react-router-dom';

function Product({ image, title, price, id }) {
    return (
        <div className="card m-4 p-3 d-flex justify-content-center align-items-center" style={{ width: '20rem' }} data-pid={id}>
            <Link to={'/product/' + id}>
                <img src={image} className="card-img-top" alt="product-picture" style={{ width: '8rem' }} />
            </Link>
        
            <ul class="list-group list-group-flush border-0">
                <li class="list-group-item border-0"><h6 className="card-title">{title}</h6></li>
                <li class="list-group-item border-0">${price}</li>
                <li class="list-group-item border-0"><Link to="/" className="btn btn-outline-danger">Add to Cart</Link></li>
            </ul>
        </div>
    )
}

export default Product
