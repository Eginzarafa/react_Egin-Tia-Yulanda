// Fungsi untuk menambahkan produk ke tabel
function addProduct() {
    // Mengambil nilai dari input form
    let productName = document.getElementById('DataName').value;
    let productCategory = document.getElementById('kategoti').value;
    let image = document.getElementById('formFile').value;
    let optionProduct = document.getElementById('firstCheckbox');
    let optionProduct1 = document.getElementById('secondCheckbox');
    let optionProduct2 = document.getElementById('thirdCheckbox');
    let description = document.getElementById('floatingTextarea2').value;
    let productPrice = document.getElementById('price').value;

    // Mengambil tabel
    let table = document.getElementById("bodyTable");

    // Validasi Product Name
    if (productName.length > 25) {
        alert("Product Name must not exceed 25 characters.");
        document.getElementById('DataName').style.borderColor = "red";
        return; // Berhenti jika nama produk terlalu panjang
    }

    if (/[#@{}]/.test(productName)) {
        alert("Name must not contain symbols.");
        document.getElementById('DataName').style.borderColor = "red";
        return; // Berhenti jika ada simbol dalam nama produk
    }

    if (productName.trim() === "") {
        alert("Please enter a valid Product name.");
        document.getElementById('DataName').style.borderColor = "red";
        return; // Berhenti jika nama produk kosong
    }

    // Validasi Product Price
    if (productPrice.trim() === "" || isNaN(productPrice)) {
        alert("Please enter a valid Product price.");
        document.getElementById('price').style.borderColor = "red";
        return; // Berhenti jika harga produk kosong atau bukan angka
    }

    // Buat baris baru dan tambahkan data ke tabel
    let newRow = table.insertRow(table.rows.length);
    newRow.insertCell(0).innerHTML = table.rows.length - 1;
    newRow.insertCell(1).innerHTML = productName;
    newRow.insertCell(2).innerHTML = productCategory;
    newRow.insertCell(3).innerHTML = image;
    
    // Menyimpan nilai yang dipilih dari checkbox
    let freshness = '';
    if (optionProduct.checked) {
        freshness = optionProduct.value;
    } else if (optionProduct1.checked) {
        freshness = optionProduct1.value;
    } else if (optionProduct2.checked) {
        freshness = optionProduct2.value;
    }
    
    newRow.insertCell(4).innerHTML = freshness;
    newRow.insertCell(5).innerHTML = description;
    newRow.insertCell(6).innerHTML = productPrice;
    newRow.insertCell(7).innerHTML = "<button onclick='removeProduct(this)'>Deleted</button>";

    // Reset input setelah menambahkan data
    document.getElementById('DataName').value = "";
    document.getElementById('kategoti').value = "Choose";
    document.getElementById('formFile').value = "";
    optionProduct.checked = false;
    optionProduct1.checked = false;
    optionProduct2.checked = false;
    document.getElementById('floatingTextarea2').value = "";
    document.getElementById('price').value = "";
}

// Fungsi untuk menghapus produk dari tabel
function removeProduct(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}