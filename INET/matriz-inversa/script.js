const formulario = document.getElementById("formulario-matriz");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    //Obtener los valores de la matriz
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);
    const d = Number(document.getElementById("d").value);
    const e = Number(document.getElementById("e").value);
    const f = Number(document.getElementById("f").value);
    const g = Number(document.getElementById("g").value);
    const h = Number(document.getElementById("h").value);
    const i = Number(document.getElementById("i").value);


    //Calcular el determinante
    const determinante =
        a * e * i +
        b * f * g +
        c * d * h -
        c * e * g -
        b * d * i -
        a * f * h;


    //Comprobar si existe matriz inversa
    if (determinante === 0) {

        resultado.innerHTML = `
            <p>La matriz no tiene inversa.</p>
            <p>Determinante: ${determinante}</p>
        `;

        return;
    }


    //Calcular la matriz de cofactores


    const cofactorA = e * i - f * h;
    const cofactorB = -(d * i - f * g);
    const cofactorC = d * h - e * g;
    const cofactorD = -(b * i - c * h);
    const cofactorE = a * i - c * g;
    const cofactorF = -(a * h - b * g);
    const cofactorG = b * f - c * e;
    const cofactorH = -(a * f - c * d);
    const cofactorI = a * e - b * d;
    const cofactores = [
        [cofactorA, cofactorB, cofactorC],
        [cofactorD, cofactorE, cofactorF],
        [cofactorG, cofactorH, cofactorI]
    ];


    //Obtener la matriz adjunta

    //Dato importante: La matriz adjunta es la transpuesta de la matriz de cofactores.
    //Escribo esto porque despues me olvido 

    const adjunta = [
        [cofactores[0][0], cofactores[1][0], cofactores[2][0]],
        [cofactores[0][1], cofactores[1][1], cofactores[2][1]],
        [cofactores[0][2], cofactores[1][2], cofactores[2][2]]
    ];


    //Calcular la matriz inversa
    const inversa = [
        [
            adjunta[0][0] / determinante,
            adjunta[0][1] / determinante,
            adjunta[0][2] / determinante
        ],
        [
            adjunta[1][0] / determinante,
            adjunta[1][1] / determinante,
            adjunta[1][2] / determinante
        ],
        [
            adjunta[2][0] / determinante,
            adjunta[2][1] / determinante,
            adjunta[2][2] / determinante
        ]
    ];


    //Mostrar el resultado

    resultado.innerHTML = `
        <h2>Resultado</h2>

        <p>Determinante: ${determinante}</p>

        <h3>Matriz inversa</h3>

    <table>
        <tr>
            <td>${inversa[0][0]}</td>
            <td>${inversa[0][1]}</td>
            <td>${inversa[0][2]}</td>
        </tr>

        <tr>
            <td>${inversa[1][0]}</td>
            <td>${inversa[1][1]}</td>
            <td>${inversa[1][2]}</td>
        </tr>

        <tr>
            <td>${inversa[2][0]}</td>
            <td>${inversa[2][1]}</td>
            <td>${inversa[2][2]}</td>
        </tr>
    </table>
    `;
});