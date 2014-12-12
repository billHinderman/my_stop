<?PHP
Header('Content-type: text/xml');

$stop = $_GET['stop'];
$rt = $_GET['rt'];
$url = 'http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=a3da90a8f09e423fb3084498e9889227&mapid=';
$url = $url . $stop;
$xml = new SimpleXMLElement(file_get_contents($url));

print($xml->asXML());


?>
