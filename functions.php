<?php

require_once('params.php');

function get_likes($id_item){
  global $bdd;
  $reponse = $bdd->query('SELECT COUNT(id_item) AS nb_likes FROM likes WHERE id_item ="'.$id_item.'" ');

  $donnees = $reponse->fetch();
  $reponse->closeCursor();

  return $donnees['nb_likes'];



}

function ip_can_like($ip, $id_item){
  global $bdd;
  $reponse = $bdd->query('SELECT rate FROM likes WHERE ip ="'.$ip.'" AND id_item ="'.$id_item.'" ');

  $donnees = $reponse->fetch();

  #return $donnees['nb_likes'];
  $reponse->closeCursor();

  return (empty($donnees['rate'])) ? true : false;

}


function add_likes_ip($ip, $id_item){
  global $bdd;

  $req = $bdd->prepare('INSERT INTO likes(id_item, ip, rate, dt_rated) VALUES(:id_item, :ip, :rate, :dt_rated)');
  $req->execute(array(
    'id_item' => $id_item,
    'ip' => $ip,
    'rate' => 1,
    'dt_rated' => date("Y-m-d G:i:s")
  ));

}


?>
