const container = document.querySelector('#container');
const div = document.querySelector('div');
const button = document.querySelector('button');
const color = document.querySelector('.color');

function setupDivs(x) {
    for (let i=0; i < x; i++) {
        const outerdiv = document.createElement('div');
        outerdiv.classList.add('outerdiv');
        container.appendChild(outerdiv);
        for (let i=0; i<x; i++) {
            const innerdiv = document.createElement('div');
            innerdiv.classList.add('innerdiv');
            outerdiv.appendChild(innerdiv);
        }
    }
};

setupDivs(16);

div.addEventListener('mouseover', function(e) {
    const randColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = '#' + randColor;
});

button.addEventListener('click', function(e) {
    
    document.getElementById('container').replaceChildren();
    let x = document.getElementById("numSquares").value;
    if (x > 100 || x < 0) {
        alert("Please input a value between 1 and 100");
        setupDivs(16);
        return;
    }
    else if (isNaN(x)) {
        alert("Please input a numeric value");
        setupDivs(16);
        return;
    }

    setupDivs(x);
});


