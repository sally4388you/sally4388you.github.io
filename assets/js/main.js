var leftTab = document.getElementById('left-tab'),
    rightTab = document.getElementById('right-tab');

function showLeft() {
  leftTab.style.display="block";
  leftTab.setAttribute("class","rotateInUpLeft self-animated");
}

function goneLeft() {
  leftTab.setAttribute("class","rotateOutDownLeft self-animated");
}

function showRight() {
  rightTab.style.display="block";
  rightTab.setAttribute("class","rotateInUpRight self-animated");
}

function goneRight() {
  rightTab.setAttribute("class","rotateOutDownRight self-animated");
}


// add line numbers for code snippet

let code_snippets = document.querySelectorAll('pre.highlight');

for (let i = 0; i < code_snippets.length; i ++) {
    let code = code_snippets[i].children[0];
    let total_lines = Math.ceil(parseInt(code.offsetHeight) / 21);

    let wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'line-numbers-rows');
    wrapper.setAttribute('aria-hidden', 'hidden');
    for (let j = 1; j <= total_lines; j++) {
        wrapper.appendChild(document.createElement('span'));
    }
    
    code.appendChild(wrapper);
}