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
	


	// Tabletop Spreadsheet Functions

	window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1N9R5aj-MewuXuDxPF_tZmA57bapbiu3dx-ToqFu6OKg/pubhtml?gid=0&single=true';

  function init() {
  	
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  var tabletopData;

  function showInfo(data, tabletop) {
  	
  	console.log('data and tabletop are ', data, tabletop);
  	
    tabletopData = data;

      selectContent();
  }

tabletopData = JSON.stringify(tabletopData);

function selectContent () {

var pageName = tabletopData.map(function (item) { 
  return item["xy"]; 
}).map(function (content, item) { 
	var index = tabletopData[item];
	// checkPage(item);
  return "<h2>"+item+","+tabletopData[item].xy+"</h2>" 
  
}).join('');
document.getElementById('greetings').innerHTML = pageName;

function checkPage(index){
	// console.log('index is ', index);
	var pagePath = tabletopData[index].Path;
	var bodyId = document.body.id;
	// console.log(bodyId);
	
		if( bodyId === pagePath) {
			// console.log('page path '+pagePath+' matches page id '+bodyId);
			$('.title').html(tabletopData[index].Page);
			// document.getElementById('subtitle').innerHTML = tabletopData[index].Subtitle;
			document.getElementById('content').innerHTML = tabletopData[index].Content;
			// console.log('page data is ',tabletopData[index].Page);

			if (tabletopData[index].cardIndex != "x"){

				var tableTopIndex = parseInt(tabletopData[index].cardIndex);
					// console.log('index type ',typeof tableTopIndex);

					if( typeof tableTopIndex != NaN){
						// console.log('passing index is ',tableTopIndex);
						pic = tabletopData[index].picture;
						slideString = tabletopData[index].gallery;
						subtitle = tabletopData[index].Subtitle;
						leadText = tabletopData[index].leadText;
						content = tabletopData[index].Content;

						var slidesArray = slideString.split(",");
								// console.log ('slideString and slidesArray are', slideString, slidesArray );

							card = new Card(pic, slidesArray, subtitle, leadText, content, tableTopIndex);
							// console.log('creating card ',card);

							cardSection = document.getElementById('cards');
							article = document.createElement('article');
							article.id = 'card'+tableTopIndex;
							article.classList.add('trigger');
							article.innerHTML = card.shell;
							cardSection.appendChild(article);

						var myContent = card.modalContent;

						var myModal = new Modal({
						  content: myContent,
						  className: 'zoom',
						  gallery: card.gallery,
						  altText: card.altText
						});

						var trigger = document.getElementById('card'+tableTopIndex);
							
							trigger.addEventListener('click', function() {

							  myModal.open();

							});

						}

					}
				

					}

			}

			$("#cards article").hover(function (){

			$(this).toggleClass("active");

		});

			
		} 

	
});







