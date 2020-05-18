import React from "react";
import '../../Main.scss'

const ProductsGroupCard = (props) => {
    return(
        <div className='main__products-menu_card'>
            <p>{props.title}</p>
            <img src={props.img} alt='img'/>
        </div>
    )
}

export default ProductsGroupCard;