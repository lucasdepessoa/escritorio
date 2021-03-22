<?php
    #Comando para enviar o calculo para o e-mail#
    if(isset($_POST['comando']) and $_POST['comando']=='enviaCalculo'){
        echo $_POST['msg'];
        exit();
    }
