import './style.css';
import Icon from './icon.png';
import Data from './data.xml'
import { cube,square } from './math.js'; // ES2015 module syntax
function component() {
	let element = document.createElement('div');
	// Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // Add the image to our existing div.
   	var myIcon = new Image();
   	myIcon.src = Icon;
   	element.appendChild(myIcon);
   	console.log(Data);
    return element;
}
//Example for tree shaking
function treeShaking(){
    var element = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5),
        '5 squared is equal to '+ square(5)
    ].join('\n\n');
    return element;
}
document.body.appendChild(component());
document.body.appendChild(treeShaking());