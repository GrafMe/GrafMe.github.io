window.onload = function () {
    entrada = window.location.search.replace('?', '');

    let a = document.querySelectorAll('aside a:nth-child(n+2) , nav a');
    for (var i = 0; i < a.length; i++) {
        a[i].href += window.location.search;
    }

    canvas = document.querySelector('canvas');
	contexto = canvas.getContext('2d');

    style = getComputedStyle(canvas);
    canvas.width = parseInt(style.getPropertyValue('width'));
    canvas.height = parseInt(style.getPropertyValue('height'));

    contexto.rect(0, 0, canvas.width, canvas.height);
    contexto.fillStyle = "white";
    contexto.fill();

    contexto.beginPath();
    contexto.setLineDash([5, 5]);
    contexto.strokeStyle = "#0B1240";
    contexto.moveTo(10 * (canvas.width / 50), 0);
    contexto.lineTo(10 * (canvas.width / 50), canvas.height);

    contexto.moveTo(0, 10 * (canvas.height / 50));
    contexto.lineTo(canvas.width, 10 * (canvas.height / 50));
    contexto.stroke();

    contexto.beginPath();
    contexto.setLineDash([]);
    contexto.moveTo(0, math.eval(entrada, {x: 0}));
    contexto.beginPath();
    for (var x = -30; x < 70; x++) {
        contexto.lineTo((x + 10) * (canvas.width / 50), math.eval(entrada, {x: x}) + 10 * (canvas.height / 50));
    }
    contexto.strokeStyle = "#DD5525";
    contexto.stroke();
}
