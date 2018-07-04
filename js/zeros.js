window.onload = function () {
    entrada = window.location.search.replace('?', '');

    let a = document.querySelectorAll('aside a:nth-child(n+2) , nav a');
    for (var i = 0; i < a.length; i++) {
        a[i].href += window.location.search;
    }

    document.querySelector('button').onclick = function() {
        let x = parseFloat(document.querySelector('input').value);

        if(isNaN(x)){
            document.querySelector("span").innerText = "Insira um número"
            document.querySelector("input").onkeydown = function () {
                document.querySelector("span").innerHTML = "&nbsp;"
                document.querySelector("input").onkeydown = undefined;
            }
            return;
        }

        try {
            console.log('oi');
            let y = math.eval(entrada, {x: x});
            if(y == Infinity || y == -Infinity){
                document.querySelector("span").innerText = "Esse é um ponto indefinido"
                document.querySelector("input").onkeydown = function () {
                    document.querySelector("span").innerHTML = "&nbsp;"
                    document.querySelector("input").onkeydown = undefined;
                }
                return;
            } else if(math.isZero(math.round(y, 2))){
                document.querySelector("span").innerText = "f(x) é igual a zero"
                document.querySelector("input").onkeydown = function () {
                    document.querySelector("span").innerHTML = "&nbsp;"
                    document.querySelector("input").onkeydown = undefined;
                }
                return;
            } else {
                document.querySelector("span").innerText = "Esse não é um ponto de interesse"
                document.querySelector("input").onkeydown = function () {
                    document.querySelector("span").innerHTML = "&nbsp;"
                    document.querySelector("input").onkeydown = undefined;
                }
                return;
            }
        } catch (e) {
            document.querySelector("span").innerText = "Esse é um ponto indefinido"
            document.querySelector("input").onkeydown = function () {
                document.querySelector("span").innerHTML = "&nbsp;"
                document.querySelector("input").onkeydown = undefined;
            }
            return;
        }
    }
}
