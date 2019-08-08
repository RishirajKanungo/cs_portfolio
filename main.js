//import typed js framework "typed.js"
import Typed from 'typed.js';

//set up var for typing name to do the typing animation
var typing_name = new Typed('#text',{
    strings: ['My naem', 'My name is <strong>Rishiraj Kanungo</strong>'],
    typeSpeed: 0,
    backSpeed:  0,
    smartBackspace: true,
    showCursor: true,
    loop: true
});