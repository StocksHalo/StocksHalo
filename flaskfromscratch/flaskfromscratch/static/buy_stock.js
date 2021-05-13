window.onload = function() {

    // Get references to elements on the page.
    var form1 = document.getElementById('quantity-buy-form');
    var form2 = document.getElementById('quantity-sell-form');
    var quantityCaptured1 = document.getElementById('buy-qty');
    var quantityCaptured2 = document.getElementById('sell-qty');
    var ptagId = document.getElementById('transaction-history');
    var pbalanceId = document.getElementById('current-balance');
    var pquantityId = document.getElementById('current-quantity');
    var stockPriceBuy = document.getElementById('current-stock-price-buy')
    var stockPriceSell = document.getElementById('current-stock-price-sell')
  
    form1.onsubmit = function(e) {
        alert("Market Closed: Can't Place Order");
        
        e.preventDefault();
  /*
      // Retrieve the message from the textarea.
      var buyquantity = parseInt(quantityCaptured1.value);
      var buySockPrice = parseInt(stockPriceBuy.value);
      var Balance = parseInt(pbalanceId.innerHTML);
      var newBalance = Balance - (buyquantity*buySockPrice);
      var newQuantity = buyquantity+parseInt(pquantityId.innerHTML);
      if(newBalance<0)
      {
          alert("Transaction cannot be performed, Insufficient balance");
      }
      else{
          pbalanceId.innerHTML = newBalance;
          pquantityId.innerHTML = newQuantity;
          ptagId.innerHTML += '<br> ' + "Bought stocks " + buyquantity + " at price " + (buyquantity*buySockPrice) + ' <br>';
          ptagId.innerHTML += "Updated Balance: $" + newBalance + " Updated Quantity: " +  newQuantity + ' <br>';
          alert("Transaction successful");
      }

      quantityCaptured1.value = '';
      stockPriceBuy.value = '';
  
      return false;
    */
    };

    form2.onsubmit = function(e) {
        alert("Market Closed: Can't Place Order");
        e.preventDefault();
  /*
        // Retrieve the message from the textarea.
        var sellquantity = parseInt(quantityCaptured2.value);
        var sellSockPrice = parseInt(stockPriceSell.value);
        var Balance = parseInt(pbalanceId.innerHTML);
        var newBalance = Balance + (sellquantity*sellSockPrice);
        var newQuantity = parseInt(pquantityId.innerHTML)-sellquantity;
        if(newQuantity<0)
        {
            alert("Transaction cannot be performed, Insufficient quantity " + newQuantity);
        }
        else{
            pbalanceId.innerHTML = newBalance;
            pquantityId.innerHTML = newQuantity;
            ptagId.innerHTML += '<br> ' + "Sold stocks " + sellquantity + " at price " + (sellquantity*sellSockPrice) + ' <br>';
            ptagId.innerHTML += "Updated Balance: $" + newBalance + " Updated Quantity: " +  newQuantity + ' <br>';
            alert("Transaction successful");
        }
  
        quantityCaptured2.value = '';
        stockPriceSell.value = '';
    
        return false;
      */
    };
  };
