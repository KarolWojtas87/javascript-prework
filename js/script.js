function getMoveName(moveId)
{
    if(moveId == 1)
    {
        return 'kamień';
    }
    else if(moveId == 2)
    {
        return 'papier'
    }
    else if(moveId == 3)
    {
        return 'nożyce'
    }
    else
    {
        return 'błąd'
    }
}
let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);
/*
function displayResult(computerMove, playerMove)
{
    printMessage('Zagrałem ' + computerMove + 'a Ty ' + playerMove);

        if( computerMove == 'kamień' && playerMove == 'papier')
    {
        printMessage('Ty wygrywasz!');
    }
        else if( computerMove == 'kamień' && playerMove == 'kamień')
    {
        printMessage('Remis!');
    }
        else if( computerMove == 'kamień' && playerMove == 'nożyce')
    {
        printMessage('Tym razem przegrywasz!');
    }
        else if( computerMove == 'papier' && playerMove == 'papier')
    {
        printMessage('Remis!');
    }
        else if( computerMove == 'papier' && playerMove == 'kamień')
    {
        printMessage('Tym razem przegrywasz!');
    }
        else if( computerMove == 'papier' && playerMove == 'nożyce')
    {
        printMessage('Ty wygrywasz!');
    }
        else if( computerMove == 'nożyce' && playerMove == 'papier')
    {
        printMessage('Tym razem przegrywasz!');
    }
        else if( computerMove == 'nożyce' && playerMove == 'kamień')
    {
        printMessage('Ty wygrywasz!');
    }
        else if( computerMove == 'nożyce' && playerMove == 'nożyce')
    {
        printMessage('Remis!');
    }
        else 
    {
        printMessage('Brak roztrzygnięcia');
    }
}*/


/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == 1){
  playerMove = 'kamień';
}
else if(playerInput == 2){
  playerMove = 'papier';
}
else if(playerInput == 3){
  playerMove = 'nożyce';
}
*/

console.log('Wylosowana liczba to: ' + randomNumber);


/*if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
  computerMove = 'nożyce';
}
else if(randomNumber == 3){
  computerMove = 'papier';
}
else {computerMove = 'błąd';
     }*/
printMessage('Ruch gracza: ' + playerMove);
printMessage('Ruch komputera: ' + computerMove);

