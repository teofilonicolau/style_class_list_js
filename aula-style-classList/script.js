/*1. Criar o arquivo JS
2. Capturar o titulo
3. Adicionar estilos de cor e tamanho de fonte com JS*/



let titulo =  document.querySelector("h2");

console.log(titulo);

titulo.style.color = "blue";

titulo.style.fontSize = "4rem";

/* Primeira Interação do Usuario:
errou o User Name para poder  exibir os Estilos dinâmicos
do CSS Aplicada nas classes ou ids,no caso inicial no primeiro input*/

let username = document.getElementById("login-usuario");

//Queremos mostrar a menssagem de erro error-text;

let errorText = document.querySelectorAll(".error-text");

//Atribuindo uma classe ao primeiro input:

username.classList.add("error");

/*tornando o error-text visivel: observe
 que no querySelector ao usar classes do css usamos o '.'.Contudo
 ao usar a propiedade classlist já estamos trabalhando com classe,
 então não precisamos colocar o ponto.*/

errorText[0].classList.add("visible");



console.log(errorText);

/*Sem apagar a primeira interação do usuário, 
adicione uma segunda interação. Dessa vez,
 o usuário "acertou o username" mas errou a senha.
  Portanato, o input do username precisa ter a estilização
   de "correto" e não deve exibir mais o texto de erro.

Todo deve ser feito com JavaScript, não podemos alterar
 os arquivos HTML nem CSS. Contudo, se acharem necessário, 
 podem atualizar o código que escrevemos previamente no arquivo script.js.*/

// 1. Capturamos o nosso segundo input e salvamos 

let senha = document.getElementById("login-usuario");


// 2. Removemos ou limpamos as classes com o metodo remove;
 username.classList.remove("error");
 errorText[0].classList.remove("visible");

/* 3. O usuario acertou ,então queremos acessar no CSS a classe input.correct ,
eadicionamos a classe error*/

username.classList.add("correct");
senha.classList.add("error");


/*Observe que na linha 23,tinhamos; let errorText = document.querySelector(".error-text");
foi adicionado All e ficou ;let errorText = document.querySelectorAll(".error-text");
incluindo assim  os dois elemntos 'error-text' que tinhamos.
Na linha 34 tinhamos : errorText.classList.add("visible");
fcomo era uma lista de dois elementos[0,1], foi incluido na posicao [0],
e ficou : errorText[0].classList.add("visible").E na
linha 78 faremos: errorText[1].classList.add("visible"),e por ultimo
na linha 57 tinhamos:  errorText.classList.remove("visible");alteramos
assim: errorText[0].classList.remove("visible");


;*/



console.log(errorText)
errorText[1].classList.add("visible")


