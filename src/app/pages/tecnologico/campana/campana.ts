import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campana',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './campana.html',
  styleUrls: ['./campana.css']
})
export class Campana {
  protocolos = [
    {
      titulo: 'Para los Alumnos',
      descripcion: 'Como corolario del Examen Recepcional, después de haber sido aprobado.',
      especificaciones: [
        'Una vez que el jurado ha notificado al sustentante del examen profesional o equivalente haber aprobado y firmado los documentos respectivos, el presidente comunicará al sustentante el siguiente mensaje:',
        'El tañido de la Campana deberá consistir en tres repiques dobles'
      ],
      mensaje: 'En mi calidad de presidente del jurado, tengo la encomienda del Instituto Tecnológico de Pachuca, de informar qué por haber obtenido el gradó académico, le corresponde el derecho de tocar la Campana de la Identidad Institucional, acto simbólico de su iniciación como profesional de una vida productiva. (El tañido de la Campana, deberá consistir en tres repiques dobles, aspecto que el sustentante deberá estar previamente informado.)'
    },
    {
      titulo: 'Para los Trabajadores de la Educación',
      descripcion: 'Al alcanzar la jubilación, en la ceremonia de su último día de labores.',
      especificaciones: [
        'Cuando el trabajador ha cubierto los trámites legales de su jubilación y ésta se le ha concedido, se programará en su último día de labores una ceremonia especial, en la que le corresponderá el derecho de tocar la Campana de la Identidad Institucional, acto simbólico de la separación de sus labores institucionales.',
        'El tañido de la Campana, deberá consistir en tres repiques triples, aspecto que el Trabajador de la Educación, deberá estar previamente informado.'
      ]
    }
  ];

  fechaProtocolo = '21 de septiembre de 2004';
  aniversario = 'XXXIII Aniversario';
}