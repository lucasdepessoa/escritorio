<?php

    #recebendo os dados para calculo#
    print_r($_POST);
    if(isset($_POST['enviaCalculo']) and $_POST['enviaCalculo'] == 'um'){
       print_r($_POST);
    }

    exit();
if ($_POST['enviaCalculo']) {
    if (!empty($_POST['IPhone'])) {

        $dados = [];
        $contrib = [];
        foreach ($_POST as $key => $value) { //primeira filtragem, extrai os valores da variavel $_POST
            array_push($dados, $value);
        }

        //organiza os dados das contribuições//

        $removeInicio = array_slice($dados, 7);
        $parte = array_slice($removeInicio, 0, -4);

        $num = count($parte) / 3;

        for ($i = 0; $i < $num; $i++) {
            $contrib[$i] = [];
            for ($j = 0; $j <= 2; $j++) {
                array_push($contrib[$i], $parte[$j]);
            }
        }

        //cabecalho da mensagem//
        $msg .= "<h4>Cálculo de Contribuição - Dados do Cliente</h4> <br>";
        $msg .= "<p style='background:#brown'>Nome: " . $dados[0] . "<br>";
        $msg .= "Cidade: " . $dados[1] . " - Estado: " . $dados[2] . " <br>";
        $msg .= "Data Nascimento: " . $dados[3] . " -  Telefone: " . $dados[4] .  "<br>";
        $msg .= "Sexo: " . $dados[5] . " -  E-mail: " . $dados[6] . "</p><br><hr>";


        //cabecalho do e-mail
        $to = 'lucasdepessoa@gmail.com,advocaciaalineoliveira@advocaciaalineoliveira.com.br';
        //ananda.anm@gmail.com,advocaciaalineoliveira@advocaciaalineoliveira.com.br
        $subject = 'Nova Entrada de Cálculo';
        $headers = array('Content-Type: text/html; charset=UTF-8');
        //Montando o corpo da Mensagem//
        for ($i = 0; $i < count($contrib); $i++) {
            if ($i == 0) { //monta o cabecalho da tabela//
                $msg .= "<table>";
                $msg .= "<thead>
															<tr>
																<th>Admissão</th>
																<th>Recisão</th>
																<th>Profissão</th>
															</tr>
														</thead>";
                $msg .= "<tbody>";
            }
            $msg .= "<tr>";
            for ($j = 0; $j <= 2; $j++) { //monta as celulas da tabela//
                if ($j == 0 || $j == 1) {
                    $msg .= "<td>" . implode("-", array_reverse(explode("-", $contrib[$i][$j]))) . "</td>";
                } else {
                    $msg .= "<td>" . $contrib[$i][$j] . "</td>";
                }
            }
            $msg .= "</tr>";
        } //fim for mensagem

        //Montando o rodapé da mensagem//
        $msg .= "</tbody>";
        $msg .= "</table>";
        $msg .= "<hr><br>";
        $msg .= htmlspecialchars_decode($_POST['msgDETAIL']);
        $msg .= "<hr><br>";
        $msg .= htmlspecialchars_decode($_POST['msgTOTAL']);
        $msg .= "</hr><br>";
        //Enviando a Mensagem//	

        echo $msg;
        // $attachment = '/srv/htdocs/wp-content/themes/onepress/upload/' . basename($_FILES['pdfArquivo']['name']);
        // move_uploaded_file($_FILES["pdfArquivo"]["tmp_name"], $attachment);

        // wp_mail($to, $subject, $msg, $headers, $attachment);
        // unlink($attachment);
    }
}
