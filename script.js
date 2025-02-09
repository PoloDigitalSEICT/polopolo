document.addEventListener("DOMContentLoaded", function () {
    const criadorSelect = document.getElementById("criador");
    const outroCriadorInput = document.getElementById("outroCriador");
    const form = document.getElementById("questionario");

    // Mostrar campo "Outro" se selecionado
    criadorSelect.addEventListener("change", function () {
        if (this.value === "OUTRO") {
            outroCriadorInput.classList.remove("hidden");
            outroCriadorInput.setAttribute("required", "true");
        } else {
            outroCriadorInput.classList.add("hidden");
            outroCriadorInput.removeAttribute("required");
        }
    });

    form.addEventListener("submit", function () {
        // Se "Outro" foi selecionado, substituir valor antes do envio
        if (criadorSelect.value === "OUTRO" && outroCriadorInput.value.trim() !== "") {
            criadorSelect.value = outroCriadorInput.value.trim();
        }
    });
});
