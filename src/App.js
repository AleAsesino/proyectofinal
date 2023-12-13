import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import React,{useState} from 'react'

import './App.css';
import CajaInicio from './componentes/inicio';
import Footer from './componentes/footer';
import Departamento from './componentes/departamento';
import Menu from './componentes/menu';
import Formulario from './componentes/Formulario';
import NavegarBarra from './componentes/NavegarBarra';
import Perfil from './componentes/Perfil';
import ScrollToTop from './componentes/ScrollToTop';
import Usuarios from './componentes/Usuarios';
import IniciarSesionC from './componentes/IniciarSesionC';
/////////////////Importamos imagenes//////////////////
import imagenAdmin from './imagenes/cropped-7680-4320-1113102.jpg'
import imagenUsuario from './imagenes/PersonaG.png'

///Importamos las imagenes////////////////////////////////////////////////

import imgLaPaz from './imagenes/La-Paz.jpg' 
import imgOruro from './imagenes/Oruro.jpg' 
import imgPotosi from './imagenes/Potosi.jpg' 
import imgCochabamba from './imagenes/Cochabamba.jpg' 
import imgPando from './imagenes/Pando.jpg' 
import imgSantaCruz from './imagenes/SantaCruz.jpg' 
import imgTarija from './imagenes/tarija.jpg' 
import imgSucre from './imagenes/Sucre.jpg' 
import imgBeni from './imagenes/Beni.jpeg' 

import imgPandoC from './imagenes/cobijaCorrect.jpg'
////////////////////////////////////////////////////////////////////////////////

import imgPlatoPaceño from './imagenes/plato-paceño.jpg'
import imgPlatoTarija from './imagenes/plato-tarija.jpg'
import imgPlatox from './imagenes/platox.jpg'
import imgSalteña from './imagenes/salteña.jpeg'
import imgSilpancho from './imagenes/silpancho.webp'
import imgPlatoPando from './imagenes/plato-pando.jpg'
import imgPlatoCochabamba from './imagenes/palto-cochabamba.jpg'
import imgPlatosantacruz from './imagenes/plato-santacruz.jpg'
import imgPlatoPotosi from './imagenes/plato-potosi.jpg'
import imgPlatoOruro from './imagenes/plato-oruro.jpg'
import imgPlatoBeni from './imagenes/plato-beni.jpg'


////////////////////////////////////////////////////////////////////////////////

