<?php

require_once('params.php');

function get_likes($id_item){
  global $bdd;
  $reponse = $bdd->query('SELECT COUNT(id_item) AS nb_likes FROM likes WHERE id_item ="'.$id_item.'" ');

  $donnees = $reponse->fetch();
  $reponse->closeCursor();

  return $donnees['nb_likes'];



}
function check_likes_ip($ip, $id_item){
  global $bdd;
  $reponse = $bdd->query('SELECT rate FROM likes WHERE ip ="'.$ip.'" AND id_item ="'.$id_item.'" ');

  $donnees = $reponse->fetch();

  #return $donnees['nb_likes'];
  $reponse->closeCursor();
  return $donnees['rate'];


}


function list_mp3($volName){

  $songList = array();
  foreach (glob("songs/".$volName."/*.mp3") as $mp3) {

    // URL
    $mp3 = explode("/", $mp3);
    $url = "songs/".$volName."/".$mp3[2];
    // NOM
    $mp3Name = explode(".", $mp3[2]);
    $mp3Name = str_replace('_', ' ', $mp3Name[0])."\r\n";
    $songList[] = array($url,$mp3Name);
    #echo '<li><a href="#" data-src="'.$url.'">'.$mp3Name.'</a></li>'."\r\n";
  }
  return json_encode($songList);

}

?>
