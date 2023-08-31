const inputdata = document.getElementById('inputdata');
inputdata.addEventListener("submit", (e) => {
    e.preventDefault();
    let productName = document.getElementById('DataName').value;
    let productPrice = document.getElementById('price').value;
    let table = document.getElementById("outputTable");
    let newRow = table.insertRow(table.rows.length);
    

    if (productName.length > 25) {
        alert("Product Name must not exceed 25 characters.");
        event.preventDefault(); 
      }

      if (productName.trim() === "") {
        alert("Please enter a valid Product name.");
        event.preventDefault();
      }

      if (productPrice.trim() === "") {
        alert("Please enter a valid Product price.");
        event.preventDefault();
      }
    

    else {
        for (var i = 0, row; row = table.rows[i]; i++) {
            newRow.insertCell(0).innerHTML = i;
        }
        newRow.insertCell(1).innerHTML = productName;
        newRow.insertCell(6).innerHTML = productPrice;
            
    }   

}
)