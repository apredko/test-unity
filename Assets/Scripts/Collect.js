#pragma strict

var collectables : int = 0;
var collectablesToWin : int = 5;

var distanceToCollectable : float = 5.5;

var currentMusic : AudioClip;

public var collectPickup : AudioClip;

/*
public var collectAudio01 : AudioClip;
public var collectAudio02 : AudioClip;
public var collectAudio03 : AudioClip;
public var collectAudio04 : AudioClip;
public var collectAudio05 : AudioClip;
*/

function Start () {
}

function Update () {

	if (Input.GetMouseButtonDown(0) || Input.GetKeyDown(KeyCode.E))	{
			var hit : RaycastHit;
			var rayPos : Ray = Camera.main.ScreenPointToRay(Vector3(Screen.width*0.5,Screen.height*0.5,0));
		
		if (Physics.Raycast(rayPos,hit,distanceToCollectable)) {
			//Debug.Log ("Ray collider : " + hit.collider.gameObject.name);
				
				if (hit.collider.gameObject.tag == "Collectable") {
					//Debug.Log ("Absolutly a collectable");
					collectables += 1;
					audio.PlayClipAtPoint(collectPickup,transform.position);
					Destroy(hit.collider.gameObject);
					
					
						if (collectables==collectablesToWin){
							//Debug.Log ("Wake up!");
							Application.LoadLevel("Win");
				}
			}
		}
	}
}
/*
GUI.Label (Rect (10, 10, 200, 50), labelText);

function OnGUI() {

if (collectables < 3) {
labelText = collectables + " collected";
}
*/

Screen.showCursor = false;

/*
function OnControllerColliderHit (hit : ControllerColliderHit){
	if(hit.transform.tag == "Enemy"){
 	 Debug.Log("Hit the Enemy");
 	 Application.LoadLevel ("Loose");
  } 
}



function playSound () {

if(gameObject.tag "Collectables" == 1) {currentMusic = collectAudio01;}
if(gameObject.tag "Collectables" == 2) {currentMusic = collectAudio02;}
if(collectables == 3) {currentMusic = collectAudio02;}
if(collectables == 4) {currentMusic = collectAudio03;}
if(collectables == 5) {currentMusic = collectAudio03;}
if(collectables == 6) {currentMusic = collectAudio04;}
if(collectables == 7) {currentMusic = collectAudio05;}

audio.PlayOneShot(currentMusic);
}


if (collectables == 1) {
//Play clip at point, creates an audio source at a specific position
AudioSource.PlayClipAtPoint(collectAudio01, transform.position); 
}

if (collectables == 2) {
//Play clip at point, creates an audio source at a specific position
AudioSource.PlayClipAtPoint(collectAudio02, transform.position); 
}

if (collectables == 3) {
//Play clip at point, creates an audio source at a specific position
AudioSource.PlayClipAtPoint(collectAudio03, transform.position); 
}

if (collectables == 4) {
//Play clip at point, creates an audio source at a specific position
AudioSource.PlayClipAtPoint(collectAudio04, transform.position); 
}

if (collectables == 5) {
//Play clip at point, creates an audio source at a specific position
AudioSource.PlayClipAtPoint(collectAudio05, transform.position); 
}
*/