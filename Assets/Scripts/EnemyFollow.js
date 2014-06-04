#pragma strict
var x : Vector3 ;
var target : Transform; //the enemy's target
var moveSpeed = 3; //move speed
var rotationSpeed = 3; //speed of turning

var player : GameObject;

var myTransform : Transform; //current transform data of this enemy
 
function Awake()
{
    myTransform = transform; //cache transform data for easy access/preformance
}
 
function Start()
{
	x = new Vector3 (0,1,0);

     target = GameObject.FindWithTag("Player").transform; //target the player
 
}
 
function Update () {
    //rotate to look at the player
    myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
    Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
 
    //move towards the player
    myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
 	var distance = Vector3.Distance(player.transform.position, transform.position);
    	 if (distance <= 5.5f){
    	  	 Application.LoadLevel ("Loose");
 }
}

