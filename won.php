<!DOCTYPE HTML>
<html lang="pt-br">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Aline Oliveira - Advocacia</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Aline Oliveira Advocacia" />
  <meta name="keywords"
    content="Aline Oliveira, Advogados, Franca - SP, Aline Oliveira Advocacia, Advogadas Franca, Advocacia Franca São Paulo" />



  <!-- Facebook and Twitter integration -->
  <meta property="og:title" content="" />
  <meta property="og:image" content="" />
  <meta property="og:url" content="" />
  <meta property="og:site_name" content="" />
  <meta property="og:description" content="" />
  <meta name="twitter:title" content="" />
  <meta name="twitter:image" content="" />
  <meta name="twitter:url" content="" />
  <meta name="twitter:card" content="" />

  <script src="https://kit.fontawesome.com/7cf40ba4e0.js" crossorigin="anonymous"></script>
  <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,700,800" rel="stylesheet">

  <!-- Animate.css -->
  <link rel="stylesheet" href="css/animate.css">
  <!-- Icomoon Icon Fonts-->
  <link rel="stylesheet" href="css/icomoon.css">
  <!-- Bootstrap  -->
  <link rel="stylesheet" href="css/bootstrap.css">

  <!-- Magnific Popup -->
  <link rel="stylesheet" href="css/magnific-popup.css">

  <!-- Owl Carousel  -->
  <link rel="stylesheet" href="css/owl.carousel.min.css">
  <link rel="stylesheet" href="css/owl.theme.default.min.css">
  <!-- Flexslider  -->
  <link rel="stylesheet" href="css/flexslider.css">

  <!-- Theme style  -->
  <link rel="stylesheet" href="css/style.css">

  <!-- Modernizr JS -->
  <script src="js/modernizr-2.6.2.min.js"></script>
  <!-- FOR IE9 below -->
  <!--[if lt IE 9]>
	<script src="js/respond.min.js"></script>
	<![endif]-->

</head>

