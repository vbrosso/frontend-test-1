var request = new XMLHttpRequest();
request.open('GET', 'fazenda.json', true);

request.onload = function(data) {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText).data;
    
    somePositive = 0;
    someNegative = 0;
    valorLike = 0;
    valorDesLike = 0;

	var m = [];
	data.sort(function(a, b){
	    return b.positive-a.positive
	})
	for (j = 0; j < data.length; j++){
	    if(data[j].positive != null || data[j].positive != undefined){    
	        somePositive =parseInt(somePositive) + parseInt(data[j].positive);
	    }
	    if(data[j].negative != null || data[j].negative != undefined){    
	        someNegative =parseInt(someNegative) + parseInt(data[j].negative);
	    }
	}
    for (i = 0; i < data.length; i++){
    	
	    if (data[i].negative == undefined || data[i].negative == null){
	    	valorDesLike =0;
	    }
	    if (data[i].positive == undefined || data[i].positive == null){
	    	valorLike =0;
	    }
	    else{
	    	console.log( data[4].positive);
	    	valorLike = data[i].positive*100/somePositive;
		    valorLike = valorLike.toFixed(0);
		    valorDesLike = data[i].negative*100/someNegative;
		    valorDesLike = valorDesLike.toFixed(0);
		    
		}
        m[i] = '<li><img src="'+ data[i].picture +'" class="imgPerfil" /><span class="classificacao"></span><h2>' + data[i].name + '</h2><p>' + data[i].description + '</p><div class="likes"><span class="seta"></span><span class="gostam">GOSTAM</span><span class="ngostam">NÃO GOSTAM</span><strong class="gostam">' + valorLike + '%</strong><strong class="ngostam">' + valorDesLike + '%</strong></div><li>';
    }
    document.getElementById('lstRanking').innerHTML = m.join("");

  } else {
   	var node = document.createElement("LI");
	var textnode = document.createTextNode("Json não encontado");
	node.appendChild(textnode);
	document.getElementById("lstRanking").appendChild(node);
  }
};

request.onerror = function() {
 	var node = document.createElement("LI");
	var textnode = document.createTextNode("Erro de conexão.");
	node.appendChild(textnode);
	document.getElementById("lstRanking").appendChild(node);
};

request.send();