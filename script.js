let fruitNames = ['Mango','Mango','Banana','Banana','grapes','grapes','apple','apple','avocado','avocado','cocunut','cocunut','melon','melon','pear','pear','peach','peach','olive','olive','plum','plum','papaya','papaya'];
let value = [];
let cardIds = [];
let cardFlipped = 0;
Array.prototype.cardShuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
	cardFlipped = 0;
	var output = '';
    fruitNames.cardShuffle();
	for(var i = 0; i < fruitNames.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+fruitNames[i]+'\')"></div>';
	}
	document.getElementById('memoryCard').innerHTML = output;
}
function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && value.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(value.length == 0){
			value.push(val);
			cardIds.push(tile.id);
		} else if(value.length == 1){
			value.push(val);
			cardIds.push(tile.id);
			if(value[0] == value[1]){
				cardFlipped += 2;
				value = [];
            	cardIds = [];
				if(cardFlipped == fruitNames.length){
					alert("Board cleared... generating new board");
					document.getElementById('memoryCard').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    var tile1 = document.getElementById(cardIds[0]);
				    var tile2 = document.getElementById(cardIds[1]);
				    tile1.style.background = 'url(images.png) no-repeat';
            	    tile1.innerHTML = "";
				    tile2.style.background = 'url(images.png) no-repeat';
            	    tile2.innerHTML = "";
				    value = [];
            	    cardIds = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}