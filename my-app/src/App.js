import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Records'
import { DisplayBoard } from './components/DisplayBoard'
import ConvertBinary from './components/ConvertBinary'
import ConvertRoman from './components/ConvertRoman';
import ConvertWords from './components/ConvertWords';
import { getResult, convertBinary, convertRoman, convertWords } from './services/UserService'


function App() {

  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [numberOfUsers, setNumberOfUsers] = useState(0)


  const userCreate = (e) => {

      convertBinary(user)
        .then(response => {
          console.log(response);
          setUsers(response);
          //setNumberOfUsers(numberOfUsers)
      });
  }

  const romanConvert = (e) => {

    convertRoman(user)
      .then(response => {
        console.log(response);
        setUsers(response);
        //setNumberOfUsers(numberOfUsers)
    });
}

const wordsConvert = (e) => {

  convertWords(user)
    .then(response => {
      console.log(response);
      setUsers(response);
      //setNumberOfUsers(numberOfUsers)
  });
}

  const fetchAllUsers = () => {
    getResult()
      .then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
      });
  }

  useEffect(() => {
    getResult()
      .then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
      });
  }, [])

  const onChangeForm = (e) => {
      if (e.target.name === 'decimal') {
          user.decimal = e.target.value;
      }
      if (e.target.name === 'binary') {
        user.binary = e.target.value;
      }
      if (e.target.name === 'roman') {
        user.roman = e.target.value;
      }
      setUser(user)
  }
  
    
    return (
        <div className="App">
          <Header></Header>
          <div className="container mrgnbtm">
            <div className="row">
              <div className="col-md-4">
                  <ConvertBinary 
                    user={user}
                    onChangeForm={onChangeForm}
                    convertBinary={userCreate}
                    >
                  </ConvertBinary>
              </div>
              <div className="col-md-4">
                  <ConvertRoman 
                    user={user}
                    onChangeForm={onChangeForm}
                    convertRoman={romanConvert}
                    >
                  </ConvertRoman>
              </div>

              <div className="col-md-4">
                  <ConvertWords 
                    user={user}
                    onChangeForm={onChangeForm}
                    convertWords={wordsConvert}
                    >
                  </ConvertWords>
              </div>
             
            </div>
          </div>
          <div className="row mrgnbtm">
            <Users users={users}></Users>
          </div>
        </div>
    );
}

export default App;
