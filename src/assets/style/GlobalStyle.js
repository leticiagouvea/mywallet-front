import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
    font-family: 'Raleway', sans-serif;
    color: #ffffff;
    font-weight: 700;
    background-color: #8C11BE;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
* {
	box-sizing: border-box;
}
a {
	text-decoration: none;
	color: inherit;
	cursor: pointer;
}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
input {
    width: 326px;
    height: 58px;
    border: 0px;
    padding: 0px 15px;
    border-radius: 5px;
    font-family: 'Raleway', sans-serif;
	font-size: 18px;
    margin-bottom: 15px;
}
input::placeholder {
    color: #000000;
    font-size: 18px;
}
input:focus {
    outline-color: #4492DA;
}
button {
    width: 326px;
    height: 46px;
    border-radius: 5px;
    background-color: #A328D6;
    border: 1px solid #A328D6;
    box-shadow: 2px 2px 1px #A328D6;
    font-family: 'Raleway', sans-serif;
	font-size: 18px;
    color: #ffffff;
    font-weight: 700;
    cursor: pointer;
    transition: linear 0.4s;
        &:hover {
            border: 1px solid #000;
            box-shadow: 3px 3px 1px #4492DA;
            border-radius: 20px 20px 0px 20px;
        }
}
`
export default GlobalStyle;