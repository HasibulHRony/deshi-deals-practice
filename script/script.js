//inner text number function
function innerTextNumberFunction(id) {
    const innerTextFun = Number(document.getElementById(id).innerText);
    return innerTextFun;
}

//only getting element function
function gettingElement(id) {
    const Text = document.getElementById(id);
    return Text;
}

//to fixed maker function
function toFixedTwo(variable) {
    const fixted = variable.toFixed(2);
    return fixted;
}

let totalPrice = innerTextNumberFunction("total-price");
let finalBill = innerTextNumberFunction("final-price");
let discount = innerTextNumberFunction("discount-price");

//using DOM Traversing
const options = document.getElementsByClassName("option");
for (let thing of options) {
    thing.addEventListener("click", function () {
        const img = thing.parentNode.parentNode.children[0].children[0].src;

        const title = thing.parentNode.parentNode.children[1].children[0].innerText;

        const price = thing.parentNode.parentNode.children[1].children[2].children[0].innerText;

        const priceNumbered = Number(price);
        const discountNumbered = Number(discount);
        totalPrice = totalPrice + priceNumbered;
        finalBill = totalPrice - discountNumbered;

        let totalPriceConverted = totalPrice.toFixed(2);
        let finalBillConverted = finalBill.toFixed(2);
        console.log(totalPrice, finalBill);

        gettingElement("total-price").innerText = totalPriceConverted;
        gettingElement("final-price").innerText = finalBillConverted;


        const div = document.createElement("div");
        div.innerHTML = `<div class="flex justify-between rounded-lg items-center m-4 p-2 bg-gray-300">
            <div class="flex items-center h-10">
                <img class="h-full" src="${img}" alt="">
            </div>
            <div class="flex flex-col items-center gap-1">
                <h2 class="font-bold">${title}</h2>
                <p>${price} Tk</p>
            </div>
        </div>
        `;
        const cartContainer = gettingElement("cart-container");
        cartContainer.appendChild(div)




    })
}



//Traditional Way
// document.getElementById("spoon-btn").addEventListener("click", function () {
//     const spoonPrice = innerTextNumberFunction("spoon-price");
//     let totalPrice = innerTextNumberFunction("total-price");
//     let finalBill = innerTextNumberFunction("final-price");
//     let discount = innerTextNumberFunction("discount-price");
//     let discountedPrice = 0;
//     if (totalPrice > 2000) {
//         discountedPrice = (discount * 20) / 100;
//     }
//     totalPrice = totalPrice + spoonPrice;
//     finalBill = totalPrice - discountedPrice;
//     const totalPriceConverted = toFixedTwo(totalPrice);
//     const finalBillConverted = toFixedTwo(finalBill);
//     gettingElement("total-price").innerText = totalPriceConverted;
//     gettingElement("final-price").innerText = finalBillConverted;

//     const spoonImg = gettingElement("spoon-img").src;
//     const cartTitle = gettingElement("cart-title").innerText;

//     const div = document.createElement("div");
//     div.innerHTML = `<div class="flex justify-between rounded-lg items-center m-4 p-2 bg-gray-300">
//     <div class="flex items-center h-10">
//         <img class="h-full" src="${spoonImg}" alt="">
//     </div>
//     <div class="flex flex-col items-center gap-1">
//         <h2 class="font-bold">${cartTitle}</h2>
//         <p>${spoonPrice} Tk</p>
//     </div>
//     </div>
//     `
//     const cartContainer = gettingElement("cart-container");
//     cartContainer.appendChild(div)

// })


// clear everything
document.getElementById("clear-btn").addEventListener("click", function () {
    gettingElement("total-price").innerText = 0;
    gettingElement("discount-price").innerText = 0;
    gettingElement("final-price").innerText = 0;
    gettingElement("cart-container").innerText = "";

})