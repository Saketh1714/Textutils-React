import React,{useState} from 'react'

export default function TextForm(props) {

    const handleuponclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase!","success");
        

    }
  const handleonchange=(event)=>{
    setText(event.target.value);
  }

  const handlelowclick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!","success");
  }
  const handleclearclick=()=>{
    let newText="";
    setText(newText);       
     props.showAlert("text has been cleared","success");
  }
  const handleextraspaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces remoevd","success");
  }
  const handlecopytext=()=>{
    // var text=document.getElementById("myBox");
    // text.ariaSelected();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!","success");

  }
    const [text,setText]=useState("");
    // setText("new Text");
  return (
        <> 
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange}  style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>

           </div>
           <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleuponclick}>Convert to UpperCase</button>
           <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowclick}>Convert to LowerCase</button>
           <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearclick}>Clear text</button>
           <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleextraspaces}>Remove extra spaces</button>
           <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopytext}>Copy text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
