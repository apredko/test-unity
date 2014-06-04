#pragma strict

public var invisable : GameObject;
public var lastsighting : Vector3;

public var confidence : float = 1;

function Start () {

}

function Update () 
{
	if ( invisable.transform.position.x < lastsighting.x ) {
		confidence = confidence + 0.01; 
	}
	
	else{
		confidence = confidence - 0.01; 
	}
	
	if ( invisable.transform.position.x > transform.position.x )
		rigidbody.AddForce(Vector2.right * confidence);	
	else 
		rigidbody.AddForce(Vector2.right * -1 * confidence); // left
		
	if ( Mathf.Abs(invisable.transform.position.x - transform.position.x) < 5 )
	{
		rigidbody.AddForce(Vector2.up * 8 ); 	
	}	
	
	lastsighting = invisable.transform.position;
}


function OnCollisionEnter(theCollision : Collision)
{
	if(theCollision.gameObject.name == invisable.name)
	{
		// start particle system here
		var particlesystemstartplace = invisable.transform.position;
		//new particlesteym ( particlesystemstartplace );
		GameObject.Destroy(theCollision.gameObject, 2); // destroy with delay of 2 seconds
		
	}
		
}