<?php

    try {
        $conn = new PDO('mysql:host=localhost;dbname=escritorio', 'root', '');
        
    } catch(PDOException $e) {
        echo 'ERROR: ' . $e->getMessage();
    }