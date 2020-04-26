// BUDGET CONTROLLER
var budgetController = (function () {

   //code

})();


// UI CONTROLLER
var UIController = (function () {

   return {
      getInput: function () {

         return {
            type: document.querySelector('.add__type').value, // can be either inc or exp
            description: document.querySelector('.add__description').value, // get description
            value: document.querySelector('.add__value').value // get value
         };
      }
   };

})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

   var ctrlAddItem = function () {

      // 1. Get the field input data from user
      var input = UICtrl.getInput();
      console.log(input);

      // 2. Add the item to the budget controller
      // 3. Add the item to the UI
      // 4. Calculate the budget
      // 5. Display the budget on the UI
      console.log('testing!');
   }

   document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

   document.addEventListener('keypress', function (event) {

      if (event.keyCode === 13 || event.which === 13) {
         ctrlAddItem();
      }

   });

})(budgetController, UIController);