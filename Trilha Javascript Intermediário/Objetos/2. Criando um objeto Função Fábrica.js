//Função Fábrica - Factory Function

function createAccount(username, accountNumber, initialBalance) {
  return {
    name: username,
    accountNumber,
    balance: initialBalance,
    displayBalance: function () {
      console.log(`account number ${this.accountNumber} has a total balance of ${this.balance}`)
    }
  }
};

const account1 = createAccount("Daniel Porto", "12345678-9", 500);
console.log(account1);
account1.displayBalance();

const account2 = createAccount("João Lira", "98765432-1", 50000);
console.log(account2);
account2.displayBalance();