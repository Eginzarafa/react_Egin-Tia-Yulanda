// Fungsi untuk menambahkan produk ke tabel
function addProduct() {
    // Mengambil nilai dari input form
    const productName = getValue('DataName');
    const productCategory = getValue('kategoti');
    const image = getValue('formFile');
    const optionProduct = getById('firstCheckbox');
    const optionProduct1 = getById('secondCheckbox');
    const optionProduct2 = getById('thirdCheckbox');
    const description = getValue('floatingTextarea2');
    const productPrice = getValue('price');

    // Mengambil tabel
    const table = getById("bodyTable");

    // Validasi Product Name
    if (productName.length > 25) {
        showError("Product Name must not exceed 25 characters.");
        return; // Berhenti jika nama produk terlalu panjang
    }

    if (containsSymbols(productName)) {
        showError("Name must not contain symbols.");
        return; // Berhenti jika ada simbol dalam nama produk
    }

    if (isEmpty(productName)) {
        showError("Please enter a valid Product name.");
        return; // Berhenti jika nama produk kosong
    }

    // Validasi Product Price
    if (isEmpty(productPrice) || isNaN(productPrice)) {
        showError("Please enter a valid Product price.");
        return; // Berhenti jika harga produk kosong atau bukan angka
    }

    // Buat baris baru dan tambahkan data ke tabel
    const newRow = table.insertRow(table.rows.length);
    newRow.insertCell(0).innerHTML = table.rows.length - 1;
    newRow.insertCell(1).innerHTML = productName;
    newRow.insertCell(2).innerHTML = productCategory;
    newRow.insertCell(3).innerHTML = image;

    // Menyimpan nilai yang dipilih dari checkbox
    const freshness = getSelectedFreshness(optionProduct, optionProduct1, optionProduct2);
    newRow.insertCell(4).innerHTML = freshness;
    newRow.insertCell(5).innerHTML = description;
    newRow.insertCell(6).innerHTML = productPrice;

    // Tombol hapus produk
    const deleteButton = createDeleteButton();
    deleteButton.addEventListener('click', function () {
        removeProduct(newRow);
    });
    newRow.insertCell(7).appendChild(deleteButton);

    // Reset input setelah menambahkan data
    resetInputFields();

    // Tambahkan event listener pada elemen pencarian
    getById("searchInput").addEventListener("keyup", searchProduct);
}

// Fungsi untuk menghapus produk dari tabel
function removeProduct(row) {
    const table = getById("bodyTable");
    table.deleteRow(row.rowIndex);
}

// Fungsi untuk mencari produk dalam tabel
function searchProduct() {
    const filter = getById("searchInput").value.toUpperCase();
    const table = getById("outputTable");
    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) { // Mulai dari 1 untuk melewati baris header tabel
        const td = tr[i].getElementsByTagName("td")[1]; // Ganti 1 dengan indeks kolom yang ingin Anda cari
        if (td) {
            const txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = ""; // Tampilkan baris jika kata kunci cocok
            } else {
                tr[i].style.display = "none"; // Sembunyikan baris jika tidak cocok
            }
        }
    }
}

// Fungsi untuk menampilkan pesan error
function showError(message) {
    alert(message);
}

// Fungsi untuk mendapatkan nilai dari elemen input berdasarkan ID
function getValue(id) {
    return getById(id).value.trim();
}

// Fungsi untuk mendapatkan elemen berdasarkan ID
function getById(id) {
    return document.getElementById(id);
}

// Fungsi untuk mengecek apakah string mengandung simbol
function containsSymbols(input) {
    return /[#@{}]/.test(input);
}

// Fungsi untuk mengecek apakah string kosong atau tidak
function isEmpty(input) {
    return input.trim() === "";
}

// Fungsi untuk mendapatkan nilai yang dipilih dari checkbox
function getSelectedFreshness(optionProduct, optionProduct1, optionProduct2) {
    if (optionProduct.checked) {
        return optionProduct.value;
    } else if (optionProduct1.checked) {
        return optionProduct1.value;
    } else if (optionProduct2.checked) {
        return optionProduct2.value;
    }
    return "";
}

// Fungsi untuk membuat tombol hapus
function createDeleteButton() {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    return deleteButton;
}

// Fungsi untuk mereset input setelah menambahkan data
function resetInputFields() {
    const inputIds = ['DataName', 'kategoti', 'formFile', 'price', 'floatingTextarea2'];
    inputIds.forEach((id) => {
        getById(id).value = "";
    });

    const checkboxIds = ['firstCheckbox', 'secondCheckbox', 'thirdCheckbox'];
    checkboxIds.forEach((id) => {
        getById(id).checked = false;
    });

    getById('kategoti').value = "Choose";
}

// Event listener untuk input pencarian
getById("searchInput").addEventListener("keyup", searchProduct);


// Kode diperbaiki untuk menjadi lebih mudah dibaca, konsisten, sederhana, efisien, mudah diuji, 
// memiliki penanganan error yang lebih baik, dan termasuk dokumentasi yang relevan. 
// Semua fungsi telah diberi nama yang bermakna, variabel yang diberi nama dengan baik,
//  dan komentar yang menjelaskan beberapa bagian kode yang kompleks.