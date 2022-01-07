import React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import "./AllProducts.css";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Product from "./Product";

function AllProducts() {
  return (
    <>
      <div className='sellers'>
        <h2 className='sellers_title'>Bestsellers in grocery</h2>
        <p className='see_all'>See all <ArrowRightIcon /> </p>
      </div>
      <div className="home">
        <div className="home__container">
          <div className="home__row">
            <Product
              id="12321341"
              title="Green Leaf"
              subtitle="(1kg)"
              price={30.00}
              rating={5}
              image="https://images.unsplash.com/photo-1533321942807-08e4008b2025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              productInfo="Shelf Life: Best before 2 days from packaging/Manufacture"
              productInfoMain="Lorem2 ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product."
              disclaimer="Lorem3 ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product."

            />
            <Product
              id="12321341"
              title="Strawberry"
              subtitle="(1kg)"
              price={30.00}
              rating={5}
              image="https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/berries-1851511_1920.jpg"
              productInfo="Shelf Life: Best before 3 days from packaging/Manufacture"
              productInfoMain="Lorem4 ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product."
              disclaimer="Lorem5 ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product."

            />
            <Product
              id="12321341"
              title="Apple"
              subtitle="(1kg)"
              price={30.00}
              rating={5}
              image="https://www.treehugger.com/thmb/yLdK6RTlFDfgjAYzydMkstSGcus=/1280x800/filters:fill(auto,1)/herofruitedit-7e603ba24b4d46a5a60cd7974a90fba6.jpg"
              productInfo="Shelf Life: Best before 4 days from packaging/Manufacture"
              productInfoMain="Lorem6 ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product."
              disclaimer="Lorem7 ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product."
            />
            <Product
              id="12321341"
              title="Tomato"
              subtitle="(1kg)"
              price={30.00}
              rating={5}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwKiV81c28qNrajop_3tqIdk4_eHz1_Z_nDw&usqp=CAU"
              productInfo="Shelf Life: Best before 5 days from packaging/Manufacture"
              productInfoMain="Lorem8 ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product."
              disclaimer="Lorem9 ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product."

            />
            <Product
              id="12321341"
              title="Cabbage"
              subtitle="(1kg)"
              price={30.00}
              rating={5}
              image="https://thumbs.dreamstime.com/z/single-green-cabbage-fruit-isolated-white-12756333.jpg"
              productInfo="Shelf Life: Best before 6 days from packaging/Manufacture"
              productInfoMain="Lorem10 ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product."
              disclaimer="Lorem11 ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product."

            />
            <Product
              id="12321341"
              title="Pumpkin"
              subtitle="(1kg)"
              price={30.00}
              rating={5}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlBxXZ3K3IFiScO9wPnRrID9t1VUoDxRC2MjoY2eLfPXOfGJGVvjheef04xoEZNzmLy8&usqp=CAU"
              productInfo="Shelf Life: Best before 7 days from packaging/Manufacture"
              productInfoMain="Lorem12 ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product."
              disclaimer="Lorem13 ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product."

            />





          </div>




        </div>
      </div>

    </>
  )
}

export default AllProducts
