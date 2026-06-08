// function BankAccount(personName, initialBalance, address) {
//   this.personName = personName;
//   this.initialBalance = initialBalance;
//   this.address = address;

//   this.printInfo = function () {
//     console.log(`Essa conta pertence a ${this.personName}, 
//       residente do endereço '${this.address}' e possui um saldo atual de 
//       ${Number(this.balance).toFixed(2)} reais.`);
//   };
// }

// const ba1 = new BankAccount("Daniel", 2000, 'Rua que sobe e desce');

// ba1.printInfo();
// console.log(typeof ba1);
// console.log(ba1 instanceof BankAccount);


class BankAccount {
  constructor(personName, initialBalance, address) {
    this.personName = personName;
    this.balance = initialBalance;
    this.address = address;
  }

  printInfo() {
    console.log(`Essa conta pertence a ${this.personName}, residente do endereço '${this.address}' e possui um saldo atual de ${Number(this.balance).toFixed(2)} reais.`)
  }
}

const ba1 =  new BankAccount("Daniel", 2000, 'Rua que sobre e desce');

ba1.printInfo();
console.log(typeof ba1);
console.log(ba1 instanceof BankAccount);