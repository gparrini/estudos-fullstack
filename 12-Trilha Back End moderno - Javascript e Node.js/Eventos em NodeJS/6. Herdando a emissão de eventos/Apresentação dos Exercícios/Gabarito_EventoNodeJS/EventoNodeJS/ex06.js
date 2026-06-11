//? Exercício 6: Crie um sistema de login que herda de EventEmitter. O sistema deve emitir
//? um evento loginAttempt toda vez que uma tentativa de login é feita. Se o usuário e senha
//? forem corretos, emita o evento loginSuccess, caso contrário, loginFailure. Use um
//? callback para simular uma operação assíncrona (como consultar um banco de dados) que leva
//? 1 segundo.

//TODO Crie um sistema de login que herda de EventEmitter.
const EventEmitter = require("events");

class SistemaLogin extends EventEmitter {
  constructor() {
    super();
    this.usuarioCorreto = "admin";
    this.senhaCorreta = "12345";
  }
  //TODO O sistema deve emitir um evento loginAttempt toda vez que uma tentativa de login é feita.
  tentativaLogin(usuario, senha) {
    this.emit("loginAttempt", usuario);

    //TODO Simulação Assíncrona + dois métodos loginSucess e loginFailure - 1 SEGUNDO
    setTimeout(() => {
      if (usuario == this.usuarioCorreto && senha === this.senhaCorreta) {
        this.emit("loginSucess", usuario);
      } else {
        this.emit("loginFailure", usuario);
      }
    }, 1000); // Simulando operação Assíncrona.
  }
}

const login = new SistemaLogin();

//TODO Escutar o evento loginAttempt
login.on("loginAttempt", (usuario) => {
  console.log(`Tentativa de login do usuário: ${usuario}`);
});

//TODO Escutar o evento loginSucess
login.on("loginSucess", (usuario) => {
  console.log(`Login bem-sucedido para o usuário: ${usuario}`);
});
//TODO Escutar o evento loginFailure
login.on("loginFailure", (usuario) => {
  console.log(`Falha na tentativa de login do usuário: ${usuario}`);
});

//TODO Testar o método
// login.tentativaLogin("admin", "12345"); // sucesso
// login.tentativaLogin("admin", "12"); //falhou
// login.tentativaLogin("user", "12"); //falhou
login.tentativaLogin("user", "12345"); //falhou
