import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from "../../../../componentes/header/header";
import { Footer } from "../../../../componentes/footer/footer";

@Component({
  selector: 'app-repositorio-tesis',
  standalone: true,
  imports: [CommonModule, FormsModule, Header, Footer],
  templateUrl: './repositorio-tesis.html',
  styleUrls: ['./repositorio-tesis.css']
})
export class RepositorioTesis {
  searchTerm = '';
  filteredTesis: any[] = [];

  tesisList = [
    {
      id: 1,
      nombre: 'Agustín Ángeles Leyva',
      matricula: '09201010',
      ingreso: 'Agosto 2021',
      titulo: 'Comportamiento mecánico de fisuras sujetas a un estado biaxial de esfuerzos en placas de Aluminio 3003',
      pdf: 'pdf/repositorio_tesis/09201010.pdf'
    },
    {
      id: 2,
      nombre: 'Abel Eslava Hernández',
      matricula: '21201047',
      ingreso: 'Agosto 2021',
      titulo: 'Efecto del agua salina en el comportamiento tribológico de materiales compuestos con fibras de vidrio, carbono y aramida',
      pdf: 'pdf/repositorio_tesis/21201047.pdf'
    },
    {
      id: 3,
      nombre: 'Eber Misraim Gómez Sandoval',
      matricula: '12200811',
      ingreso: 'Agosto 2021',
      titulo: 'Diseño de un equipo para medir coeficientes de fricción en vías ferroviarias',
      pdf: 'pdf/repositorio_tesis/12200811.pdf'
    },
    {
      id: 4,
      nombre: 'Luis Issai Govea Paz',
      matricula: '15200714',
      ingreso: 'Agosto 2021',
      titulo: 'Obtención y estudio tribológico de un recubrimiento PMMA/SiO2 reforzado con grafito aplicado en materiales compuestos',
      pdf: 'pdf/repositorio_tesis/15200714.pdf'
    },
    {
      id: 5,
      nombre: 'Jessús Edmman Hernández Ibarra',
      matricula: '21201048',
      ingreso: 'Agosto 2021',
      titulo: 'Control Pasivo de Vibraciones en Una Estructura Tipo Edificio Utilizando Múltiples Absorbedores Flexibles',
      pdf: 'pdf/repositorio_tesis/21201048.pdf'
    },
    {
      id: 6,
      nombre: 'Juan Gerardo Islas López',
      matricula: '12200745',
      ingreso: 'Agosto 2021',
      titulo: 'Modelación numérica del flujo de contaminantes en un reactor absorbedor de lecho fijo',
      pdf: 'pdf/repositorio_tesis/12200745.pdf'
    },
    {
      id: 7,
      nombre: 'Gilberto Samperio Islas',
      matricula: '88200546',
      ingreso: 'Agosto 2021',
      titulo: 'Diseño de un triciclo biplaza eléctrico para movilidad urbana',
      pdf: 'pdf/repositorio_tesis/88200546.pdf'
    },
    {
      id: 8,
      nombre: 'Benji Christopher Sánchez López',
      matricula: '21201049',
      ingreso: 'Agosto 2021',
      titulo: 'Diseño de uniones atornilladas reforzadas en silos de alta capacidad',
      pdf: 'pdf/repositorio_tesis/21201049.pdf'
    },
    {
      id: 9,
      nombre: 'Héctor Sabás Sánchez Villegas',
      matricula: '15200742',
      ingreso: 'Agosto 2021',
      titulo: 'Obtención y estudio tribológico de un recubrimiento PMMA/SiO2 reforzado con grafito aplicado en materiales compuestos',
      pdf: 'pdf/repositorio_tesis/15200742.pdf'
    },
    {
      id: 10,
      nombre: 'Jafet Neftalí Cabrera Cruz',
      matricula: '13200419',
      ingreso: 'Agosto 2020',
      titulo: 'Diseño y modelación de un sistema de hvac para obtener la eficiencia energética en un edificio de uso académico',
      pdf: 'pdf/repositorio_tesis/13200419.pdf'
    },
    {
      id: 11,
      nombre: 'Jorge Aarón Castillo Hernández',
      matricula: '20200439',
      ingreso: 'Agosto 2020',
      titulo: 'Caracterización microestructural e identificación de las propiedades mecánicas de materiales compuestos fabricados por infusión al vacío',
      pdf: 'pdf/repositorio_tesis/20200439.pdf'
    },
    {
      id: 12,
      nombre: 'Isaac Godínez Gil',
      matricula: '13200669',
      ingreso: 'Agosto 2020',
      titulo: 'Diseño y fabricación de una plataforma dinámica para la evaluación de materiales aplicados en palas de generadores eólicos',
      pdf: 'pdf/repositorio_tesis/13200669.pdf'
    },
    {
      id: 13,
      nombre: 'José Luis Gómez Color',
      matricula: '13200435',
      ingreso: 'Agosto 2020',
      titulo: 'Cuadrupolo electromagnético para la caracterización de materiales inteligentes',
      pdf: 'pdf/repositorio_tesis/13200435.pdf'
    },
    {
      id: 14,
      nombre: 'Diego Alejandro Hernández Hernández',
      matricula: '12200185',
      ingreso: 'Agosto 2020',
      titulo: 'Influencia del efecto de Mullins en la disipación de energía mecánica en elastómeros magnetorreológicos',
      pdf: 'pdf/repositorio_tesis/12200185.pdf'
    },
    {
      id: 15,
      nombre: 'José Miguel Herrera Tapia',
      matricula: '20200440',
      ingreso: 'Agosto 2020',
      titulo: 'Diseño de un simulador para evaluar prótesis de rodilla',
      pdf: 'pdf/repositorio_tesis/20200440.pdf'
    },
    {
      id: 16,
      nombre: 'Daniel Marroquín Olvera',
      matricula: '08200924',
      ingreso: 'Agosto 2020',
      titulo: 'Diseño de transmisión de dos velocidades manual, para agricultor',
      pdf: 'pdf/repositorio_tesis/08200924.pdf'
    },
    {
      id: 17,
      nombre: 'Luis Antonio Martínez Butrón',
      matricula: '14200675',
      ingreso: 'Agosto 2020',
      titulo: 'Desarrollo de máquina para ensayos de abrasión bajo la norma ASTM G65',
      pdf: 'pdf/repositorio_tesis/14200675.pdf'
    },
    {
      id: 18,
      nombre: 'Marco Antonio Ortíz Armenta',
      matricula: '05200507',
      ingreso: 'Agosto 2020',
      titulo: 'Desarrollo de tribómetro para pruebas de desgaste con movimiento lineal reciprocante',
      pdf: 'pdf/repositorio_tesis/05200507.pdf'
    },
    {
      id: 19,
      nombre: 'Luis Jesús Ramírez Rodríguez',
      matricula: '14200689',
      ingreso: 'Agosto 2020',
      titulo: 'Determinación experimental y numérica de la capacidad de choque en componentes automotrices',
      pdf: 'pdf/repositorio_tesis/14200689.pdf'
    },
    {
      id: 20,
      nombre: 'Flor Citlaly Reyes Ríos',
      matricula: '20200441',
      ingreso: 'Agosto 2020',
      titulo: 'Caracterización del deterioro del recubrimiento superficial e interno de álabes huecos de una turbina de gas terrestre',
      pdf: 'pdf/repositorio_tesis/20200441.pdf'
    },
    {
      id: 21,
      nombre: 'Edwin Rodríguez Hernández',
      matricula: '12200843',
      ingreso: 'Agosto 2020',
      titulo: 'Diseño y construcción de un absorbedor no lineal para el control semi-activo de vibraciones',
      pdf: 'pdf/repositorio_tesis/12200843.pdf'
    },
    {
      id: 22,
      nombre: 'Norma Angélica Sánchez Calva',
      matricula: '20200442',
      ingreso: 'Agosto 2020',
      titulo: 'Estudio de las propiedades tribológicas de nanopartículas de Al2O3 para su aplicación como aditivos en lubricantes',
      pdf: 'pdf/repositorio_tesis/20200442.pdf'
    },
    {
      id: 23,
      nombre: 'Néstor Flores Morita',
      matricula: '75200366',
      ingreso: 'Agosto 2019',
      titulo: 'Diseño e implementación de un absorbedor flexible para el control pasivo de vibraciones en una estructura tipo edificio',
      pdf: 'pdf/repositorio_tesis/75200366.pdf'
    },
    {
      id: 24,
      nombre: 'Marcos Isaac Hernández Ortega',
      matricula: '19201344',
      ingreso: 'Agosto 2019',
      titulo: 'Analisis numérico y experimental de la aerodinámica de un aerogenerador de baja potencia',
      pdf: 'pdf/repositorio_tesis/19201344.pdf'
    },
    {
      id: 25,
      nombre: 'Miguel Ángel López López',
      matricula: '96200133',
      ingreso: 'Agosto 2019',
      titulo: 'Desarrollo de sistema hidromecánico para limpieza interior de pozos petroleros',
      pdf: 'pdf/repositorio_tesis/96200133.pdf'
    },
    {
      id: 26,
      nombre: 'Juan Carlos Marín Soriano',
      matricula: '19201345',
      ingreso: 'Agosto 2019',
      titulo: 'Instrumentación de un banco de pruebas para análisis de vibraciones en un sistema rotor-chumacera',
      pdf: 'pdf/repositorio_tesis/19201345.pdf'
    },
    {
      id: 27,
      nombre: 'Ixchel Monroy Sánchez',
      matricula: '19201346',
      ingreso: 'Agosto 2019',
      titulo: 'Análisis de la integridad estructural y caracterización dinámica del álabe propulsor en un turbo-ventilador aeronáutico',
      pdf: 'pdf/repositorio_tesis/19201346.pdf'
    },
    {
      id: 28,
      nombre: 'Luis Gabriel Ñonthé Chávez',
      matricula: '19201347',
      ingreso: 'Agosto 2019',
      titulo: 'Diseño y valoración exergética de una estufa solar de alta eficiencia',
      pdf: 'pdf/repositorio_tesis/19201347.pdf'
    },
    {
      id: 29,
      nombre: 'Emmanuel Reséndiz Sosa',
      matricula: '19201348',
      ingreso: 'Agosto 2019',
      titulo: 'Diseño de un banco de pruebas para prótesis de cadera',
      pdf: 'pdf/repositorio_tesis/19201348.pdf'
    },
    {
      id: 30,
      nombre: 'José Luis Reyes Hernández',
      matricula: '19201352',
      ingreso: 'Agosto 2019',
      titulo: 'Síntesis y aplicación de un recubrimiento híbrido para reducir desgaste en palas de generadores eólicos',
      pdf: 'pdf/repositorio_tesis/19201352.pdf'
    },
    {
      id: 31,
      nombre: 'Esaú Moisés Rodríguez Vigueras',
      matricula: '12200846',
      ingreso: 'Agosto 2019',
      titulo: 'Modelo de orden fraccional para describir la respuesta viscoelástica de materiales compuestos',
      pdf: 'pdf/repositorio_tesis/12200846.pdf'
    },
    {
      id: 32,
      nombre: 'Javier Roldán Cruz',
      matricula: '19201349',
      ingreso: 'Agosto 2019',
      titulo: 'Métodos de solución analítica de la ecuación de la lubricación Reynolds para chumaceras finitas',
      pdf: 'pdf/repositorio_tesis/19201349.pdf'
    },
    {
      id: 33,
      nombre: 'Samuel Ruíz Avilés',
      matricula: '19201350',
      ingreso: 'Agosto 2019',
      titulo: 'Diseño de un vehículo biplaza impulsado por fuerza motriz humana',
      pdf: 'pdf/repositorio_tesis/19201350.pdf'
    },
    {
      id: 34,
      nombre: 'Adanel Albino Alamilla Ramírez',
      matricula: '08200563',
      ingreso: 'Agosto 2018',
      titulo: 'Comportamiento mecánico de las uniones estructurales en una carrocería de autobús mecano-soldada',
      pdf: 'pdf/repositorio_tesis/08200563.pdf'
    },
    {
      id: 35,
      nombre: 'Alma Guadalupe Camargo Muciño',
      matricula: '18201237',
      ingreso: 'Agosto 2018',
      titulo: 'Caracterización mecánica de materiales compuestos Kevlar-Base, Kevlar-Carbón y Kevlar-Vidrio',
      pdf: 'pdf/repositorio_tesis/18201237.pdf'
    },
    {
      id: 36,
      nombre: 'Eddy León Ramírez',
      matricula: '18201238',
      ingreso: 'Agosto 2018',
      titulo: 'Diseño y modelado de mecanismo para el aprovechamiento de la energía undimotriz en méxico',
      pdf: 'pdf/repositorio_tesis/18201238.pdf'
    },
    {
      id: 37,
      nombre: 'José Arturo Moctezuma Camargo',
      matricula: '18201243',
      ingreso: 'Agosto 2018',
      titulo: 'Evolución del intensificador de esfuerzos en fisuras sujetas a condiciones de carga biaxial',
      pdf: 'pdf/repositorio_tesis/18201243.pdf'
    },
    {
      id: 38,
      nombre: 'Fabián Sánchez Naranjo',
      matricula: '13200817',
      ingreso: 'Agosto 2018',
      titulo: 'Propiedades dinámicas de una chumacera hidrodinámica mediante la técnica de movilidad',
      pdf: 'pdf/repositorio_tesis/13200817.pdf'
    },
    {
      id: 39,
      nombre: 'Daniel Agustín Sánchez Ramos',
      matricula: '18201245',
      ingreso: 'Agosto 2018',
      titulo: 'Diseño y construcción del sistema de lubricación para una máquina tribológica',
      pdf: 'pdf/repositorio_tesis/18201245.pdf'
    },
    {
      id: 40,
      nombre: 'Canto Escajadillo Fernando Oswaldo',
      matricula: '17201168',
      ingreso: 'Agosto 2017',
      titulo: 'Evolución de la presión y temperatura en un álabe enfriado por aire durante el arranque de la turbina FT-4C1',
      pdf: 'pdf/repositorio_tesis/17201168.pdf'
    },
    {
      id: 41,
      nombre: 'Islas Ortíz Óscar',
      matricula: '17201169',
      ingreso: 'Agosto 2017',
      titulo: 'Diseño y construcción de un recuperador de calor de desecho para un compresor de la empresa Cajaplax utilizando tubo termosifón bifásico',
      pdf: 'pdf/repositorio_tesis/17201169.pdf'
    },
    {
      id: 42,
      nombre: 'Juárez Plata Allin Yareli',
      matricula: '06200410',
      ingreso: 'Agosto 2017',
      titulo: 'Diseño de un sistema de climatización para invernaderos utilizando energía solar',
      pdf: 'pdf/repositorio_tesis/06200410.pdf'
    },
    {
      id: 43,
      nombre: 'Mendoza Mendoza Jesús Cornelio',
      matricula: '09201014',
      ingreso: 'Agosto 2017',
      titulo: 'Estudio experimental del desgaste erosivo en materiales compuestos de fibra de carbono y fibra de vidrio',
      pdf: 'pdf/repositorio_tesis/09201014.pdf'
    },
    {
      id: 44,
      nombre: 'Ramírez Martínez Andrés',
      matricula: '17201171',
      ingreso: 'Agosto 2017',
      titulo: 'Diseño de álabes, rotor y transmisión de un generador eólico de eje horizontal de 500W',
      pdf: 'pdf/repositorio_tesis/17201171.pdf'
    },
    {
      id: 45,
      nombre: 'Torres Suárez Francisco Emmanuel',
      matricula: '17201172',
      ingreso: 'Agosto 2017',
      titulo: 'Diseño de una plataforma para un helicóptero de 3 grados de libertad, control y simulación',
      pdf: 'pdf/repositorio_tesis/17201172.pdf'
    },
    {
      id: 46,
      nombre: 'Valdez Sierra Jonnatan',
      matricula: '09201041',
      ingreso: 'Agosto 2017',
      titulo: 'Caracterización dinámica de un soporte con multi-recesos. Análisis de estabilidad',
      pdf: 'pdf/repositorio_tesis/09201041.pdf'
    },
    {
      id: 47,
      nombre: 'Caballero López José Luis',
      matricula: '16201097',
      ingreso: 'Agosto 2016',
      titulo: 'Análisis aerodinámico sobre la pala de un aerogenerador eólico de eje horizontal de 2 MW de potencia',
      pdf: 'pdf/repositorio_tesis/16201097.pdf'
    },
    {
      id: 48,
      nombre: 'García Aguilar César Octavio',
      matricula: '06200389',
      ingreso: 'Agosto 2016',
      titulo: 'Análisis dinámico para determinar la velocidad de volcadura de un vehículo transportador de productos lácteos',
      pdf: 'pdf/repositorio_tesis/06200389.pdf'
    },
    {
      id: 49,
      nombre: 'Gómez Gauna Néstor Iván',
      matricula: '06200701',
      ingreso: 'Agosto 2017',
      titulo: 'Obtención de las condiciones térmicas durante la operación del álabe de la primera etapa de la turbina de gas GE 7FA',
      pdf: 'pdf/repositorio_tesis/06200701.pdf'
    },
    {
      id: 50,
      nombre: 'Pérez Hernández Gilberto',
      matricula: '16201100',
      ingreso: 'Agosto 2016',
      titulo: 'Diseño y análisis de muelle parabólico para un eje trasero de un camión unitario C2',
      pdf: 'pdf/repositorio_tesis/16201100.pdf'
    },
    {
      id: 51,
      nombre: 'Reséndiz Hernández José Emiliano',
      matricula: '10201130',
      ingreso: 'Agosto 2016',
      titulo: 'Medición experimental del factor de intensidad de esfuerzo en placas agrietadas utilizando la correlación digital de imágenes',
      pdf: 'pdf/repositorio_tesis/10201130.pdf'
    },
    {
      id: 52,
      nombre: 'Sánchez Trejo Juan Saúl',
      matricula: '4200691',
      ingreso: 'Agosto 2016',
      titulo: 'Analisis de un generador de película descendente de un sistema de refrigeración por absorción',
      pdf: 'pdf/repositorio_tesis/4200691.pdf'
    },
    {
      id: 53,
      nombre: 'Serrano Serrano Arturo',
      matricula: '81200774',
      ingreso: 'Agosto 2016',
      titulo: 'Análisis por sobrecalentamiento de la biela de un motor de combustión interna encendido por chispa',
      pdf: 'pdf/repositorio_tesis/81200774.pdf'
    },
    {
      id: 54,
      nombre: 'Juárez Cruz Abigail',
      matricula: '09200266',
      ingreso: 'Agosto 2015',
      titulo: 'Caracterización y eficiencia termoeléctrica de la aleación PbSnSe2 obtenida mediante molienda de alta energía',
      pdf: 'pdf/repositorio_tesis/09200266.pdf'
    },
    {
      id: 55,
      nombre: 'Cuevas Hernández José Luis',
      matricula: '15201013',
      ingreso: 'Agosto 2015',
      titulo: 'Influencia de los esfuerzos residuales en la morfología del crecimiento de grieta por fatiga en AL6061-T6',
      pdf: 'pdf/repositorio_tesis/15201013.pdf'
    },
    {
      id: 56,
      nombre: 'Hernández Butanda Alfonso de Jesús',
      matricula: '06200734',
      ingreso: 'Agosto 2015',
      titulo: 'Reducción del efecto de desentonamiento en el sistema disco-álabes de una turbina de gas',
      pdf: 'pdf/repositorio_tesis/06200734.pdf'
    },
    {
      id: 57,
      nombre: 'Ángeles Morelos Alexis Nohemí',
      matricula: '08200498',
      ingreso: 'Agosto 2015',
      titulo: 'Diseño de un intercambiador de calor compacto utilizando tubos termosifones bifásicos',
      pdf: 'pdf/repositorio_tesis/08200498.pdf'
    },
    {
      id: 58,
      nombre: 'Pérez Calva Eduardo',
      matricula: '15201018',
      ingreso: 'Agosto 2015',
      titulo: 'Análisis termohidraulico de bobinas en capas para transformadores eléctricos de distribución',
      pdf: 'pdf/repositorio_tesis/15201018.pdf'
    },
    {
      id: 59,
      nombre: 'Hernández García Juan Abdel',
      matricula: '08200463',
      ingreso: 'Agosto 2015',
      titulo: 'Análisis termodinámico e hidráulico en radiadores tubulares por convección natural para un transformador',
      pdf: 'pdf/repositorio_tesis/08200463.pdf'
    },
    {
      id: 60,
      nombre: 'Jaramillo Monroy Jesús Eduardo',
      matricula: '15201015',
      ingreso: 'Agosto 2015',
      titulo: 'Calculo numérico-analítico del campo de presión en chumaceras finitas',
      pdf: 'pdf/repositorio_tesis/15201015.pdf'
    },
    {
      id: 61,
      nombre: 'Dávalos Beltrán José Juan',
      matricula: '15201014',
      ingreso: 'Agosto 2015',
      titulo: 'Análisis de la distorsión de un elemento estructural soldado mediante el proceso GMAW',
      pdf: 'pdf/repositorio_tesis/15201014.pdf'
    },
    {
      id: 62,
      nombre: 'Cano Tejeda Alexis Iván',
      matricula: '15201011',
      ingreso: 'Agosto 2015',
      titulo: 'Obtención de campos de presión medios de una chumacera hidrodinámica corta, con puertos de presurización',
      pdf: 'pdf/repositorio_tesis/15201011.pdf'
    },
    {
      id: 63,
      nombre: 'Mendoza Cerón Nuria Nelly',
      matricula: '15201017',
      ingreso: 'Agosto 2015',
      titulo: 'Diseño de un generador eólico de eje vertical tipo Darrieus helicoidal de 3 kW',
      pdf: 'pdf/repositorio_tesis/15201017.pdf'
    },
    {
      id: 64,
      nombre: 'Camacho Ramírez Aldo Antonio',
      matricula: '15201010',
      ingreso: 'Agosto 2015',
      titulo: 'Análisis de estabilidad no lineal de un eje fisurado',
      pdf: 'pdf/repositorio_tesis/15201010.pdf'
    },
    {
      id: 65,
      nombre: 'Cueto Rodríguez María Magdalena',
      matricula: '15201012',
      ingreso: 'Agosto 2015',
      titulo: 'Análisis numérico y experimental del cambio microestructural de un Inconel 792 empleado en turbinas de gas y su efecto en las propiedades mecánicas',
      pdf: 'pdf/repositorio_tesis/15201012.pdf'
    },
    {
      id: 66,
      nombre: 'Durán Del Razo Moisés',
      matricula: '09201066',
      ingreso: 'Agosto 2014',
      titulo: 'Análisis de falla del cigüeñal de un motor MWM-Acteon 4.12 TCE',
      pdf: 'pdf/repositorio_tesis/09201066.pdf'
    },
    {
      id: 67,
      nombre: 'Felipe García Giovanny',
      matricula: '14200860',
      ingreso: 'Agosto 2014',
      titulo: 'Diseño y fabricación de un prototipo extractor de aceite de la semilla de higuerilla para producción de biodiesel',
      pdf: 'pdf/repositorio_tesis/14200860.pdf'
    },
    {
      id: 68,
      nombre: 'Godínez Cardoza Germán',
      matricula: '14200858',
      ingreso: 'Agosto 2014',
      titulo: 'Diseño de un dispositivo microfluídico de bajo costo, para la separación de microorganismos y células de interés médico y biotecnológico de tamaño entre 10 a 100 micrómetros',
      pdf: 'pdf/repositorio_tesis/14200858.pdf'
    },
    {
      id: 69,
      nombre: 'Ibargüengoitia Rentería Ignacio del Sagrado Corazón de Jesús',
      matricula: '14200859',
      ingreso: 'Agosto 2014',
      titulo: 'Diseño de un horno de tambor giratorio',
      pdf: 'pdf/repositorio_tesis/14200859.pdf'
    },
    {
      id: 70,
      nombre: 'Jiménez Islas Isamar',
      matricula: '08200863',
      ingreso: 'Agosto 2014',
      titulo: 'Estudio teórico-experimental para la optimización de un horno para producir ladrillos',
      pdf: 'pdf/repositorio_tesis/08200863.pdf'
    },
    {
      id: 71,
      nombre: 'Martínez Jardón Juan Carlos',
      matricula: '07200792',
      ingreso: 'Agosto 2014',
      titulo: 'Diseño de un sistema de recuperación de calor residual para generación de energía eléctrica',
      pdf: 'pdf/repositorio_tesis/07200792.pdf'
    },
    {
      id: 72,
      nombre: 'Morales Estevez Saúl',
      matricula: '06200884',
      ingreso: 'Agosto 2014',
      titulo: 'Diseño y construcción de un impulsor para generador eléctrico sumergible',
      pdf: 'pdf/repositorio_tesis/06200884.pdf'
    },
    {
      id: 73,
      nombre: 'Santillán Escamilla Sergio Paulino',
      matricula: '14200861',
      ingreso: 'Agosto 2014',
      titulo: 'Producción de Biocombustibles a partir de microalgas: diseño de un fotobiorreactor',
      pdf: 'pdf/repositorio_tesis/14200861.pdf'
    },
    {
      id: 74,
      nombre: 'Santillán Moreno Luis Alfonso',
      matricula: '90200132',
      ingreso: 'Agosto 2014',
      titulo: 'Estudio analítico del ahorro de energía térmica utilizando tubos termosifones bifásicos',
      pdf: 'pdf/repositorio_tesis/90200132.pdf'
    },
    {
      id: 75,
      nombre: 'Valencia Díaz Juan Javier',
      matricula: '14200862',
      ingreso: 'Agosto 2014',
      titulo: 'Cálculo de la variación del factor de intensidad de esfuerzos durante la operación de rotores con fisuras de frente elíptico',
      pdf: 'pdf/repositorio_tesis/14200862.pdf'
    },
    {
      id: 76,
      nombre: 'Aila Ortiz Alejandro',
      matricula: '98200571',
      ingreso: 'Agosto 2013',
      titulo: 'Caracterización y modelación termodinámica de un turbocompresor mediante CFD',
      pdf: 'pdf/repositorio_tesis/98200571.pdf'
    },
    {
      id: 77,
      nombre: 'Castro López Linda Verónica',
      matricula: '08200461',
      ingreso: 'Agosto 2013',
      titulo: 'Análisis Rotodinámico de una Turbina de Vapor Coppus tipo TF-12',
      pdf: 'pdf/repositorio_tesis/08200461.pdf'
    },
    {
      id: 78,
      nombre: 'Cruz Velázquez Víctor Hugo',
      matricula: '13200928',
      ingreso: 'Agosto 2013',
      titulo: 'Análisis de falla del cigüeñal de un motor MWM-Acteon 4.12 TCE',
      pdf: 'pdf/repositorio_tesis/13200928.pdf'
    },
    {
      id: 79,
      nombre: 'Flores Moreno Julián',
      matricula: '79200620',
      ingreso: 'Agosto 2013',
      titulo: 'Estudio comparativo de eficiencias térmicas en colectores solares cilindro parabólico utilizando diferentes sustancias de trabajo',
      pdf: 'pdf/repositorio_tesis/79200620.pdf'
    },
    {
      id: 80,
      nombre: 'Piñón García Óscar',
      matricula: '13200932',
      ingreso: 'Agosto 2013',
      titulo: 'Calentamiento en paredes y estructuras metálicas en transformadores eléctricos de potencia',
      pdf: 'pdf/repositorio_tesis/13200932.pdf'
    },
    {
      id: 81,
      nombre: 'Sánchez Santillán Camilo Joel',
      matricula: '96200381',
      ingreso: 'Agosto 2013',
      titulo: 'Diseño de componentes de un trasformador bajo condiciones sísmicas',
      pdf: 'pdf/repositorio_tesis/96200381.pdf'
    },
    {
      id: 82,
      nombre: 'Vargas Ledezma Javier',
      matricula: '95200391',
      ingreso: 'Agosto 2013',
      titulo: 'Optimización de tubería de concreto pretensado con cilindro de acero diámetro 1220mm (48"), a 3.75 MPa (37.5 kg/cm2)',
      pdf: 'pdf/repositorio_tesis/95200391.pdf'
    },
    {
      id: 83,
      nombre: 'Vera González Cesáreo',
      matricula: '13200930',
      ingreso: 'Agosto 2013',
      titulo: 'Variación de la presión en la cámara de combustión de un mci con respecto de la posición angular del cigüeñal',
      pdf: 'pdf/repositorio_tesis/13200930.pdf'
    },
    {
      id: 84,
      nombre: 'Yáñez Sánchez Rafael',
      matricula: '13200933',
      ingreso: 'Agosto 2013',
      titulo: 'Evaluación de aditivos para motores de combustión interna',
      pdf: 'pdf/repositorio_tesis/13200933.pdf'
    },
    {
      id: 85,
      nombre: 'Zausa Ávila Gerardo',
      matricula: '92200684',
      ingreso: 'Agosto 2013',
      titulo: 'Diseño de un aerogenerador de tipo doméstico',
      pdf: 'pdf/repositorio_tesis/92200684.pdf'
    },
    {
      id: 86,
      nombre: 'Amador Cerda José Antonio',
      matricula: '12200996',
      ingreso: 'Agosto 2012',
      titulo: 'Banco de pruebas para medir magnitudes Físicas en el Laboratorio de Física y Mecánica',
      pdf: 'pdf/repositorio_tesis/12200996.pdf'
    },
    {
      id: 87,
      nombre: 'Guzman Nogales Rigoberto',
      matricula: '07200401',
      ingreso: 'Agosto 2012',
      titulo: 'Metodología para la obtención del factor de intensidad de esfuerzos durante la operación de ejes fisurados',
      pdf: 'pdf/repositorio_tesis/07200401.pdf'
    },
    {
      id: 88,
      nombre: 'Trejo Lorenzo Claudia',
      matricula: '12200995',
      ingreso: 'Agosto 2012',
      titulo: 'Diseño de una casa energéticamente sustentable',
      pdf: 'pdf/repositorio_tesis/12200995.pdf'
    },
    {
      id: 89,
      nombre: 'Bravo Vargas Salvador',
      matricula: '11200970',
      ingreso: 'Agosto 2011',
      titulo: 'Localización de la fibra neutra en el proceso de doblado de un acero',
      pdf: 'pdf/repositorio_tesis/11200970.pdf'
    },
        {
      id: 90,
      nombre: 'Corro Hernández Humberto',
      matricula: '11200966',
      ingreso: 'Agosto 2011',
      titulo: 'Respuesta vibratoria de un rotor desbalanceado con eje flexible soportado por chumaceras cortas hidrodinámicas con excitación',
      pdf: 'pdf/repositorio_tesis/11200966.pdf'
    },
    
    {
      id: 91,
      nombre: 'De la Rosa Gutiérrez Carlos',
      matricula: '11200967',
      ingreso: 'Agosto 2011',
      titulo: 'Modelación y determinación de las posiciones de equilibrio de un soporte hidrodinámico excitado',
      pdf: 'pdf/repositorio_tesis/11200967.pdf'
    },
    {
      id: 92,
      nombre: 'Gutierrez Muñoz Alejandro',
      matricula: '11200971',
      ingreso: 'Agosto 2011',
      titulo: 'Diseño de un túnel aerodinámico para la calibración de instrumentos de medición',
      pdf: 'pdf/repositorio_tesis/11200971.pdf'
    },
    {
      id: 93,
      nombre: 'Lozano Rodríguez Julio César',
      matricula: '11200969',
      ingreso: 'Agosto 2011',
      titulo: 'Efecto de la descomposición espinodal sobre el comportamiento mecánico de aleaciones base CU-NI',
      pdf: 'pdf/repositorio_tesis/11200969.pdf'
    },
    {
      id: 94,
      nombre: 'Álvarez Quezada Miguel Antonio',
      matricula: '10201267',
      ingreso: 'Agosto 2010',
      titulo: 'Cálculo de los coeficientes rotodinámicos de chumaceras hidrodinámicas por medio de los gradientes del campo de presión',
      pdf: 'pdf/repositorio_tesis/10201267.pdf'
    },
    {
      id: 95,
      nombre: 'García Guerrero Eduardo',
      matricula: '05200062',
      ingreso: 'Agosto 2010',
      titulo: '',
      pdf: 'pdf/repositorio_tesis/05200062.pdf'
    },
    {
      id: 96,
      nombre: 'Manilla García Abraham',
      matricula: '04200531',
      ingreso: 'Agosto 2010',
      titulo: 'Análisis de estabilidad de un eje fisurado',
      pdf: 'pdf/repositorio_tesis/04200531.pdf'
    },
    {
      id: 97,
      nombre: 'Méndez Reyes J. Eliecer',
      matricula: '05200277',
      ingreso: 'Agosto 2010',
      titulo: 'Análisis termodinámico de la eficiencia de un intercambiador de calor compacto, utilizando CFD',
      pdf: 'pdf/repositorio_tesis/05200277.pdf'
    },
    {
      id: 98,
      nombre: 'Aguilar Flores Nicolas Rafael',
      matricula: '87200214',
      ingreso: 'Agosto 2009',
      titulo: 'Diseño y construcción de un colector solar para generación de energía eléctrica',
      pdf: 'pdf/repositorio_tesis/87200214.pdf'
    },
    {
      id: 99,
      nombre: 'Cuevas Roldán Juan Luis',
      matricula: '200693',
      ingreso: 'Agosto 2009',
      titulo: '',
      pdf: 'pdf/repositorio_tesis/200693.pdf'
    },
    {
      id: 100,
      nombre: 'Espitia Islas Jorge Ernesto',
      matricula: '02200359',
      ingreso: 'Agosto 2009',
      titulo: 'Determinación de las cargas que producen el colapso plástico en juntas de corte simple en tuberías de alta presión sometidas a cargas dentro y fuera de plano',
      pdf: 'pdf/repositorio_tesis/02200359.pdf'
    },
    {
      id: 101,
      nombre: 'Gutiérrez Suárez Oliver',
      matricula: '01200196',
      ingreso: 'Agosto 2009',
      titulo: 'Caracterización dinámica de un álabe enfriando con aire de la Primera etapa de turbina de gas',
      pdf: 'pdf/repositorio_tesis/01200196.pdf'
    },
    {
      id: 102,
      nombre: 'López Grijalba Yunuen',
      matricula: '05200271',
      ingreso: 'Agosto 2009',
      titulo: 'Determinación de las fuerzas inducidas por el flujo que actúan sobre el álabe móvil de la primera etapa de la turbina FT-4C11',
      pdf: 'pdf/repositorio_tesis/05200271.pdf'
    }
    // Puedes agregar más tesis aquí si es necesario
  ];

  constructor() {
    this.filteredTesis = [...this.tesisList];
  }

  filterTesis() {
    if (!this.searchTerm) {
      this.filteredTesis = [...this.tesisList];
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filteredTesis = this.tesisList.filter(tesis => 
      tesis.nombre.toLowerCase().includes(term) ||
      tesis.matricula.toLowerCase().includes(term) ||
      tesis.titulo.toLowerCase().includes(term)
    );
  }

  highlightRow(index: number) {
    const row = document.getElementById(`tesis-row-${index}`);
    if (row) {
      row.classList.add('highlight-row');
      setTimeout(() => {
        row.classList.remove('highlight-row');
      }, 1500);
    }
  }

  onSearch() {
    this.filterTesis();
    if (this.filteredTesis.length > 0) {
      this.highlightRow(0);
    }
  }
}