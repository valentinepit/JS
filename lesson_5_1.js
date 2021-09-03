const board = document.getElementById('main')
console.log(typeof (board))

function create_element(styles, text) {
    const div = document.createElement('DIV')
    for (let i of styles) {
        div.classList.add(i)
        div.textContent = text
    }
    return div
}




const letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

function render() {
    for (let i = 1; i <= 81; i++) {
        if (i == 1) {
            board.appendChild(create_element(['square', 'white'], ''));
            continue
        }
        if (i > 1 && i < 10) {
            board.appendChild(create_element(['square', 'white'], letters[i - 1]));
            console.log(i)
            continue
        }

        if ((i - 1) % 9 == 0) {
            board.appendChild(create_element(['square', 'white'], (i - 1) / 9));
            continue
        }

        if (i % 2 == 0) {
            board.appendChild(create_element(['square', 'black'], ''));
        }
        if (i % 2 != 0) {
            board.appendChild(create_element(['square', 'white'], ''));
        }
    }
}

render()