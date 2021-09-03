/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
const str = header.textContent;
function editHeader(){
    const result = str.fontcolor("red");
    document.getElementById("header").innerHTML = result;
}
editHeader()
console.log(str)

/***** Deliverable 3 *****/
// console.log("PLAYERS array looks like this:", PLAYERS)


/***** Deliverable 4 *****/