import React from 'react';
import products from '../../data/products'
import './productsList.css';

export default _ => {
    function getProduct() {
        return products.map((product) => {
            return (
                <tr key={product.id} className={product.id % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{product.name}</td>
                    <td>R$ {product.price.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }
    return (
        <div className="product-table">
            <table border="0">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>{getProduct()}</tbody>
            </table>
        </div>
    )
}