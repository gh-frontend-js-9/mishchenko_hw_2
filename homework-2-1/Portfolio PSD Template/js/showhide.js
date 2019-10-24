var visible = true;
function showFun() {
    if(visible) {
        document.getElementById('about' ).style.display = 'block';
        visible = false;
    } else {
        document.getElementById('about' ).style.display = 'none';
        visible = true;
    }
}
