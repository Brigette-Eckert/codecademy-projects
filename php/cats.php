<html>
    <p>
	<?php
	$cat_breeds = array();
	array_push($cat_breeds, "Siberian");
	array_push($cat_breeds, "Russian Blue");
	array_push($cat_breeds, "Scottish Fold");
	array_push($cat_breeds, "Maine Coon");
	array_push($cat_breeds, "Abyssinian");
	// Create an array and push 5 elements on to it, then 
    // print the number of elements in your array to the screen
    for ($i = 0; $i < count($cat_breeds); $i +=1) {
    	echo "<p>".$cat_breeds[$i]."</p>";
    }
    print count($cat_breeds);

	?>
	</p>
</html>