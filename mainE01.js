// Catarina Barreiros - E01

alert("Let's play!")

//perguntar o nome e gravar como person
const person = prompt("Primeiro, diz-me o teu nome.");

//usar confirm para fazer uma pergunta um pouco estúpida
confirm("Okay " +person+ ", agora tens só que me confirmar que tens mais do que 3 anos.");

//now throw them off their rhythm
alert("Sabes que mais?");
alert("Não acredito que tenhas mais que 3 anos.")
confirm("Tens a certeza que não estás a mentir?")
alert("Ai é? Okay então vou te fazer uma pergunta que só alguém com mais de 3 anos saberia responder.")

//okay agora começa o jogo
//prompt com a conta
let number = prompt ("Quanto é que 45+4/2?");
//fiquei com dúvidas de como usar let para os números por isso escrevi em texto normal

//ifs + resultados
if (number == 47) {
      alert("Pronto, okay, tinhas razão " + person + ".");
      //assert dominance
      alert("Mas agora fiquei amuada e já não quero falar mais contigo.");
      alert("Xau >:(");
  }

  else {
      alert ("ah HA. Eu bem disse.");
      alert("Sai mas é do meu site. Não és velho o suficiente e não te quero traumatizar.")
  }

  //depois quero perceber porque é que esta parte não estava a funcionar
  //  if else ("Bratislava") {
    //  alert ("Eita" +person+ ", isso é a capital da Eslováquia.")
      //alert ("????Olá??? Foca-te no assunto da próxima vez.")}

  if (number == "Bratislava") {
    alert ("Eita" +person+ ", isso é a capital da Eslováquia.")
    alert ("????Olá??? Foca-te no assunto da próxima vez.")
  }

//Update: já percebi :D
