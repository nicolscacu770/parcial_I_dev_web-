const data = {
    "tasks":{
      "one":{
        "task":"Learning Javascript",
        "state":true,
        "end":"2020/10/21"
      },
      "two":{
        "task":"Reader Book Clean Code",
        "state":false,
        "end":"2023/12/31"
      },
      "three":{
        "task":"Running",
        "state":false,
        "end":"2023/06/25"
      },
      "four":{
        "task":"Pass the Evaluation",
        "state":false,
        "end":"2023/11/09"
      },
      "five":{
        "task":"Go to Karaoke",
        "state":true,
        "end":"2022/08/25"
      },
      "six":{
        "task":"Finish watching the serie",
        "state":false,
        "end":"2023/12/31"
      },
      "seven":{
        "task":"Controll Weight",
        "state":false,
        "end":"2020/11/22"
      }
    }
  }

const table = document.getElementById('table_actividades')

for (const key in data.tasks) {
    if (data.tasks.hasOwnProperty(key)) {
        const task = data.tasks[key];
        console.log(`Task: ${task.task}, State: ${task.state}, End: ${task.end}`);
        // task.state = true;
        // addRow(key, task)
        const dateAct = new Date();
        const dateEnd = new Date(task.end);
    
        const row = document.createElement("tr");
        const cell1 =  document.createElement("th");
        const cell2 =  document.createElement("th");
        const cell3 =  document.createElement("th");
        const cell4 =  document.createElement("th");
        const cell5 =  document.createElement("th");
        const nuevoBoton = document.createElement("button");
        nuevoBoton.textContent = "cumplida";
        nuevoBoton.addEventListener("click", function() {
            task.state = true;
            alert("¡Haz completado la tarea: " + key + "!");
        });
    
        cell1.innerHTML = key;
        cell2.innerHTML = task.task;
        cell3.innerHTML = task.state;
        cell4.innerHTML = task.end;
        cell5.appendChild(nuevoBoton);
        
        if(dateEnd > dateAct){
        }else{
            nuevoBoton.disabled = true;
        }
        
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);
        table.appendChild(row);
    }
  }

function addRow( index, datos ) {
    const dateAct = new Date();
    const dateEnd = new Date(datos.end);

    const row = document.createElement("tr");
    const cell1 =  document.createElement("th");
    const cell2 =  document.createElement("th");
    const cell3 =  document.createElement("th");
    const cell4 =  document.createElement("th");
    const cell5 =  document.createElement("th");
    const nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = "cumplida";
    nuevoBoton.addEventListener("click", function() {
        console.log(index)
        // console.log(data.tasks.index.state)
        // datos.state = true;
        alert("¡Haz hecho clic en el botón: " + index + "!");
    });

    cell1.innerHTML = index;
    cell2.innerHTML = datos.task;
    cell3.innerHTML = datos.state;
    cell4.innerHTML = datos.end;
    cell5.appendChild(nuevoBoton);
    

    if(dateEnd > dateAct){
    }else{
        nuevoBoton.disabled = true;
    }
    
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    table.appendChild(row);
  }
