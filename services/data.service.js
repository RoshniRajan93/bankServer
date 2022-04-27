// database
database = {
    1000: { acno: 1000, uname: "Niya", password: 1000, balance: 5000, transaction: [] },
    1001: { acno: 1001, uname: "Niva", password: 1001, balance: 3000, transaction: [] },
    1002: { acno: 1002, uname: "Miya", password: 1002, balance: 4000, transaction: [] }
}

// register - index.js will give uname,acno,password
const  register = ( uname, acno, password ) => {

    if(acno in database){
      // already exist acno
      return {
        statusCode:401,
        status:false,
        message:"Account Number already exist..."
      }
    }
    else{
      // add details into db
      database[acno]={
        acno,
        uname,
        password,
        balance:0,
        transaction:[]
      }
      console.log(database);
      return {
        statusCode:200,
        status:true,
        message:"Successfully Registered... Please Login..."
      }
      
    }
}

//login
const login=(acno,pswd)=>{
  //user entered acno n pswd
  if(acno in database){
    if(pswd==database[acno]["password"]){
      
      currentUser=database[acno]["uname"]
      currentAcno=acno
      // already exist in db
      return {
        statusCode:200,
        status:true,
        message:"Login Successfull......."
      }
    }
    else{
      return {
        statusCode:422,
        status:false,
        message:"Incorrect Password....."
      }
    }
  }
  else{
    return {
      statusCode:401,
      status:false,
      message:"User dosenot exist...."
    }
  }   
}

//deposit
const deposit=(acno,pswd,amnt)=>{

  var amount=parseInt(amnt)
  if(acno in database){
    if(pswd==database[acno]["password"]){
      database[acno]["balance"]+=amount
      database[acno]["transaction"].push({
        type:"CREDIT",
        amount:amount
      })
      return {
        statusCode:200,
        status:true,
        message:"Successfully deposited.... And new balance is :"+database[acno]["balance"]
      }
    }
    else{
      return {
        statusCode:422,
        status:false,
        message:"Incorrect Password....."
      }
    }
  }
  else{
    return {
      statusCode:401,
      status:false,
      message:"User dosenot exist...."
    }
  }
}

// export
module.exports={
    register,
    login,
    deposit
}