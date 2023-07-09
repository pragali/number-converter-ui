
export async function getResult() {
   //const romanNumeral = data.users.romanNumeral
   console.log('getAllUsers called!')
   const response = await fetch(`http://localhost:8070/convert/roman/13`, {
    method: 'GET',
    headers : {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"      
    }
    //body: JSON.stringify({user: data})
  })
  return await response.json();
}

export async function convertBinary(data) {
    const decimal = data.binary
    console.log('binary convert called!' + decimal)
    try{
   const response = await fetch(`http://localhost:8070/convert/binary/`+decimal, {
    method: 'GET',
    headers : {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"      
    }
    //body: JSON.stringify({user: data})
  })
  return await response.json();
} catch (error) {
    console.error("Invalid input")
  }
}

export async function convertRoman(data) {
    const decimal = data.decimal
    console.log('convertRoman called!' + decimal)
    try{
   const response = await fetch(`http://localhost:8070/convert/roman/`+decimal, {
    method: 'GET',
    headers : {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"      
    }
    //body: JSON.stringify({user: data})
  })
  return await response.json();
} catch (error) {
    console.error("Invalid input")
  }
}

export async function convertWords(data) {
    const roman = data.roman
    console.log('convertRoman called!' + roman)
    try{
   const response = await fetch(`http://localhost:8070/convert/words/`+roman, {
    method: 'GET',
    headers : {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"      
    },
    
    //body: JSON.stringify({user: data})
  })
  return await response.json();
    } catch (error) {
      console.error("Invalid input")
    }
  }
