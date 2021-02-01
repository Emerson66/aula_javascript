
function clicou(){
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";

}

function redirecionar(){
	window.location.href = "https://www.facebook.com";
	window,open("https://www.google.com/");

}

function trocar(elemento){
	elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
	elemento.innerHTML = "passe o mouse!";

}

function load(){
	alert("página carregada");
}

function funcaoChange(elemento){
	console.log(elemento.value);
}
// function soma(n1, n2){
// 	return n1 + n2;
// }

// function setReplace(frase, nome, novo_nome) {
// 	return frase.replace(nome, novo_nome);
// }

// console.log(soma(5,10));

// console.log(setReplace("vai japao", "japao", "brasil"));

// var validar;
// function validaIdade(idade){
// 	validar;
// 	if (idade >= 18) {
// 		validar = true;
// 	}else{
// 		validar =false;
// 	}
// 	return validar;
// }

// var idade = prompt("Qual sua idade?");
// console.log(validaIdade(idade));


// // var lista  = [nome: “rosa” , “cravo” , “tulipa”, “margarida”];

// // console.log(lista[2]);


// // var dataHoje = new Date();
// // console.log(dataHoje.getMinutes());


// // var count;
// // for (count = 0; count <= 5; count++){
// // 	console.log(count);
// // }

// // while(count <= 5){
// // 	console.log(count);
// // 	count++;
// // }


// // var idade = prompt("Qual a sua idade?");
// // if(idade > 18){
// // 	console.log("maior de idade");
// // }else{
// // 	console.log("menor de idade");
// // };


// // var frutas = [{nome:"maça", cor:"vermelho"}, {nome:"uva", cor:"roxa"}];
// // console.log(frutas);

// // var lista = ["maça", "pera", "laranja"];
// // lista.push("uva");
// // lista.pop();
// // console.log(lista);
// // console.log(lista.toString());
// // console.log(lista.join("|"));

// // // var nome = "Emerson Reis";
// // // var idade = "29";
// // // var idade2 = "10";
// // // var frase = "Japao é o melhor time do mundo";

// // // console.log(nome);
// // // console.log(idade + idade2);
// // // console.log(frase.toUpperCase("Japao", "Brasil"));