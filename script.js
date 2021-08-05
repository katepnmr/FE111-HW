
document.head.innerHTML = '';
document.body.innerHTML = '';

let html = document.querySelector('html');
html.setAttribute('lang', 'en');

let meta = document.createElement('meta');
meta.setAttribute('charset', 'UTF-8');
document.head.appendChild(meta);

let meta1 = document.createElement('meta');
meta1.setAttribute('http-equiv', 'X-UA-Compatible');
meta1.setAttribute('content', 'IE=edge');
document.head.appendChild(meta1);

let meta2 = document.createElement('meta');
meta2.setAttribute('name', 'viewport');
meta2.setAttribute('content', 'width=device-width, initial-scale=1.0');
document.head.appendChild(meta2);

let title = document.createElement('title');
title.innerHTML = 'Call To Action';
document.head.appendChild(title);

let font1 = document.createElement('link');
font1.setAttribute('rel', 'preconnect');
font1.setAttribute('href', 'https://fonts.googleapis.com');
document.head.appendChild(font1);

let font2 = document.createElement('link');
font2.setAttribute('rel', 'preconnect');
font2.setAttribute('href', 'https://fonts.gstatic.com');
document.head.appendChild(font2);

let font3 = document.createElement('link');
font3.setAttribute('rel', 'stylesheet');
font3.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&display=swap');
document.head.appendChild(font3);

let style = document.createElement('style');
document.head.appendChild(style);
style.innerHTML = `

    * {
        margin: 0px;
        padding: 0px;
    }

    h1 {
        font-size: 36px;
        color: #212121;
        padding: 70px 0 20px 0;
    }

    .p_main {
        font-size: 26px;
        margin-bottom: 35px;
    }

    .wrapper {
        text-align: center;
    }

    .block {
        max-width: 800px;
        width: 100%;
        margin: 0 auto; 
        background-color: #fff;
        display: flex;
    }

    .block_left,
    .block_right {
        width: 50%;
    }
    .content_left,
    .content_right {
        padding: 85px 95px;
    }

    .content_right:hover,
    .content_left:hover {
        background-color: #8F75BE;
        color: #fff;                 // Почему-то не срабатывает hover на элементах
    }

    .content_left p:first-child:hover,
    .content_right p:first-child:hover,{
        color: #FFC80A;
    }

    .content_left p:first-child,
    .content_right p:first-child {
        letter-spacing: 2.4px;
        font-size: 13px;
        font-weight: bold;
    }

    .content_left h2,
    .content_right h2 {
        margin: 35px 0 25px 0;
        line-height: 46px;
        font-size: 36px;
    }

    .content_left button,
    .content_right button {
        margin-top: 65px;
        border-radius: 40px;
        background-color: transparent;
        text-transform: uppercase;
        cursor: pointer;
        letter-spacing: 2.4px;
        font-size: 12px;
        font-weight: bold;
        padding: 24px 35px ;
        border: 4px solid #FFC80A;
    }
    .content_left button:hover,
    .content_right button:hover {
        background-color: #FFC80A;
    }
    p {
        color: #9FA3A7;
    }
`;

let body = document.querySelector('body');
body.style.width = '100%';

html.style.height = '100%';
html.style.fontFamily = 'Arvo', 'serif';

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);  

let h1 = document.createElement('h1');
h1.classList.add('h1');
h1.innerHTML = 'Choose Your Option';
wrapper.appendChild(h1); 

let pMain = document.createElement('p');
pMain.classList.add('p_main');
pMain.innerHTML ='But I must explain to you how all this mistaken idea of denouncing';
wrapper.appendChild(pMain); 


let main = document.createElement('div');
main.classList.add('block');
wrapper.appendChild(main);
main.style.border = '#E8E9ED solid 2px';
main.style.width = '800px';
main.style.borderRadius = '5px';

let left = document.createElement('div');
left.classList.add('block_left');
main.appendChild(left);

let leftContent = document.createElement('div');
leftContent.classList.add('content_left');
left.appendChild(leftContent);

let p1LeftContent = document.createElement('p');
p1LeftContent.innerHTML = 'FREELANCER';
leftContent.appendChild(p1LeftContent);

let h2LeftContent = document.createElement('h2');
h2LeftContent.innerHTML = 'Initially designed to';
leftContent.appendChild(h2LeftContent);

let p2LeftContent = document.createElement('p');
p2LeftContent.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
leftContent.appendChild(p2LeftContent);

let buttonLeftContent = document.createElement('button');
buttonLeftContent.innerHTML = 'Start here';
leftContent.appendChild(buttonLeftContent);

let right = document.createElement('div');
right.classList.add('block_right');
main.appendChild(right);

let rightContent = document.createElement('div');
rightContent.classList.add('content_right');
right.appendChild(rightContent);

let p1RightContent = document.createElement('p');
p1RightContent.innerHTML = 'STUDIO';
rightContent.appendChild(p1RightContent);

let h2RightContent = document.createElement('h2');
h2RightContent.innerHTML = 'Initially designed to';
rightContent.appendChild(h2RightContent);

let p2RightContent = document.createElement('p');
p2RightContent.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
rightContent.appendChild(p2RightContent);

let buttonRightContent = document.createElement('button');
buttonRightContent.innerHTML = 'Start here';
rightContent.appendChild(buttonRightContent);


