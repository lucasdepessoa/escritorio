(function () {
    $('#btnAddLinha').on("click", function (e) {

        //Capturando o id da ultima linha que existe na tabela//
        let idUltimaLinha = Number($(e.target).parent().parent().prev().attr('id'))

        //criando elementos virgens//
        let linha = document.createElement('tr')
        let tdAdmissao = document.createElement('td')
        let iAdmissao = document.createElement('input')
        let tdRecisao = document.createElement('td')
        let iRecisao = document.createElement('input')
        let tdProfissao = document.createElement('td')
        let iProfissao = document.createElement('input')
        let tdInsalubre = document.createElement('td')
        let iInsalubre = document.createElement('input')

        let tddLinha = document.createElement('td')

        let tdDelLinha = document.createElement('td')
        let btDelLinha = document.createElement('button')



        //Atribuindo os parametros//
        linha.setAttribute('id', idUltimaLinha + 1)
        tddLinha.setAttribute('class', 'numerador')
        tddLinha.textContent = idUltimaLinha + 1

        iAdmissao.setAttribute('type', 'date')
        iAdmissao.setAttribute('name', `admissao${idUltimaLinha}`)
        iAdmissao.setAttribute('class', 'form-control')
        iAdmissao.setAttribute('required', 'required')

        iRecisao.setAttribute('type', 'date')
        iRecisao.setAttribute('name', `demissao${idUltimaLinha}`)
        iRecisao.setAttribute('class', 'form-control')
        iRecisao.setAttribute('required', 'required')

        iProfissao.setAttribute('type', 'text')
        iProfissao.setAttribute('name', `profissao${idUltimaLinha}`)
        iProfissao.setAttribute('class', 'form-control prof')
        iProfissao.setAttribute('required', 'required')

        iInsalubre.setAttribute('type', 'checkbox')
        iInsalubre.setAttribute('class', 'insalubre')
        iInsalubre.setAttribute('name', 'insalubre')





        btDelLinha.setAttribute('type', 'button')
        btDelLinha.setAttribute('class', 'btn btn-danger btn-sm deletaLinha')
        btDelLinha.innerText = "X"

        btDelLinha.addEventListener('click', function (e) {
            let i = 1
            $(e.target).parent().parent().remove()
            $('tbody#corpoProfissao tr th').each(function () {
                $(this).text(i)
                i++
            })
        })

        tdDelLinha.appendChild(btDelLinha)

        linha.appendChild(tddLinha)

        tdAdmissao.appendChild(iAdmissao)
        tdRecisao.appendChild(iRecisao)
        tdProfissao.appendChild(iProfissao)

        tdInsalubre.appendChild(iInsalubre)

        linha.appendChild(tdAdmissao)
        linha.appendChild(tdRecisao)
        linha.appendChild(tdProfissao)
        linha.appendChild(tdInsalubre)
        linha.appendChild(tdDelLinha)

        $(linha).insertAfter('#corpoProfissao tr:nth-last-child(2)')
    })

    function catpuraValores() {
        let aux1 = [], aux9 = []

        //verifica todos os inputs e pega os valores sequencialmente//
        $('#corpoProfissao tr td input[type!=checkbox]').each(function (e) {
            aux1.push($(this).val())
        })

        $('#corpoProfissao tr td input[type=checkbox]').each(function (e) {
            if ($(this).is(':checked')) {
                aux9.push("Sim")
            } else {
                aux9.push("Não")
            }
        })

       
        let contrib = [], j = 0, aux = []

        //separa os valores por linha em ordem de inserção//
        for (let i = 0; i <= aux1.length; i++) {
            if (j > 2) {
                contrib.push(aux)
                aux = null
                aux = []
                j = 0
            }
            aux.push(aux1[i])
            j++
        }

        if ($('input#IMasc').is(':checked')) {
            var genero = 'Masculino'
        } else {
            var genero = 'Feminino'
        }

        let somaDiaComRegra = 0, somaDiaSemRegra = 0, somaMesComRegra = 0, somaMesSemRegra = 0, somaAnosComRegra = 0, somaAnosSemRegra = 0
        let contribFinal = []
        //realiza o calulo e separa os valores com regra e sem regra//
        for (let i = 0; i < contrib.length; i++) {
            let f = calculaTempo(contrib[i][0], contrib[i][1])


            if (moment(contrib[i][0]).isSameOrAfter('2019-11-13')) { //verifica a regra

                //calcula o tempo entre as datas//
                let d = calculaTempo(contrib[i][0], contrib[i][1])

                contrib[i].push({
                    dia: d.days(),
                    mes: d.months(),
                    ano: d.years(),
                    regra: 1,
                    insalubre: aux9[i],
                    sexo: genero
                })
            } else { //valores sem a regra//
                contrib[i].push({
                    dia: f.days(),
                    mes: f.months(),
                    ano: f.years(),
                    regra: 0,
                    insalubre: aux9[i],
                    sexo: genero
                })

            }
        } //fim for de calculo

        let somaDiasInsalubre = 0, somaMesInsalubre = 0, somaAnoInsalubre = 0
        //adicionando insalubridades//
        for (let i = 0; i < contrib.length; i++) {
            if (contrib[i][3].sexo == 'Masculino' && contrib[i][3].insalubre == 'Sim') {
                contrib[i][3].dia += (contrib[i][3].dia * 0.4)
                contrib[i][3].mes += (contrib[i][3].mes * 0.4)
                contrib[i][3].ano += (contrib[i][3].ano * 0.4)

                somaDiasInsalubre += (contrib[i][3].dia * 0.4)
                somaMesInsalubre += (contrib[i][3].mes * 0.4)
                somaAnoInsalubre += (contrib[i][3].ano * 0.4)

            }

            if (contrib[i][3].sexo == 'Feminino' && contrib[i][3].insalubre == 'Sim') {
                contrib[i][3].dia += (contrib[i][3].dia * 0.2)
                contrib[i][3].mes += (contrib[i][3].mes * 0.2)
                contrib[i][3].ano += (contrib[i][3].ano * 0.2)

                somaDiasInsalubre += (contrib[i][3].dia * 0.4)
                somaMesInsalubre += (contrib[i][3].mes * 0.4)
                somaAnoInsalubre += (contrib[i][3].ano * 0.4)
            }
        }
        //Nesse ponto a variavel contrib, contém os valores necessários para a mensagem, exceto o valor total condensado//
        //realizando a soma total dos valores separados e montando a mensagem//
        for (let i = 0; i < contrib.length; i++) {
            if (contrib[i][3].regra == 1) { //caso exista a regra//
                somaDiaComRegra += contrib[i][3].dia
                somaMesComRegra += contrib[i][3].mes
                somaAnosComRegra += contrib[i][3].ano

                //tratamento de correção de valores//
                if (somaDiaComRegra >= 30) { //quando chegar em 30 dias aumenta 1 mes e diminui os dias//
                    somaDiaComRegra -= 30
                    somaMesComRegra += 1

                }
                if (somaMesComRegra >= 12) {//quando chegar em 12 meses aumenta 1 ano e zera os meses//
                    somaMesComRegra -= 12
                    somaAnosComRegra += 1
                }
            }
            else { //nesse caso a regra não existe//
                somaDiaSemRegra += contrib[i][3].dia
                somaMesSemRegra += contrib[i][3].mes
                somaAnosSemRegra += contrib[i][3].ano

                //tratamento de correção de valores sem regra//
                if (somaDiaSemRegra >= 30) { //quando chegar em 30 dias aumenta 1 mes e diminui os dias//
                    somaDiaSemRegra -= 30
                    somaMesSemRegra += 1

                }
                if (somaMesSemRegra >= 12) {//quando chegar em 12 meses aumenta 1 ano e zera os meses//
                    somaMesSemRegra -= 12
                    somaAnosSemRegra += 1
                }
            }
        }//fim soma total

        //Verificação Final na parte com regra//
        if (somaDiaComRegra > 0) {
            somaDiaComRegra -= somaDiaComRegra
            somaMesComRegra += 1
            if (somaMesComRegra >= 12) {
                somaMesComRegra -= somaMesComRegra
                somaAnosComRegra += 1
            }
        }

        console.log(contrib)

        //antes de montar a mensagem, fazer uma verificação do gênero do trabalhador para verificar a insalubridade//

        let msgDetalhada = '', msg = `<h4>Cálculo Total de Contribuição</h4><br><br>`
        for (let i = 0; i < contrib.length; i++) { //monta a mensagem detalhada//
            if (i == 0) {
                msgDetalhada += `<h4>Contribuição Detalhada</h4><br><br>`
            }
            msgDetalhada += `<ul><li>Admissão : ${inverteData(contrib[i][0])}.</li><li>Recisão: ${inverteData(contrib[i][1])}.</li> <li>Emprego: ${contrib[i][2]}</li></ul><br>
          <strong>Tempo de Contribuição:</strong> ${contrib[i][3].ano.toFixed(2)} Anos, ${contrib[i][3].mes.toFixed(2)} Meses e ${contrib[i][3].dia.toFixed(2)} Dias. <br><br>`
        }

        //montando a mensagem condensada com os valores totais//
        msg += `<b>Anterior</b> a data de 13/11/2019 - ${somaAnosSemRegra.toFixed(2)} Anos, ${somaMesSemRegra.toFixed(2)} Meses e ${somaDiaSemRegra.toFixed(2)} Dias.<br><br>
        <b>Posterior</b> a data de 13/11/2019 - ${somaAnosComRegra.toFixed(2)} Anos, ${somaMesComRegra.toFixed(2)} Meses e ${somaDiaComRegra.toFixed(2)} Dias. <br><br>
        <strong>Soma dos Períodos:</strong> - ${(somaAnosSemRegra + somaAnosComRegra).toFixed(2)} Anos, ${(somaMesComRegra + somaMesSemRegra).toFixed(2)} Meses e ${(somaDiaComRegra + somaDiaSemRegra).toFixed(2)} Dias.<br><br>
        <hr><br>
        Adicional de Insalubridade em dias : ${somaDiasInsalubre.toFixed(2)} <br>
        Adicional de Insalubridade em Meses : ${somaMesInsalubre.toFixed(2)} <br>
        Adicional de Insalubridade em Anos: ${somaAnoInsalubre.toFixed(2)}. <br>`

        // $('#msgTOTAL').val(msg)
        // $('#msgDETAIL').val(msgDetalhada)

        document.write(msg)
    }


    function calculaTempo(inicioo,fimm){ //função de calculo de tempo por linha//
    
        let ini = moment(inicioo)
        let fim = moment(fimm)
        let result = moment.duration({
          years: fim.year() - ini.year(),
          months: fim.month() - ini.month(),
          days: fim.date() - ini.date()
        })
        return result 
        /*Retorna um objeto, com métodos herdados da classe moment*/
      }
      
      function inverteData(dd){ //função apenas para inverter datas
        let data = dd.split('-').reverse().join('-')
        return data
      } 




    $('#enviaCalculo').on('click', function () {

        catpuraValores()


        $.ajax({
            type: 'post',
            url: 'php/calculadora.php',
            cache: false,
            data: $('#formCalculo').serialize(),
            success: function (e) {
                console.log(e)
            }
        })
    })


})()