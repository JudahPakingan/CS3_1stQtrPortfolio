// HELLO - ENGLISH
// MABUHAY - TAGALOG
// HOLA - SPANISH
// HALLO - GERMAN
// BONJOUR - FRENCH
// CIAO - ITALIAN
// ZDRAVSTUJTE - RUSSIAN

const rl = require('readline')
const rli = rl.createInterface({
    input: process.stdin,
})

rli.on('line', give_greeting_language)

function give_greeting_language(num){
    switch(num) {
        case 'ENGLISH':
            console.log("HELLO")
            break
        case 'TAGALOG':
            console.log("MABUHAY")
            break
        case 'SPANISH':
            console.log("HOLA")
            break
        case 'GERMAN':
            console.log("HALLO")
            break
        case 'FRENCH':
            console.log("BONJOUR")
            break
        case 'ITALIAN':
            console.log("CIAO")
            break
        case 'RUSSIAN':
            console.log("ZDRAVSTUJTE")
            break
        default:
            console.log("UNKNOWN")
    }
}