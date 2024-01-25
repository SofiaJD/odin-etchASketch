const container = document.querySelector('#container');

function createRow()
{
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    for(let i = 0; i < 16; i++)
    {
        let div = document.createElement('div');
        div.className = 'square';
        row.appendChild(div);
    }

}

function createGrid()
{
    for(let i = 0; i < 16; i++)
    {
        createRow();
    }
}

createGrid();

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', function()
    {
        square.classList.add('passed');
    });
});