import React from 'react'


const ConvertWords = ({onChangeForm, convertWords }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Roman to Words</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">RomanNumeral</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="roman" id="roman" aria-describedby="emailHelp" placeholder="RomanNumeral" />
                        </div>
                       
                    </div>
                    
                    <button type="button" onClick= {(e) => convertWords()} className="btn btn-danger">Convert</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default ConvertWords