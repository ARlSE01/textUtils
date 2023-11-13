import React, { useState } from 'react';

export default function TextForm() {
    const [text, newstr] = useState("Enter text here");
    const handleonclick=(event)=>{
        event.preventDefault()
        let newtext=text.toUpperCase()
        newstr(newtext)
    }
    const handleonchange=(event)=>{
        newstr(event.target.value)
    }
  return (
    <div>
      <form>
      
      <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Enter text to analyze</b></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleonchange}  rows="5"></textarea>
</div>
  <button className="btn btn-primary" onClick={handleonclick}>Convert to Uppercase</button>
</form>
    </div>
  )
}
