let cartQuantity = 0;

      function cartQuantity1(amount) {
        if (amount === 1) {
          cartQuantity = cartQuantity + 1;
          alert(`Added +1 item now item amount is ${cartQuantity}`);
        } else if (amount === 2) {
          cartQuantity = cartQuantity + 2;
          alert(`Added +2 item now item amount is ${cartQuantity}`);
        } else if (amount === 3) {
          cartQuantity = cartQuantity + 3;
          alert(`Added +3 item now item amount is ${cartQuantity}`);
        } else if (amount === undefined) {
          cartQuantity = 0;
          alert(`Resetted cart now item amount is ${cartQuantity}`);
        } else if (amount == -1) {
          alert(`Cart item amount is ${cartQuantity}`);
        }
      }