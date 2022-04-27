// database
database={
    1000:{acno:1000,uname:"Niya",password:1000,balance:5000,transaction:[]},
    1001:{acno:1001,uname:"Niva",password:1001,balance:3000,transaction:[]},
    1002:{acno:1002,uname:"Miya",password:1002,balance:4000,transaction:[]}
}

// register - index.js will give uname,acno,password
const  register=(uname,acno,password)=>{

    if(acno in database){
      //already exist acno
      return false
    }
    else{
      //add details into db
      database[acno]={
        acno,
        uname,
        password,
        balance:0,
        transaction:[]
      }
      console.log(database);
      return true
      
    }
}

// export
module.exports={
    register
}