<body>
  <?php
		require('php/menuSuperior.php');
	?>

  <div class="fh5co-loader"></div>

  <div id="page">
    <nav class="fh5co-nav" role="navigation">
      <div class="top-menu">
        <div class="container">
          <div class="row">
            <div class="col-xs-2">
              <div id="fh5co-logo"><a href="index.php"><img class="brand-logo" src="./images/logo.png"><span></span></a>
              </div>
            </div>
            <div class="col-xs-10 text-right menu-1">
              <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="practice.php">Especialidades</a></li>
                <li class="active"><a href="won.php">Consultas</a></li>
                <li><a href="blog.php">Blog</a></li>
                <li><a href="about.php">Sobre Nós</a></li>
                <li><a href="contact.php">Calculadora de Aposentadoria</a></li>
                <!-- <li class="btn-cta"><a href="#"><span>Login</span></a></li>
							<li class="btn-cta"><a href="#"><span>Sign Up</span></a></li> -->
              </ul>
            </div>
          </div>

        </div>
      </div>
    </nav>

    <aside id="fh5co-hero" class="js-fullheight">
      <div class="flexslider js-fullheight">
        <ul class="slides">
          <li style="background-image: url(images/img_bg_1.jpg);">
            <div class="overlay-gradient"></div>
            <div class="container">
              <div class="col-md-10 col-md-offset-1 text-center js-fullheight slider-text">
                <div class="slider-text-inner desc">
                  <h2 class="heading-section">Realize Aqui A Sua Pré Consulta</h2>
                  <p class="fh5co-lead">Nos envie seus dados básicos para contato e faça um resumo da
                    sua necessidade.</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </aside>

    <div id="fh5co-contact">
      <div class="container">
        <div class="row">
          <div class="col-md-3 animate-box"></div>
          <div class="col-md-6 animate-box">
            <h3 class="pagetitle">Realize aqui a sua pré consulta</h3>
            <form id="formConsulta" action="#" method="POST">
              <div class="row form-group">
                <div class="col-md-12">
                  <label for="INome">Nome Completo</label>
                  <input type="text" name="INome" id="INome" class="form-control"
                    placeholder="Digite seu Nome Completo">
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-6">
                  <label for="IEstado">Estado</label>
                  <select name="IEstado" class="form-control" id="estados">

                  </select>
                </div>
                <div class="col-md-6">
                  <label for="ICidade">Cidade</label>
                  <select name="ICidade" class="form-control" id="cidades">

                  </select>
                </div>
              </div>

              <div class="row form-group">

                <div class="col-md-6">
                  <label for="lPhone">Telefone/Celular</label>
                  <input type="text" name="IPhone" id="IPhone" class="form-control" placeholder="+55 (99) 99999-9999">
                </div>
                <div class="col-md-6">
                  <label for="IDataNasc">Atendimento</label>
                  <select name="atendimento" id="SAtendimento" class="form-control">
                    <option value="Presencial">Presencial</option>
                    <option value="Distancia">A Distância</option>
                  </select>

                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <label for="IEmail">Email</label>
                  <input type="text" name="IEmail" id="IEmail" class="form-control" placeholder="Digite o seu E-mail">
                </div>
              </div>
              <div class="row form-group">
                <label class="lbDiferente">Qual a Especialidade?</label>
                <div class="col-md-12 especs">

                  <label>
                    <input type="checkbox" name="previdenciario" class="option-input checkbox" />
                    Direito Previdenciário <span class="descPrev">(aposentadorias, revisões,
                      benefícios em geral...)</span>
                  </label>
                  <label>
                    <input type="checkbox" name="trabalhista" class="option-input checkbox" />
                    Direito do Trabalho
                  </label>
                  <label>
                    <input type="checkbox" name="familiar" class="option-input checkbox" />
                    Direito Familiar ou Sucessões
                  </label>
                  <label>
                    <input type="checkbox" name="consumidor" class="option-input checkbox" />
                    Direito do Consumidor
                  </label>
                  <label>
                    <input type="checkbox" name="acidentario" class="option-input checkbox" />
                    Direito Acidentário ou Indenizações
                  </label>
                  <label>
                    <input type="checkbox" name="criminal" class="option-input checkbox" />
                    Direito Criminal
                  </label>
                  <label>
                    <input type="checkbox" name="empresarial" class="option-input checkbox" />
                    Direito Empresarial
                  </label>
                  <label>
                    <input type="checkbox" name="civil" class="option-input checkbox" />
                    Direito Civil
                  </label>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <label for="message">Faça um resumo da sua necessidade:</label>
                  <textarea name="necessidade" id="message" cols="30" rows="10" class="form-control"
                    placeholder="Relate aqui a sua necessidade"></textarea>
                </div>
              </div>
              <div class="form-group">
                <button type="button" id="enviarConsulta" class="btn btn-primary">Enviar Mensagem</button>
              </div>
            </form>
          </div>

          <div class="col-md-1 animate-box"></div>
        </div>

      </div>
    </div>

    <div id="fh5co-testimonial" class="fh5co-bg-section arPad">
      <div class="container">
        <div class="row animate-box">
          <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>DEPOIMENTOS</h2>
            <h3>4.8 DE 5 ESTRELAS NO GOOGLE</h3>
            <p>Nossa avaliação é de <strong>4.8</strong> de <strong>5</strong> no Google com diversos comentários. Você
              pode acessar
              eles de forma pública digitando Aline Oliveira Advocacia Especializada ou <a target="_BLANK"
                href="https://www.google.com/search?q=aline+oliveira+advocacia+especializada&rlz=1C1GCEU_pt-BRBR869BR869&oq=aline+&aqs=chrome.0.69i59l2j69i57j46i433j69i60j69i61l3.1031j0j7&sourceid=chrome&ie=UTF-8#lrd=0x94b0a6313d669b41:0xaf34c298b029070c,1,,,">clicando
                aqui</a>.
            </p>
          </div>
        </div>
      </div>
    </div>

    <?php
			require('./php/foot.php');
		?>

  </div>

  <div class="gototop js-top">
    <a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
  </div>

  <!-- jQuery -->
  <script src="js/jquery.min.js"></script>
  <!-- jQuery Easing -->
  <script src="js/jquery.easing.1.3.js"></script>
  <!-- Bootstrap -->
  <script src="js/bootstrap.min.js"></script>
  <!-- Waypoints -->
  <script src="js/jquery.waypoints.min.js"></script>
  <!-- Stellar Parallax -->
  <script src="js/jquery.stellar.min.js"></script>
  <!-- Carousel -->
  <script src="js/owl.carousel.min.js"></script>
  <!-- Flexslider -->
  <script src="js/jquery.flexslider-min.js"></script>
  <!-- countTo -->
  <script src="js/jquery.countTo.js"></script>
  <!-- Magnific Popup -->
  <script src="js/jquery.magnific-popup.min.js"></script>
  <script src="js/magnific-popup-options.js"></script>
  <!-- Main -->
  <script src="js/main.js"></script>
  <!-- Calculadora (JS)-->
  <script class="aleatorio" src="js/calculadora.js"></script>
  <!-- Whatsapp Plugin -->
  <script class="tt" type="text/javascript">
  (function() {
    var options = {
      whatsapp: "+55(16)993517878",
      call_to_action: "Fale Conosco Agora",
      position: "left"
    }
    var proto = document.location.protocol,
      host = "whatshelp.io",
      url = `${proto}//static.${host}`
    var s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = `${url}/widget-send-button/js/init.js`
    s.onload = function() {
      WhWidgetSendButton.init(host, proto, options)
    }
    var x = document.querySelector(".tt")
    x.parentNode.insertBefore(s, x)
  })()

  setTimeout(() => {
    document.querySelector('.sc-7dvmpp-1').remove()
  }, 4000);
  </script>

  <script>
  $(document).ready(function() {

    $.getJSON('json/estados_cidades.json', function(data) {

      var items = [];
      var options = '<option value="">Escolha um estado</option>';

      $.each(data, function(key, val) {
        options += '<option value="' + val.nome + '">' + val.nome + '</option>';
      });
      $("#estados").html(options);

      $("#estados").change(function() {

        var options_cidades = '';
        var str = "";

        $("#estados option:selected").each(function() {
          str += $(this).text();
        });

        $.each(data, function(key, val) {
          if (val.nome == str) {
            $.each(val.cidades, function(key_city, val_city) {
              options_cidades += '<option value="' + val_city + '">' + val_city + '</option>';
            });
          }
        });

        $("#cidades").html(options_cidades);

      }).change();

    });

  });
  </script>

</body>

</html>