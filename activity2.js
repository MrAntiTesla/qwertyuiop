function back()
{
Window.location = "activity_1.html";
}
function getScore()
{
score=localStorage.getItem("Score");
document.getElementById("Update").innerHTML="<h1>Score:"+score+"</h1>";
}