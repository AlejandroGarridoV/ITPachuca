import { Routes } from '@angular/router';

// Páginas principales (barra de navegación)
import { Home } from './pages/home/home';
import { Etica } from './pages/nav/etica/etica';
import { Formatos } from './pages/nav/formatos/formatos';
import { Gestion } from './pages/nav/gestion/gestion';
import { Posgrado } from './pages/nav/posgrado/posgrado';
import { Publicaciones } from './pages/nav/publicaciones/publicaciones';
import { Reglamentos } from './pages/nav/reglamentos/reglamentos';

// Subpáginas de Gestión
import { Sgig } from './pages/nav/gestion/sgig/sgig';
import { SistemaGestionIntegrado } from './pages/nav/gestion/sistema-gestion-integrado/sistema-gestion-integrado';

// Oferta Educativa - Licenciaturas
import { Administracion } from './pages/ofertaeducativa/licenciaturas/administracion/administracion';
import { Arquitectura } from './pages/ofertaeducativa/licenciaturas/arquitectura/arquitectura';

// Oferta Educativa - Ingenierías
import { Civil } from './pages/ofertaeducativa/ingenierias/civil/civil';
import { DisIndustrial } from './pages/ofertaeducativa/ingenierias/dis-industrial/dis-industrial';
import { Electrica } from './pages/ofertaeducativa/ingenierias/electrica/electrica';
import { Ferroviaria } from './pages/ofertaeducativa/ingenierias/ferroviaria/ferroviaria';
import { GEmpresarial } from './pages/ofertaeducativa/ingenierias/g.empresarial/g.empresarial';
import { Industrial } from './pages/ofertaeducativa/ingenierias/industrial/industrial';
import { Itics } from './pages/ofertaeducativa/ingenierias/itics/itics';
import { Mecanica } from './pages/ofertaeducativa/ingenierias/mecanica/mecanica';
import { Quimica } from './pages/ofertaeducativa/ingenierias/quimica/quimica';
import { Sistemas } from './pages/ofertaeducativa/ingenierias/sistemas/sistemas';

// Oferta Educativa - Educación a Distancia
import { EadAdministracion } from './pages/ofertaeducativa/EduDistancia/ead-administracion/ead-administracion';
import { EadSistemas } from './pages/ofertaeducativa/EduDistancia/ead-sistemas/ead-sistemas';

// Oferta Educativa - Posgrado
import { Doctorado } from './pages/ofertaeducativa/Posgrado/doctorado/doctorado';
import { Maestria } from './pages/ofertaeducativa/Posgrado/maestria/maestria';

// Página de oferta educativa general
import { OfertaEducativa } from './pages/ofertaeducativa/oferta-educativa/oferta-educativa';

// Tecnológico
import { Campana } from './pages/tecnologico/campana/campana';
import { Escudo } from './pages/tecnologico/escudo/escudo';
import { Filosofia } from './pages/tecnologico/filosofia/filosofia';
import { Himno } from './pages/tecnologico/himno/himno';
import { Historia } from './pages/tecnologico/historia/historia';


// Departamentos
import { CentroDeComputo } from './pages/departamentos/centro-de-computo/centro-de-computo';
import { CentroDeIdiomas } from './pages/departamentos/centro-de-idiomas/centro-de-idiomas';
import { CentroDeInformacion } from './pages/departamentos/centro-de-informacion/centro-de-informacion';
import { DesarrolloAcademico } from './pages/departamentos/desarrollo-academico/desarrollo-academico';
import { EstudiosProfesionales } from './pages/departamentos/estudios-profesionales/estudios-profesionales';
import { Extraescolares } from './pages/departamentos/extraescolares/extraescolares';
import { GestionYVinculacion } from './pages/departamentos/gestion-y-vinculacion/gestion-y-vinculacion';
import { ServiciosEscolares } from './pages/departamentos/servicios-escolares/servicios-escolares';

