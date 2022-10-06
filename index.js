let collections = [];
function addFeedback() {
    let userName = document.getElementById('userName').value;
    // let description = document.getElementById('description').value;
    if (userName !='' ) {
        let collection = {
            userName: userName,
            // description: description

        }
        collections.push(collection);

    }
    
    else {
        alert('Please enter feedback');     
    }

    window.location.reload()

    
}
let flag = false;

function one() {
    const h = document.getElementById('comment');
    h.style.color = 'Red'
    h.innerHTML = 'Thanks for rating us 1⭐!!! We will try to Improve🥵';
    document.getElementById('one').style.display ='⭐';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    

    flag = true;
}

function two() {
    const h = document.getElementById('comment');
    h.style.color = 'Red'
    h.innerHTML = 'Thanks for rating us 2⭐!!! We will try to Improve😌';
    document.getElementById('one').style.display = '⭐';
    document.getElementById('two').style.display = '⭐';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    flag = true;
}

function three() {
    const h = document.getElementById('comment');
    h.style.color = 'Red'
    h.innerHTML = 'Thanks for rating us 3⭐!!! We will try to Improve😅';
    document.getElementById('one').style.display = '⭐';
    document.getElementById('two').style.display = '⭐';
    document.getElementById('three').style.display = '⭐';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    flag = true;
}

function four() {
    ;const h = document.getElementById('comment');
    h.style.color = 'green'
    h.innerHTML = 'Thanks for rating us 4 ⭐🤩!!!'
    document.getElementById('one').style.display = '⭐';
    document.getElementById('two').style.display = '⭐';
    document.getElementById('three').style.display = '⭐';
    document.getElementById('four').style.display = '⭐';
    document.getElementById('five').style.display = 'none';
    flag = true;
}

function five() {
    const h = document.getElementById('comment');
    h.style.color = 'green'
    h.innerHTML = 'Thanks for rating us 5⭐ 😍!!!';
    document.getElementById('one').style.display = '⭐';
    document.getElementById('two').style.display = '⭐';
    document.getElementById('three').style.display = '⭐';
    document.getElementById('four').style.display = '⭐';
    document.getElementById('five').style.display = '⭐';
    flag = true;
}
 





