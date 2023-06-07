<?php
$counter_file = 'counter.txt';

// Read the current count from the file
$counter = file_get_contents($counter_file);

// Increment the count
$counter++;

// Update the count in the file
file_put_contents($counter_file, $counter);

// Display the count
echo "Visitor Count: $counter";
?>
