
function gameBoard() {
    let gameBoardArray = [];

    const player = players("shaz", "x");
    console.log(player);

    function displayDashboard () {
        
        for (let i = 0; i < 3; i++) {
            //console.log("x");
            const rowArray = [];
            for (let j = 0; j < 3; j++) {
                console.log("o");
                
                rowArray.push("O");
            }
            gameBoardArray.push(rowArray);
        } 
       
        return gameBoardArray;
    }

    return {
        displayDashboard,
    };
}  

const dashboard = gameBoard();

console.log(dashboard);
console.log(dashboard.displayDashboard());

//console.log(dashboard.players("sharon"));

//dashboard();
function game() { 
    /* ['O', 'O', 'O'] 
       ['O', 'O', 'O']
       ['O', 'O', 'O']

     */

    //const playCard = ["X", "O"];
    const score = 0;

    const setScore = (score) => score++;

    const getScore = () => score;


    const currentArray = gameBoard();
    console.log(currentArray);
    console.log(currentArray.displayDashboard());
    let gameBoardArray = currentArray.displayDashboard();

    let firstRowItem1 = gameBoardArray[0][0];
    console.log(firstRowItem1);
    let firstRowItem2 = gameBoardArray[0][1];
    console.log(firstRowItem2);
    let firstRowItem3 = gameBoardArray[0][2];
    console.log(firstRowItem3);

    let secondRowItem1 = gameBoardArray[1][0];
    console.log(secondRowItem1);
    let secondRowItem2 = gameBoardArray[1][1];
    console.log(secondRowItem2);
    let secondRowItem3 = gameBoardArray[1][2];
    console.log(secondRowItem3);


    let thirdRowItem1 = gameBoardArray[2][0];
    console.log(thirdRowItem1);
    let thirdRowItem2 = gameBoardArray[2][1];
    console.log(thirdRowItem2);
    let thirdRowItem3 = gameBoardArray[2][2];
    console.log(thirdRowItem3);

    /* ['O', 'O', 'O'] 
       ['O', 'O', 'O']
       ['O', 'O', 'O']

     */

    let firstColumnItem1 = gameBoardArray[0][0];
    console.log(firstColumnItem1);
    let firstColumnItem2 = gameBoardArray[1][0];
    console.log(firstColumnItem2);
    let firstColumnItem3 = gameBoardArray[2][0];
    console.log(firstColumnItem3);

    let secondColumnItem1 = gameBoardArray[0][1];
    console.log(secondColumnItem1);
    let secondColumnItem2 = gameBoardArray[1][1];
    console.log(secondColumnItem2);
    let secondColumnItem3 = gameBoardArray[2][1];
    console.log(secondColumnItem3);

    let thirdColumnItem1 = gameBoardArray[0][2];
    console.log(thirdColumnItem1);
    let thirdColumnItem2 = gameBoardArray[1][2];
    console.log(thirdColumnItem2);
    let thirdColumnItem3 = gameBoardArray[2][2];
    console.log(thirdColumnItem3);

    /* ['O', 'O', 'O'] 
       ['O', 'O', 'O']
       ['O', 'O', 'O']

     */
    /*let firstDiagonalItem1 = gameBoardArray[0][0];
    console.log(firstDiagonalItem1);
    let firstDiagonalItem2 = gameBoardArray[1][1];
    console.log(firstDiagonalItem2);
    let firstDiagonalItem3 = gameBoardArray[2][2];
    console.log(firstDiagonalItem3);


    let secondDiagonalItem1 = gameBoardArray[0][2];
    console.log(secondDiagonalItem1);
    let secondDiagonalItem2 = gameBoardArray[1][1];
    console.log(secondDiagonalItem2);
    let secondDiagonalItem3 = gameBoardArray[2][0];
    console.log(secondDiagonalItem3);
*/

    if (firstRowItem1 != "" && firstRowItem1 === firstRowItem2 != "" && firstRowItem2 === firstRowItem3 != "") {
        console.log("you win");
        setScore(score);
       
    }
    if (secondRowItem1 != "" && secondRowItem1 === secondRowItem2 != "" && secondRowItem2 === secondRowItem3 != "") {
        console.log("you win");
        setScore(score);
        getScore();
    }

    if (thirdRowItem1 != "" && thirdRowItem1 === thirdRowItem2 != "" && thirdRowItem2 === thirdRowItem3 != "") {
        console.log("you win");
        setScore(score);
        getScore();
    }
    if (firstColumnItem1 != "" && firstColumnItem1 === firstColumnItem2 != "" && firstColumnItem2 === firstColumnItem3 != "") {
        console.log("you win");
        setScore(score);
        getScore();
    }
    if (secondColumnItem1 != "" && secondColumnItem1 === secondColumnItem2 != "" && secondColumnItem2 === secondColumnItem3 != "") {
        console.log("you win");
        setScore(score);
        getScore();
    }
    if (thirdColumnItem1 != "" && thirdColumnItem1 === thirdColumnItem2 != "" && thirdColumnItem2 === thirdColumnItem3 != "") {
        console.log("you win");
        setScore(score);
        getScore();
    }
    if (firstColumnItem1 != "" && firstColumnItem1 === secondColumnItem2 != "" && secondColumnItem2 === thirdColumnItem3 != "") {
        console.log("you win");
        setScore(score);
        getScore();
    }
    if (thirdColumnItem1 != "" && thirdColumnItem1 === secondColumnItem2 != "" && secondColumnItem2 === firstColumnItem1 != "") {
        console.log("you win");
        setScore(score);
        getScore();
    }
    else {
        console.log("its a draw");
        setScore(score);
        getScore();
    }

 } 
game();


function players(name="Becky", marker="O") {
    return {
        name,
        marker

    }

}

console.log(players("sharon", "X"));

console.log(players());