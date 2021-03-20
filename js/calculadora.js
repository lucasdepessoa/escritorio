(function () {
    $('#btnAddLinha').on("click", function (e) {

        //Capturando o id da ultima linha que existe na tabela//
        let idUltimaLinha = Number($(e.target).parent().parent().prev().attr('id'))

        console.log(idUltimaLinha)

      
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
        tddLinha.textContent = idUltimaLinha+1

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
        iInsalubre.setAttribute('class','insalubre')
        iInsalubre.setAttribute('name','insalubre')
        




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
})()