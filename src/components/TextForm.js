import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Upper Case Is Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLoClick = ()=>{
        console.log("Lower Case Is Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }

    const handleClearText = ()=>{
        console.log("Clear Text Clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text is Cleared", "success")
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text is Copied", "success")
    }


    const handleExtraSpaces =() => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("ExtraSpaces has Been Removed", "success")
    }
const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
}
    const[text , setText] = useState('Enter text Here');
    
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
     <h1 className="mb-3">{props.heading}</h1>
     
<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'lightgrey':'white'}} id="myBox" rows="8"></textarea>

</div>

<button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleUpClick} >Convert to UpperCase</button>

<button disabled={text.length===0}  className="btn btn-info mx-2 my-1" onClick={handleLoClick} >Convert to LowerCase</button>
<button  disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleClearText} >Clear Text</button>
<button  disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleCopy} >Copy Text</button>
<button disabled={text.length===0}  className="btn btn-info mx-2 my-1" onClick={handleExtraSpaces} >Remove Extra Space</button>




    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} )words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview:</h2>
        <p>{text.length>0?text:"Enter Something to Preview"}</p>
    </div>
    </>
  )
}
