let lightMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('dark')
})

let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
let numberTask = document.querySelector("span");


function addTarefa() {
  //PEGAR O VALOR DIGITADO NO INPUT
  let valorInput = input.value;

  //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    
    ++contador;
    numberTask.innerHTML = contador

    let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="editar(${contador})" class="edit"><i class="mdi mdi-note-edit-outline"></i></button>
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-trash-can-outline"></i></button>
            
        </div>
    </div>`;

    //ADICIONAR NOVO ITEM NO MAIN

    main.innerHTML += novoItem;

    //ZERAR OS CAMPINHOS
    input.value = "";
    input.focus();
  }
}
 
function deletar(id) {
  let item = document.getElementById(id);
  if(!item.classList.contains("clicado")){
    --contador
  }
  numberTask.innerHTML = contador
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
  console.log(classe);

  if (classe == "item") {
    item.classList.add("clicado");
    --contador;
    numberTask.innerHTML = contador
    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle");
    item.parentNode.appendChild(item);
  
  } else {
    item.classList.remove("clicado");
    ++contador;
    numberTask.innerHTML = contador 
    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-check-circle");
    icone.classList.add("mdi-circle-outline");
  }
  
}
function editar(id){
  newNome = prompt("Make the change")
  let item = document.getElementById(id);
  var nome = item.querySelectorAll(".item-nome");

  nome.forEach(function(div) {
  let nome = div.textContent;
  div.innerHTML = newNome
});

}
input.addEventListener("keyup", function (event) {
  //SE TECLOU ENTER (13)
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});
