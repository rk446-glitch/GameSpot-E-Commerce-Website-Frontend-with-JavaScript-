document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("placeOrderBtn");

    btn.addEventListener("click", () => {
        const address = document.getElementById("address").value;
        if (!address) {
            alert("Please enter delivery address!");
            return;
        }

        
        localStorage.setItem("gamespotOrder", JSON.stringify({
            id: "GS" + Math.floor(Math.random() * 1000000),
            step: 0
        }));

        // Navigate to payment page
        window.location.href = "payment.html";
    });
});


