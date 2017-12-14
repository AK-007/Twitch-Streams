var users=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
function start()
{   users.forEach( function(element, index) {
	var streamurl='https://wind-bow.gomix.me/twitch-api/streams/'+element+'?callback=?';
	var channelurl='https://wind-bow.gomix.me/twitch-api/channels/'+element+'?callback=?';
	var status,visible,name,game,desc,logo,url;
	$.getJSON(streamurl,function(data)
	{	
		if (data.stream === null) {
        visible = "Offline";
        status = "offline";
        } 
        else if (data.stream === undefined) {
        visible = "Account Closed";
        status = "offline";
        } 
        else {
        visible = "Online";
        status = "online";
        }
	
	$.getJSON(channelurl,function(data)
	{
	 name=data.display_name;
	 game=data.game;
	 desc=data.status;
	 logo=data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
	 url=data.url;
	 var string="<div class='"+status+"'><img src='"+logo+"'></img><a href='"+url+"' target='_blank'>"+name+"</a><span class='span1'>"+visible+"</span><span class='span2'>"+game+"</span><span class='span3'>"+desc+"</span>";
	 $(".jumbotron").append(string);
	});
});
	
});
}
function print(evt,id)
{	
	tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
	if(id==="defaultOpen")
	{
		$(".online , .offline").css("display","block");
	}
	else if(id==="offline")
	{   
		$(".offline").css("display","block");
		$(".online").css("display","none");
	}
	else if(id==="online")
	{
		$(".online").css("display","block");
		$(".offline").css("display","none");
	}
}
$(document).ready(function(){
	start();
	document.getElementById("defaultOpen").click();
});
