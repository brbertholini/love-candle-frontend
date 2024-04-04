import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

html, body {
    overflow-x: hidden;
}

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
        transition: all ease-in-out 400ms;
}

a:hover {
    transition : 700ms;
    transform: translateX(3px);
    }

* {
    scrollbar-width: thin;
    scrollbar-color: #121212 #fff4ee;
  }
  
*::-webkit-scrollbar {
    width: 16px;
  }
*::-we
bkit-scrollbar-track {
    background: #fff4ee;
  }

*::-webkit-scrollbar-thumb {
    background-color: #121212;
    border-radius: 50px;
    border: 3px solid #000000;
  }
`