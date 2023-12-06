// Funktion, um das Feld zu bearbeiten
   function enableEdit() {
    var budget = document.getElementById("budget");
    var tooltip = document.querySelector('button:nth-of-type(1)');
    var confirmButton = document.querySelector('button:nth-of-type(2)');
    var originalContent = budget.textContent;

    budget.contentEditable = true; // Erlaubt das Bearbeiten des Textes
    budget.style.border = "white"; // Zeigt eine Umrandung an, um den Bearbeitungsmodus zu markieren
    tooltip.style.display = "none"; // Versteckt den "Bearbeiten"-Button
    confirmButton.style.display = "inline"; // Zeigt den "Bestätigen"-Button

    budget.setAttribute("contenteditable", true);
    budget.focus();
    budget.textContent = originalContent.replace('CHF ', ''); // Entfernt 'CHF ' beim Bearbeiten
    budget.addEventListener("input", restrictInput);

    var range = document.createRange();
    range.selectNodeContents(budget);
    range.collapse(false);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function restrictInput(event) {
    var text = event.target.textContent.replace(/[^\d.]/g, ''); // Entfernt alle Zeichen außer Zahlen und dem Punkt
    event.target.textContent = text;
  }

  budget.addEventListener("blur", function() {
    budget.removeAttribute("contenteditable");
    budget.removeEventListener("input", restrictInput);
    formatValue();
  });

  // Funktion, um den Bearbeitungsmodus zu verlassen und Änderungen zu bestätigen
  function disableEdit() {
    var budget = document.getElementById("budget");
    var tooltip = document.querySelector('button:nth-of-type(1)');
    var confirmButton = document.querySelector('button:nth-of-type(2)');

    var text = budget.innerText;
    var text = budget.textContent.trim();
    var number = parseFloat(text) || 0; // Extrahiere die Zahl
    budget.innerText = "CHF " + number.toFixed(2); // Setzt den formatierten Wert zurück

    budget.contentEditable = false; // Deaktiviert das Bearbeiten des Textes
    budget.style.border = "none"; // Entfernt die Umrandung
    tooltip.style.display = "inline"; // Zeigt den "Bearbeiten"-Button
    confirmButton.style.display = "none"; // Versteckt den "Bestätigen"-Button
  }
