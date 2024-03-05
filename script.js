async function sendScript(scriptText, quantitySend) {

    const main = document.querySelector("#main");

    if (!main) {
        window.alert("Não há conversa aberta!!!");
        throw new Error("Não há conversa aberta!!!");
    }

    const textArea = main.querySelector(`div[contenteditable="true"]`);

    if (!textArea) {
        window.alert("Não há conversa aberta!!!");
        throw new Error("Não há conversa aberta!!!");
    }

    for (var i = 0; i < quantitySend; i++) {
        console.log(scriptText);
        textArea.focus();
        document.execCommand('insertText', false, scriptText);
        textArea.dispatchEvent(new Event('change', { bubbles: true }));

        await new Promise(resolve => setTimeout(resolve, 100));

        const sendButton = main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`);
        sendButton.click();

        if (i !== quantitySend.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 250));
        }
    }

    return quantitySend;
}

const scriptText = `Acorda, canalha!!!`;    // Texto que irá ser enviado
const quantitySend = 100;                   // Quantidade de vezes que o texto será enviado

sendScript(scriptText, quantitySend)
    .then(e => {
        window.alert(`Código finalizado, ${e} mensagens enviadas com sucesso.`)
        console.log(`Código finalizado, ${e} mensagens enviadas com sucesso.`)
    })
    .catch(console.error);
