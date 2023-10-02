class User {
  constructor(fullname, email, password){
    this.fullname = fullname
    this.email = email
    this.password = password
  } 
  
  login(email, password){
    if (this.email === email && this.password === password){
      console.log("Login realizado com sucesso!")
    } else {
    console.log("Falaho ao fazer login, senha ou email incorretos!")
    }
  }
}

const jhon = new User("Jhon Doe", "jhon@email.com", "1234")

console.log(jhon)
jhon.login("jhon@email.com", "1234")