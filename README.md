# Tic-Tac-Toe Game

This project is a simple implementation of the classic Tic-Tac-Toe game using HTML, CSS, and JavaScript. It allows two players to play against each other on the same device.

---

## Project Structure

### HTML
- The HTML defines the structure of the Tic-Tac-Toe board using a grid of buttons and a reset button.

### CSS
- Basic styles are applied to format the board and buttons.
- The winning message and animations are styled for a better user experience.

### JavaScript
- Core game logic:
  - Handles player turns ("X" and "O").
  - Checks for winning combinations using predefined patterns.
  - Highlights winning positions and displays the winner message.
  - Detects a draw if all boxes are filled and no winner is found.
- Reset logic:
  - Clears the board and resets styles to their original state.

---

## How to Use
1. Clone or download the repository.
2. Open the `index.html` file in your preferred browser.
3. Play the game:
   - Take turns clicking on the boxes to place "X" or "O".
   - The game will automatically determine and announce the winner or a tie.
4. Use the "Reset" or "New Game" button to restart the game.

---

## Game Rules
- The game is played on a grid that's 3 squares by 3 squares.
- Two players take turns to place their symbol ("X" or "O") in an empty square.
- The first player to get 3 of their marks in a horizontal, vertical, or diagonal row wins the game.
- If all 9 squares are filled and no player has 3 marks in a row, the game ends in a tie.

---

