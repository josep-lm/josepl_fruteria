import React from "react";

function Productes() {
	const productes = [
    {
        "id" : 1,
        "nom" : "Plàtan",
        "preu" : 0.5
    },
    {
        "id" : 2,
        "nom" : "Poma",
        "preu": 0.8
    },
    {
        "id" : 3,
        "nom" : "Pinya",
        "preu": 5
    },
    {
        "id" : 4,
        "nom" : "Meló",
        "preu": 6
    },
];

    return (
    	<div>
      {productes.map(x => <h2>{x}</h2>)}
      	</div>
    )
}
 
export default Productes;