document.addEventListener('DOMContentLoaded', () => {
    const editButtons = document.querySelectorAll('.edit-button');
    editButtons.forEach(button => {
        button.addEventListener('click', handleEdit);
    });
});

function handleEdit(event) {
    const section = event.target.closest('section');
    const content = section.querySelector('p, ul');
    const originalContent = content.innerHTML;

    const input = document.createElement('textarea');
    input.value = originalContent;
    section.appendChild(input);

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Salvar';
    saveButton.classList.add('save-button');
    section.appendChild(saveButton);

    saveButton.addEventListener('click', () => {
        content.innerHTML = input.value;
        input.remove();
        saveButton.remove();
    });
}