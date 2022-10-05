let collections= [];
function addFeedback(){
    let userName = document.getElementById('userName').value;
    let description = document.getElementById('description').value;
    if(userName !='' && description !=''){
  let collection= {
    userName: userName,
    description: description

  }
  collections.push(collection);

}
else{
    alert('Please enter a user name and description');
}
}
let flag = false;
function one() {
    const h = document.getElementById('comment');
    h.style.color = 'Red'
    h.innerHTML = 'Thanks!!! We will try to Improve';
    document.getElementById('two').style.display = 'none';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    flag = true;
}
function two() {
    const h = document.getElementById('comment');
    h.style.color = 'Red'
    h.innerHTML = ' Thanks!!! We will try to Improve';
    document.getElementById('three').style.display = 'none';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    flag = true;
}
function three() {
    const h = document.getElementById('comment');
    h.style.color = 'Red'
    h.innerHTML = 'Thanks!!! We will try to Improve';
    document.getElementById('four').style.display = 'none';
    document.getElementById('five').style.display = 'none';
    flag = true;
}
function four() {
    const h = document.getElementById('comment');
    h.style.color = 'green'
    h.innerHTML = 'Thanks for your feedback!!!';
    document.getElementById('five').style.display = 'none';
    flag = true;
}
function five() {
    const h = document.getElementById('comment');
    h.style.color = 'green'
    h.innerHTML = 'Thanks for your feedback!!!';
    flag = true;
}
function submition() {
    if (flag) {
        document.getElementById('text').style.display = 'none';
        console.log('display none');
        document.getElementById('comment').innerHTML = 'Thank you!';
        document.getElementById('comment').style.marginBottom = '20px';
    }
    else {
        alert('Please give us your review...');
    }
}



