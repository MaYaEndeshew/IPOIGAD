import React from 'react'
import { Link } from "react-router-dom";
import picfile1 from "../../assets/ucodegirl.png";
import picfile2 from "../../assets/cancer2.jpg";
import picfile3 from "../../assets/ribbon.jpg";
import picfile4 from "../../assets/igad.jpg";
import picfile5 from "../../assets/ucodework.png";
import "../About/aboutelement.css"
import Aboutsec from '../About/Aboutsec';
import { InfoData, InfoDataTwo } from '../About/dataInfo';

const About = () => {

    return (
        <>
            <div className="grid">
                <h1 id="title">About Us</h1>
                <ul id="hexGrid">
                    <li className="hex">
                        <div className="hexIn">
                            <Link className="hexLink" to="/">
                                <div className='img'><img src={picfile1} alt="logo..." /></div>
                                <h1 id="demo1">Who We are</h1>
                                <p id="demo2">For more info check out the info section below</p>
                            </Link>
                        </div>
                    </li>

                    <li className="hex">
                        <div className="hexIn">
                            <Link className="hexLink" to="/">
                                <div className='img'> <img src={picfile2} alt="logo..." /></div>
                                <h1 id="demo1">Our Work</h1>
                                <p id="demo2">For more info check out the info section below</p>
                            </Link>
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn">
                            <Link className="hexLink" to="/">
                                <div className='img'> <img src={picfile3} alt="logo..." /></div>
                                <h1 id="demo1">Stories</h1>
                                <p id="demo2">For more info check out the info section below</p>
                            </Link>
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn">
                            <Link className="hexLink" to="/">
                                <div className='img'><img src={picfile4} alt="logo..." /></div>
                                <h1 id="demo1">Partners</h1>
                                <p id="demo2">For more info check out the info section below</p>
                            </Link>
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn">
                            <Link className="hexLink" to="/">
                                <div className='img' > <img src={picfile5} alt="logo..." /></div>
                                <h1 id="demo1">Community</h1>
                                <p id="demo2">For more info check out the info section below </p>
                            </Link>
                        </div>
                    </li>

                </ul>
            </div>
            <Aboutsec id="infosec1"{...InfoData} />
            <Aboutsec id="infosec2"{...InfoDataTwo} />
            <Aboutsec id="infosec3"{...InfoData} />
            <Aboutsec id="infosec4"{...InfoDataTwo} />
            <Aboutsec id="infosec5"{...InfoData} />



        </>
    )
}

export default About;
