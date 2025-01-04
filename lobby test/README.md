# Game Lobby System

A real-time game lobby system that allows players to join, manage lobbies, and start games.

## Features

- Player management (add/remove players)
- Host system with crown badge
- Dynamic player count tracking
- Lobby controls (leave/start game)
- Maximum 12 players per lobby
- Responsive design

## Structure
lobby/  
├── index.html  
├── game.html (junk)  
├── menu.html (junk)  
├── style.css  
└── app.js

## Player Management

### Adding Players
- Players can join using the add player form
- Names limited to 12 characters
- First player becomes host automatically
- Duplicate names not allowed

### Removing Players
- Click the (×) button to remove a player
- Host status transfers if host leaves
- Redirects to index if current player leaves

## Host System

- First player gets host status
- Host badge displayed with crown icon
- Only host can start the game
- Host privileges transfer when host leaves

## Game Controls

### Start Game Button
- Only visible to host
- Requires minimum 2 players
- Confirms before starting
- Saves game state before transition

### Leave Lobby Button
- Available to all players
- Confirms before leaving
- Updates player count
- Transfers host if needed

## Usage

1. Open lobby page
2. Enter player name
3. First player becomes host
4. Other players can join
5. Host can start game when ready
6. Players can leave at any time
