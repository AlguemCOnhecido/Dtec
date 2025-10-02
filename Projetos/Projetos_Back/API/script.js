//URL do servidor

//Endereço do servidor node que esta rodando na maquina local
const API_URL = 'http://localhost:3005/usuarios';

//Elementos Container 
const userCardsContainer = document.getElementById('user-cards-container');
const addUserForm = document.getElementById('addUserForm');
const btnListUsers = document.getElementById('btnListUsers');

//Elementos do modal
const editModal = document.getElementById('editModal');
const editUserform = document.getElementById('editUserForm');
const cancelEdit = document.getElementById('btnCancelEdit');
const editIdInput = document.getElementById('editId');
const editNameInput = document.getElementById('editName');
const editAgeInput = document.getElementById('editAge');

//Funções
//Função que faz requisição de usuarios na API
function fetchAndRenderUsers() {
    //pegar o dado
    fetch(API_URL)
        //tratar o dado
        .then(response => response.json())
        .then(users => renderUsers(users))
        .catch(error => {
            console.error('Erro ao buscar usuarios', error);
            userCardsContainer.innerHTML = `<p>Erro ao carregar usuarios</p>`;
        });
}
//Função para adicionar Usuarios

function addUser(userData) {
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(() => {
            addUserForm.reset();
            fetchAndRenderUsers();

        })
        .catch(error => console.error("Erro ao Adicionar usuario", error))
}
function editUser(userId, userData) {
    fetch(`${API_URL}/${userId}`, {
        method: `PUT`,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(() => {
            editModal.style.display = 'none';
            fetchAndRenderUsers();
        })
        .catch(error => console.error("Erros ao editar usuario", error))
}

function deleteUser(userId) {
    fetch(`${API_URL}/${userId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(() => {
            fetchAndRenderUsers();
        })
        .catch(error => console.error('Erro ao excluir usuario', error))
}

//FUNCAO PARA CRIAR OS CARDS NA TELA
function renderUsers(users) {
    userCardsContainer.innerHTML = '';

    if (users.length === 0) {
        userCardsContainer.innerHTML = '<p>Nenhum usuario cadastrado</p>';
        return;
    }

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        userCard.innerHTML = `
            <div class="user-info">
                <p><strong>${user.id}</strong></p>
                <p><strong>${user.nome}</strong></p>
                <p><strong>${user.idade}</strong></p>
            </div>
            
            <div class = "buttons">
                <button class ="btn-edit">Editar</button>
                <button class ="btn-delete">Deletar</button>
            </div>
        `;

        const btnEdit = userCard.querySelector('.btn-edit')
        const btnDelete = userCard.querySelector('.btn-Delete')

        btnEdit.addEventListener('click', () => {
            editIdInput.value = user.id;
            editNameInput.value = user.name;
            editAgeInput.value = user.idade;
            editModal.style.display = 'flex';
        })

        deleteBtn.addEventListener('click', () => {
            if(confirm(`Deseja concluir a exclusão de usuario?? ${user.id}`)){
                deleteUser(user.id);
            }
        })
        userCardsContainer.appendChild(userCard)
    })
}

btnListUsers.addEventListener('click', fetchAndRenderUsers);
addUserForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const NewUserName = document.getElementById('addName').value;
    const NewUserAge = document.getElementById('addAge').value;

    addUser({nome: NewUserName, idade: NewUserAge})
});

editUserform.addEventListener('submit', (e) => {
    e.preventDefault();

    const userId = editIdInput.value;
    const newName = editNameInput.value;
    const newAge = parseInt(editAgeInput.value);

    editUser(userId, {nome: newName, idade: newAge});
})

cancelEdit.addEventListener('click', () => {
    editModal.style.display = 'none';
})

window.addEventListener('click', (e) => {
    if(e.target === editModal) {
        editModal.style.display = 'none';
    }
})

//Carregar os usuarios

fetchAndRenderUsers();