// Gestion
import { Pea } from './pages/nav/gestion/sistema-gestion-integrado/pea/pea';
import { Pes } from './pages/nav/gestion/sistema-gestion-integrado/pes/pes';
import { Pev } from './pages/nav/gestion/sistema-gestion-integrado/pev/pev';
import { Pep } from './pages/nav/gestion/sistema-gestion-integrado/pep/pep';
import { Pee } from './pages/nav/gestion/sistema-gestion-integrado/pee/pee';
import { Pec } from './pages/nav/gestion/sistema-gestion-integrado/pec/pec';
import { Pear } from './pages/nav/gestion/sistema-gestion-integrado/pear/pear';
import { Peam } from './pages/nav/gestion/sistema-gestion-integrado/peam/peam';
import { Mc } from './pages/nav/gestion/sistema-gestion-integrado/mc/mc';
import { Dr } from './pages/nav/gestion/sistema-gestion-integrado/dr/dr';
import { DifusionSgi } from './pages/nav/gestion/sistema-gestion-integrado/difusion-sgi/difusion-sgi';
import { Siac } from './pages/ofertaeducativa/Posgrado/doctorado/siac/siac';
import { NucleoAcademico } from './pages/ofertaeducativa/Posgrado/doctorado/nucleo-academico/nucleo-academico';
import { VinculacionM } from './pages/ofertaeducativa/Posgrado/maestria/vinculacion.m/vinculacion.m';
import { SeminariosM } from './pages/ofertaeducativa/Posgrado/maestria/seminarios.m/seminarios.m';
import { NucleoAcademicoM } from './pages/ofertaeducativa/Posgrado/maestria/nucleo-academico.m/nucleo-academico.m';
import { Dvinculacion } from './pages/ofertaeducativa/Posgrado/doctorado/dvinculacion/dvinculacion';
import { Dseminarios } from './pages/ofertaeducativa/Posgrado/doctorado/dseminarios/dseminarios';
import { RepositorioTesis } from './pages/nav/posgrado/repositorio-tesis/repositorio-tesis';
import { DocumentosReferencia } from './pages/nav/posgrado/documentos-referencia/documentos-referencia';
import { TrabajosSeminarioPosgrado } from './pages/nav/posgrado/trabajos-seminario-posgrado/trabajos-seminario-posgrado';
import { Ripim } from './pages/nav/posgrado/ripim/ripim';
import { Directorio } from './pages/directorio/directorio';
import { DirectorioInstitucional } from './pages/directorio/directorio-institucional/directorio-institucional';
import { Organigrama } from './pages/directorio/organigrama/organigrama';
import { ServicioMedico } from './pages/departamentos/servicios-escolares/servicio-medico/servicio-medico';
import { SeguroFacultativo } from './pages/departamentos/servicios-escolares/seguro-facultativo/seguro-facultativo';
import { SeguroAccidentes } from './pages/departamentos/servicios-escolares/seguro-accidentes/seguro-accidentes';
import { ActoRecepcionalLicenciatura } from './pages/departamentos/servicios-escolares/acto-recepcional-licenciatura/acto-recepcional-licenciatura';
import { ActoRecepcionalMaestria } from './pages/departamentos/servicios-escolares/acto-recepcional-maestria/acto-recepcional-maestria';
import { ActoRecepcionalDoctorado } from './pages/departamentos/servicios-escolares/acto-recepcional-doctorado/acto-recepcional-doctorado';
import { CatalogoServicios } from './pages/departamentos/servicios-escolares/control_escolar/catalogo-servicios/catalogo-servicios';
import { BajaTemporal } from './pages/departamentos/servicios-escolares/control_escolar/baja-temporal/baja-temporal';
import { BajaDefinitivaSC } from './pages/departamentos/servicios-escolares/control_escolar/baja-definitiva-sc/baja-definitiva-sc';
import { BajaDefinitivaCC } from './pages/departamentos/servicios-escolares/control_escolar/baja-definitiva-cc/baja-definitiva-cc';
import { Duplicado } from './pages/departamentos/servicios-escolares/control_escolar/duplicado/duplicado';
import { CertificadoGenAnt } from './pages/departamentos/servicios-escolares/control_escolar/certificado-gen-ant/certificado-gen-ant';
import { EquivalenciaEstudios } from './pages/departamentos/servicios-escolares/control_escolar/equivalencia-estudios/equivalencia-estudios';
import { ProximosEgresar } from './pages/departamentos/servicios-escolares/control_escolar/proximos-egresar/proximos-egresar';
import { Murales } from './pages/tecnologico/murales/murales';
import { NuevoIngreso } from './pages/ofertaeducativa/nuevo-ingreso/nuevo-ingreso';
import { AvisoPrivacidad } from './componentes/footer/aviso-privacidad/aviso-privacidad';
import { CoordinacionTutorias } from './pages/departamentos/desarrollo-academico/coordinacion-tutorias/coordinacion-tutorias';
import { Becas } from './pages/becas/becas';
import { DirectorioTutores } from './pages/departamentos/desarrollo-academico/coordinacion-tutorias/directorio-tutores/directorio-tutores';
import { VideoPromocional } from './componentes/video-promocional/video-promocional';



