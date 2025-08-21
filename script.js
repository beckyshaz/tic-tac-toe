
function gameBoard() {
    let board = []

    function buildBoard () {
        board = [];
        
        for (let i = 0; i < 3; i++) {
            //console.log("x");
            const rowArray = [];
            //const container = document.querySelector(".container");
            for (let j = 0; j < 3; j++) {
                //const boardCell = document.createElement("div"); 
                rowArray.push("");
    
            }
            //container.appendChild(boardCell);
            board.push(rowArray);
        }  
       
        return board;
    }

    const getBoard = () => board;

    function displayBoard() {
        
        let container = document.querySelector(".container");

        if (!container) {
            container = document.createElement("div");
            container.className = "container";
            const outerContainer = document.querySelector(".outer-container");
            outerContainer.appendChild(container);

        }

        container.innerHTML = "";

        for (let i = 0; i < board.length; i++) {
           //const container = document.querySelector(".container");
           const outerDiv = document.createElement("div");
           outerDiv.classList = "outer-div";
           for (let j = 0; j < board.length; j++) {
            const div = document.createElement("div");
            div.className = "cell";
            div.dataset.row = i;
            div.dataset.col = j;
            div.innerHTML = j;
            console.log(i, j);
            div.style.backgroundColor = "red";
            outerDiv.appendChild(div);
           }
           //container.appendChild(parag);
           container.appendChild(outerDiv);
           
        }
    }

    const resetBoard = () => {
        const newBoard = getBoard();
        console.log(newBoard);

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                board[i][j] = "";
            }

        };
        displayBoard();
    };

    const setMarkerOnBoard = (row, col, marker) => {
        /*for (row = 0; row < board.length; row++) {
            for (column = 0; column < board.length; column++)
        }*/
        if (board[row][col] === "") {
            board[row][col] = marker;
        }
       // return board;
    }

    //setMarkerOnBoard(0, 1, "x" );
    //console.log(setMarkerOnBoard(0, 1, "o"));


    return {
        buildBoard,
        resetBoard,
        setMarkerOnBoard,
        getBoard,
        displayBoard,
    };
}  


function gameWinningState (board) {
   
    /* ['O', 'O', 'O'] 
       ['O', 'O', 'O']
       ['O', 'O', 'O']

     */

    const winningLines = [
        //rows
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
       
       //column 
        [[0, 0], [1,0], [2,0]],
        [[0, 1], [1,1], [2,1]],
        [[0, 2], [1,2], [2,2]],
       
        //diagonals
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
       
    ]

    for (const lines of winningLines) {
        const [a, b, c] = lines;

        if (board[a[0]][a[1]] != "" &&
            board[a[0]][a[1]] === board[b[0]][b[1]] &&
            board[a[0]][a[1]] === board[c[0]][c[1]] 
        ) {
            return true;
        }
    }
    return false;
   
}

function players(player1Name, player2Name) {

    let player1Marker = "o";

    let player2Marker = "x";

    let scores = {
        [player1Name]: 0,
        [player2Name]: 0
    };

    const setScore =  (name) => {
        scores[name] += 1; 
    }

    const getScore = (name) => scores[name];

    const resetScore = () => {
        for (let key in scores) {
            scores[key] = 0;
        }
    } 

    const getPlayer1Name = () => player1Name;
    const getPlayer2Name = () => player2Name;
    const getPlayer1Marker = () => player1Marker;
    const getPlayer2Marker = () => player2Marker;

    return {
       /*/ getPlayer1Name: () => player1Name,
        getplayer2Name: () => player2Name,
        getplayer1Marker: () => player1Marker,
        getplayer2Marker: () => player2Marker*/
    
        getPlayer1Name,
        getPlayer2Name,
        getPlayer1Marker,
        getPlayer2Marker,
        setScore,
        getScore,
        resetScore
    }

    
}

console.log(players(document.querySelector(".player1-name").value,
document.querySelector(".player2-name").value
));

/*const getCellCoordinate = () => {
    let divCell = document.querySelectorAll(".cell");
    divCell.forEach(cell => cell.addEventListener("click", () => {
        const row = Number(cell.dataset.row);
        const col = Number(cell.dataset.col);
    });*/


