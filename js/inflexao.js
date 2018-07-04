window.onload = function () {
    entrada = window.location.search.replace('?', '');

    let a = document.querySelectorAll('aside a:nth-child(n+2)');
    for (var i = 0; i < a.length; i++) {
        a[i].href += window.location.search;
    }

    document.querySelector('span').innerText = math.derivative(math.derivative(entrada, 'x'), 'x');

    document.querySelector('button').onclick = function() {
        let x = parseFloat(document.querySelector('input').value);

        if(isNaN(x)){
            document.querySelector("div span").innerText = "Insira um número"
            document.querySelector("input").onkeydown = function () {
                document.querySelector("div span").innerHTML = "&nbsp;"
                document.querySelector("input").onkeydown = undefined;
            }
            return;
        }

        try {
            let y = math.eval(math.derivative(entrada, 'x').toString(), {x: x});
            let esq = math.eval(math.derivative(math.derivative(entrada, 'x'), 'x').toString(), {x: x -0.01});
            let dir = math.eval(math.derivative(math.derivative(entrada, 'x'), 'x').toString(), {x: x +0.01});

            if(y < 0) {
                document.querySelector("div span").innerText = "Concavidade para baixo"
                document.querySelector("input").onkeydown = function () {
                    document.querySelector("div span").innerHTML = "&nbsp;"
                    document.querySelector("input").onkeydown = undefined;
                }
                return;
            } else if(y > 0) {
                document.querySelector("div span").innerText = "Concavidade para cima"
                document.querySelector("input").onkeydown = function () {
                    document.querySelector("div span").innerHTML = "&nbsp;"
                    document.querySelector("input").onkeydown = undefined;
                }
                return;
            }
            if (esq * dir < 0) {
                document.querySelector("div span").innerText = "Este é um ponto de inflexão"
                document.querySelector("input").onkeydown = function () {
                    document.querySelector("div span").innerHTML = "&nbsp;"
                    document.querySelector("input").onkeydown = undefined;
                }
                return;

            }
        } catch (e) {
            document.querySelector("div span").innerText = "Esse é um ponto indefinido"
            document.querySelector("input").onkeydown = function () {
                document.querySelector("div span").innerHTML = "&nbsp;"
                document.querySelector("input").onkeydown = undefined;
            }
            return;
        }
    }
}
