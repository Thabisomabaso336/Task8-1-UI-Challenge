function increaseQty() {
  const qtyInput = document.getElementById('qty');
  qtyInput.value = parseInt(qtyInput.value) + 1;
}

function decreaseQty() {
  const qtyInput = document.getElementById('qty');
  if (parseInt(qtyInput.value) > 0) {
    qtyInput.value = parseInt(qtyInput.value) - 1;
  }
}