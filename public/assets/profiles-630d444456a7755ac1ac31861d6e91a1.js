$(document).on("ready",function(){$.ajax({dataType:"json",url:"https://api.github.com/users/JoseChirivella14",data:{},success:function(i){var a=i.avatar_url,l=i.name,n=i.login,o=i.company,e=i.location,t=i.email,r=i.created_at,s=i.followers,c=i.following,u="<li> <img src="+a+"> </li><li>"+l+"</li><li>"+n+"</li><li>"+o+"</li><li>"+e+"</li><li>"+t+"</li><li>"+r+"</li><li>"+s+"</li><li>"+c+"</li>";$("#contact-information").append(u)}}),$.ajax({dataType:"json",url:"https://api.github.com/users/JoseChirivella14/repos",data:{},success:function(i){var a=$.map(i,function(i){return"<li><a href='"+i.svn_url+"'>"+i.name+"</a></li>"});$("#repo-information").append(a)}})});