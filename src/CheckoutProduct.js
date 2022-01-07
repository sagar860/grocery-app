import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';


function CheckoutProduct({ id, image, title, price, rating, hideButton, subtitle }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
        return alert("Are you sure you want to remove the item from cart")

    }

    return (
        <div className="Vegetables_allProducts">
            <div className="Vegetables_sellerImage">
                <div className="Vegetable_sellerImages">
                    <img src={image} alt="..." className="rounded-left Vegetable_sellerMainImage" />
                    <div className="VegetablesInfo">
                        <h5 className='Vegetablenames'> {title} <span style={{ fontSize: "12px" }}> {subtitle} </span></h5>
                        <h6 className="VegetablePrice"> ₹ {price} </h6>
                        <div className="Vegetables_add">
                            {!hideButton && (

                            <h5 className="Vegetables_MainAdd" onClick={removeFromBasket}> Remove </h5>
                            )}
                            <CancelIcon onClick={removeFromBasket}/>
                            

                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default CheckoutProduct
