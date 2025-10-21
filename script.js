document.addEventListener("DOMContentLoaded", () => {
  const orderButtons = document.querySelectorAll(".order-btn");
  const receipt = document.getElementById("receipt");
  const orderHistory = document.getElementById("orderHistory");
  const totalAmount = document.getElementById("totalAmount");

  let total = 0;

  orderButtons.forEach(button => {
    button.addEventListener("click", () => {
      const item = button.parentElement;
      const name = item.dataset.name;
      const price = parseFloat(item.dataset.price); // get price from HTML
      const cups = parseInt(item.querySelector(".cups").value);
      const sugar = parseInt(item.querySelector(".sugar").value);
      const milkChecked = item.querySelector(".milk").checked;
      const milkText = milkChecked ? "With Milk" : "No Milk";

      if (cups <= 0) {
        alert("Please select at least one cup.");
        return;
      }

      const orderTotal = price * cups;
      total += orderTotal;

      const listItem = document.createElement("li");
      listItem.textContent = `${cups}x ${name} (${milkText}, Sugar: ${sugar}) — R${orderTotal}`;
      orderHistory.appendChild(listItem);

      totalAmount.textContent = total.toFixed(2);
      receipt.classList.remove("hidden");
    });
  });
});
