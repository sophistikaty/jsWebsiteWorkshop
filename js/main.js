// Create an immediately invoked functional expression to wrap our code
	(function() {

	// higher-scope variables (not global/public)
	var navArray = [];


/* --- Part One: Initialize the connection to your google spreadsheet
 		& access sheet data on page load -----------------*/

	// Setup, get your data when the window loads
	window.onload = function() { init() };

		var public_spreadsheet_url = '[your-Google-Sheet-Public-Url]';

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
	     

	     // ---> NEXT STEP: Pass that sweet little data-chunk on 
	      // selectContent(yourSweetVariableName);
	  }

/* --- Part Two: looping display targeted sections of your data  -----------------*/
	function selectContent (bagelData) {

		// log your arguments
		console.log('called selectContent w ',bagelData);

		var sectionName = bagelData.map(function (item) { 

			//take a look at that arg -- now we're in a mapping loop!

		  //return each value
		  return item["Name"]; 

		}).map(function (content, item) { 

			//take a look at those args now we're in another mapping loop!
			
			//direct drill-down instead? try console.log('first item! ', bagelData[0]);


			/* ---> NEXT STEP: Why call this function here? 
				- has to have access to data
				- already in a loop
				- could skip passing in data variable if you put it in global scope, not usually ideal*/
			
			// buildTopNav(item, bagelData);
			// checkPage(item, bagelData);

		  //return looping values
		  return "<h2 class='sectionName'>"+item+", "+bagelData[item].Name+"</h2>\
		  			<p class='sectionContent'>"+bagelData[item].Content+"</p>"; 
		  
		}).join('');

		//  Insert looped values into the dom
		document.getElementById('sections').innerHTML = sectionName;

	}

	/* ---> WHAAAAAT? WHY??: The below statement doesn't work -- why? 
				- you have to pass the index
				- try using something like this inside the checkPage function */

		// console.log('four columns ',tabletopData[item].Page, tabletopData[item].Path, 
		// tabletopData[item].Section, tabletopData[item].Content);


/* --- Part Three: Adventures in Routing (Multi-Page Navigation)  -----------------*/

	function buildTopNav(index, bagelData){

		var menuElement = document.querySelector('ul.topNav');
			console.log('menuElement is ', menuElement);

		//pause console here, write function live, on page
		// function to populate menu links into menuElement for each page

		// remember navArray? Using my higher-scope variable here works around loop
		console.log('navArray is ', navArray);



	}

	//check the html body id against the google sheet path column
	function checkPage(index, bagelData){

		//log out your data, try drilling down to target parts of arrays/ objects
		//what do you need direct access to? what do you need to keep available for later?
		console.log('in checkPage w index ', index);

		var pagePath = bagelData[index].Path;
			bodyId = document.body.id;

		console.log('bodyId is ',bodyId);

		//check each item's page path to see if it matches the body id of current page
		
		//if it matches, render some unique content from that row on the page
			document.getElementsByClassName('title');

		/*Photos?!? Add "Photo" column to spreadsheet, 
					place files in "assets" folder of this directory,
					refer to file name in "photo" column */

			document.getElementById('content');

			//now you try, can you make unique subtitles per page? Use array of photos? another kind of section?
			// document.getElementById('subtitle').innerHTML = bagelData[index].Subtitle;

		}
	}
})();







