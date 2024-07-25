import React, { useContext, useState } from 'react'
import '../App.css'
import { ThemeContext } from '../ThemeContext';

function Page() {
    

    const {theme, moon, handleClick, Click} = useContext(ThemeContext);
    return (
        <>
            <div className='background' style={{background:theme=='light'? 'white': '#1B1212', color:theme=='light'? 'black': '#ffff'}}>
                <div className="card">
                    <div className="header">
                        <h2>Logo</h2>
                        <div className="right">
                            <ul>
                                <li>{moon?(<i className="ri-sun-fill" onClick={handleClick}></i>):(<i className="ri-sun-line" onClick={Click}></i>)}</li>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <div className="left-container">
                            <div className="head">
                                <h2>Hi, I am a Dangerous Animal</h2>
                            </div>
                            <div className="para">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In eos dolorem placeat! Eum vel unde, commodi nisi placeat, itaque dignissimos libero a consectetur laudantium delectus officia nulla fugit sit aliquam?</p>
                            </div>
                            <div className="btn"><button>Animal</button></div>
                        </div>
                        <div className="right-container">
                            <div className="image">
                                <img src='https://cdn.pixabay.com/photo/2022/02/22/23/07/background-7029732_640.png' alt='Image' />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Page
