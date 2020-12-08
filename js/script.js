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
        'błąd'
    }
}

function displayResult(computerMove, playerMove)
{
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

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
}

    document.getElementById('button-papier').addEventListener('click', function(){
    playGame('papier');
  });
    document.getElementById('button-kamien').addEventListener('click', function(){
    playGame('kamień');
  });
    document.getElementById('button-nozyce').addEventListener('click', function(){
    playGame('nożyce');
  });

function playGame(playerMove)
{
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);

    displayResult(computerMove, playerMove);
}
