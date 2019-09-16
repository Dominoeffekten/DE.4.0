
'use strict'; 

let placesToVisit = ['New York', 'LA', 'Miami', 'Florida','Chicago','Jackson'];

document.write("Places to visit ");

let outputArray = function (placesToVisit) {
	for (var i = 0; i < placesToVisit.length; i++) {
		document.write(placesToVisit[i] + ' ');
	};
};
// NY, LA, Miami, Floarida, Chicago, Jackson

outputArray(placesToVisit); // Miami, Floarida, Chicago, Jackson

document.write("<br>" + "Places to visit " );
placesToVisit.splice(0, 2); //Remove NY & LA
outputArray(placesToVisit); // Miami, Floarida, Chicago, Jackson


placesToVisit.sort(); //Sort it
document.write("<br>" + "Places to visit " );
outputArray(placesToVisit); // Chicago, Florida, Jackson, Miami
