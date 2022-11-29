const what = ["Think about", "Create", "Read", "Listen to", "Call"]
const topic = ["a newspaper", "yourself", "your bff"]
const where = ["in your flat", "in the woods", "in the park", "outside", "in the kitchen"]

// const randomWhat = what[Math.floor(Math.random() * what.length)];
// in Arrow syntax:
    // const randomWhatN = what[] => {
    // return Math.floor(Math.random() * what.length)};
    // console.log(randomWhatN)

// console.log(randomWhat)
// const randomTopic = topic[Math.floor(Math.random() * topic.length)];
// console.log(randomTopic)
// const randomWhere = where[Math.floor(Math.random() * where.length)];
// console.log(randomWhere)

// const task = randomWhat + ' ' + randomTopic + ' ' + randomWhere
// console.log(task)

// const taskA = () => {
//     const randomWhat = what[Math.floor(Math.random() * what.length)]; 
//     const randomTopic = topic[Math.floor(Math.random() * topic.length)];
//     const randomWhere = where[Math.floor(Math.random() * where.length)];
//     return randomWhat + ' ' + randomTopic + ' ' + randomWhere
// }
// console.log(taskA())

//taskB => everything in once:


const taskB = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};
const taskBMessage = () => {
    return `${taskB(what)} ${taskB(topic)} ${taskB(where)}`
}

console.log(taskBMessage());


const returnOutput = () => {
        document.getElementById("output").innerHTML = taskBMessage();
} // ==> function expression MUST be set before it's called, otherwise DOM Manipulation will not work

document.getElementById("outputbutton").addEventListener("click", returnOutput)

// function returnOutput () {
//     document.getElementById("output").innerHTML = taskBMessage();
//  } ==> Function Declaration: function is available everywhere -> doesn't matter where to put the function

