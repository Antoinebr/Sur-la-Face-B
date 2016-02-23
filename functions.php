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


?>
