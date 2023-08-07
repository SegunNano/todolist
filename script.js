// using prompt and console log
// let input = prompt(`What would you like to do?`)
// const todos = [];
// while (input !== 'quit' && input !== 'q') {
//     if (input === 'list') {
//         console.log(`*******************`)
//         if (todos.length === 0) {
//             console.log(`You have no registered TODOs, Type 'NEW' to ADD TODOs to list`)
//         } else { for (let i = 0; i < todos.length; i++) {
//                 console.log(`${i + 1}: ${todos[i]}`);
//             }
//         }
//         console.log(`*******************`)
//     } else if (input === 'new' || input === 'add') {
//         const newTodos = prompt(`Which TODO would you like to add??`);
//         todos.push(newTodos);
//         console.log(`${newTodos} added to the list!!`);
//     } else if (input === 'delete') {
//         let index = prompt(`Enter INDEX of TODO to delete(Type "Delete all to Delete All):`);
//         while (Number.isNaN(parseInt(index))) {
//             if (index.toLowerCase() === 'delete all') {
//                 console.log(`All Todos have been succesfully deleted!!!!`); break;
//             } else {
//             index = prompt(`Unknown Index, Enter a VALID one(Type 'Delete all' to delete all TODOs):`);
//             }
//         }
//         if (index.toLowerCase() === 'delete all') {
//             todos.splice(0, todos.length);
//             console.log(todos)
//             // console.log(`All Todos have been succesfully deleted!!!!`)
//         } else {
//             while (parseInt(index)> todos.length) {
//                 index = prompt(`Invalid Index, Enter a VALID one(Type 'Delete all' to delete all TODOs):`);
//             }
//             const deleted = todos.splice(index-1, 1)
//             console.log(`${deleted[0]} has been REMOVED from TODO list!!!`)  
//         } ;       
//     }
//     input = prompt(`What would you like TO DO?`) 
// }
// console.log(`Okay, you QUIT the app!!`)

const form = document.querySelector('#addTodo');
const input = document.querySelector('#newTodo');
const todoList = document.querySelector('#todos')
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        const newlist = input.value;
        const addedList = document.createElement('li');
        addedList.innerText = newlist;
        todoList.append(addedList);
        input.value = ''
    }
});
todoList.addEventListener('dblclick', function(e) {
    e.target.nodeName === 'LI' && e.target.remove()
})



const newJokes = document.querySelector('#jokes');
const newJokesButton = document.querySelector('#jokesButton')
// axios.get("https://swapi.dev/api/people/1/")
// .then(res => {
//     console.log(res.data)
// })
// .catch(e => {
//     console.log(e)
// })
const getStarWarsPeople = async (sn) => {
   const resp = await axios.get(`https://swapi.dev/api/people/${sn}/`);
   console.log(resp.data)
}
// getStarWarsPeople(5);
// for (let i = 1; i < 20; i++) {
//     getStarWarsPeople(i)
// }

const addNewJokes = async () => {
    const jokeText = await getDadJokes();
    const newLI = document.createElement('li');
    newLI.innerText = jokeText;
    newJokes.append(newLI);
}
const getDadJokes = async () => {
    try {
        const config = { headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return 'NO JOKES AVAILABLE JOKES, SORRY'
    }
    
}  
newJokesButton.addEventListener('click', addNewJokes)