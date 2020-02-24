function showOrderValue() {
  var orderValu = 100;
  if (orderValu >= 100) {
    let newOrderValue = orderValu - orderValu * 0.1;
    return newOrderValue;
  }

  console.log(this.newOrderValue);
}

showOrderValue();
