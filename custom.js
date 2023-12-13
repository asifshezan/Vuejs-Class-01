//Template Literals

const name = "Asif Shezan";
const text = `Hello ${name}`;

console.log(text);


//Regular Function

function asif(){
    return ('asifshezan');
}

console.log(asif());


// Arrow Function

const tur = () => 5+9;

console.log(tur());


const xsx = (a,b) => a+b;

console.log(xsx(5,8));


const multiply = q => q*q;

console.log(multiply(5));


const sub = (o,p) => {
    res = o-p;
    return res;
}


//Map Arrow function

console.log(sub(4,1));

const jjthom = [4,6,8];
const ans = jjthom.map((jjthom) => jjthom * jjthom);

console.log(ans);



//Ternary Operator

const age = 17;

const isAdult = age >= 18 ? "Adult" : "Young";

console.log(isAdult);



//Nullish Coalesing Operator ( ?? )

const user = null;

const username = user ?? 'Default User';

console.log(username);



//Logical And OR operator

const t = true;
const y =false;

const restl = t || y;

console.log(restl);


const e = true;
const r =false;

const rest = e && r;

console.log(rest);






























