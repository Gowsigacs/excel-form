function calculateTotal() {
    let qty = document.getElementById("qty1").value;
    let price = document.getElementById("price1").value;
    let total = qty * price;
    document.getElementById("total1").value = isNaN(total) ? "" : total;
}
