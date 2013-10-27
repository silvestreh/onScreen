<!DOCTYPE html>
<html class="<? echo (isset($_GET[demo]) ? $_GET[demo] : 'home') ?>">
  <head>
    <meta charset="UTF-8">
    <title>onScreen DEMO</title>
    <link rel="stylesheet" media="screen" href="css/site.css">
    <link rel="stylesheet" media="screen" href="css/demo.css">
    <link rel="stylesheet" media="screen" href="css/font-awesome.min.css">
    <link rel="stylesheet" media="screen" href="css/font-museo.css">
    <link rel="stylesheet" media="screen" href="css/font-lekton.css">
    <script type="text/javascript" src="lib/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="lib/jquery.onscreen.min.js"></script>
    <script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>
  </head>
  <body class="<? echo (isset($_GET[demo]) ? $_GET[demo] : 'home') ?>">
  <? 
  switch ($_GET[demo]) {
    case 'home':
      include_once('home.php');
      break;
    case 'appenditems':
      include_once('appenditems.php');
      break;
    case 'horizontal':
      include_once('horizontal.php');
      break;
    case 'lazy':
      include_once('lazy.php');
      break;
    default:
      include_once('home.php');
  }  
  ?>
  </body>
</html>