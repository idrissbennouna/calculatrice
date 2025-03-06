function calculer() {
    // Récupérer les valeurs des champs de saisie
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;

    // Vérifier si les entrées sont valides
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("res").textContent = "Veuillez entrer des nombres valides.";
        return;
    }

    // Effectuer l'opération sélectionnée
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                document.getElementById("res").textContent = "Erreur : Division par zéro.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            document.getElementById("res").textContent = "Opération invalide.";
            return;
    }

    // Afficher le résultat
    document.getElementById("res").textContent = `Le résultat est : ${result}`;
}
