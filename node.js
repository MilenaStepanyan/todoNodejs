// // // // // // /*
// // // // // //     oct 23 mon
// // // // // //     12:11Am
// // // // // //     by MS
// // // // // // */


  
// // // // // // const readline = require('readline');
// // // // // // const fs = require('fs');

// // // // // // const todoFile = 'todos.txt';

// // // // // // const rl = readline.createInterface({
// // // // // //   input: process.stdin,
// // // // // //   output: process.stdout,
// // // // // // });

// // // // // // function readTodos() {
// // // // // //     return (fs.readFileSync(todoFile, 'utf8') || '').split('\n').filter(Boolean);
// // // // // //   }
  

// // // // // // function writeTodos(todos) {
// // // // // //   fs.writeFileSync(todoFile, todos.join('\n'), 'utf8');
// // // // // // }

// // // // // // function showTodos(todos) {
// // // // // //   todos.forEach((todo, index) => {
// // // // // //     const [text, done] = todo.split(' - ');
// // // // // //     const status = done === 'done' ? 'done' : 'not done';
// // // // // //     console.log(`${index + 1}. ${text} - ${status}`);
// // // // // //   });
// // // // // // }

// // // // // // rl.question('Enter a command (read, add, update, mark-as-done, delete): ', (command) => {
// // // // // //   const todos = readTodos();

// // // // // //   if (command === 'read') {
// // // // // //     console.log('Todos:');
// // // // // //     showTodos(todos);
// // // // // //   } else if (command === 'add') {
// // // // // //     rl.question('Enter a new todo: ', (text) => {
// // // // // //       todos.push(`${text} - not done`);
// // // // // //       writeTodos(todos);
// // // // // //       console.log('Todo added.');
// // // // // //     });
// // // // // //   } else if (command === 'update') {
// // // // // //     rl.question('Enter the index of the todo to update: ', (indexStr) => {
// // // // // //       const index = parseInt(indexStr) - 1;
// // // // // //       if (!isNaN(index) && index >= 0 && index < todos.length) {
// // // // // //         rl.question('Enter the new text for the todo: ', (text) => {
// // // // // //           todos[index] = `${text} - not done`;
// // // // // //           writeTodos(todos);
// // // // // //           console.log('Todo updated.');
// // // // // //         });
// // // // // //       } else {
// // // // // //         console.log('Invalid index.');
// // // // // //         rl.close();
// // // // // //       }
// // // // // //     });
// // // // // //   } else if (command === 'mark-as-done') {
// // // // // //     rl.question('Enter the index of the todo to mark as done: ', (indexStr) => {
// // // // // //       const index = parseInt(indexStr) - 1;
// // // // // //       if (!isNaN(index) && index >= 0 && index < todos.length) {
// // // // // //         todos[index] = todos[index].replace('not done', 'done');
// // // // // //         writeTodos(todos);
// // // // // //         console.log('Todo status updated.');
// // // // // //       } else {
// // // // // //         console.log('Invalid index.');
// // // // // //         rl.close();
// // // // // //       }
// // // // // //     });
// // // // // //   } else if (command === 'delete') {
// // // // // //     rl.question('Enter the index of the todo to delete: ', (indexStr) => {
// // // // // //       const index = parseInt(indexStr) - 1;
// // // // // //       if (!isNaN(index) && index >= 0 && index < todos.length) {
// // // // // //         todos.splice(index, 1);
// // // // // //         writeTodos(todos);
// // // // // //         console.log('deleted');
// // // // // //       } else {
// // // // // //         console.log('er');
// // // // // //         rl.close();
// // // // // //       }
// // // // // //     });
// // // // // //   } else {
// // // // // //     console.log('err');
// // // // // //   }
// // // // // // });


// // // // // const readline = require('readline');
// // // // // const fs = require('fs');
// // // // // const path = require('path');

// // // // // const todoFile = path.resolve("todos.json")

// // // // // const rl = readline.createInterface({
// // // // //     input: process.stdin,
// // // // //     output: process.stdout,
// // // // //   });
// // // // // fs.readFile(todoFile,(err,data)=>{
 
// // // // //     let todos = JSON.parse(data);
// // // // //     rl.question('add todo ', (answer) => {
// // // // //         todos.push({text:answer,done:false})
// // // // //       fs.writeFile(todoFile,JSON.stringify(todos, null, 2),(writeErr)=>{
// // // // //         if (writeErr) {
// // // // //             console.error('Error writing todos.json:', writeErr);
// // // // //           } else {
// // // // //             console.log('Todo added.');
// // // // //           }
// // // // //           rl.close();
// // // // //       })
// // // // //       });
      
// // // // // })
// // // // // fs.readFile(todoFile, 'utf8', (err, data) => {
// // // // //   if (err) {
// // // // //     console.error('Error reading todos:', err);
// // // // //     return;
// // // // //   }

// // // // //   const todos = data.split('\n');
// // // // //   console.log('Todos:');
// // // // //   todos.forEach((todo, index) => {
// // // // //     console.log(`   ${index + 1}. ${todo}`);
// // // // //   });
// // // // // });
// // // // const readline = require('readline');
// // // // const fs = require('fs');
// // // // const path = require('path');

