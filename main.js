let totalIncome = 0;
let totalExpense = 0;
let currentBudget = 0;
let initialBudget = 0; // Hält den ursprünglichen Wert des Budgets

function enableEdit() {
  var budget = document.getElementById("budget");
  var tooltip = document.querySelector('button:nth-of-type(1)');
  var confirmButton = document.querySelector('button:nth-of-type(2)');
  var originalContent = budget.textContent;

  budget.contentEditable = true;
  budget.style.border = "white";
  tooltip.style.display = "none";
  confirmButton.style.display = "inline";

  budget.setAttribute("contenteditable", true);
  budget.focus();

  initialBudget = parseFloat(budget.textContent.replace('CHF ', '')) || 0; // Speichert den ursprünglichen Wert
  currentBudget = initialBudget; // Setzt den aktuellen Wert auf den ursprünglichen Wert

  budget.textContent = originalContent.replace('CHF ', '');
  budget.addEventListener("input", restrictInput);

  var range = document.createRange();
  range.selectNodeContents(budget);
  range.collapse(false);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

function restrictInput(event) {
  var text = event.target.textContent.replace(/[^\d.]/g, '');
  event.target.textContent = text;
}

function disableEdit() {
  var budget = document.getElementById("budget");
  var tooltip = document.querySelector('button:nth-of-type(1)');
  var confirmButton = document.querySelector('button:nth-of-type(2)');

  var text = budget.innerText;
  var text = budget.textContent.trim();
  var number = parseFloat(text) || 0;
  budget.innerText = "CHF " + number.toFixed(2);

  budget.contentEditable = false;
  budget.style.border = "none";
  tooltip.style.display = "inline";
  confirmButton.style.display = "none";

  currentBudget = parseFloat(budget.textContent.replace('CHF ', '')) || 0; // Aktualisiert den aktuellen Wert des Budgets
}

function addTransaction() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (!isNaN(amount)) {
    if (amount > 0) {
      totalIncome += amount;
      document.getElementById("income").textContent = ` ${totalIncome.toFixed(2)}`;
    } else if (amount < 0) {
      totalExpense += Math.abs(amount);
      document.getElementById("expense").textContent = ` ${totalExpense.toFixed(2)}`;
    }

    currentBudget += amount;
    document.getElementById("budget").textContent = `CHF ${currentBudget.toFixed(2)}`;

    // Berechne die Differenz zwischen Inflow und Outflow
    const balance = totalIncome - totalExpense;
    document.getElementById("balance").textContent = ` ${balance.toFixed(2)}`;
  }
}
  