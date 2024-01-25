const container = document.querySelector('#container');
const buttonCuantitySquares = document.querySelector('#cuantitySquares');
let gridSize = 16;

function createRow(gridSize)
{
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    for(let i = 0; i < gridSize; i++)
    {
        let div = document.createElement('div');
        div.className = 'square';
        div.style.width = 500 / gridSize + 'px';
        div.style.height = 500 / gridSize + 'px';
        row.appendChild(div);
    }
}

function createGrid(gridSize)
{
    for(let i = 0; i < gridSize; i++)
    {
        createRow(gridSize);
    }

    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', function()
        {
            square.classList.add('passed');
        });
    });
}

createGrid(gridSize);

buttonCuantitySquares.addEventListener('click', () => 
{
    const row = document.querySelectorAll('.row');
    gridSize = parseInt(prompt('Cuantity of squares for grid 1 - 25 (example: 16 = 16 x 16)'));

    if(gridSize >= 1 || gridSize <= 25)
    {
        container.innerHTML = "";
        createGrid(gridSize);
    }
    else 
    {
        while(gridSize < 1 || gridSize > 25)
        {
            gridSize = prompt('Cuantity of squares for grid 1 - 25 (example: 16 = 16 x 16)');
        }
    }

});
