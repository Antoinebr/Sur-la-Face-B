<?php
include('../functions.php');

echo (isset($_GET['id'])) ? get_likes('like-vol-'.htmlspecialchars($_GET['id'])) : "" ;
$ip = htmlspecialchars($_SERVER['REMOTE_ADDR']);


if(isset($_POST)){
  $params = json_decode(file_get_contents('php://input'),true);
  if (isset($params['id'])){
    if(ip_can_like($ip, 'like-vol-'.htmlspecialchars($params['id']))){
      add_likes_ip($ip,'like-vol-'.htmlspecialchars($params['id']));
      echo "true";
    }else{
      echo "false";
    }
  }
}


die();
?>
