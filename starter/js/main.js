$(document).ready(function(){
	
	// var sectionIndex;
	//     logo = document.getElementById('mainLogo');
	// 	sectionIds = [main, meet, topNav];

	// 	if (sectionIndex == undefined) {

	// 		sectionIndex = 0;

	// 		scrollSections(sectionIds, sectionIndex);
	// 	}


	// function scrollSections(){

	// 	// console.log('sectionIds and sectionIndex are ', sectionIds, sectionIndex);
	// 	logo.onclick = function(){
	// 		// console.log('logo clicked, sectionIndex is ', sectionIndex);
	// 		var nextSectionId = sectionIds[sectionIndex].id;
	// 			nextSection = sectionIds[sectionIndex];
	// 		// nextSection.scrollIntoView({block: "end", behavior: "smooth"});

	// 		document.getElementById(nextSectionId).scrollIntoView({behavior: "smooth"});
			
	// 		// window.location.hash = "#"+sectionIds[sectionIndex].id;
	// 		console.log('sectionIndex about to increment, going to location ', sectionIds[sectionIndex].id);
	// 		if (sectionIndex < 2){
	// 			sectionIndex++
	// 		} else {
	// 			sectionIndex = 0;
	// 		}
	// 		return sectionIndex;
	// 	}
	// }

	

	// var Card = function(image, gallery, subtitle, leadText, content, id){

	// 	// console.log('gallery is ', gallery);
						
	// 					this.image = '<img src="'+image+'" alt ="'+subtitle+', '+leadText +
	// 					' by Kristin Dinnis, Monarch Atlas" >';
	// 					this.subtitle = '<h3>'+subtitle+'</h3>';
	// 					this.leadText = '<p>'+leadText+'</p>';
	// 					this.shell = this.subtitle+this.leadText+this.image; 
	// 					this.modalContent = '<h2>'+subtitle+'</h2><div id="gallery'+id
	// 					+'" class="gallery"></div><p>'+content+'</p>';
	// 					this.altText = subtitle+', '+leadText+
 // 						' by Kristin Dinnis, Monarch Atlas';
 // 						this.gallery = gallery;
						
	// 				};

	// function modalBuilt() {

	// 	console.log('called modalBuilt function');
		
	// }
	


	// Part One: Initialize the connection to your google spreadsheet on page load

	window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1N9R5aj-MewuXuDxPF_tZmA57bapbiu3dx-ToqFu6OKg/pubhtml?gid=0&single=true';

  function init() {
  	
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  // Part Two: Initialize the connection to your google spreadsheet on page load

  var tabletopData;

  function showInfo(data, tabletop) {

  	console.log('data and tabletop are ', data, tabletop);
  	
    tabletopData = data;

      selectContent();
  }

// tabletopData = JSON.stringify(tabletopData);
	// console.log('tabletopData is ', tabletopData);

// Part Three: display targeted sections of your data 
function selectContent () {

	console.log('called selectContent');

var sectionTitle = tabletopData.map(function (item) { 
  return item["Section"]; 
}).map(function (content, item) { 
	var index = tabletopData[item];
	checkPage(item);

  return "<h2 class='sectionTitle'>"+item+", "+tabletopData[item].Section+"</h2>\
  			<p class='sectionContent'>"+tabletopData[item].Content+"</p>"; 
  
}).join('');
document.getElementById('sections').innerHTML = sectionTitle;

//----doesn't work -- why? you have to pass the index-----
		// console.log('four columns ',tabletopData[item].Page, tabletopData[item].Path, 
		// 	tabletopData[item].Section, tabletopData[item].Content);

// Part Four: Routing (Multi-Page Navigation)
function checkPage(index){
	console.log('index is ', index);

	console.log('four columns ',tabletopData[index].Page, tabletopData[index].Path, 
	tabletopData[index].Section, tabletopData[index].Content);

	var pagePath = tabletopData[index].Path;
	var bodyId = document.body.id;
	// console.log(bodyId);
	
		if( bodyId === pagePath) {
			console.log('page path '+pagePath+' matches page id '+bodyId);
			var title = document.getElementsByClassName('title');
				console.log('title is ', title);
				title.textContent = tabletopData[index].Page;
			// // document.getElementById('subtitle').innerHTML = tabletopData[index].Subtitle;
			// document.getElementById('content').innerHTML = tabletopData[index].Content;
			// console.log('page data is ',tabletopData[index].Page);

			// if (tabletopData[index].cardIndex != "x"){

			// 	var tableTopIndex = parseInt(tabletopData[index].cardIndex);
			// 		// console.log('index type ',typeof tableTopIndex);

			// 		// if( typeof tableTopIndex != NaN){
			// 		// 	// console.log('passing index is ',tableTopIndex);
			// 		// 	pic = tabletopData[index].picture;
			// 		// 	slideString = tabletopData[index].gallery;
			// 		// 	subtitle = tabletopData[index].Subtitle;
			// 		// 	leadText = tabletopData[index].leadText;
			// 		// 	content = tabletopData[index].Content;

			// 		// 	var slidesArray = slideString.split(",");
			// 		// 			// console.log ('slideString and slidesArray are', slideString, slidesArray );

			// 		// 		card = new Card(pic, slidesArray, subtitle, leadText, content, tableTopIndex);
			// 		// 		// console.log('creating card ',card);

			// 		// 		cardSection = document.getElementById('cards');
			// 		// 		article = document.createElement('article');
			// 		// 		article.id = 'card'+tableTopIndex;
			// 		// 		article.classList.add('trigger');
			// 		// 		article.innerHTML = card.shell;
			// 		// 		cardSection.appendChild(article);

			// 		// 	var myContent = card.modalContent;

			// 		// 	// var myModal = new Modal({
			// 		// 	//   content: myContent,
			// 		// 	//   className: 'zoom',
			// 		// 	//   gallery: card.gallery,
			// 		// 	//   altText: card.altText
			// 		// 	// });

			// 		// 	// var trigger = document.getElementById('card'+tableTopIndex);
							
			// 		// 	// 	trigger.addEventListener('click', function() {

			// 		// 	// 	  myModal.open();

			// 		// 	// 	});

			// 		// 	}

			// 		}
				

					}

			}

		// 	$("#cards article").hover(function (){

		// 	$(this).toggleClass("active");

		// });

			
		} 

	
});







