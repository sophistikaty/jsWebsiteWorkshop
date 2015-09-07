// Create an immediately invoked functional expression to wrap our code
	(function() {

	// higher-scope variables (not global/public)
	var navArray = [];


/* --- Part One: Initialize the connection to your google spreadsheet
 		& access sheet data on page load -----------------*/

	// Setup, get your data when the window loads
	window.onload = function() { init() };

		var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1N9R5aj-MewuXuDxPF_tZmA57bapbiu3dx-ToqFu6OKg/pubhtml?gid=0&single=true';

		function init() {
			  	
		Tabletop.init( { key: public_spreadsheet_url,
                     callback: showData,
                     simpleSheet: true } )
  }
 

	// Verify that your spreadsheet's data is accessible
	  function showData(data, tabletop) {

	  	// Put the raw data in the console, for reference
	  	console.log('data and tabletop are ', data, tabletop);
	  	
	     // Give your data a cool name. C'mon. It's so fun!
	     var deliciousData = data;

	     // ---> NEXT STEP: Pass that sweet little data-chunk on 
	      selectContent(deliciousData);
	  }

/* --- Part Two: looping display targeted sections of your data  -----------------*/
	function selectContent (bagelData) {

		// log your arguments
		console.log('called selectContent w ',bagelData);

	var sectionName = bagelData.map(function (item) { 

		//take a look at that arg -- now we're in a mapping loop!
		console.log('item is  ',item);
	  return item["Name"]; 
	}).map(function (content, item) { 

		//take a look at those args now we're in another mapping loop!
		console.log ('content and item are ', content, item);
		
		//direct drill-down? try console.log('first item! ', bagelData[0]);

		var index = bagelData[item];

		// ---> NEXT STEP: Why call this function here?
		// could skip passing in data variable if you put it in global scope, not usually ideal
		
		buildTopNav(item, bagelData);
		checkPage(item, bagelData);

	  return "<h2 class='sectionName'>"+item+", "+bagelData[item].Name+"</h2>\
	  			<p class='sectionContent'>"+bagelData[item].Content+"</p>"; 
	  
	}).join('');
	document.getElementById('sections').innerHTML = sectionName;
	}

	// ---> WHAAAAAT? WHY??: The below statement doesn't work -- why? you have to pass the index
			// console.log('four columns ',tabletopData[item].Page, tabletopData[item].Path, 
			// tabletopData[item].Section, tabletopData[item].Content);


/* --- Part Three: Adventures in Routing (Multi-Page Navigation)  -----------------*/

	function buildTopNav(index, bagelData){

		var menuElement = document.querySelector('ul.topNav');
			console.log('menuElement is ', menuElement);

		//pause console here, write function live, on page
		// we're still in the mapping loop, if we weren't we could write another loop
		var pageName = bagelData[index].Page; 
		var pageLink = bagelData[index].Path+'.html';
		var navList = menuElement.innerHTML;

		// remember navArray? Using my higher-scope variable here works around loop
		console.log('navArray is ', navArray);

		// if the inner html is undefined, do a direct over-write 
		//to avoid getting the string 'undefined' in your html
		if(navList == undefined){

			menuElement.innerHTML = '<li classList="topNav"><a href="'+pageLink+'">'+pageName+'</a></li>';

			navArray.push(pageName);
		}
		else if(navArray.indexOf(pageName) > -1) {

			//do nothing, that page has already been added to menu list
			console.log('page is already in list', pageName, document.getElementById('topNav').children[0].innerHTML);
		}
		else {

			menuElement.innerHTML = navList + 
			'<li classList="topNav"><a href="'+pageLink+'">'+pageName+'</a></li>';

			navArray.push(pageName);
		}


	}

	//check the html body id against the google sheet path column
	function checkPage(index, bagelData){

		//log out your data, try drilling down to target parts of arrays/ objects
		//what do you need direct access to? what do you need to keep available for later?
		console.log('in checkPage w index ', index);

		console.log('four columns ',bagelData[index].Page, bagelData[index].Path, 
		bagelData[index].Section, bagelData[index].Content);

		var pagePath = bagelData[index].Path;
			bodyId = document.body.id;

		console.log('bodyId is ',bodyId);

		if( bodyId === pagePath) {

			console.log('page path '+pagePath+' matches page id '+bodyId);
			var title = document.getElementsByClassName('title');
				console.log('title is ', title);
				for (i=0; i<title.length; i++){

				title[i].textContent = bagelData[index].Page;
				}
			document.getElementById('content').innerHTML = bagelData[index].Content 
			+ '<br><img class="contentBlock" src ="assets/'+bagelData[index].Photo+'.jpg" target="blank">';

			//now you try, can you make unique subtitles per page? another kind of section?
			// document.getElementById('subtitle').innerHTML = tabletopData[index].Subtitle;

		}
	}
})();







