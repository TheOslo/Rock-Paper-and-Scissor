    let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
    };

    updateScoreElement();

    function playGame(playerMove) {
        const computerMove = pickComputerMove();    

        let result = '';
        if(playerMove === 'scissors'){
            if(computerMove === 'rock'){
                result = 'You lose!';
            }
            else if(computerMove === 'paper'){
                result = 'You win!';
            }
            else{
                result = 'Tie!';
            }
        }
        else if(playerMove === 'rock') {
            if(computerMove === 'scissors') {
                result = 'You win!';
            }
            else if(computerMove === 'paper') {
                result = 'You lose!';
            }
            else {
                result = 'Tie!';
            }
        }
        else if(playerMove === 'paper') {
            if(computerMove === 'scissors') {
                result = 'You lose!';
            }
            else if(computerMove === 'rock') {
                result = 'You win!';
            }
            else {
                result = 'Tie!';
            }
        }

        if(result === 'You win!'){
            score.wins++;
        }
        else if(result === 'You lose!') {
            score.losses++;
        }
        else {
            score.ties++;
        }

        localStorage.setItem('score', JSON.stringify(score));
        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}.png" class="image">. <img src="images/${computerMove}.png" class="image"> Computer`;

    }

    function updateScoreElement() {
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function resetGame() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        updateScoreElement();
        localStorage.removeItem('score');
    }

    function pickComputerMove() {
        const randomNumber = Math.random();
        if(randomNumber < 1/3){
            return 'rock';
        }
        else if (randomNumber < 2/3 && randomNumber >= 1/3){
            return 'paper';
        }
        else {
            return 'scissors';
        }

    }