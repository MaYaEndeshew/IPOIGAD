import "./write.css"
import img2 from "../.././assets/pexels-tara-winstead-7723607.jpg"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src={img2} alt=""/>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>

                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                    
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell Your story...." type="text" className="writeInput writeText" ></textarea>

                </div>
                <button className="writeSubmit">Publish</button>

            </form>
            
        </div>
    )
}
