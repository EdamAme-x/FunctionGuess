console.log("Function Guess / By @amex2189");

const assets = [
    seed => {
        return x => x * seed
    },
    seed => {
        return x => x ** seed
    },
    seed => {
        return x => x ** seed - Math.floor(Math.random() * 3)
    }
]

function genFunction(seed) {

    if (seed === 0) {
        return x => x**x - Math.floor(Math.random() * 3)
    }

    return assets[Math.floor((Math.random() * (assets.length - 1)))](seed);
}

window.addEventListener("load", (event)=>{
    const view = 50;
	const jsx = JXG.JSXGraph.initBoard("jxgbox", 
		{axis: true, boundingbox: [-view, view, view, -view]});
    const answer = genFunction(parseInt(Date.now().toString().slice(-1) - 5));
    // any => any

    globalThis.answer = answer;

    jsx.create("functiongraph", [answer], {strokeColor:"purple"});
});

let guessFunc = "x";

function inputHandler() {
    guessFunc = document.getElementById("guessInput").value;
}

function Guess() {
    const sed = Math.floor(Math.random() * 100);
    const guessResult = eval(`x => ${guessFunc}`)(sed);
    const targetResult = answer(sed);

    if (guessResult === targetResult) {
        Swal.fire({
            icon: "success",
            text: "Good! : " + `y = ${guessFunc}`
        })
    }else {
        Swal.fire({
            icon: "error",
            text: "Bad!"
        })
    }
}

document.getElementById("guess").addEventListener("click", Guess)