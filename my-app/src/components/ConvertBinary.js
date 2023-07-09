import React from 'react'


const CreateUser = ({onChangeForm, convertBinary }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Binary to Roman</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Decimal</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="binary" id="binary" aria-describedby="emailHelp" placeholder="Decimal" />
                        </div>
                       
                    </div>
                    
                    <button type="button" onClick= {(e) => convertBinary()} className="btn btn-danger">Convert</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser