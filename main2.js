class Usuario {
    
    constructor(email,senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isadmin(){
        return this.admin;
    }
}

class Admin extends Usuario {
    
    constructor(){
        super();
        this.admin = true;
    }
}

const User1 = new Usuario("iprates22@gmail.com","1234");
const Adm1  = new Admin("iprates22@gmail.com","1234");

console.log(User1.isadmin());
console.log(Adm1.isadmin());




