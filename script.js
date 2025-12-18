document.getElementById('magicBtn').addEventListener('click', () => {
    const messages = [
        "Kodlar AI tarafından optimize edildi!",
        "Vibe seviyesi %100'e ulaştı.",
        "Geleceğin yazılım dünyasına hoş geldin."
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').innerText = randomMsg;
});