function App() {
  /////////////////////////DataUsuarios///////////////////////////////////////////
  const [dataUsuario, setDataUsuario] = useState([
    {
      imagen: imagenUsuario,
      nombre: 'Juan',
      contraseña: 123,
      permisos: 'Usuario',
    
    },
    {
      imagen: imagenAdmin,
      nombre: 'Mario',
      contraseña: 12345,
      permisos: 'Administrador',
    },
    {
      imagen: imagenUsuario,
      nombre: 'Juanjo',
      contraseña: 1234567,
      permisos: 'Usuario',
    },
    {
      imagen: imagenAdmin,
      nombre: 'System',
      contraseña: 9129103,
      permisos: 'Administrador',
    },

  ])
  const [usuarioActual, setUsuarioActual] = useState(dataUsuario[3]);


  //////////////////////////Variable Punteros/////////////////////////////////////
  const [dataDep,setDataDep] = useState(-1)

  ///////////////////////Datoas de Cada Deparmento////////////////////////////////
  const DataDepartamento1 = [
    {
      id: 1,
      nombre: 'La Paz',
      descripcion: 'La Paz, Bolivia, es una ciudad de contrastes fascinantes, situada en altitudes impresionantes. Rodeada de montañas majestuosas, ofrece una rica mezcla cultural, arquitectura histórica y experiencias vibrantes.',
      imagenInicio: imgLaPaz,
      tituloP: 'Plato Paceño',
      imagenPlato: imgPlatoPaceño,
      descripcionPlato:'Es un plato que combina choclo, papa, habas y queso y que se acompaña con salsa picante (llajua).',
      descripcionLarga1:'La Paz, departamento de Bolivia, combina majestuosas montañas andinas y una vibrante ciudad capital. Su altitud extrema abarca desde los picos nevados de la Cordillera Real hasta el valle cálido de los Yungas. La ciudad de La Paz, asentada en un profundo cañón, es un centro cultural y político. Ofrece una mezcla única de arquitectura colonial, mercados bulliciosos como el de las Brujas, y modernos edificios. La diversidad geográfica y cultural de La Paz se refleja en sus festivales animados y en la riqueza de tradiciones indígenas que coexisten con la vida urbana contemporánea.',
      descripcionLarga2: 'La gastronomía de La Paz, Bolivia, es una fusión vibrante de sabores tradicionales andinos y influencias mestizas. Destacan platos emblemáticos que reflejan la diversidad cultural y geográfica de la región. Uno de los platillos más conocidos es el "Sajta de Pollo", un guiso de pollo picante con papas y especias, representativo de la región altiplánica. La "Salteña" es una empanada rellena de carne, papas y otros ingredientes, popular como aperitivo. Además, las "Api con Pastel" ofrecen una dulce experiencia, consistiendo en una bebida caliente de maíz morado acompañada de pastelitos. La rica gastronomía paceña refleja la autenticidad y la mezcla de sabores en Bolivia.',
      
    },
    {
      id: 2,
      nombre: 'Oruro',
      descripcion: 'Oruro, Bolivia, se destaca por su celebración del Carnaval de Oruro, reconocido por la UNESCO. La ciudad minera tiene una rica herencia cultural, arquitectura colonial y tradiciones folklóricas vibrantes.',
      imagenInicio: imgOruro,
      tituloP: 'Charquekan',
      imagenPlato: imgPlatoOruro,
      descripcionPlato:'Charquekan: Plato elaborado con charque de res o llama desmenuzado frito, acompañado con huevo duro, mote, papa, queso y llajua. ' ,
      descripcionLarga1:'Oruro, departamento boliviano, alberga una ciudad que resuena con su patrimonio cultural. Su famoso Carnaval de Oruro, reconocido por la UNESCO, transforma las calles en un escenario de danzas folklóricas, músicas y coloridos trajes. Este evento, arraigado en tradiciones indígenas y mestizas, celebra la diversidad cultural de Bolivia y rinde homenaje a deidades como la Virgen del Socavón.',
      descripcionLarga2:'La gastronomía orureña ofrece delicias como el "Saice", una sabrosa sopa con carne y maíz, y el "Chairo", un guiso nutritivo con carne de res y chuño. Estos platillos revelan la riqueza culinaria influenciada por la historia y tradiciones andinas.',
    },
    {
      id: 3,
      nombre: 'Potosí',
      descripcion: 'Potosí, Bolivia, cuna de la riqueza minera de la plata en la época colonial, presenta el majestuoso Cerro Rico. Con arquitectura colonial, calles empedradas y su legado minero, Potosí cautiva con su historia y paisajes.',
      imagenInicio: imgPotosi,
      tituloP: 'Calapurka',
      imagenPlato:imgPlatoPotosi ,
      descripcionPlato:'Calapurka: Elaborada con harina de trigo retostada y cocida con piedra caliente. ' ,
      descripcionLarga1:'Potosí, joya histórica de Bolivia, se erige como un testimonio vivo de la opulencia minera y la huella colonial. Su imponente Cerro Rico, testigo de épocas doradas, preside la ciudad que resplandece con arquitectura barroca. Entre sus monumentos, la Casa de la Moneda se erige como un símbolo de la prosperidad que alguna vez fluyó de sus minas. Potosí respira historia en cada calle adoquinada, evocando el esplendor y los desafíos que moldearon su identidad.',
      descripcionLarga2:'En cuanto a su gastronomía, Potosí ofrece un banquete que fusiona tradiciones autóctonas y europeas. El "Fricasé de Llama", plato emblemático, conjuga la carne tierna de llama con papas en un guiso aromático. El "Kallu", otra delicia, presenta una mezcla suculenta de carnes, papas y chuño, revelando la riqueza de sabores que se entrelazan en la mesa potosina. Estos manjares culinarios narran una historia gustativa tan intrigante como la misma historia que Potosí atesora en sus piedras centenarias.',
    },
  ]
  const DataDepartamento2 = [
    {
      id: 1,
      nombre: 'Cochabamba',
      descripcion: 'Cochabamba, en Bolivia, es conocida como la "Ciudad Jardín" por su clima templado y su agricultura próspera. Celebra festivales, ofrece delicias gastronómicas y exhibe una rica herencia cultural.',
      imagenInicio: imgCochabamba,
      tituloP: 'Pampaku',
      imagenPlato: imgPlatoCochabamba ,
      descripcionPlato:'Pampaku: Se trata de un plato hecho a base a carne de pollo, res, cordero, cerdo, papa, camote, yuca y plátano. Todos estos ingredientes son colocados en un recipiente herméticamente cerrado y enterrado en una fosa, la que es recubierta con piedras y ladrillos, previamente calentados mediante fuego de leña o carbón, al grado de reventar la piedra. Se cubre con hojas frescas de hierba u hojas de plátano, y luego es tapado completamente con barro. El punto de cocción se produce cuando se resquebraja y sale humo de la hierba fresca quemada. Se sirve acompañado con ensalada de verduras frescas. ' ,
      descripcionLarga1:'Cochabamba, el "Corazón de Bolivia", es un departamento que fusiona la vitalidad urbana con paisajes naturales exuberantes. Rodeada por el valle central, la ciudad de Cochabamba cautiva con su clima templado y una rica herencia cultural. Destacan la arquitectura colonial y la Plaza 14 de Septiembre, epicentro histórico y social. Las tradiciones folklóricas, como la Fiesta de la Virgen de Urkupiña, danzan por las calles, ofreciendo una ventana a la identidad local. Cochabamba también es famosa por el Cristo de la Concordia, la estatua más grande de Jesucristo en Sudamérica, que domina la ciudad desde las alturas.',
      descripcionLarga2:'En el ámbito culinario, Cochabamba deleita con sabores auténticos. El "Silpancho", un platillo emblemático, consiste en carne de res empanizada, acompañada de arroz, papas, huevo frito y ensalada. La "Salteña", una jugosa empanada rellena de carne, papas, huevo y condimentos, es otro manjar imperdible. Cochabamba, con su encanto natural y gastronomía única, ofrece una experiencia cultural inolvidable.',
    },
    {
      id: 2,
      nombre: 'Sucre',
      descripcion: 'Sucre, capital constitucional de Bolivia, revela su esplendor colonial con arquitectura blanca, calles empedradas y plazas históricas. Como Patrimonio de la Humanidad, Sucre fusiona historia, cultura y encanto en cada rincón.',
      imagenInicio: imgSucre,
      tituloP: 'Salteña',
      imagenPlato: imgSalteña,
      descripcionPlato: 'Las empanadas son una parte importante de la tradicional gastronomía chuquisaqueña y se comen a media mañana.',
      descripcionLarga1:'Sucre, la capital constitucional de Bolivia, es un tesoro histórico y cultural. Con calles empedradas y arquitectura colonial bien conservada, la ciudad respira un encanto que la hace única. La Casa de la Libertad, donde se proclamó la independencia de Bolivia, y la Catedral Metropolitana son hitos que destacan en su centro histórico. Sucre alberga una atmósfera tranquila y elegante, contrastando con la agitación de otras capitales.',
      descripcionLarga2:'La gastronomía sucrense refleja la diversidad de la región. El "Majao" es una especialidad, combinando carne de res, arroz y condimentos. Además, el "Queso Humacha" ofrece una mezcla de queso, maíz y hierbas en una sopa deliciosa. Sucre, con su historia palpable y sabores auténticos, invita a sumergirse en una experiencia cultural en cada rincón de la ciudad.',
    },
    {
      id: 3,
      nombre: 'Tarija',
      descripcion: 'Tarija, en el sur de Bolivia, se destaca por sus viñedos y producción vinícola. Rodeada de paisajes pintorescos, la ciudad ofrece un ambiente tranquilo y acoge una próspera cultura vitivinícola.',
      imagenInicio: imgTarija,
      tituloP: 'Saice Chapaco',
      imagenPlato: imgPlatoTarija,
      descripcionPlato: 'El Saice Chapaco: es el plato más representativo de la culinaria tarijeña. Elaborado a base de carne picada, papa, arveja, cebolla, condimentos y ají colorado. Esta preparación se la acompaña con arroz y sarsa (ensalada de tomate y cebolla).',
      descripcionLarga1:'Tarija, la región vinícola de Bolivia, se presenta como un paraíso de belleza natural y tradiciones arraigadas. La ciudad de Tarija, ubicada en un valle fértil, se distingue por su arquitectura colonial y su ambiente relajado. Rodeada de viñedos y campos, Tarija ofrece paisajes pintorescos y es reconocida por sus vinos y singanis, destilado de uva.',
      descripcionLarga2:'La gastronomía tarijeña resalta por su fusión de sabores locales y españoles. El "Saice Tarijeño" es una deliciosa combinación de carne, papas y especias. Además, la "Cuñapé" y el "Sonso" son tentadoras opciones de panadería que conquistan los paladares con su textura y sabor únicos. Tarija, con su encanto rural y oferta gastronómica excepcional, invita a descubrir la esencia acogedora del sur de Bolivia.',
    },
  ]
  const DataDepartamento3 = [
    {
      id: 1,
      nombre: 'Pando',
      descripcion: 'Pando, en Bolivia, es conocido por su exuberante selva amazónica. Caracterizado por su biodiversidad, ríos sinuosos y comunidades indígenas, Pando ofrece una experiencia única en la frontera norte del país.',
      imagenInicio: imgPandoC, 
      tituloP: 'Farofa',
      imagenPlato: imgPlatoPando,
      descripcionPlato:'Farofa: Alimento elaborado con harina de yuca con charque de res. ' ,
      descripcionLarga1:'Pando, un rincón amazónico de Bolivia, se destaca por su exuberante biodiversidad y su conexión con la naturaleza. La capital, Cobija, se encuentra rodeada de vastas selvas y ríos que caracterizan la región. Pando es conocido por ser el punto de entrada a la Reserva Nacional de Vida Silvestre Amazónica Manuripi, hogar de una variada fauna y flora.',
      descripcionLarga2:'La gastronomía en Pando refleja la influencia de la selva. Platos como el "Tacuara", preparado con carne y arroz envuelto en hojas de tacuara, y el "Majao", una mezcla de carne, arroz y plátano, destacan por su autenticidad y sabor. Pando ofrece una experiencia única donde la naturaleza y la cultura se entrelazan, invitando a explorar la riqueza de la Amazonía boliviana.',
    },
    {
      id: 2,
      nombre: 'Beni',
      descripcion: 'Beni, Bolivia, se encuentra en la región amazónica y destaca por su exuberante biodiversidad, ríos serpenteantes y vastas llanuras. Con una rica cultura indígena, ofrece experiencias únicas en la Amazonía boliviana.',
      imagenInicio: imgBeni,
      tituloP: 'Masako',
      imagenPlato: imgPlatoBeni,
      descripcionPlato: 'Masako: Plátano semi maduro, charque de res, queso y chicharrón de cuero de cerdo.',
      descripcionLarga1:'Beni es una región situada en el noreste de Bolivia, conocida por su diversidad natural y cultural. Con vastas llanuras, ríos como el Mamoré y una rica biodiversidad, alberga diversas especies de flora y fauna. Su población refleja la mezcla de culturas indígenas y mestizas, contribuyendo a una rica herencia cultural. La capital, Trinidad, es un centro urbano y cultural importante. Beni desempeña un papel vital en la economía boliviana, destacándose por la agricultura, la ganadería y la pesca. Su paisaje único y la conexión con la Amazonía hacen de Beni un destino fascinante tanto para residentes como para visitantes.',
      descripcionLarga2:'La gastronomía de Beni, región boliviana, destaca por su fusión de sabores autóctonos y mestizos. Platos emblemáticos incluyen la "majadita beniana", a base de carne de res y plátano verde, y el "patarashca", pescado envuelto en hojas de bijao y asado. La riqueza de los ríos Mamoré e Iténez contribuye a la variedad de pescados frescos en la dieta, como el dorado y el surubí. Se saborean también productos de la tierra como la yuca, el plátano y la carne de caza. Estas delicias reflejan la identidad cultural de Beni, celebrando la conexión entre su gente y su entorno natural.',
    },
    {
      id: 3,
      nombre: 'Santa Cruz',
      descripcion: 'Santa Cruz, epicentro económico de Bolivia, brilla con un clima tropical y riqueza agrícola. Con una mezcla de culturas, parques exuberantes y una escena gastronómica variada, la ciudad prospera vibrante y diversa.',
      imagenInicio: imgSantaCruz,
      tituloP: 'Majao',
      imagenPlato: imgPlatosantacruz,
      descripcionPlato: 'Majao: Elaborado con charque de res (carne seca), arroz y urucu (pimentón), acompañado de huevo estrellado y plátano frito. ',
      descripcionLarga1:'Santa Cruz, el pulmón agrícola e industrial de Bolivia, despliega una mezcla única de modernidad y tradición. La ciudad de Santa Cruz de la Sierra, centro económico y comercial, muestra un crecimiento dinámico y una infraestructura moderna. La Plaza 24 de Septiembre, rodeada de edificios históricos, es el corazón del centro urbano. Además, la región circundante alberga atractivos naturales como el Parque Nacional Amboró y la Chiquitania, rica en misiones jesuíticas.',
      descripcionLarga2:'En la gastronomía cruceña, el "Majadito" destaca como un plato emblemático, fusionando carne, arroz y especias. El "Locro" y la "Sopa de Maní" son otras exquisiteces que revelan la diversidad culinaria de la región. Santa Cruz, con su energía vibrante y sabores auténticos, ofrece una experiencia que fusiona lo moderno con la esencia cultural boliviana.',
    },
  ]

  //////////////////////Datos Usuarios////////////////////////////////////////////////////////////////
  
  
  /////Datos de Imagenes///////////////////////////////////////////////////////////////////////////////
  const dataImg = [
    imgLaPaz, imgBeni, imgCochabamba, imgOruro, imgPotosi, imgPando, imgSantaCruz, imgTarija, imgSucre
  ]
  const dataPlatos = [
    imgPlatoPaceño, imgPlatoTarija, imgPlatox, imgSalteña, imgSilpancho
  ]
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  const [cajaPerfil,setCajaPerfil] = useState(<IniciarSesionC/>);
  return (
    <Router>
      <div className='container-fluid row p-0 m-0 fondoGeneral'>
        <ScrollToTop/>


        <div className='col-xxl-2 cajaP1 border-start-0 rounded-end-2'>
          <NavegarBarra datosUsuario={usuarioActual} cajaPerfil={cajaPerfil} setCaja={setCajaPerfil}></NavegarBarra>
        </div>


        <div className='col-xxl-10 cajaP2 p-0'>
          
          <Routes>
            <Route path='/proyectofinal' element={<Menu datosImg={dataImg} departamento1={DataDepartamento1} departamento2={DataDepartamento2} departamento3={DataDepartamento3} punter={setDataDep}></Menu>}></Route>
            <Route path='/departamento' element={<Departamento dataDep={dataDep} ></Departamento>}></Route>
            <Route path='/Login' element={<Formulario data={dataUsuario} punter={setUsuarioActual} setCaja={setCajaPerfil} datosUsuario={usuarioActual}></Formulario>}></Route>
            <Route path='/Perfil' element={<Perfil></Perfil>}></Route>
            <Route path='/Usuarios' element={<Usuarios Data={dataUsuario}></Usuarios>}></Route>
            <Route
              path='/'
              element={<Navigate to='/proyectofinal' />}  // Redirige a /menu por defecto
            />

         
          </Routes>
          <Footer></Footer>
        </div>




      </div>




      
    </Router>
  );
}


export default App;
