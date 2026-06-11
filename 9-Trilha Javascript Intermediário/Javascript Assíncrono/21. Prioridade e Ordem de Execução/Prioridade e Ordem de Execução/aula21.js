// 1ª Tarefa síncrona
console.log("Início"); // 1º execução

// 1ª macrotasks - Adicionada à fila de macrotasks.
setTimeout(() => {
  console.log("setTimeout 1");
}, 0); // 7º execução - 1º macro da fila

// 1ª microtasks - Adiciona à fila de microtasks.
Promise.resolve().then(() => {
  console.log("Promise 1"); // 3º execução - 1ª micro da fila
});

// 2ª microtasks - Adiciona à fila de microtasks.
queueMicrotask(() => {
  console.log("queueMicrotask 1"); // 4º execução- 2ª micro da fila
});

//Criando queueMicrotask Com Promise - ?? (3ª microtasks - fila das microtasks)
queueMicrotask(() => {
  Promise.resolve().then(() => console.log("queueMicrotask 2"));
}); // 6ª execução - 4ª micro da fila

// 2ª macrotasks - Adiciona à fila de macrotasks.
setTimeout(() => {
  console.log("setTimeout 2"); 
}, 0); // 8º execução - 2º fila de macro

//Criando queueMicrotask com setTimeout - ?? (4ª microtasks - fila das microtasks- ERRADO) - 3ª tarefa macro
queueMicrotask(() => {
  setTimeout(() => console.log("queueMicrotask 3"), 0);
}); // 9º execução - 3º fila de macro

// 5ª microtasks
Promise.resolve().then(() => {
  console.log("Promise 2"); // 5º execução - 3ª micro da fila
});

// 2ª Tarefa síncrona
console.log("Fim"); // 2º execução
