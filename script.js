function determinarEstacao() {
    const dataInput = document.getElementById("dataInput").value;
    const data = new Date(dataInput);
    let estacao = "";

    switch (data.getMonth()) {
      case 12:
      case 1:
      case 2:
      case 3:
        estacao = "Verão";
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        estacao = "Outono";
        break;
      case 6:
      case 7:
      case 8:
      case 9:
        estacao = "Inverno";
        break;
      case 9:
      case 10:
      case 11:
      case 12:
        estacao = "Primavera";
        break;
      default:
        estacao = "Mês inválido";
        break;
    }

    document.getElementById("resultado").innerHTML = `A estação do ano para a data ${data.toDateString()} é: ${estacao}`;
  }