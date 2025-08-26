function adicionarTarefa(){
    const input = document.getElementById("novaTarefa");
    const texto = input.value.trim();
    if(texto === "") return;

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = texto;
    p.className = "Tafera";
    li.appendChild(p);

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.className = "remove";
    btnRemover.onclick = function(){
        li.remove()
    };

    li.onclick = function(){
        li.classList.toggle('efeito');
    };

    li.appendChild(btnRemover)
    document.getElementById("lista").appendChild(li);

    input.value = "";
}
