window.onload = function () {
    entrada = window.location.search.replace('?', '');

    let a = document.querySelectorAll('aside a:nth-child(n+2) , nav a');
    for (var i = 0; i < a.length; i++) {
        a[i].href += window.location.search;
    }

    document.querySelector('span').innerText = math.derivative(entrada, 'x');
    document.querySelector('span:nth-of-type(2)').innerText = math.derivative(math.derivative(entrada, 'x'), 'x');

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
            let esq = math.eval(math.derivative(entrada, 'x').toString(), {x: x-0.01});
            let dir = math.eval(math.derivative(entrada, 'x').toString(), {x: x+0.01});

            if(y < esq && y < dir) {
                document.querySelector("div span").innerText = "Ponto de mínimo local"
                document.querySelector("input").onkeydown = function () {
                    document.querySelector("div span").innerHTML = "&nbsp;"
                    document.querySelector("input").onkeydown = undefined;
                }
                return;
            } else if(y > esq && y > dir) {
                document.querySelector("div span").innerText = "Ponto de máximo local"
                document.querySelector("input").onkeydown = function () {
                    document.querySelector("div span").innerHTML = "&nbsp;"
                    document.querySelector("input").onkeydown = undefined;
                }
                return;
            } else {
                document.querySelector("div span").innerText = "Este não é um ponto de minimo ou máximo"
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
