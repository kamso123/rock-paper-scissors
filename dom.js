const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const content1= document.createElement('p');
content1.classList.add('content1');
content1.textContent= "Hey I'm Red!"
content1.style.color = "red"
container.appendChild(content1);

const content2= document.createElement('h3');
content2.classList.add('content2');
content2.textContent= "I'm a blue h3"
content2.style.color = 'blue'
container.appendChild(content2);

const content3 = document.createElement('div');
content3.classList.add('content3');
content3.style.border= '2px solid black';
content3.style.backgroundColor= 'pink';
content3.style.padding= '16px';

const heading2 = document.createElement('h1');
heading2.textContent= "I'm in a div"

const p2 = document.createElement('p');
p2.textContent= "ME TOO";

content3.appendChild(heading2);
content3.appendChild(p2);
container.appendChild(content3)

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert('Hey there!');
});



