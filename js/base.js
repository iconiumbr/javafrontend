// usando o console
console.log('Olá, sou o console');
console.log('Usando Javascript');

//variável não tem tipo - Tipagem dinâmica
let nome = 'Israel Marques';
let email = 'profisrael.copi@fiap.com';
let idUser = 898987;
let logado = false;
const DATA_NASCIMENTO = '02/12';

// exibir no console
console.log(nome, email);
console.log(idUser, logado);
console.log(DATA_NASCIMENTO);

// exibir o tipo atribuído
console.log(typeof nome, nome);
console.log(typeof email, email);
console.log(typeof(idUser), idUser);
console.log(typeof(logado), logado);
console.log(typeof(DATA_NASCIMENTO), DATA_NASCIMENTO);

console.log(logado, typeof(logado));

logado=123456;
console.log(logado, typeof(logado));
console.log('------------------------------------');

// arrays
const pessoas = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles'];
console.log(pessoas);

console.table(pessoas);

// manipulação de dados

// inserir no início do array
pessoas.unshift('Eu mesmo');
console.log(pessoas);

//excluir o primeiro índice = CUIDADO
pessoas.shift()
console.log(pessoas);

// inserir no final do Array
pessoas.push('Eu mesmo');
console.log(pessoas);

// excluir o último valor
pessoas.pop()
console.log(pessoas);

// excluir e/ou inserir em qualquer posição do array
// excluir a partir do índice 2, duas pessoas
pessoas.splice(2,2)
console.log(pessoas);

//inserir a partir de um determinado índice
pessoas.splice(2,0,'Ele','Nós', 'Eu mesmo', 12345, true, 'Eu mesmo 2', false, 100.001);
console.log(pessoas);



