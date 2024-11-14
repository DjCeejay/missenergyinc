// config.php
<?php
$host = "your_host";
$db_name = "missener_beauty-pageant";
$username = "missener_user-beauty";
$password = "f8aVPVntE@M6dXH";

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
