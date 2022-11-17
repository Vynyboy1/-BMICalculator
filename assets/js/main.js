function main() {
  const form = document.querySelector("#formulario");
  const peso = document.getElementById("Pesous").value;
  const altura = document.getElementById("Alturaus").value;
  let imcTP = document.querySelector("#imc");
  function imc(peso, altura) {
    return peso / altura ** 2;
  }

  function msg(peso, altura) {
    if (imc(peso, altura) < 18.5) {
      return "(Abaixo do peso)";
    } else if (imc(peso, altura) < 24.9) {
      return "(Peso normal)";
    } else if (imc(peso, altura) < 29.9) {
      return "(sobrepeso)";
    } else if (imc(peso, altura) < 34.9) {
      return "(Obesidade grau 1)";
    } else if (imc(peso, altura) < 39.9) {
      return "(Obesidade grau 2)";
    } else if (imc(peso, altura) > 40) {
      return "(Obesidade grau 3)";
    }
  }

  imcTP.innerHTML = `<p> seu imc é ${imc(peso, altura).toFixed(2)} 
   ${msg(peso, altura)} </p>`;
  function Calculaimc(evento) {
    evento.preventDefault();
    main();
  }
  form.addEventListener("submit", Calculaimc);
}

main();
