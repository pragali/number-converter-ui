import React from 'react'

export const Users = ({users}) => {

    console.log('users length:::', users.length)
    if (users.length === 0) return null

    const UserRow = (user,index) => {

        return(
              <tr >
                  
                  <td>{user.decimal}</td>
                  <td>{user.binary}</td>
                  <td>{user.romanNumeral}</td>
                  <td>{user.words}</td>
                  
              </tr>
          )
    }

   // const userTable = users.map((user,index) => UserRow(user,index))

    return(
        
        <div className="container">
           
            <h2>Result</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                  
                    <th>Decimal</th>
                    <th>Binary</th>
                    <th>RomanNumeral</th>
                    <th>Words</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{users.decimal}</td>
                    <td>{users.binary}</td>
                    <td>{users.romanNumeral}</td>
                    <td>{users.word}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}