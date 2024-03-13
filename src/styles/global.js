import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #FFF4EE;
    color: #0F0F0F;
    -webkit-font-smoothing: antialiased;
}

body, input, textarea {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    outline: none;
    }


a {
    text-decoration: none;
}

button, a {
    cursor: pointer;
    color: #FFF4EE;
}

button:hover {
        background-color: #7D6252;
        transition: all ease-in-out 500ms;
        transform: translateX(2px);
}

a:hover {
    transition : 700ms;
    transform: translateX(3px);
    }
`