// CALLBACK HELL

async function tarefa1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarefa 1 concluída");
      resolve();
    }, 1000);
  });
}

async function tarefa2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarefa 2 concluída");
      resolve();
    }, 1000);
  });
}

async function tarefa3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarefa 3 concluída");
      resolve();
    }, 1000);
  });
}

//Resolução Async/Await
async function realizarTarefas() {
  await tarefa1();
  await tarefa2();
  await tarefa3();
}

realizarTarefas();

// Resolução Promises
// tarefa1()
//   .then(() => tarefa2())
//   .then(() => tarefa3())
//   .then(() => console.log("Todas as tarefas concluídas"));

// Encadeamento de callbacks
// tarefa1(() => {
//   tarefa2(() => {
//     tarefa3(() => {
//       console.log("Todas as tarefas concluídas");
//     });
//   });
// });

//Callback Hell - exemplo
// tarefa1(() => {
//     tarefa2(() => {
//       tarefa3(() => {
//         tarefa4(() => {
//             tarefa5(() => {
//               tarefa6(() => {
//                 tarefa7(() => {
//                     tarefa8(() => {
//                       tarefa9(() => {
//                         tarefa10(() => {
//                             tarefa11(() => {
//                               tarefa12(() => {
//                                 tarefa13(() => {
//                                     tarefa14(() => {
//                                       tarefa15(() => {
//                                         console.log("Todas as tarefas concluídas");
//                                       });
//                                     });
//                                   });
//                               });
//                             });
//                           });
//                       });
//                     });
//                   });
//               });
//             });
//           });
//       });
//     });
//   });
