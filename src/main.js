function caesarCipher(str, shift) {
    return str
        .split('')
        .map(char => {
            if (/[a-z]/i.test(char)) {
                const code = char.charCodeAt(0);
                const base = code >= 65 && code <= 90 ? 65 : 97;

                return String.fromCharCode(
                    ((code - base + shift) % 26) + base
                );
            }
            return char;
        })
        .join('');
}

document.getElementById('cipherForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value);

    const result = caesarCipher(text, shift);

    document.getElementById('result').textContent = result;
});

//vitest cypress test