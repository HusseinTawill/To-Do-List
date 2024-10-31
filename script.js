
    function add() {
        document.getElementById("addform").style.display = "block";
    }

    function cancel() {
        document.getElementById("addform").style.display = "none";
    }

    function addTask() {
        const title = document.getElementById('title').value;
        const details = document.getElementById('details').value;
        const date = document.getElementById('date').value;
        const priority = document.getElementById('priority').value;
    
        const tasks = document.getElementById('tasks'); // Update to unique ID
    
        tasks.innerHTML += `<div class="cards w-80" draggable="true">
            <div class="card" id="${priority}" draggable="true">
                <div class="card-body">
                    <h5 class="card-title m-0">${title}</h5>
                    <p class="card-text m-0">${details}</p>
                    <p class="card-text">${date}</p>
                    <div class="d-flex justify-content-end">
                        <a href="#" class="btn btn-danger w-50 " onclick="removeTask(event)">Remove</a>
                    </div>
                </div>
            </div>
        </div>`;

        document.getElementById('title').value = '';
        document.getElementById('details').value = '';
        document.getElementById('date').value = '';
      
        document.getElementById("addform").style.display = "none";
        dragDrop()
    }
    
    function removeTask(event) {
        event.preventDefault();
        const card = event.target.closest('.card');
        if (card) {
            card.parentElement.removeChild(card);
        }
    }
    
    function dragDrop() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('dragstart', dragStart);
            card.addEventListener('dragend', dragEnd);
        });
    
        const taskcards = document.querySelectorAll('.taskcard');
        taskcards.forEach(taskcard => {
            taskcard.addEventListener('dragover', dragOver);
            taskcard.addEventListener('drop', drop);
        });
    }
    
    let draggedCard = null;
    
    function dragStart(e) {
        draggedCard = e.target;
        e.dataTransfer.setData('text/plain', ''); 
        setTimeout(() => {
            draggedCard.style.display = 'none';
        }, 0);
    }
    
    function dragEnd(e) {
        setTimeout(() => {
            draggedCard.style.display = 'block';
            draggedCard = null;
        }, 0);
    }
    
    function dragOver(e) {
        e.preventDefault(); 
    }
    
    function drop(e) {
        e.preventDefault();
        const dropTarget = e.target.closest('.taskcard');
    
        if (dropTarget && draggedCard) {
            dropTarget.appendChild(draggedCard);
            dragDrop(); 
        }
    }
    
    
  dragDrop();