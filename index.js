let total = 0;
function clikhandler(target) {

    const titleName = target.parentNode.childNodes[11].childNodes[3].childNodes[3].innerText;

    const li = document.createElement('li');

    li.innerText = titleName;

    const selectContainer = document.getElementById('select-container');
    selectContainer.appendChild(li)

    const price = target.parentNode.childNodes[11].childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);

    const totalAmount = document.getElementById('total-price');
    totalAmount.innerText = total;


    const purchaseButton = document.getElementById("product-purchase")

    if (total > 0) {
        purchaseButton.removeAttribute('disabled')
    }

    const couponButton = document.getElementById('coupod-btn');

    if (total >= 200) {

        couponButton.removeAttribute('disabled');
        document.getElementById('coupod-btn').addEventListener('click', function () {
            const coupodCode = document.getElementById('coupon-code');
            const value = coupodCode.value;
            if (value === 'SELL200') {
                const discountAmount = (total * 20) / 100;
                const discountAmountTotal = document.getElementById('discount-taka');
                discountAmountTotal.innerText = discountAmount;
                const discountedPrice = total - discountAmount;
                const discountTotalPrice = document.getElementById('discount-total');
                discountTotalPrice.innerText = discountedPrice;
            }
            else {
                alert('Please enter a coupon code for purchase your product')
            }
        })

    }
}

function resetBrowser() {
    window.location.reload();
}






