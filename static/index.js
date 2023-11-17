console.log("Function Guess / By @amex2189");

window.addEventListener("load", (event)=>{
	const jsx = JXG.JSXGraph.initBoard("jxgbox", 
		{axis: true, boundingbox: [-15, 15, 15, -15]});

    jsx.create("functiongraph", [x=>Math.sqrt(Math.sin(x/2))], {strokeColor:"purple"});
});