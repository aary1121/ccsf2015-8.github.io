function nextLine(line) {

	var poem = new Array("<onClick=nextLine(1)>Whose woods these are I think I know.</p>",
        "<p onClick=nextLine(2)>His house is in the village though;</p>",           
        "<p onClick=nextLine(3)>He will not see me stopping here</p>",           
        "<p onClick=nextLine(4)>To watch his woods fill up with snow.</p>");           

	document.getElementById("line").innerHTML=poem[line];
}

