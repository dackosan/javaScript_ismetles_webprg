document.getElementById('drawButton').addEventListener('click', function() {
    const size = parseInt(document.getElementById('size').value);
    if (size < 1) {
        alert('Please enter a number greater than 0.');
        return;
    }

    let output = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || i === j) {
                output += '%';
            } else {
                output += ' ';
            }
        }
        output += '\n';
    }
    document.getElementById('output').textContent = output;
});