document.addEventListener('DOMContentLoaded', function() {
    const playersList = document.getElementById('players');
    const newPlayerForm = document.getElementById('new-player-form');
    const currentPlayersSpan = document.getElementById('current-players');
    const maxPlayersSpan = document.getElementById('max-players');
    const startGameBtn = document.getElementById('start-game-btn');
    let isHost = false;
    let currentPlayerName = '';

    // check if current player is host
    // host = first person in lobby list (at the top)
    function checkIfHost() {
        const players = document.querySelectorAll('.player');
        if (players.length > 0) {
            const firstPlayerName = players[0].querySelector('.player-name').textContent;
            isHost = (firstPlayerName === currentPlayerName);
            startGameBtn.style.display = isHost ? 'block' : 'none';
        }
    }

    // create new player element
    newPlayerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const playerName = document.getElementById('new-player-name').value;
        // check username length
        if (playerName.length === 0) {
            alert('Username cannot be empty!');
            return;
        }
        if (playerName.length > 12) {
            alert('Username cannot be longer than 12 characters!');
            return;
        }
        
        currentPlayerName = playerName;
        
        // check if lobby is full
        const currentPlayers = parseInt(currentPlayersSpan.textContent);
        const maxPlayers = parseInt(maxPlayersSpan.textContent);
        
        if (currentPlayers >= maxPlayers) {
            alert('Lobby is full!');
            return;
        }

        // check if this is the first player (will be host)
        const isFirstPlayer = playersList.children.length === 0;
        
        // create new player element
        const newPlayer = document.createElement('li');
        newPlayer.className = 'player';
        
        // create player name span
        const nameSpan = document.createElement('span');
        nameSpan.className = 'player-name';
        nameSpan.textContent = playerName;
        newPlayer.appendChild(nameSpan);
        
        // add host badge if first player
        if (isFirstPlayer) {
            const hostBadge = document.createElement('span');
            hostBadge.className = 'host-badge';
            hostBadge.innerHTML = '<i class="fas fa-crown"></i> Host';
            newPlayer.appendChild(hostBadge);
            isHost = true;
            startGameBtn.style.display = 'block';
        }
        
        // create remove button
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
        removeBtn.onclick = function(e) {
            e.stopPropagation();
            removePlayer(newPlayer);
        };
        newPlayer.appendChild(removeBtn);
        playersList.appendChild(newPlayer);

        currentPlayersSpan.textContent = currentPlayers + 1;

        // reset form
        newPlayerForm.reset();
    });

    // handle player removal and host transfer
    function removePlayer(playerElement) {
        const playerName = playerElement.querySelector('.player-name').textContent;
        const wasHost = playerElement.querySelector('.host-badge') !== null;
        
        playerElement.remove();
        
        currentPlayersSpan.textContent = parseInt(currentPlayersSpan.textContent) - 1;
        
        // if there are still players and the removed player was the host
        if (wasHost && playersList.children.length > 0) {
            const newHostElement = playersList.children[0];
            const newHostName = newHostElement.querySelector('.player-name').textContent;
            
            // create host badge
            const hostBadge = document.createElement('span');
            hostBadge.className = 'host-badge';
            hostBadge.innerHTML = '<i class="fas fa-crown"></i> Host';
            
            // insert host badge after player name
            newHostElement.insertBefore(hostBadge, newHostElement.querySelector('.remove-btn'));
            
            // update host status if current player is the new host
            isHost = (newHostName === currentPlayerName);
            startGameBtn.style.display = isHost ? 'block' : 'none';
        } else if (playersList.children.length === 0) {
            isHost = false;
            startGameBtn.style.display = 'none';
        }
        
        /*
        // If the removed player was the current player, redirect to index
        if (playerName === currentPlayerName) {
            window.location.href = 'index.html';
        }
        */
    }

    // start game button functionality
    startGameBtn.addEventListener('click', function() {
        /*
        if (isHost) {
            if (confirm('Are you sure you want to start the game?')) {
                const currentPlayers = parseInt(currentPlayersSpan.textContent);
                if (currentPlayers < 2) {
                    alert('Not enough players to start the game!');
                    return;
                }

                const gameState = {
                    players: Array.from(playersList.children).map(player => 
                        player.querySelector('.player-name').textContent
                    ),
                    hostPlayer: currentPlayerName,
                    isActive: true
                };

                // save game state
                localStorage.setItem('gameState', JSON.stringify(gameState));
                window.location.href = 'game.html';
            }
        } else {
            alert('Only the host can start the game!');
        }
        */
        const gameState = {
            players: Array.from(playersList.children).map(player => 
                player.querySelector('.player-name').textContent
            ),
            hostPlayer: currentPlayerName,
            isActive: true
        };

        localStorage.setItem('gameState', JSON.stringify(gameState));
        window.location.href = 'game.html';
    });

    // leave lobby functionality
    document.getElementById('leave-lobby-btn').addEventListener('click', function() {
        if (confirm('Are you sure you want to leave the lobby?')) {
            const playerElements = document.querySelectorAll('.player');
            playerElements.forEach(player => {
                if (player.querySelector('.player-name').textContent === currentPlayerName) {
                    player.remove();
                    currentPlayersSpan.textContent = parseInt(currentPlayersSpan.textContent) - 1;
                    checkIfHost();
                }
            });
            window.location.href = 'menu.html';
        }
    });

    // initialize host check when page loads
    checkIfHost();
});
