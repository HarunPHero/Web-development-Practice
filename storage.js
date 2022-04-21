const storage = () => {
    const InputId = document.getElementById('storage-id');
    const id = InputId.value;
    const InputValue = document.getElementById('storage-value');
    const value = InputValue.value;

    if (id && value) {
        localStorage.setItem(id, value)
    }

}