document.addEventListener('DOMContentLoaded', () => {




    // //Recorrer los inputs y sumar sus valores (si son válidos)
    // let calcularCalorias = function () {
    //     let valor = 0;
    //     let acumulador = 0;
    //
    //     let numeroInputs = document.getElementsByTagName('input').length;
    //     for (let i = 0; i < numeroInputs; i++) {
    //         valor = document.getElementsByTagName('input')[i].value;
    //         if (valor === '') valor = 0;
    //         acumulador += parseFloat(valor);
    //     }
    //
    //     let celdaResultado = document.getElementById('resultado');
    //     celdaResultado.textContent = acumulador;
    // }


    //Quitar la fila en cuyo botón se hizo click y recalcular
    let eliminarFila = function (event) {
        let celda = event.target.parentElement;
        let fila = celda.parentElement;
        fila.remove();
        calcularCalorias();
    };


    let agregarFila = function (alimento) {
        let cuerpo = document.getElementsByTagName('tbody')[0];

        //Crear una fila nueva en la tabla en la que pondremos tres celdas
        let nuevaFila = document.createElement('tr');
        cuerpo.appendChild(nuevaFila);

        //Una celda con el nombre del alimento
        let celdaNombre = document.createElement('td');
        celdaNombre.textContent = alimento;
        //Una celda con un input para las calorias del alimento
        let celdaCalorias = document.createElement('td');
        let inputCalorias = document.createElement('input');
        inputCalorias.type = 'number';
        inputCalorias.onchange = calcularCalorias;
        inputCalorias.onkeyup = calcularCalorias;
        celdaCalorias.appendChild(inputCalorias);

        //Una celda con un botón para eliminar el alimento de la lista
        let celdaEliminar = document.createElement('td');
        celdaEliminar.className = 'col3';
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
        botonEliminar.addEventListener('click', eliminarFila);
        celdaEliminar.appendChild(botonEliminar);

        //Colocar las celdas en la fila
        nuevaFila.appendChild(celdaNombre);
        nuevaFila.appendChild(celdaCalorias);
        nuevaFila.appendChild(celdaEliminar);
    }


    //DINAMIZAMOS EL BOTON AÑADIR ALIMENTOS
    let botonAgregar = document.getElementById('botonAgregar');
    botonAgregar.addEventListener('click', (event) => {
        let nombreAlimento = '';
        while (nombreAlimento === '') {
            nombreAlimento = prompt('Introduce un alimento:');
            if (nombreAlimento === '') alert('Debes introducir un nombre de un alimento valido!!');
            else agregarFila(nombreAlimento);
        }
    });


    //DINAMIZAMOS EL BOTON DE VACIADO DE LA TABLA
    let botonVaciar = document.getElementById('botonVaciar');
    botonVaciar.addEventListener('click', (event) => {
        let tabla = document.getElementsByTagName('table')[0];
        let cuerpo = document.getElementsByTagName('tbody')[0];
        cuerpo.remove();
        let cuerpoNuevo = document.createElement('tbody');
        tabla.appendChild(cuerpoNuevo);
        calcularCalorias(); //Pondrá el total a 0 al no haber filas en la tabla
    });


    //BOTON CALCULO CALORIAS.
      let calcularCalorias = document.getElementById('botonCalcular');
      botonCalcular.addEventListener('click', (event) => {
        let valor = 0;
        let acumulador = 0;
        let numeroInputs = document.getElementsByTagName('input').length;
        for (let i = 0; i < numeroInputs; i++) {
          console.log("llego");
            valor = parseFloat(document.getElementsByTagName('input')[i].value);
            console.log(typeof(valor));
        }
      });
  });
