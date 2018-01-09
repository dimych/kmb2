function CreateLine(name){
    this.tableForTaskNameEl = document.querySelector('.containerTable');
    this.newTitle = name;
    this.newRow = this.tableForTaskNameEl.insertRow(1);
    this.cell0 = this.newRow.insertCell(0);
    this.cell1 = this.newRow.insertCell(1);
    this.cell2 = this.newRow.insertCell(2);
    this.cell3 = this.newRow.insertCell(3);
    //fill cell 0
    this.cell0.innerHTML = this.newTitle;
    //fill cell 1
    this.checkBox = document.createElement('input');
    this.checkBox.type = 'checkBox';
    this.cell1.appendChild(this.checkBox);
    //fill cell 2
    this.buttonForUpdate = document.createElement('a');
    this.buttonForUpdate.id = 'updateTask';
    this.buttonForUpdate.href = '';
    this.buttonForUpdate.innerHTML = 'update';
    this.cell2.appendChild(this.buttonForUpdate);
    //fill cell 3
    this.buttonToDeleteLine = document.createElement('a');
    this.buttonToDeleteLine.id = 'deleteTask';
    this.buttonToDeleteLine.href = '';
    this.buttonToDeleteLine.innerHTML = 'delete';
    this.cell3.appendChild(this.buttonToDeleteLine);

    //clear input and fill out an array of links

    // inputTaskNameEl.value = '';
    fillAnArrayLinks();
    onButtonUpdateTaskClick();
}