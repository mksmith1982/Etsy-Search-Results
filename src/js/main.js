import $ from "jquery";

import { data } from "./items.js";

// console.log(data);





   function getData(data){
	var dataResults = [];
	for (var i = 0; i < data.results.length; i++) {
		
		var itemName = data.results[i].title;
		var itemPrice = data.results[i].price;
		var storeName = data.results[i].Shop.shop_name;
		var storeLink = data.results[i].url;
		var image = data.results[i].Images[0].url_170x135;
		var itemLink = data.results[i].url;

	
	


// get the data structured how you want it on the page:

  var resultHTML = 

  
`<a class = "itemLink" href = ${itemLink}>

	<div class = "singleItem"><img src = ${image}>

		<div>

			<a href = ${itemLink} > ${itemName} </a>

				<div>



				<div class="hover">

					<span><img class = "hearticon" src = "images/heart.png"><span>

					<span><img class = "hamburgericon" src = "images/hamburger.png"><span>


				</div>

					<span class = "store"> <a href =${storeLink}>${storeName} </a></span>

					<p class = "price">$ ${itemPrice} </p>	

			</div>

	</div>
</div>`;

// get the data onto the page:

    $(".dataResults").append(resultHTML);

}
};


// run the function we just wrote.

getData(data);


// variable that pulls the data

// variable the 


// pull data 

// loop through items..


// name items a var

// data.results[i]


// [0] runs through first results



// I have to pull data with a function loop

// var itemname data.results[i].title


// function getData (data)
// var data=[];
// for (var i = 0; i < Things.length; i++) {
// 	Things[i]
// }