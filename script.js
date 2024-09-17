let down = 5 ; 
function timerShow(endNum){   
    if(endNum != 0){
		count = 0 
    const timer = setInterval(function() 
	{
    count += 1;
    if (count >= down ) 
	{
    	clearInterval(timer);
	}
    document.getElementById('h1-Number').innerText =  count;
},30);
    }
    else{ document.getElementById('h1-Number').innerText =  0}
}