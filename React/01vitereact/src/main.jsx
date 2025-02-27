import { createRoot } from 'react-dom/client'
import react from "react"

// import App from './App.jsx'


/* function MyApp(){
    return (
        <div>
            <h1>My App Bro !</h1>
        </div>
    )
} */

/* const ReactElement = {
    type: "a",
    props: {
      href: 'https://www.google.com',
      target: "_blank"
    },
    children: 'Click bro'
  } */

/* const anotherElement = (
    <a href="https://www.google.com" target="_blank">Visit Google</a>
) */

const anotherUser = "Asim Baloch"

// Now creating a react element but following the structure that react uses
const reactElement = react.createElement(
    'a',
    {
        href: 'https://www.google.com',
        target: "_blank"
    },
    'Click to visit google',
    anotherUser // variable will be injected at the end
)

createRoot(document.getElementById('root')).render(
    
    // <App />

    reactElement
)
