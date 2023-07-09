import React from 'react'


const ConvertRoman = ({onChangeForm, convertRoman }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Decimal to Roman</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Binary</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="decimal" id="decimal" aria-describedby="emailHelp" placeholder="Decimal" />
                        </div>
                       
                    </div>
                    
                    <button type="button" onClick= {(e) => convertRoman()} className="btn btn-danger">Convert</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default ConvertRoman