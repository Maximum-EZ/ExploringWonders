<?php
session_start();

// Check if the visitor count session variable exists
if (!isset($_SESSION['visitor_count'])) {
    // If it doesn't exist, initialize it to 0
    $_SESSION['visitor_count'] = 0;
}

// Increment the visitor count
$_SESSION['visitor_count']++;

// Display the count
echo "Visitor Count: " . $_SESSION['visitor_count'];
?>
