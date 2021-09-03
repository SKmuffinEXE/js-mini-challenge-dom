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
// console.log(str)

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)
console.log("------")

const playerContainer = document.querySelector(".player-container")

PLAYERS.forEach(function(player){
    renderPlayer(player) //renders player
})

function renderPlayer(player){
    const playerCard = document.createElement('div')
    playerCard.className = "player"
    playerCard.dataset.number = player.number

    const playerImg = document.createElement('img')
    playerImg.src = player.photo
    playerImg.alt = `${player.name}`

    
    const playerNick = `${player.nickname}`
    playerNick.italics()
    //test
 
    const playerText = document.createElement('h3')
    playerText.innerText = `${player.name} ${playerNick}`

    playerCard.append(playerText, playerImg)
    playerContainer.appendChild(playerCard)

    // pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
    // pokeContainer.appendChild(pokeCard);
  }


/***** Deliverable 4 *****/