function applyStyles() {
    const text = document.getElementById('text').value;
    const bold = document.getElementById('bold').checked;
    const underline = document.getElementById('underline').checked;
    const italic = document.getElementById('italic').checked;
    const align = document.getElementById('align').value;

    let styles = '';
    if (bold) {
        styles += 'font-weight: bold;';
    }
    if (underline) {
        styles += 'text-decoration: underline;';
    }
    if (italic) {
        styles += 'font-style: italic;';
    }

    document.getElementById('styled-text').innerHTML = '<p style="' + styles + 'text-align: ' + align + ';">' + text + '</p>';
}