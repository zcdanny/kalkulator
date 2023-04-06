// links
function triangleLink() {
    // links
    const triangleLink = document.getElementById('triangleLink');
    const parallelogramLink = document.getElementById('parallelogramLink');
    
    triangleLink.classList.add('active');
    parallelogramLink.classList.remove('active');

    // sections
    const triangleSection = document.getElementById('triangleSection');
    const parallelogramSection = document.getElementById('parallelogramSection');

    triangleSection.classList.remove('hide');
    parallelogramSection.classList.add('hide');
}

function parallelogramLink() {
    // links
    const triangleLink = document.getElementById('triangleLink');
    const parallelogramLink = document.getElementById('parallelogramLink');
    
    parallelogramLink.classList.add('active');
    triangleLink.classList.remove('active');

    // sections
    const triangleSection = document.getElementById('triangleSection');
    const parallelogramSection = document.getElementById('parallelogramSection');

    triangleSection.classList.add('hide');
    parallelogramSection.classList.remove('hide');
}

// clear input fields and the result
function reset(formId, resultId) {
    // get ids
    const form = document.getElementById(formId)
    const parent = document.getElementById(resultId);
    
    // reset
    form.reset();
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// triangle formula start
function triangleArea() {
    // get values
    var base = document.getElementById('base').value;
    var height = document.getElementById('height').value;

    // count
    area = 1/2 * base * height;

    // print the result
    var result = `L = 1/2 x a x t <br>
                L = 1/2 x ${base} x ${height} <br>
                L = ${area}`;

    const parent = document.getElementById('s1result1');
    const child = document.createElement('p');
    child.innerHTML = result;
    parent.appendChild(child);
}

function trianglePerimeter() {
    // get the values
    var side1  = document.getElementById('side1').value;
    var side2  = document.getElementById('side2').value;
    var side3  = document.getElementById('side3').value;

    // count
    perimeter = parseInt(side1) + parseInt(side2) + parseInt(side3);

    // print the result
    var result = `K = a + b + c <br>
                K = ${side1} + ${side2} + ${side3} <br>
                K = ${perimeter}`;

    const parent = document.getElementById('s1result2');
    const child = document.createElement('p');
    child.innerHTML = result;
    parent.appendChild(child);
}
// triangle formula end

// parallelogram formula start
function parallelogramArea() {
    // get the values
    var s2n1 = document.getElementById('s2n1').value;
    var s2n2 = document.getElementById('s2n2').value;

    // count
    area = s2n1 * s2n2;

    // print the result
    var result = ` L = A x T <br>
                    L = ${s2n1} x ${s2n2} <br>
                    L = ${area}`;

    const parent = document.getElementById('s2result1');
    const child = document.createElement('p');
    child.innerHTML = result;
    parent.appendChild(child);
}

function parallelogramPerimeter() {
    // get the values
    var s2n3 = document.getElementById('s2n3').value;
    var s2n4 = document.getElementById('s2n4').value;

    // count
    // perimeter = 2 * ();
    perimeter = 2 * (parseInt(s2n3) + parseInt(s2n4));

    // print the result
    var result = `K = 2 x (a + b) <br>
                    K = 2 x (${s2n3} + ${s2n4}) <br>
                    K = ${perimeter}`;

    const parent = document.getElementById('s2result2');
    const child = document.createElement('p');
    child.innerHTML = result;
    parent.appendChild(child);
}
// parallelogram formula end
