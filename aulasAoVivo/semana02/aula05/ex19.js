/*
    19 - Crie um algoritmo que tem como entrada um array de strings e trata essas
    string substituindo os números por letra de acordo com a tabela a seguir, além
    disso, deve remover os espaços em branco no começo e fim da string, se
    existirem.
*/

let array = [' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']
let string
let string1
let string2
let string3

string = array[0].replace('h3ll0 w0rld', 'hello world')
string1 = array[1].replace('w3b d3v3l0p3r', 'web developer')
string2 = array[2].replace('0tterw1s3', 'Otterwise')
string3 = array[3].replace('j4v4scr1pt ', 'javascript')

console.log(`${string} ${string1} ${string2} ${string3}`)