export const routes: Routes = [
  // Barra de navegación
  { path: '', component: Home },
  { path: 'etica', component: Etica },
  { path: 'formatos', component: Formatos },
  { path: 'gestion', component: Gestion },
  { path: 'posgrado', component: Posgrado },
  { path: 'publicaciones', component: Publicaciones },
  { path: 'reglamentos', component: Reglamentos },
  { path: 'directorio', component: Directorio },
  { path: 'directorio_inst', component: DirectorioInstitucional },
  { path: 'organigrama', component: Organigrama },
  { path: 'aviso_privacidad', component: AvisoPrivacidad },
  { path: 'video_promocional', component: VideoPromocional },

  // Subpáginas de Gestión
  { path: 'sgig', component: Sgig },
  { path: 'sgi', component: SistemaGestionIntegrado },
  { path: 'pea', component: Pea },
  { path: 'pes', component: Pes },
  { path: 'pev', component: Pev },
  { path: 'pep', component: Pep },
  { path: 'pee', component: Pee },
  { path: 'pec', component: Pec },
  { path: 'pear', component: Pear },
  { path: 'peam', component: Peam },
  { path: 'mc', component: Mc },
  { path: 'dr', component: Dr },
  { path: 'difusion-sgi', component: DifusionSgi },

  // Oferta Educativa - Licenciaturas
  { path: 'nuevo_ingreso', component: NuevoIngreso },
  { path: 'administracion', component: Administracion },
  { path: 'arquitectura', component: Arquitectura },

  // Oferta Educativa - Ingenierías
  { path: 'civil', component: Civil },
  { path: 'disindustrial', component: DisIndustrial },
  { path: 'electrica', component: Electrica },
  { path: 'ferroviaria', component: Ferroviaria },
  { path: 'g.empresarial', component: GEmpresarial },
  { path: 'industrial', component: Industrial },
  { path: 'itics', component: Itics },
  { path: 'mecanica', component: Mecanica },
  { path: 'quimica', component: Quimica },
  { path: 'sistemas', component: Sistemas },

  // Oferta Educativa - Educación a Distancia
  { path: 'ead-administracion', component: EadAdministracion },
  { path: 'ead-sistemas', component: EadSistemas },

  // Oferta Educativa - Posgrado
  { path: 'doctorado', component: Doctorado },
  { path: 'maestria', component: Maestria },
  { path: 'siac', component: Siac },
  { path: 'nucleo_academico', component: NucleoAcademico },
  { path: 'vinculacion.m', component: VinculacionM },
  { path: 'seminarios.m', component: SeminariosM },
  { path: 'nucleo_academico.m', component: NucleoAcademicoM },
  { path: 'd_vinculacion', component: Dvinculacion },
  { path: 'd_seminarios', component: Dseminarios },

  // Posgrado
  { path: 'repo_institu', component: RepositorioTesis },
  { path: 'documentos_referencia', component: DocumentosReferencia },
  { path: 'T_seminario_posgrado', component: TrabajosSeminarioPosgrado },
  { path: 'ripim', component: Ripim },

  // Página de oferta educativa general
  { path: 'oferta-educativa', component: OfertaEducativa },

  // Tecnológico
  { path: 'campana', component: Campana },
  { path: 'escudo', component: Escudo },
  { path: 'filosofia', component: Filosofia },
  { path: 'himno', component: Himno },
  { path: 'historia', component: Historia },
  { path: 'murales', component: Murales },


  // Departamentos
  { path: 'centro_computo', component: CentroDeComputo },
  { path: 'centro_idiomas', component: CentroDeIdiomas },
  { path: 'centro_info', component: CentroDeInformacion },
  { path: 'desarrollo_academico', component: DesarrolloAcademico },
  { path: 'estudios_prof', component: EstudiosProfesionales },
  { path: 'extraescolares', component: Extraescolares },
  { path: 'gestion_vinculacion', component: GestionYVinculacion },
  { path: 'servicios_escolares', component: ServiciosEscolares },
  { path: 'coordinacion_tutorias', component: CoordinacionTutorias },

  // SERVICIOS ESCOLARES
  { path: 'servicio_medico', component: ServicioMedico },
  { path: 'seguro_facultativo', component: SeguroFacultativo },
  { path: 'seguro_accidentes', component: SeguroAccidentes },
  { path: 'acto_recepcion_lic', component: ActoRecepcionalLicenciatura },
  { path: 'acto_recepcion_maes', component: ActoRecepcionalMaestria },
  { path: 'acto_recepcion_doc', component: ActoRecepcionalDoctorado },
  { path: 'catalogo_servicios', component: CatalogoServicios },
  { path: 'baja_temporal', component: BajaTemporal },
  { path: 'baja_definitiva_SC', component: BajaDefinitivaSC },
  { path: 'baja_definitiva_CC', component: BajaDefinitivaCC },
  { path: 'duplicado_certificado', component: Duplicado },
  { path: 'certificado_egreso', component: CertificadoGenAnt },
  { path: 'equivalencia_estudios', component: EquivalenciaEstudios },
  { path: 'proximos_egresar', component: ProximosEgresar },
  { path: 'becas', component: Becas },
  { path: 'directorio-tutores', component: DirectorioTutores }

];
