<?php
// Increment the active user count
session_start();
$_SESSION['active_users'] = isset($_SESSION['active_users']) ? $_SESSION['active_users'] + 1 : 1;

// Display the active user count
echo $_SESSION['active_users'];
?>
