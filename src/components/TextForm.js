import React, {useState} from 'react';


const TextForm = (props) =>{
    const [text, setText] = useState("enter the value")

    const handleOnclickUpper = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        if(newText.length > 0){
            props.showAlert('Fonts are converterd in UpperCase', 'success')
        }
        else{
            props.showAlert('Textbox is empty', 'warning')
        }
    }
    const handleOnclickLower = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Fonts are converterd in Lowercase', 'success')
    }
    const clearText = () =>{
        let newText = '';
        setText(newText)
        props.showAlert('textBox has been cleared', 'success')
    }
    const handleOnchange = (e) =>{
        setText(e.target.value)
    }
    
    
    return (
        <>
        <div className="container my-3" style={{ color : props.mode == 'light' ? '#000' : '#fff'  }} >
            <h1>Hiren is here</h1>
            <textarea className={`form-control ${props.mode == 'light' ? '' :  'bg-dark text-light'}`} onChange={handleOnchange} value={text} rows="3"></textarea>
            <button className="btn btn-primary my-3" onClick={handleOnclickUpper}>Click Here to convert in upper</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleOnclickLower}>Click Here to conver lower</button>
            <button className="btn btn-primary my-3 mx-2" onClick={clearText}>Clear all text</button>
        </div>
        <div className="container my-3" style={{ color : props.mode == 'light' ? '#000' : '#fff'  }}>
            <h1>Your text summary</h1>
            <p>{text.length == 0 ? 0 : text.trim().split(" ").length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text}</p>

        </div>
        </>
    );
}

export default TextForm;