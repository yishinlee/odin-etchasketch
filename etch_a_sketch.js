const maxWidth = maxHeight = 960;
const container = document.getElementById("container");

function createGrids(dimensions) {
    const height = width = maxWidth / dimensions;
    console.log(height);
    console.log(dimensions);
    for (let i = 0; i < dimensions; i++) {
        const newRow = document.createElement("div");
        newRow.classList.add("grid-row");
        newRow.style.height = `${height}px`;
        for (let j = 0; j < dimensions; j++) { 
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.height = `${height}px`;
            cell.style.width = `${width}px`;
            cell.addEventListener("mouseenter", () =>
                                  cell.style.background = "gray");
            newRow.appendChild(cell);    
        }
        
        container.appendChild(newRow);
    }
}

function redrawGrids() {
    clearGrids();
    promptForNewGrids();
}

function clearGrids() {
    const allGrids = document.getElementsByClassName("grid-row");
    const allCells = document.getElementsByClassName("cell");
    const width = height = allGrids.length;
    console.log(allGrids);
    console.log(allCells);
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++)
        {
            allCells[0].remove();
        }
        allGrids[0].remove();
    }
}

function promptForNewGrids()
{
    const dimensions = prompt("Please enter new dimensions (max 100): ");
    
    createGrids(dimensions);
}

function createClearButton()
{
    const clearButton = document.createElement("button");
    
    clearButton.classList.add("button");
    clearButton.textContent = "Clear and generate new grids";
    
    clearButton.addEventListener("click", redrawGrids);
    container.appendChild(clearButton);
}

createClearButton();
createGrids(16);