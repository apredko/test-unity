#pragma strict

var distanceToStart : float = 5.5;

function Start () {

}

function Update () {

if (Input.GetMouseButtonDown(0) || Input.GetKeyDown(KeyCode.E))	{
			var hit : RaycastHit;
			var rayPos : Ray = Camera.main.ScreenPointToRay(Vector3(Screen.width*0.5,Screen.height*0.5,0));
		
		if (Physics.Raycast(rayPos,hit,distanceToStart)) {
			//Debug.Log ("Ray collider : " + hit.collider.gameObject.name);
			
			if (hit.collider.gameObject.name == "Start") {
				Application.LoadLevel ("test");
				}
			}
		}
	}