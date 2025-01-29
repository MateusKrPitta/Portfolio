import React, { useState, useEffect  } from 'react'
import './home.css'
import Logo from '../../img/mk.png'
import Imagem01 from '../../img/mateus01.png'
import Imagem02 from '../../img/mateus02.png'
import Imagem03 from '../../img/logo-pax.png'
import { saveAs } from 'file-saver';
import Imagem04 from '../../img/logo-boi.png'
import Caixa from '../../img/caixa.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import TypingEffect from '../../components/digitacao'
import ArticleIcon from '@mui/icons-material/Article';
import { FaLaravel } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { BsWordpress } from 'react-icons/bs'
import { SiJavascript } from 'react-icons/si'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { SiPhp } from 'react-icons/si'
import { FaSass } from 'react-icons/fa'
import { FaFigma } from 'react-icons/fa'
import { SiMui } from 'react-icons/si'
import { SiAxios } from 'react-icons/si'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import StarsIcon from '@mui/icons-material/Stars';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Imagemrodape from '../../img/mateus03.png'
import Curriculo from '../../img/curriculo.pdf'
import MenuIcon from '@mui/icons-material/Menu';
import { SiTailwindcss } from "react-icons/si";
import 'animate.css';

export default function Home() {

  const handleDownload = () => {
    saveAs(Curriculo, 'curriculo.pdf');
  };

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elemento = document.querySelector('.linha-do-tempo');
      const distanciaTopo = elemento.getBoundingClientRect().top;

      if (distanciaTopo < window.innerHeight) {
        // Adiciona a classe de animação quando o elemento está visível na tela
        elemento.classList.add('animate__fadeIn');
      } else {
        // Remove a classe de animação quando o elemento não está visível na tela
        elemento.classList.remove('animate__fadeIn');
      }
    };

    // Adiciona o evento de rolagem
    window.addEventListener('scroll', handleScroll);

    // Remove o evento quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='content-fundo-topo'>
      <div className='navbar'>
        <img src={Logo} className='animate__fadeIn'></img>
        <nav>
          <ul>
            <li>
              <a href='#home'>HOME</a>
            </li>
            <li>
              <a href='#sobre-mim'>SOBRE MIM</a>
            </li>
            <li>
              <a href='#sites'>SITES</a>
            </li>
            <li>
              <a href='#certificacoes'>EXPERIÊNCIAS</a>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu">
          <button onClick={toggleMenu}><MenuIcon /></button>
          {menuVisible && (
            <div className="menu-options">
              <div><a href='#home'>HOME</a></div>
              <div><a href='#sobre-mim'>SOBRE MIM</a></div>
              <div><a herf='#experiencias'>EXPERIÊNCIAS</a></div>
              <div><a href='#sites'>SITES</a></div>
              <div><a href='#certificacoes'>CERTIFICAÇÕES</a></div>
              <div><a href='#contato'>CONTATO</a></div>
            </div>
          )}
        </div>
        <div className='contato-portifolio'>
          <a href='#contato'>CONTATO</a>
        </div>

      </div>

      <div className="container-header">
        <div id="home" className="animate__fadeInLeft titulo-header">
          <p>BEM VINDO!</p>
          <h1>Mateus Pitta</h1>
          <h2>Front-End</h2>
          <a>Profissional aplicado e criativo, sempre buscando soluções tecnológicas estratégicas para sua empresa!</a>
          <div className='icones'>
            <div className='editar-icone'>
              <a href="https://www.github.com/Mateuskrp"><GitHubIcon /></a>
            </div>
            <div className='editar-icone'>
              <a href="https://linkedin.com/in/mateus-pitta/"><LinkedInIcon /></a>
            </div>
            <div className='editar-icone'>
              <a href="https://www.instagram.com/mateuskronbauerr/"><InstagramIcon /></a>
            </div>
            <div className='editar-icone'>
              <a href="https://www.facebook.com/mateuspitta.pitta/"><FacebookIcon /></a>
            </div>
          </div>
        </div>
        <div className="imagem-topo animate__fadeInLeft">
          <img src={Imagem01}></img>
        </div>
      </div>

      <div className='container-quem-sou' id="sobre-mim">
        <div className='imagem02'>
          <img src={Imagem02}></img>
        </div>
        <div className='texto-sou' >
          <h5>SOBRE MIM</h5>
          <h1>Quem sou eu?</h1>
          <div className='texto-sobre-mim'>
            <TypingEffect text="Meu nome é Mateus Pitta, sou desenvolvedor Front-End, com solidas habilidades
            em linguagem de programação. Meu principal objetivo é crescer na área de tecnologia,
            trazendo diversas soluções tecnologicas, tanto para a sociedade como para diversas empresas. Gosto de trabalhar em equipe, me comunicar bastante, definir metas ou objetivos,
            colaborar para o crescimento da empresa ... "      blink={true} />
          </div>

          <div className='idade-cidade'>
            <div className='icone-idade'>
              <div className='texto-icone'>
                <EventAvailableIcon fontSize='small' />
                <label>IDADE</label>
              </div>
              <p>22 Anos</p>
            </div>

            <div className='icone-idade'>
              <div className='texto-icone'>
                <LocationOnIcon fontSize='small' />
                <label>CIDADE</label>
              </div>
              <p>Dourados/MS</p>
            </div>

            <div className='icone-idade'>
              <div className='texto-icone'>
                <ContactEmergencyIcon fontSize='small' />
                <label>ESPECIALIDADE</label>
              </div>
              <p>TI</p>
            </div>
          </div>
          <div className='button-curriculo'>
            <button onClick={handleDownload} >BAIXAR CURRICULO<ArticleIcon fontSize='small' /></button>
          </div>
        </div>
      </div>
      <div className='minha-experiencia' id="certificacoes">
        <div className='animate__fadeIn linha-do-tempo'>
          <h1>Habilidades</h1>
          <div className='icones-habilidades'>
            <div className='texto-icone-habilidade'>
              <h5>HTML</h5>
              <FaHtml5 size={60} />
            </div>

            <div className='texto-icone-habilidade'>
              <h5>CSS</h5>
              <FaCss3Alt size={60} />

            </div>

            <div className='texto-icone-habilidade'>
              <h5>REACTJS</h5>
              <FaReact size={60} />
            </div>

            <div className='texto-icone-habilidade'>
              <h5>JAVASCRIPT</h5>
              <SiJavascript size={60} />
            </div>

            <div className='texto-icone-habilidade'>
              <h5>MYSQL</h5>
              <GrMysql size={60} />
            </div>
          </div>
          <div className='icones-habilidades2'>
            <div className='texto-icone-habilidade'>
              <h5>SASS</h5>
              <FaSass size={60} />
            </div>

            <div className='texto-icone-habilidade'>
              <h5>FIGMA</h5>
              <FaFigma size={60} />

            </div>
            <div className='texto-icone-habilidade'>
              <h5>MATERIAL UI</h5>
              <SiMui size={60} />
            </div>

            <div className='texto-icone-habilidade'>
              <h5>WORDPRESS</h5>
              <BsWordpress size={60} />
            </div>
            <div className='texto-icone-habilidade'>
              <h5>PHP</h5>
              <SiPhp size={60} />
            </div>
          </div>
        </div>
      </div>

      <div className='minha-experiencia-mobile' id="site">
        <div className='linha-do-tempo'>
          <h1>Habilidades</h1>
          <div className='icones-habilidades'>
            <div className='texto-icone-habilidade'>
              <h5>HTML</h5>
              <FaHtml5 size={20} />
            </div>

            <div className='texto-icone-habilidade'>
              <h5>CSS</h5>
              <FaCss3Alt size={20} />

            </div>

            <div className='texto-icone-habilidade'>
              <h5>REACT</h5>
              <FaReact size={20} />
            </div>
          </div>
          <div className='icones-habilidades'>
            <div className='texto-icone-habilidade'>
              <h5>JS</h5>
              <SiJavascript size={20} />
            </div>

            <div className='texto-icone-habilidade'>
              <h5>MYSQL</h5>
              <GrMysql size={20} />
            </div>
            <div className='texto-icone-habilidade'>
              <h5>SASS</h5>
              <FaSass size={20} />
            </div>
          </div>
          <div className='icones-habilidades2'>
            <div className='texto-icone-habilidade'>
              <h5>FIGMA</h5>
              <FaFigma size={20} />
            </div>
            <div className='texto-icone-habilidade'>
              <h5>WORDPRESS</h5>
              <BsWordpress size={20} />
            </div>
            <div className='texto-icone-habilidade'>
              <h5>PHP</h5>
              <SiPhp size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className='site-desenvolvidos' id="sites">
        <p>Sites Desenvolvidos</p>
        <div className='tipos-site'>
          <div className='tamanho-site-aide'>
            <a href="https://www.aidesolucoes.com.br">ACESSAR</a>
          </div>
          <div className='tamanho-site-usina'>
            <a href="https://energeticasantahelena.com.br">ACESSAR</a>
          </div>
          <div className='tamanho-site-easy'>
            <a href="https://falaeasy.com.br">ACESSAR</a>
          </div>
        </div>
      </div>
      <div className='carreira' >
        <h1>Experiências</h1>
        <div className='experiencias' id="teste">
          <div className='unidades'>
            <ImportantDevicesIcon sx={{ fontSize: 50 }} />
            <a>Atualmente</a>
            <a>Desenvolvedor Front-End</a>
            <b>Local: Pax Primavera </b>
            <h7>Projetos de sistemas web, desenvolvimento de sites, suporte, teste de sistemas, treinamentos, usabilidade, e metodologias ágeis. </h7>
          </div>
          <div className='unidades'>
            <SupportAgentIcon sx={{ fontSize: 50 }} />
            <a>2021 - 2022</a>
            <a>Analista de TI</a>
            <b>Local: Santi Informática</b>
            <h7>Desenvolvimento de sistemas, sites, manutenção de equipamentos, servidores, hardware, impressoras, serviços de redes, configuração de sistemas e suporte técnico.  </h7>
          </div>
          <div className='unidades'>
            <StarsIcon sx={{ fontSize: 50 }} />
            <a>2019 - 2020</a>
            <a>Marketing Digital</a>
            <b>Local: Unigran</b>
            <h7>Atendimento de usuário, funil de leads, e-mail marketing, redes sociais, desenvolvimento de landing pages, desenvolvimento em wordpress.* </h7>
          </div>
        </div>
      </div>
      <div className='projetos'>
        <h1>Projetos Desenvolvidos</h1>
        <div className='projetos2'>
          <div className='conteudo-projeto'>
            <div className='pax2'>
              <div className='title-img'>
                <img src={Imagem04} ></img>
                <h2>Controle de Gado - TCC</h2>
              </div>
              <p>Sistemas de controle de gado para fazendas, para gerenciar o seu rebanho, através de funções como contagem e animais, gerenciamento de vacinas, cadastro de animal, abates, nascimentos. Principal objetivo do sistema, é auxiliar o fazendeiro com diversos relatórios, cuidando assim do seu rebanho. </p>
              <p>Tecnologias que utilizei:</p>
              <div className='icones-pax'>
                <SiPhp size={35} />
                <FaHtml5 size={35} />
                <FaCss3Alt size={35} />
                <FaLaravel size={35} />
                <GrMysql size={35} />
              </div>
            </div>
          </div>
          <div className='conteudo-projeto2'>
            <div className='pax3'>
              <div className='title-img'>
                <img src={Imagem03} ></img>
                <h2>Sistema Pax Primavera</h2>
              </div>
              <p>Sistemas que desempenha diverças funções de controle, vendas, cobranças, atendimento, suporte, relatórios, contatos com o cliente. Seu principal objetivo é melhorar os serviços pretados pela empresa, velocidade, usabilidade, prospecção de dados, informações, automatização de telas e funções. </p>
              <p>Tecnologias que utilizei:</p>
              <div className='icones-pax'>
                <FaReact size={35} />
                <FaHtml5 size={35} />
                <FaCss3Alt size={35} />
                <FaFigma size={35} />
                <SiAxios size={35} />
              </div>
            </div>
          </div>
          <div className='conteudo-projeto'>
            <div className='pax2'>
              <div className='title-img'>
                <img style={{borderRadius:'5px'}} src={Caixa} ></img>
                <h2>Controle de Estoque</h2>
              </div>
              <p>Sistemas que gerencia o estoque, lista de compras, entradas, saídas, gerenciamento de custo. Execelente sistema para restaurantes e lanchonetes, mobile e desktop. </p>
              <p>Tecnologias que utilizei:</p>
              <div className='icones-pax'>
              <FaReact size={35} />
                <FaHtml5 size={35} />
                <FaCss3Alt size={35} />
                <FaFigma size={35} />
                <SiAxios size={35} />
                <SiTailwindcss size={35}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='rodape' >
        <div className='tipos-contato'>
          <h1>Contato</h1>
          <div className='whatsapp' id="contato">
            <WhatsAppIcon />
            <a href="https://api.whatsapp.com/send?phone=5567998592808&text=ol%C3%A1%20vi%20o%20seu%20portf%C3%B3lio!"><h4>(67) 99859-2808</h4></a>
          </div>
          <div className='whatsapp'>
            <MailOutlineIcon />
            <h4>contato.mateuspitta@gmail.com</h4>
          </div>
          <div className='whatsapp'>
            <InstagramIcon />
            <a href='https://www.instagram.com/mateuskronbauerr/'><h4>@mateuskronbauerr</h4></a>
          </div>
          <h2>Envie uma mensagem para mim!</h2>
          <button> <a href="https://wa.me/5567998592808?text=Ol%C3%A1+vi+o+seu+portif%C3%B3lio%21">MENSAGEM</a></button>
        </div>
        <div className='second-div'>
          <img src={Imagemrodape}></img>

        </div>

      </div>
    </div>
  )
}

