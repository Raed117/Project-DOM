document.addEventListener('DOMContentLoaded' , () => {
    //function to update the total price
    function updatTotalPrice() {
        let totalPrice = 0 ;
        document.querySelectorAll('.card').forEach(card => {
            const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace( '$',' ' ));
            const quantity = parseInt(card.querySelector('.quantity').textContent);
            totalPrice += unitPrice * quantity;
        });
        document.querySelector('.total').textContent =  `${totalPrice.toFixed(2)}$`;
    };

 
// Incriment quantity 
document.querySelectorAll('.fa-plus-circle').forEach(button => {
    button.addEventListener('click', function(){
        const quantityElement = this.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1 ;
        updatTotalPrice();

    });
});
// Decrement quantity
document.querySelectorAll('.fa-minus-circle').forEach(button => {
    button.addEventListener('click', function() {
        const quantityElement = this.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0){
        quantityElement.textContent = quantity - 1 ;
        updatTotalPrice();
        }

    });
});

//Delete item from card
document.querySelectorAll('.fa-trash-alt').forEach(button => {
    button.addEventListener('click' , function(){
        const itemCard = this.closest('.card-body');
        itemCard.remove();
        updatTotalPrice();

    });
});

// like item.. toggle heart color
document.querySelectorAll('.fa-heart').forEach(button => {
    button.addEventListener('click' , function() {
      this.classList.toggle('liked'); 
    });
});


// initial the total price 
 updatTotalPrice();
});
