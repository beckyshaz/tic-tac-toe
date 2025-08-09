
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
        if (board[row][col] === "") {
            board[row][col] = marker;
        }
        //return board;
    }

    //setMarkerOnBoard(0, 1, "x" );
    //console.log(setMarkerOnBoard(0, 1, "o"));

    function displayBoard() {
        const container = document.querySelector(".container");
        for (let i = 0; i < board.length; i++) {
           //const container = document.querySelector(".container");
           const outerDiv = document.createElement("div");
           outerDiv.classList = "outer-div";
           for (let j = 0; j < 3; j++) {
            const div = document.createElement("div");
            div.className = "cell";
            div.innerHTML = board[i][j];
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
        console.log(a, b, c);

        if (board[a[0]][a[1]] != "" &&
            board[a[0]][a[1]] === board[b[0]][b[1]] &&
            board[a[0]][a[1]] === board[c[0]][c[1]] 
        ) {
            return true;
        }
    }
    return false;
   
}

function players(name="Becky", marker="O") {
    return {
        name,
        marker

    }

}

console.log(players("sharon", "X"));

console.log(players());


function game() { 
   
    //const score = 0;

    //const setScore = (score) => score++;

   // const getScore = () => score;


    const newBoard = gameBoard();
    console.log(newBoard);
    //console.log(newBoard.buildBoard());
    newBoard.buildBoard();
    //let currentGameBoard = newBoard.buildBoard();
    //console.log(buildGameBoard);
    currentGameBoard = newBoard.getBoard();

    console.log(currentGameBoard);

    newBoard.displayBoard()

    const player1 = players("sharon", "x");
    const player2 = players("becky", "y");

    //let currentPlayer = player1;
    let currentPlayer = player1;

    for (let turn = 0; turn < 9; turn++) {

        if (currentGameBoard) {
            newBoard.setMarkerOnBoard(0, 1, currentPlayer.marker);
           
            console.log(newBoard.getBoard());
            console.log(currentGameBoard);
            const winningState = gameWinningState(newBoard.getBoard());
            if (winningState) {
                console.log(`${currentPlayer.name} has won `);
                break;
    
            }else{
                if (currentPlayer === player1) {
                    currentPlayer = player2;
                }else {
                    currentPlayer = player1;
                    }
            
                //currentPlayer = player2;
                console.log(`its ${currentPlayer.name}'s turn`);
                newBoard.setMarkerOnBoard(1, 2, currentPlayer.marker);
                //console.log("its a draw");
                }

            }
            if (turn === 9 && currentGameBoard !== "" && !winningState) {
                console.log("its a drew");
                newBoard.resetBoard();
            }
        }
        
    }
    
game();
