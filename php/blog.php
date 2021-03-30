<?php

    require_once('./conexao.php');
    define('TAMANHO_MAXIMO',(2 * 1024 * 1024));


    #solicitação de envio de conteudo#
    if(isset($_POST['comando']) and $_POST['comando']=='enviarConteudo'){
        // Verificando se selecionou alguma imagem
        if (!isset($_FILES['IImg1']))
        {
            echo 'Selecione uma imagem';
            exit();
        }
        
        // Recupera os dados dos campos
        $nome =$_FILES['IImg1']['name'];
        $tipo = $_FILES['IImg1']['type'];
        $tamanho = $_FILES['IImg1']['size'];

        // Validações básicas

        // Formato
        if(!preg_match('/^image\/(pjpeg|jpeg|png|gif|bmp)$/', $tipo))
        {
            echo 'Isso não é uma imagem válida';
            exit();
        }

        // Tamanho
        if ($tamanho > TAMANHO_MAXIMO)
        {
            echo 'A imagem deve possuir no máximo 2 MB';
            exit();
        }


    
    
        $testeBusca = $conn->prepare('INSERT INTO posts (`titP1`, `subTitP1`, `img1`, `subTit1`, `conte1`) VALUES (?,?,?,?,?)');
        $testeBusca->bindValue(1,$_POST['ITitP1'],PDO::PARAM_STR);
        $testeBusca->bindValue(2,$_POST['ISubTitP1'],PDO::PARAM_STR);
        $testeBusca->bindValue(3,file_get_contents($_FILES['IImg1']['tmp_name']),PDO::PARAM_LOB);
        $testeBusca->bindValue(4,$_POST['ISubTitSub1'],PDO::PARAM_STR);
        $testeBusca->bindValue(5,$_POST['IConte1'],PDO::PARAM_STR);
        
        if(!$testeBusca->execute()){
            print_r($testeBusca->errorInfo());
        }else{
            echo "Inserido";
            exit();
        }

        echo "Nem entrou";
        exit();
    }

    #==#

    