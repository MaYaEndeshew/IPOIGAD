import "./header.css"
import img2 from "../.././assets/pexels-klaus-nielsen-6303696.jpg"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">A Cancer Awarness</span>
                <span className="headerTitleLg">Blog</span>

            </div>
            <img className="headerImg" src={img2} alt=""/>
            
        </div>
    )
}

