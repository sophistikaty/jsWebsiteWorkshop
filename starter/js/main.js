$(document).ready(function(){


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
		checkPage(item);

	  return "<h2 class='sectionName'>"+item+", "+bagelData[item].Name+"</h2>\
	  			<p class='sectionContent'>"+bagelData[item].Content+"</p>"; 
	  
	}).join('');
	document.getElementById('sections').innerHTML = sectionName;
	}

	// ---> WHAAAAAT? WHY??: The below statement doesn't work -- why? you have to pass the index
			// console.log('four columns ',tabletopData[item].Page, tabletopData[item].Path, 
			// tabletopData[item].Section, tabletopData[item].Content);


/* --- Part Three: Adventures in Routing (Multi-Page Navigation)  -----------------*/

	function checkPage(index){
		console.log('in checkPage w index ', index);
	}
});







