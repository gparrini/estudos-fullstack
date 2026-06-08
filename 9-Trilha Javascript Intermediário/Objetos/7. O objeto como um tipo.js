function BankAccount(personName, initialBalance, address) {
  this.personName = personName;
  this.initialBalance = initialBalance;
  this.address = address;
}

const acc1 = new BankAccount("Daniel", 200, 'rua que sobe e desce');
console.log(acc1);
console.log(typeof acc1);

const acc2 = new BankAccount("Lira", 200000, "Broadway");
console.log(acc2);
