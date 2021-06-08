import React, { useState } from 'react';
import classes from './App.module.css';
import classicTee from './Data/classic-tee.jpg';
import ProductData from './Data/ProductData';


function App() {
    const [products] = useState([  //array of different sizes
        {
            size: 'S'
        },
        {
            size: 'M'
        },
        {
            size: 'L'
        },
    ])
    const [isShown, setIsShown] = useState(false);

    return (
        <div>
            <header>
                <nav className={classes.Topbar}>
                    <div>
                        <span onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}
                            onClick={() => setIsShown(true)}
                            className={classes.cartbtn}>
                            My cart({products.length})</span>
                    </div>
                    {isShown && (
                    <div className={classes.cart}>
                        <table className={classes.table}>
                            {products.map((products) => (
                                <tr className={classes.record}>
                                    <td className={classes.miniImg}>
                                        <img src={classicTee} alt="Product" />
                                    </td>
                                    <br></br>
                                    <td>
                                        <span className={classes.miniDesc}>
                                            {ProductData.title}
                                        </span>
                                        <br></br>
                                        <span className={classes.miniDesc}>
                                            1 X
                                </span>
                                        <span className={classes.miniPrice}>
                                            {ProductData.Price}
                                        </span>
                                        <br></br>
                                        <span className={classes.miniDesc}>
                                            Size: {products.size}
                                        </span>
                                        <br></br>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                    )}
                </nav>

            </header>
            {/* end of header */}


            <div className={classes.MainContainer}>
                <div className={classes.ProductPicture}>
                    <img src={classicTee} alt="Product" />
                </div>

                <div className={classes.ProductDetails}>
                    <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
                    <h2 className={classes.ProductPrice}>{ProductData.Price}</h2>
                    <p className={classes.ProductDesc}>{ProductData.Description}</p>

                    <div className={classes.Size}>
                        <span className={classes.SizeDesc}>SIZE</span>
                        <span className={classes.Star}>*</span>
                        <div>
                            <button className={classes.Buttons}>S</button>
                            <button className={classes.Buttons}>M</button>
                            <button className={classes.Buttons}>L</button>
                            <br></br>
                            <button className={classes.Add}>{ProductData.Add}</button>
                        </div>
                    </div>
                </div>



            </div>
        </div >
    );
}



export default App;