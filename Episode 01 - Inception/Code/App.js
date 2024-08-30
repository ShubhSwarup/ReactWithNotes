
/**
 * 1st arg = type of elemt want to create
 * 2nd arg is kind of props (attributes) which will have all the argumnt we want for that element
 * 3rd arg= what we want in that element
 *
 * @return : an react element i.e object not an html div.
 */
// React.createElement => ReactElement -js object => htmlElement(render)

// const heading = React.createElement(
//   'h1',
//   { id: 'heading', className: 'head' },
//   'Hello World from React!'
// ); // It's the job of Core React to create an element i.e, heading in this case

// React Element is normal JavaScript Object{}

// console.log(heading); // object
// output of both console.logs
//{
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "id": "heding",
//         "xyz": "abc",
//         "children": "hello World!"
//     },
//     "_owner": null,
//     "_store": {}
// }

/* 

<div id="parent">
  <div id=child>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
  <div id=child2>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
</div>

ReactElement(Object) => HTML(Browser Understands)

*/
//nested
// for sibling paasing array of createElement.
const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, "I'm h1 Tag"),
    React.createElement('h2', {}, "I'm h2 Tag"),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, "I'm h1 Tag"),
    React.createElement('h2', {}, "I'm h2 Tag"),
  ]),
]);

// JSX

console.log(parent);


const root = ReactDOM.createRoot(document.getElementById('root')); 
// It's the job of ReactDOM to create root
// i.e, heading in this case, bcz root is a dom element which is rendered to be on browser. 
//This root is the place where all React code will run.

// root.render(heading);
root.render(parent);
//render function turns the heading rect objects to the html tags and shows on the browser.
// In React, Render is the technique that can redirect a page with the help of function render().
// Most importantly, render a function we can use to define the HTML code within the HTML element. 
//It helps to display certain views in the UI using certain logic defined in the render function and returns the output.
// root.render(parent); // it replaces the element id: root , if root has any existing element it will replace it.