// // // // const todoFile = path.resolve("todos.json")

// // // // const rl = readline.createInterface({
// // // //     input: process.stdin,
// // // //     output: process.stdout,
// // // // });

// // // // fs.readFile(todoFile, 'utf8', (err, data) => {
// // // //     if (err) {
// // // //         console.error('Error reading todos:', err);
// // // //         return;
// // // //     }

// // // //     const todos = data.split('\n');
// // // //     console.log('Todos:');
// // // //     todos.forEach((todo, index) => {
// // // //         console.log(`   ${index + 1}. ${todo}`);
// // // //     });


// // // //     rl.question('add todo ', (answer) => {
// // // //         todos.push(answer);
// // // //         fs.writeFile(todoFile, todos.join('\n'), (writeErr) => {
// // // //             if (writeErr) {
// // // //                 console.error('Error writing todos:', writeErr);
// // // //             } else {
// // // //                 console.log('Todo added.');
// // // //             }
// // // //             rl.close();
// // // //         });
// // // //     });
// // // // });
// // // const readline = require('readline');
// // // const fs = require('fs');
// // // const path = require('path');

// // // const todoFile = path.resolve('todos.json');

// // // const rl = readline.createInterface({
// // //   input: process.stdin,
// // //   output: process.stdout,
// // // });

// // // fs.readFile(todoFile, 'utf8', (err, data) => {
// // //   if (err) {
// // //     console.error('Error reading todos:', err);
// // //     return;
// // //   }

// // //   let todos = data.split('\n');
// // //   console.log('Todos:');
// // //   todos.forEach((todo, index) => {
// // //     console.log(`   ${index + 1}. ${todo}`);
// // //   });

// // //   rl.question('Enter a command (add, update): ', (command) => {
// // //     if (command === 'add') {
// // //       rl.question('Enter a new todo: ', (newTodo) => {
// // //         todos.push(newTodo);
// // //         updateTodosAndClose();
// // //       });
// // //     }else if (command === 'update') {
// // //         rl.question('Enter the index of the todo to update: ', (indexStr) => {
// // //           const index = parseInt(indexStr) - 1;
// // //           if (isNaN(index) || index < 0 || index >= todos.length) {
// // //             console.log('Invalid index.');
// // //             rl.close();
// // //           } else {
// // //             rl.question('Enter the new text for the todo: ', (newText) => {
// // //               todos[index] = newText;
// // //               fs.writeFile(todoFile, todos.join('\n'), (writeErr) => {
// // //                 if (writeErr) {
// // //                   console.error('Error writing todos:', writeErr);
// // //                 } else {
// // //                   console.log('Todo updated.');
// // //                 }
// // //                 rl.close();
// // //               });
// // //             });
// // //           }
// // //         });
// // //       } else {
// // //       console.log('Invalid command.');
// // //       rl.close();
// // //     }
// // //   });

// // //   function updateTodosAndClose() {
// // //     fs.writeFile(todoFile, todos.join('\n'), (writeErr) => {
// // //       if (writeErr) {
// // //         console.error('Error writing todos:', writeErr);
// // //       } else {
// // //         console.log('Todo updated.');
// // //       }
// // //       rl.close();
// // //     });
// // //   }
// // // });
// // const readline = require('readline');
// // const fs = require('fs');
// // const path = require('path');

// // const todoFile = path.resolve('todos.json');

// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout,
// // });

// // fs.readFile(todoFile, 'utf8', (err, data) => {
// //   if (err) {
// //     console.error('Error reading todos:', err);
// //     return;
// //   }

// //   let todos = data.split('\n');
// //   console.log('Todos:');
// //   todos.forEach((todo, index) => {
// //     console.log(`   ${index + 1}. ${todo}`);
// //   });

// //   rl.question('Enter a command (add, update): ', (command) => {
// //     if (command === 'add') {
// //       rl.question('Enter a new todo: ', (newTodo) => {
// //         todos.push(newTodo);
// //         updateTodosAndClose();
// //       });
// //     } else if (command === 'update') {
// //       rl.question('Enter the index of the todo to update: ', (indexStr) => {
// //         const index = parseInt(indexStr) - 1;
// //         if (isNaN(index) || index < 0 || index >= todos.length) {
// //           console.log('Invalid index.');
// //           rl.close();
// //           return;
// //         }

// //         rl.question('Enter the new text for the todo: ', (newText) => {
// //           todos[index] = newText;
// //           updateTodosAndClose();
// //         });
// //       });
// //     } else {
// //       console.log('Invalid command.');
// //       rl.close();
// //     }
// //   });

// //   function updateTodosAndClose() {
// //     fs.writeFile(todoFile, todos.join('\n'), 'utf8', (writeErr) => {
// //       if (writeErr) {
// //         console.error('Error writing todos:', writeErr);
// //       } else {
// //         console.log('Todo updated.');
// //       }
// //       rl.close();
// //     });
// //   }
// // });
// const readline = require('readline');
// const fs = require('fs');
// const path = require('path');

