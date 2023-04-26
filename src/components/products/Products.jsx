import React from 'react'
import './Products.scss'
import productImage from '../../images/product.png'
const Products = () => {
    return (
        <div>
            <div className="products-wrapper gap-3 d-flex overflow-x-scroll">
                <div className="product">
                    <img src={productImage} />
                    <div>
                        <p className='produt-name'>XL Meditation Cushion Set</p>
                    </div>
                </div>
                <div className="product">
                    <img src={productImage} />
                    <div><p className='produt-name'>XL Meditation Cushion Set</p></div>
                </div>
                <div className="product">
                    <img src={productImage} />
                    <div>
                        <p className='produt-name'>XL Meditation Cushion Set</p>
                    </div>
                </div>
                <div className="product">
                    <img src={productImage} />
                    <div>
                        <p className='produt-name'>XL Meditation Cushion Set</p>
                    </div>
                </div>
                <div className="product">
                    <img src={productImage} />
                    <div>
                        <p className='produt-name'>XL Meditation Cushion Set</p>
                    </div>
                </div>
                <div className="product">
                    <img src={productImage} />
                    <div>
                        <p className='produt-name'>XL Meditation Cushion Set</p>
                    </div>
                </div>
                <div className="product">
                    <img src={productImage} />
                    <div>
                        <p className='produt-name'>XL Meditation Cushion Set</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products