function game() { 
    
    const newBoard = gameBoard();
    console.log(newBoard);

    newBoard.buildBoard();
    
    const currentGameBoard = newBoard.getBoard();

    

    console.log(currentGameBoard);
    const form = document.querySelector("form");


    //newBoard.displayBoard()
    const submitButton = document.querySelector(".submit");
    submitButton.addEventListener("click", (event) => {
        
        event.preventDefault();
        alert("Details Submitted Successfully");
        const playersDetails = players(
            document.querySelector(".player1-name").value,
            document.querySelector(".player2-name").value,
        );
        form.style.display = "none";
        //newBoard.displayBoard();
        const gameTitle = document.querySelector(".game-title");
        gameTitle.innerHTML = "TIC-TAC-TOE GAME";

        const player1DetailsDiv = document.createElement("div");
        player1DetailsDiv.className = "player1-details"
    
        const player1Div = document.createElement("div");
        player1Div.className = "player1-div";
        
        console.log(playersDetails);
        const firstPlayerName = playersDetails.getPlayer1Name();
        player1Div.innerHTML = firstPlayerName;
        console.log(firstPlayerName);

        const player1MarkerDiv = document.createElement("div");
        player1MarkerDiv.className = "marker1-div";

        const firstPlayerMarker = playersDetails.getPlayer1Marker();
        console.log(firstPlayerMarker);
        player1MarkerDiv.innerHTML = firstPlayerMarker;

        const player1ScoreDiv = document.createElement("div");
        
        
        player1DetailsDiv.appendChild(player1Div);
        player1DetailsDiv.appendChild(player1ScoreDiv);
        player1DetailsDiv.appendChild(player1MarkerDiv);
        const outerContainer = document.querySelector(".outer-container");
        outerContainer.appendChild(player1DetailsDiv);

        newBoard.displayBoard();

        const player2DetailsDiv = document.createElement("div");
        player2DetailsDiv.className = "player2-details"

        const player2Div = document.createElement("div");
        player2Div.className = "player2-div";
    
        const secondPlayerName = playersDetails.getPlayer2Name();
        player2Div.innerHTML = secondPlayerName;
        console.log(secondPlayerName);

        const player2MarkerDiv = document.createElement("div");
        player2MarkerDiv.className = "marker2-div";

        const secondPlayerMarker = playersDetails.getPlayer2Marker();
        player2MarkerDiv.innerHTML = secondPlayerMarker;
        console.log(secondPlayerMarker);
        const player2ScoreDiv = document.createElement("div");

        player2DetailsDiv.appendChild(player2Div);
        player2DetailsDiv.appendChild(player2ScoreDiv);
        player2DetailsDiv.appendChild(player2MarkerDiv);
        outerContainer.appendChild(player2DetailsDiv);

        //let currentPlayer = player1;
        const restartButtondiv = document.querySelector(".restart-div");

        const restartButton = document.createElement("button");
        restartButton.classList = "restart-button";
        restartButton.innerHTML = "Restart";
        restartButtondiv.appendChild(restartButton);
        //outerContainer.appendChild(restartButtondiv);

        const newGameDiv = document.querySelector(".new-game");

        const startNewGame = document.createElement("button");
        startNewGame.classList = "new-game-button";
        startNewGame.innerHTML = "Start Game";
        newGameDiv.appendChild(startNewGame);

        let currentPlayerName = firstPlayerName;
        
        let currentPlayerMarker = firstPlayerMarker;
        
        let turn = 0;

        //let divCell = document.querySelectorAll(".cell");
        //let currentPlayerScore = playersDetails.getScore(firstPlayerName);
       // console.log(currentPlayerScore);
        
       player1ScoreDiv.innerHTML = `Score: ${playersDetails.getScore(firstPlayerName)}`;
       player2ScoreDiv.innerHTML = `Score: ${playersDetails.getScore(secondPlayerName)}`;
        
        function handleCellClicks(event) {
            const row = event.target.dataset.row.toUpperCase();
            const col = event.target.dataset.col.toUpperCase();
            console.log(row, col);
            if (currentGameBoard[row][col] === "") {
                newBoard.setMarkerOnBoard(row, col, currentPlayerMarker);
                event.target.textContent = currentPlayerMarker;
                turn++;
                console.log(turn);
                console.log(newBoard.getBoard());
                console.log(currentGameBoard);
                const winningState = gameWinningState(newBoard.getBoard());
                
                if (winningState) {
                   /* let winnerAndDrawDiv = document.createElement("div");
                    winnerAndDrawDiv.classList = "winner-draw-div";
                    winnerAndDrawDiv.innerHTML = `${currentPlayerMarker} has won `*/
                    console.log(`${currentPlayerName} has won `);
                    playersDetails.setScore(currentPlayerName);
                    let currentPlayerScore = playersDetails.getScore(currentPlayerName);
                    if (currentPlayerName === firstPlayerName) {
                        player1ScoreDiv.innerHTML = `Score: ${currentPlayerScore}`;
                    }else{
                        //currentPlayerScore = playersDetails.getScore(currentPlayerName);
                        player2ScoreDiv.innerHTML = `Score: ${currentPlayerScore}`;
                    }

                    let winnerDiv = document.createElement("div");
                    winnerDiv.classList = "winner-div";
                    winnerDiv.innerHTML = `${currentPlayerMarker} won `
                    outerContainer.appendChild(winnerDiv);

                    setTimeout(() => {
                        outerContainer.removeChild(winnerDiv);
                    }, 2500);

                    //player1ScoreDiv.innerHTML = playersDetails.getScore(currentPlayerName);

                    //player2ScoreDiv.innerHTML = playersDetails.getScore(currentPlayerName);

                    
                    outerContainer.removeEventListener("click", containerClicksHandler);
                }else{
                    if (turn === 9) {
                        console.log("its a draw");
                        let drawDiv = document.createElement("div");
                        drawDiv.classList = "draw-div";
                        drawDiv.innerHTML = "Its a Draw";
                        outerContainer.appendChild(drawDiv);
                        
                        
                        setTimeout(() => {
                            outerContainer.removeChild(drawDiv);
                        }, 2500);
                        
                        outerContainer.removeEventListener("click", containerClicksHandler);
                        //newBoard.resetBoard();
                    }else{
                        if (currentPlayerName === firstPlayerName) {
                            currentPlayerName = secondPlayerName;
                           
                        }else {
                            currentPlayerName = firstPlayerName;
                            
                        }
                        if (currentPlayerMarker === firstPlayerMarker) {
                            currentPlayerMarker = secondPlayerMarker;
                        }else {
                             currentPlayerMarker = firstPlayerMarker;
                            }
                            console.log(`its ${currentPlayerName}'s turn`);
                        }
                    }
                }
            }
            restartButton.addEventListener("click", () => {
                //console.log(newboard);

                newBoard.resetBoard();
                outerContainer.addEventListener("click", containerClicksHandler);
                turn = 0; 
                currentPlayerName = firstPlayerName; 
                currentPlayerMarker = firstPlayerMarker;
            
                //playersDetails.setScore() ;
                //playersDetails.setScore(secondPlayerName) ;

                //console.log(playersDetails.getScore(firstPlayerName));
                //player2ScoreDiv.innerHTML = playersDetails.getScore(secondPlayerName);
        

                //divCell.forEach(cell => cell.addEventListener("click", handleCellClicks));
                //console.log(newBoard);
               // newBoard.displayBoard();
            });
            startNewGame.addEventListener("click", () => {
                newBoard.resetBoard();
                outerContainer.addEventListener("click", containerClicksHandler);
                playersDetails.resetScore();
                turn = 0; 
                currentPlayerName = firstPlayerName; // always let Player 1 start
                currentPlayerMarker = firstPlayerMarker;
            
                player1ScoreDiv.innerHTML = `Score: ${playersDetails.getScore(firstPlayerName)}`;
                player2ScoreDiv.innerHTML = `Score: ${playersDetails.getScore(secondPlayerName)}`;
        
            });

            function containerClicksHandler(e) {
                if (e.target.className === "cell");
                handleCellClicks(e);

            }
            outerContainer.addEventListener("click", containerClicksHandler);
        });
    }
game();
