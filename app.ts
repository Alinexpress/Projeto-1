document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('data-form') as HTMLFormElement;
    const inputData = document.getElementById('input-data') as HTMLInputElement;
    const dynamicContent = document.getElementById('dynamic-content') as HTMLElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Obtém o valor do input
        const data = inputData.value;

        // Limpa o input
        inputData.value = '';

        // Atualiza o conteúdo dinâmico
        const newParagraph = document.createElement('p');
        newParagraph.textContent = `You entered: ${data}`;
        dynamicContent.appendChild(newParagraph);
    });
});
