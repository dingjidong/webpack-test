import comp from './component';
import "./common.css";
import style1 from './style1.css';
import style2 from './style2.css';

document.body.appendChild(comp('11111',style1.class1,style2.class1));
const h1 = document.createElement("h1");
h1.innerText = style1.abc;
document.body.appendChild(h1);