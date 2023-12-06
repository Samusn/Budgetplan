function enableEdit() {
    var budget = document.getElementById("budget");
    var tooltip = document.querySelector('button:nth-of-type(1)');
    var confirmButton = document.querySelector('button:nth-of-type(2)');

    budget.contentEditable = true; // Erlaubt das Bearbeiten des Textes
    budget.style.border = "1px solid white"; // Zeigt eine Umrandung an, um den Bearbeitungsmodus zu markieren
    tooltip.style.display = "none"; // Versteckt den "Bearbeiten"-Button
    confirmButton.style.display = "inline"; // Zeigt den "Bestätigen"-Button

}

// Funktion, um den Bearbeitungsmodus zu verlassen und Änderungen zu bestätigen
function disableEdit() {
    var budget = document.getElementById("budget");
    var tooltip = document.querySelector('button:nth-of-type(1)');
    var confirmButton = document.querySelector('button:nth-of-type(2)');

    budget.contentEditable = false; // Deaktiviert das Bearbeiten des Textes
    budget.style.border = "none"; // Entfernt die Umrandung
    tooltip.style.display = "inline"; // Zeigt den "Bearbeiten"-Button
    confirmButton.style.display = "none"; // Versteckt den "Bestätigen"-Button
}