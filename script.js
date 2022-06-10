for (let i = 0; i < 4; i++){
    let button = document.createElement('button');
    button.innerHTML = i+1;
    document.body.appendChild(button)
    button.style.height = '100px';
    button.style.fontSize = '30px';
    button.style.backgroundColor = '#888';
    button.style.borderWidth = '15px';
    button.style.borderColor = 'rgb(54, 52, 52)';
    button.style.borderRadius = '10px';

    if(i < 3) {
        button.style.width  = '200px';
        button.style.marginRight  = '1px';
        button.style.marginTop = '3px';
        button.style.backgroundColor = 'green'
    
    }else {
        button.style.width  = '600px';
        button.style.marginTop  = '5px';
        button.style.backgroundColor = 'yellow';
        button.style.display = 'block'
    }
}