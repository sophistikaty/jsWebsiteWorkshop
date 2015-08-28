$(document).ready(function(){
	
	// var sectionIndex;
	//     logo = document.getElementById('mainLogo');
	// 	sectionIds = [
	// 	// main, meet, topNav
	// 	];

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

	

	// var slider = document.getElementById('carousel');
	// 	previous = document.getElementsByClassName('icon-right-open-big');
	// 	next = document.getElementsByClassName('icon-left-open-big');

	// $('#carousel').slick({
 //      slidesToShow: 1,
	//   autoplay: true,
	//   autoplaySpeed: 4000,
	//   pauseOnHover: false,
	//   infinite: true,
	//   speed: 500,
	//   fade: true,
	//   cssEase: "linear",
	//   respondTo: slider,
	//   prevArrow: "<div class='icon-left-open-big slick-prev'></div>",
	//   nextArrow: "<div class='icon-right-open-big slick-next'></div>",
	//   centerMode: true
	  
	  
	 //  responsive: [
  //   {
  //     breakpoint: 1000,
  //     settings: {
  //       infinite: true
  //     }
  //   },
  //   {
  //     breakpoint: 1000,
  //     settings: {
  //       infinite: true
  //     }
  //   }
  //   {
  //     breakpoint: 1000,
  //     settings: {
  //       infinite: true
  //     }
  //   }
  //   // You can unslick at a given breakpoint now by adding:
  //   // settings: "unslick"
  //   // instead of a settings object
  // ]
  // });
	

	// function responsiveMargin() {

	// 	var sliderHeight = $("#carousel").height();
	// 		winHeight = $(window).height();
	// 		docHeight = $(document).height();
	// 		// twenDocHeight = (docHeight/20);
	// 		tenDocHeight = (docHeight/25);

	// 		if (sliderHeight > winHeight){
	// 			$("#main").css("margin-top", winHeight-tenDocHeight);
	// 			// console.log('updating margin to ', winHeight);
	// 		}
	// 		else {
	// 			$("#main").css("margin-top", sliderHeight-tenDocHeight);
	// 			// console.log('updating margin to ', sliderHeight);
	// 		}
			
			// console.log('tenDocHeight is ', tenDocHeight);
			// console.log('twenDocHeight is ', twenDocHeight);
			
		// // console.log('this is ', this);
		// $(window).resize(responsiveMargin);

	// }responsiveMargin();
	

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

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1W3L_kKds0ilf-BedTKCIWUH6dFWBED1rta4dcqbY-LY/pubhtml?gid=0&single=true';

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
  return item["Page"]; 
}).map(function (content, item) { 
	var index = tabletopData[item];
	checkPage(item);
  return "<li id='p"+item+"'><a href='http://sophistikaty.github.io/MonarchAtlas/"
  +tabletopData[item].Path+".html'>" + tabletopData[item].Page +"</a></li>" 
  
}).join('');
document.getElementById('insert').innerHTML = pageName;

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

			

			// function cardIndexIds() {
			// 	var cards = $('#cards article.trigger');
			// 	console.log('called cards with ', cards);

			// 	for (var i = 0 ; i < cards.length ; i++) {
					
					
					// = cards[i];
					// 	card.id = 'card'+i;
						
						// console.log ('leadText is ', leadText);

					// var cardContent = function(image, subtitle, leadText, content){
					// 	this.image = '<img src="'+image+'" alt ="'+subtitle+', '+leadText+
					// 	' by Kristin Dinnis, Monarch Atlas" >';
					// 	this.subtitle = '<h3>'+subtitle+'</h3>';
					// 	this.leadText = '<p>'+leadText+'</p>';
					// 	this.modalContent = '<h2>'+subtitle+'</h2><br><img src="'+image+'"alt ="'+subtitle+', '+leadText+
					// 	' by Kristin Dinnis, Monarch Atlas"><br><p>'+content+'</p>';
					// };
					// console.log('single card with index val is ', cards[i], i);
			// 		console.log('index and tabletop cardIndex are ', i, tableTopIndex);

			// 		if (i === tableTopIndex){

			// 			console.log ('card with content is ', card, subtitle, leadText );

			// }
			// 	}
			// }cardIndexIds();
			$("#cards article").hover(function (){
			// console.log(this);
			// article = this;
			$(this).toggleClass("active");
			// console.log('toggling active');
		});

			
		} 

		// $("#cards article").hover(function (){
		// 	// console.log(this);
		// 	// article = this;
		// 	$(this).toggleClass("active");
		// 	// console.log('toggling active');
		// });
	
});







