<!DOCTYPE html>
<html>
    <head>
	  <title> Challenge Time! </title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
      <p>
        <?php
         class Cat {
             public $isAlive = true;
             public $numLegs = 4;
             public $name;
              public function __construct() {
                $this->name=$name; 
                }
                public function meow($name) {
                    return "Meow meow";
                    }
             }
             $cat1= new Cat ("CodeCat");
            
            echo $cat1->meow();
             
        ?>
      </p>
    </body>
</html>