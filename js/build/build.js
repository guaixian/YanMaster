//添加项目

function addProject(ProjectName,Imagename)
{
 //let UrlTo='Unity/stud1/index.html';
 let UrlTo='Unity/'+ProjectName+'/index.html';
 //let ImageURL='images/UnityPro/stud1.png'
 let ImageURL='images/UnityPro/'+Imagename+'.png';
 $(".projects ul li").prepend(
   '<div class="project"><div class="project-bg"><a target="_blank"  class="plus">Unity</a><a target="_blank" href="'+UrlTo+'" ><img class="projectimage" src="'+ImageURL+'" alt="" /></a></div></div>'
 );
 
}