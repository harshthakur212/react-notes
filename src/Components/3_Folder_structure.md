:package.json : Contains the dependency and script for running building and testing project.
:package-lock.json : Ensures insulation of running dependencies and we need not to really worry about it.
:node_modules : contains all the dependencies
:public :
    manifest.json: Is concerned wiith progressive web apps
    index.html: Only HTML file we have in our application 
                Since we are buiding single page application but the view may dynammically change in our browser. We are not going to add any code in the body.Maybe some changes in the head tag.
                the react control the body and for that
                "a div tag with id root is placed"

:src : 
    index.js : Specifies the root component which is app component and the dom element is controlled by react
    "For the hello world application the app component is rendered inside the root dom node"
    App.js:responsible for HTML displayed over the browser. It is responsible for the view we see in our browser.
    App.css:For styling(Contains classes which are applied in the app component)
    App.test.js:For unit test(Contains simple test case)
    index.css:Applies styles for the body tag
    serviceWorker: For progressive web app

index.html(contains the root dom node)-> index.js(react dom  renders the app component onto the root dom node)-> app.js(Contains the HTML which is displayed over the browder)