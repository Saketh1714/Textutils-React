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
    const [text,setText]=useState("");
    // setText("new Text");
  return (
        <> 
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>

           </div>
           <button className="btn btn-primary mx-2" onClick={handleuponclick}>Convert to UpperCase</button>
           <button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert to LowerCase</button>
           <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear text</button>
           <button className="btn btn-primary mx-2" onClick={handleextraspaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text above to preview it here"}</p>
    </div>
    </>
  )
}
