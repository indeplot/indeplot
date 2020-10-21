import React, {useState} from 'react';
import MathJax from 'react-mathjax2'



function Equation(){

    const [content, setContent] = useState('');

    return (
        <div className="d-flex flex-column form-group col-sm-12">
            <div className="d-flex flex-column">   
                <div className="d-flex flex-row"> 
                    <h1> Equation</h1>
                    <button style={{margin: '10px', padding: '8px' }} className="btn btn-primary">Plot</button>
                </div>
                <textarea className="form-control form-control-lg"
                type="text" value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter a mathematical expression in Latex format"></textarea>
            </div>
        
        <MathJax.Context input='ascii'>
                <div style={{ marginTop: '16px', border: '1px solid #eee', padding: '8px' }} >
                    <MathJax.Node inline>{ content }</MathJax.Node>
                </div>
            </MathJax.Context>
        </div>
    );
}

export default Equation