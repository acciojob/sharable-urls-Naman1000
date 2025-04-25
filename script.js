// your code here

document.getElementById("urlForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page refresh

let name = document.getElementById("name").value.trim();
let year = document.getElementById("year").value.trim();
let baseurl ="https://localhost:8080/";
	
let params=[];
	 if(name){
		 params.push(`name=${name}`);
	 }

	if(year){
		params.push('year=${year}');
	}

	if(params.length>0){
		baseurl += "?" + params.join("&");
	}
	document.getElementById("url").textContent = baseurl;
	
});


