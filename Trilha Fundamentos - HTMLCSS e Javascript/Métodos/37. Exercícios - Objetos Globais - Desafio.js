// Desafio: Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano).
// Exiba o resultado no console.

// 2024-10-07 - UTC
// Data formatada no padrão brasileiro: 07/10/2024 - UTC 3

function formatarPadraoBrasileiro(dataString) {
  //Divide a string da data
  let data = new Date(dataString + "T00:00:00");
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();

  const dataFormata = `${dia}/${mes}/${ano}`;
  console.log(`Essa data é formatada: ${dataFormata}`);
}

// formatarPadraoBrasileiro("2024-10-07T00:00:00");

let data1 = "2024-10-07";
let data2 = "2023-08-22";
let data3 = "2024-01-13";

//DINÂMICA
formatarPadraoBrasileiro(data1);
formatarPadraoBrasileiro(data2);
formatarPadraoBrasileiro(data3);

function formatarPadraoMetodoNumber(dataString) {
  //Dividir a string data
  let partesDaData = dataString.split("-");
  //   console.log(partesDaData);

  //Converter para number
  let ano = parseInt(partesDaData[0]);
  let mes = parseInt(partesDaData[1]);
  let dia = parseInt(partesDaData[2]);

  let dataFormata = `${dia}/${mes}/${ano}`; // não é uma Data - O TIPO DADO - não está vindo do Objeto Date.
  console.log(dataFormata + " Por métodos de number e string.");
  //   console.log(dataFormata.getDate());
}

// formatarPadraoMetodoNumber(data1);

function formatarPadraoBrasileiroDate(dataString) {
  let data = new Date(dataString + "T00:00:00");

  let dataFormatada = data.toLocaleDateString("pt-BR");
  console.log("Data formatada no padrão brasileiro: " + dataFormatada);
}

formatarPadraoBrasileiroDate(data1);
formatarPadraoBrasileiroDate(data2);
formatarPadraoBrasileiroDate(data3);
