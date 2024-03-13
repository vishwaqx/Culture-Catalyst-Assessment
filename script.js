function nostyles(){
    document.styleSheets[0].disabled = true;
}

function changestyle(n){
    nostyles()
    document.styleSheets[n].disabled = false;
}
nostyles()

let row = 1;

function submit(){
    const name = document.getElementById('inputbox');
    const dob = document.getElementById('dob');
    const message = document.getElementById('message')
    const table = document.getElementById('table');
    
    let rows = table.insertRow(row);
    let cell1 = rows.insertCell(0);
    let cell2 = rows.insertCell(1);
    let cell3 = rows.insertCell(2);
    cell1.innerHTML = name.value;
    cell2.innerHTML = dob.value;
    cell3.innerHTML = message.value;
    row++;
}
