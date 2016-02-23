<?php

function romanic_number($integer, $upcase = true)
{
  $table = array('M'=>1000, 'CM'=>900, 'D'=>500, 'CD'=>400, 'C'=>100, 'XC'=>90, 'L'=>50, 'XL'=>40, 'X'=>10, 'IX'=>9, 'V'=>5, 'IV'=>4, 'I'=>1);
  $return = '';
  while($integer > 0)
  {
    foreach($table as $rom=>$arb)
    {
      if($integer >= $arb)
      {
        $integer -= $arb;
        $return .= $rom;
        break;
      }
    }
  }

  return $return;
}

$dir = "songs";

$scanned_directory = array_diff(scandir($dir), array('..', '.','.DS_Store'));

/**
* [list_mp3 description]
* @param  [string] $volName Le nom du dossier
* @return [array] $list retourne un array contenant la liste des musique + pochette du dossier
*/
function list_mp3($volName){

  $bodytag = str_replace("-", "", "$volName");
  $cover = "songs/".$volName."/pochette-".$bodytag.".jpg";
  $listo = array();

  // On boucle sur tous les fichiers mp3
  foreach (glob("songs/".$volName."/*.mp3") as $mp3) {
    // URL
    $mp3 = explode("/", $mp3);
    $url = "songs/".$volName."/".$mp3[2];
    // NOM
    $mp3Name = explode(".", $mp3[2]);
    $mp3Name = str_replace('_', ' ', $mp3Name[0])."\r\n";

    $listo[] = array("url" => $url, "name" => $mp3Name);
  }


  // On récupère juste le chiffre de l'album


  $volNum =  explode('-',$volName);
  $volNumRom = romanic_number(intval($volNum[1]));


  $list = array("song" =>$listo,"cover" => $cover, "title" => $volNumRom, "volnum" => $volNum[1]);

  return $list;
}



$songList = array();
foreach($scanned_directory as $dir)
{

  $songList[] = list_mp3($dir);

}

header('Content-Type: application/json');
echo json_encode($songList);

die();

?>
