
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
       
        //return board;
    }

    const getBoard = () => board;

    const resetBoard = () => {
        buildBoard();
        getBoard();
    };

    const setMarkerOnBoard = (row, col, marker) => {
        /*for (row = 0; row < board.length; row++) {
            for (column = 0; column < board.length; column++)
        }*/
        if (board[row][col] === "") {
            board[row][col] = marker;
        }
        //return board;
    }

    //setMarkerOnBoard(0, 1, "x" );
    //console.log(setMarkerOnBoard(0, 1, "o"));

    function displayBoard() {
        //container.innerHTML = "";
        const container = document.querySelector(".container");
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
           container.appendChild(outerDiv);
           
        }
        
    }

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

function players(player1Name, player2Name, player1Marker, player2Marker) {

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
        getPlayer2Marker
    }

    
}

console.log(players(document.querySelector(".player1-name").value,
document.querySelector(".player2-name").value,
document.querySelector(".player1-marker").value,
document.querySelector(".player2-marker").value,
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

    newBoard.displayBoard()
    const submitButton = document.querySelector(".submit");
    submitButton.addEventListener("click", (event) => {
        
        event.preventDefault();
        const playersDetails = players(
            document.querySelector(".player1-name").value,
            document.querySelector(".player2-name").value,
            document.querySelector(".player1-marker").value,
            document.querySelector(".player2-marker").value
        );
        console.log(playersDetails);
        const firstPlayerName = playersDetails.getPlayer1Name();
        console.log(firstPlayerName);

        const firstPlayerMarker = playersDetails.getPlayer1Marker();
        console.log(firstPlayerMarker);


        const secondPlayerName = playersDetails.getPlayer2Name();
        console.log(secondPlayerName);

        const secondPlayerMarker = playersDetails.getPlayer2Marker();
         console.log(secondPlayerMarker);

        //let currentPlayer = player1;
        let currentPlayerName = firstPlayerName;
        
        let currentPlayerMarker = firstPlayerMarker;
        
        let turn = 0;
        
        
        
        let divCell = document.querySelectorAll(".cell");
        divCell.forEach(cell => cell.addEventListener("click", () => {
            const row = cell.dataset.row.toUpperCase();
            const col = cell.dataset.col.toUpperCase();
            console.log(row, col);
            if (currentGameBoard[row][col] === "") {
                newBoard.setMarkerOnBoard(row, col, currentPlayerMarker);
                cell.textContent = currentPlayerMarker;
                turn++;
                    //newBoard.displayBoard();
                console.log(newBoard.getBoard());
                console.log(currentGameBoard);
                const winningState = gameWinningState(newBoard.getBoard());
                if (winningState) {
                    console.log(`${currentPlayerName} has won `);
                    return;
                }else{
                    if (turn === 9) {
                        console.log("its a drew");
                        newBoard.resetBoard();
                    }
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
                    //currentPlayer = player2;
                    console.log(`its ${currentPlayerName}'s turn`);
                    //newBoard.setMarkerOnBoard(col, row, currentPlayerMarker);
                    //console.log("its a draw");
                    }
                }
            }))
        });  
    }
game();
