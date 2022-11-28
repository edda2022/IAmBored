const what = ["Think about", "Create", "Read", "Listen to", "Call"]
const topic = ["a newspaper", "yourself"]
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

const taskB = () => {

}

const taskA = () => {
    const randomWhat = what[Math.floor(Math.random() * what.length)]; 
    const randomTopic = topic[Math.floor(Math.random() * topic.length)];
    const randomWhere = where[Math.floor(Math.random() * where.length)];
    return randomWhat + ' ' + randomTopic + ' ' + randomWhere
}
console.log(taskA())

document.getElementById("outputbutton").addEventListener("click", returnOutput)
function returnOutput () {
    document.getElementById("output").innerHTML = taskA();
}