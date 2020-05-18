import React from "react";
import '../Main.scss'
import ProductsGroupCard from "./Products-group/ProductsGroupCard";

const ProductsMenu = () => {

    const productsGroups = [
        {title: 'TV', url: 'images/aos-landing-products-mac-202005.jpg'},
        {title: 'NOTEBOOK', url: 'images/aos-landing-products-mac-202005.jpg'},
        {title: 'NOTEBOOK', url: 'images/aos-landing-products-mac-202005.jpg'},
        {title: 'NOTEBOOK', url: 'images/aos-landing-products-mac-202005.jpg'},
        {title: 'NOTEBOOK', url: 'images/aos-landing-products-mac-202005.jpg'},
        {title: 'NOTEBOOK', url: 'images/aos-landing-products-mac-202005.jpg'},
        {title: 'NOTEBOOK', url: 'images/aos-landing-products-mac-202005.jpg'},
        {title: 'NOTEBOOK', url: 'images/aos-landing-products-mac-202005.jpg'},
        {title: 'NOTEBOOK', url: 'images/aos-landing-products-mac-202005.jpg'},
        {title: 'NOTEBOOK', url: 'images/aos-landing-products-mac-202005.jpg'}
    ]

    return(
        <div className='main__products-menu'>
            {productsGroups.map(group => <ProductsGroupCard title={group.title} img={group.url}/>)}
        </div>
    )
}

export default ProductsMenu;