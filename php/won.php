<?php

    if(isset($_POST['comando']) and $_POST['comando'] == 'enviarConsulta'){
        echo "olhar no log do git quando ver isso";
        exit();
        $nome = $_POST['INome'];
        
        $arquivo = print_r($_POST);

        // $estado = $_POST['IEstado'];
        // $cidade = $_POST['ICidade'];
        // $email = $_POST['IEmail'];
        // $telefone = $_POST['IPhone'];
        // $atendimento = $_POST['atendimento'];
        // $especialidades
        // $mensagem = $_POST['msg'];
        // $data_envio = date('d/m/Y');
        // $hora_envio = date('H:i:s');
        // print_r($_POST);
        // exit();

         // emails para quem será enviado o formulário
        $emailenviar = "lucasdepessoa@gmail.com";
        $destino = $emailenviar;
        $assunto = "Nova Solicitação de Consulta";

        // É necessário indicar que o formato do e-mail é html
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $headers .= 'From: $nome <$email>';
        
        //$headers .= "Bcc: $EmailPadrao\r\n";
        $enviaremail = mail($destino, $assunto, $arquivo, $headers);

        if($enviaremail){
            $mgm = "E-MAIL ENVIADO COM SUCESSO! <br> O link será enviado para o e-mail fornecido no formulário";
            echo " <meta http-equiv='refresh' content='10;URL=contato.php'>";
            exit();
        } else {
            $mgm = "ERRO AO ENVIAR E-MAIL!";
            echo "";
            exit();
        }

        exit();
    }
   