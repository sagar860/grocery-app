import React from 'react';
// import { images } from './categoryapi';
import "./Category.css";
import {Link} from "react-router-dom"



function Category() {
    return (
        <>
            <h1 className='main_title'>Shop by category</h1>
            <div className='category_products'>
                <div className='category'>
                  <Link to="/viewall">
                        <div className='category_image'>
                            <img src="https://images.unsplash.com/photo-1616364851431-b8c1de89d315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9yZ2FuaWMlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..." className="rounded-circle categorymain_image" />
                            <h6 className='category_title'>View All</h6>
                        </div>
                    
                        </Link>
                        <Link to="/vegetables">
                    <div className='category_image'>
                        <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b3JnYW5pYyUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="..." className="rounded-circle categorymain_image" />
                        <h6 className='category_title'>Vegetables</h6>


                    </div>
                    </Link>
                    <Link to="/fruits">
                    <div className='category_image'>
                        <img src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="..." className="rounded-circle categorymain_image" />
                        <h6 className='category_title'>Fresh Fruits</h6>


                    </div>
                    </Link>
                    <Link to="./meats">
                    <div className='category_image'>
                        <img src="https://images.unsplash.com/photo-1470072768013-bf9532016c10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG9yZ2FuaWMlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..." className="rounded-circle categorymain_image" />
                        <h6 className='category_title'>Fresh Meats</h6>


                    </div>
                    </Link>
                    <Link to="/healthyfood">
                    <div className='category_image'>
                        <img src="https://images.unsplash.com/photo-1616364851431-b8c1de89d315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9yZ2FuaWMlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..." className="rounded-circle categorymain_image" />
                        <h6 className='category_title'>Healthy</h6>


                    </div>
                    </Link>
                    <Link to="/organicfood">
                    <div className='category_image'>
                        <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b3JnYW5pYyUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="..." className="rounded-circle categorymain_image" />
                        <h6 className='category_title'>Organic</h6>


                    </div>
                    </Link>
                    <Link to="/viewall">
                        <div className='category_image'>
                            <img src="https://images.unsplash.com/photo-1616364851431-b8c1de89d315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9yZ2FuaWMlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..." className="rounded-circle categorymain_image" />
                            <h6 className='category_title'>View All</h6>
                        </div>
                    
                        </Link>
                        <Link to="/vegetables">
                    <div className='category_image'>
                        <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b3JnYW5pYyUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="..." className="rounded-circle categorymain_image" />
                        <h6 className='category_title'>Vegetables</h6>


                    </div>
                    </Link>
                    <Link to="/fruits">
                    <div className='category_image'>
                        <img src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="..." className="rounded-circle categorymain_image" />
                        <h6 className='category_title'>Fresh Fruits</h6>


                    </div>
                    </Link>
                    <Link to="./meats">
                    <div className='category_image'>
                        <img src="https://images.unsplash.com/photo-1470072768013-bf9532016c10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG9yZ2FuaWMlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..." className="rounded-circle categorymain_image" />
                        <h6 className='category_title'>Fresh Meats</h6>


                    </div>
                    </Link>
                    <Link to="/healthyfood">
                    <div className='category_image'>
                        <img src="https://images.unsplash.com/photo-1616364851431-b8c1de89d315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9yZ2FuaWMlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..." className="rounded-circle categorymain_image" />
                        <h6 className='category_title'>Healthy</h6>


                    </div>
                    </Link>
                    <Link to="/organicfood">
                    <div className='category_image'>
                        <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b3JnYW5pYyUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="..." className="rounded-circle categorymain_image" />
                        <h6 className='category_title'>Organic</h6>


                    </div>
                    </Link>
                   
                </div>
            </div>
        </>
    )
}


export default Category

