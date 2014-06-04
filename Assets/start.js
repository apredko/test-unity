#pragma strict
var x : Vector3 ;
var player : GameObject;
function Start () {
	x = new Vector3 (0,1,0);
}
function Update () {
    	 var distance = Vector3.Distance(player.transform.position, transform.position);
    	 if (distance <= 10.0f){
		Application.LoadLevel ("test");
    	 }
}