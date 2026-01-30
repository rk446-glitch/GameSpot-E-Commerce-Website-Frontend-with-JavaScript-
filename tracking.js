const order = JSON.parse(localStorage.getItem("gamespotOrder"));
document.getElementById("orderId").innerText = "Order ID: " + order.id;

let step = order.step;

setInterval(() => {
  if (step < 5) {
    document.getElementById("s" + step).style.fontWeight = "bold";
    step++;
  }
}, 2500);
