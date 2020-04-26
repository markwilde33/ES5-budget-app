// BUDGET CONTROLLER
var budgetController = (function () {

   //code

})();


// UI CONTROLLER
var UIController = (function () {

   //code

})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

   var ctrlAddItem = function () {

      // 1. Get the field input data from user
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