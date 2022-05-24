const container = document.querySelector('#container');
const div = document.querySelector('div');
const button = document.querySelector('button');
const color = document.querySelector('.color');
let opacity = 0;

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
    e.target.classList.add('color');
    let opacity = e.target.style.opacity;
    if (e.target.classList.contains('opacity')) {
        e.target.style.opacity = (Number(opacity) + 0.1);
    }
    else {
        e.target.classList.add('opacity');
    }
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


