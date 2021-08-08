const rootElement = document.getElementById("root");



const view = React.createElement(
    "ul",
    {id:"recipe-0", 'data-type':'title'},
    React.createElement("li", null, "1 cup Fresh Basil"),
    React.createElement("li", null, "1 cup Pine Nuts"),
    React.createElement("li", null, "2 cups Butter Lettuce"),
    React.createElement("li", null, "1 Yellow Squash"),
    React.createElement("li", null, "1/2 cup Olive Oil"),
    React.createElement("li", null, "3 cloves of Garlic")
);

        
ReactDOM.render(
        view,
        rootElement
);