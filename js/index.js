window.onload = function(){
    document.querySelector("button").onclick = function(){
        let entrada = document.querySelector("input").value;
        if(entrada == "") {
            document.querySelector("p").innerText = "Insira uma expressão"
            document.querySelector("input").onkeydown = function () {
                document.querySelector("p").innerHTML = "&nbsp;"
                document.querySelector("input").onkeydown = undefined;
            }
            return;
        }
        try {
            math.parse(entrada);
        } catch (e) {
            document.querySelector("p").innerText = "A expressão não é válida"
            document.querySelector("input").onkeydown = function () {
                document.querySelector("p").innerHTML = "&nbsp;"
                document.querySelector("input").onkeydown = undefined;
            }
            return;
        }

        try {
            math.derivative(entrada, 'x');
        } catch (e) {
            document.querySelector("p").innerText = "A expressão deve ser derivável em função de x"
            document.querySelector("input").onkeydown = function () {
                document.querySelector("p").innerHTML = "&nbsp;"
                document.querySelector("input").onkeydown = undefined;
            }
            return;
        }

        window.location = 'zeros.html?' + entrada
    }
}