// const todoFile = path.resolve('todos.json');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function loadTodos() {
//   try {
//     const data = fs.readFileSync(todoFile, 'utf8');
//     return data ? data.split('\n') : [];
//   } catch (err) {
//     return [];
//   }
// }

// function saveTodos(todos) {
//   fs.writeFileSync(todoFile, todos.join('\n'), 'utf8');
// }

// function showTodos(todos) {
//   todos.forEach((todo, index) => {
//     console.log(`   ${index + 1}. ${todo}`);
//   });
// }

// const todos = loadTodos();
// console.log('Todos:');
// showTodos(todos);

// rl.question('Enter a command (add, update, mark-as-done, delete): ', (command) => {
//   if (command === 'add') {
//     rl.question('Enter a new todo: ', (newTodo) => {
//       todos.push(newTodo);
//       saveTodos(todos);
//       console.log('Todo added.');
//       rl.close();
//     });
//   } else if (command === 'update') {
//     rl.question('Enter the index of the todo to update: ', (indexStr) => {
//       const index = parseInt(indexStr) - 1;
//       if (!isNaN(index) && index >= 0 && index < todos.length) {
//         rl.question('Enter the new text for the todo: ', (newText) => {
//           todos[index] = newText;
//           saveTodos(todos);
//           console.log('Todo updated.');
//           rl.close();
//         });
//       } else {
//         console.log('Invalid index.');
//         rl.close();
//       }
//     });
//   } else if (command === 'mark-as-done') {
//     rl.question('Enter the index of the todo to mark as done: ', (indexStr) => {
//       const index = parseInt(indexStr) - 1;
//       if (!isNaN(index) && index >= 0 && index < todos.length) {
//         const todo = todos[index];
//         const parts = todo.split(' - ');
//         const text = parts[0];
//         const status = parts[1].trim().toLowerCase();
//         todos[index] = `${text} - ${status === 'done' ? 'not done' : 'done'}`;
//         saveTodos(todos);
//         console.log('Todo status updated.');
//         rl.close();
//       } else {
//         console.log('Invalid index.');
//         rl.close();
//       }
//     });
//   } else if (command === 'delete') {
//     rl.question('Enter the index of the todo to delete: ', (indexStr) => {
//       const index = parseInt(indexStr) - 1;
//       if (!isNaN(index) && index >= 0 && index < todos.length) {
//         todos.splice(index, 1);
//         saveTodos(todos);
//         console.log('Todo deleted.');
//         rl.close();
//       } else {
//         console.log('Invalid index.');
//         rl.close();
//       }
//     });
//   } else {
//     console.log('Invalid command.');
//     rl.close();
//   }
// });
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const todoFile = path.resolve('todos.json');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function loadTodos() {
  try {
    const data = fs.readFileSync(todoFile, 'utf8');
    return data ? data.split('\n') : [];
  } catch (err) {
    return [];
  }
}

function saveTodos(todos) {
  fs.writeFileSync(todoFile, todos.join('\n'), 'utf8');
}

function showTodos(todos) {
  todos.forEach((todo, index) => {
    console.log(`   ${index + 1}. ${todo}`);
  });
}

const todos = loadTodos();
console.log('Todos:');
showTodos(todos);

rl.question('Enter a command (add, update, mark-as-done, delete): ', (command) => {
  if (command === 'add') {
    rl.question('Enter a new todo: ', (newTodo) => {
      todos.push(newTodo);
      saveTodos(todos);
      console.log('Todo added.');
      rl.close();
    });
  } else if (command === 'update') {
    rl.question('Enter the index of the todo to update: ', (indexStr) => {
      const index = parseInt(indexStr) - 1;
      if (!isNaN(index) && index >= 0 && index < todos.length) {
        rl.question('Enter the new text for the todo: ', (newText) => {
          todos[index] = newText;
          saveTodos(todos);
          console.log('Todo updated.');
          rl.close();
        });
      } else {
        console.log('Invalid index.');
        rl.close();
      }
    });
  } else if (command === 'mark-as-done') {
    rl.question('Enter the index of the todo to mark as done: ', (indexStr) => {
      const index = parseInt(indexStr) - 1;
      if (!isNaN(index) && index >= 0 && index < todos.length) {
        const todo = todos[index];
        const status = todo.includes(' - done');
        todos[index] = status ? todo.replace(' - done', '') : `${todo} - done`;
        saveTodos(todos);
        console.log('Todo status updated.');
        rl.close();
      } else {
        console.log('Invalid index.');
        rl.close();
      }
    });
  } else if (command === 'delete') {
    rl.question('Enter the index of the todo to delete: ', (indexStr) => {
      const index = parseInt(indexStr) - 1;
      if (!isNaN(index) && index >= 0 && index < todos.length) {
        todos.splice(index, 1);
        saveTodos(todos);
        console.log('Todo deleted.');
        rl.close();
      } else {
        console.log('Invalid index.');
        rl.close();
      }
    });
  } else {
    console.log('Invalid command.');
    rl.close();
  }
});
