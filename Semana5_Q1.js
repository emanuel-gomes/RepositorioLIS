function ListaDoRhavy(repeticoes, palavra) {
    var repeticoes = Number(window.prompt("Qual o valor da sequência? "));
    console.log(repeticoes);
    var palavra = (window.prompt("Diz ai a palavra "));
    console.log(palavra);
    var palavraNum = 0;

    for(var i = 0; i < repeticoes; i++) {
        palavraNum++;
        var node = document.createElement("li");
        var textnode = document.createTextNode(`${palavra} ${palavraNum}`);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
        }

    }
    ListaDoRhavy();