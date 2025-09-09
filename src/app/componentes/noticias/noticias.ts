import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  standalone: true,
  templateUrl: './noticias.html',
  styleUrls: ['./noticias.css']
})
export class Noticias implements AfterViewInit {

  ngAfterViewInit(): void {
    const buttons = document.querySelectorAll('.institucional-news-card-button');
    const viewer = document.getElementById('pdf-viewer') as HTMLElement;
    const iframe = viewer.querySelector('iframe') as HTMLIFrameElement;
    const closeBtn = viewer.querySelector('.pdf-viewer-close') as HTMLButtonElement;
    const errorMessage = viewer.querySelector('.pdf-viewer-error-message') as HTMLElement;
    const retryBtn = viewer.querySelector('.pdf-viewer-retry') as HTMLButtonElement;
    const noticiasGrid = document.querySelector('.institucional-news-grid') as HTMLElement;
    const emptyMessage = document.querySelector('.institucional-news-empty-message') as HTMLElement;

    // Función para cerrar el visor
    const closeViewer = () => {
      viewer.classList.remove('active');
      iframe.src = '';
      errorMessage.style.display = 'none';
    };

    // Función para mostrar error
    const showError = () => {
      iframe.style.display = 'none';
      errorMessage.style.display = 'flex';
    };

    // Configurar el iframe para detectar errores
    iframe.onerror = showError;
    iframe.onload = () => {
      // Verificar si el PDF se cargó correctamente
      try {
        if (iframe.contentDocument?.body?.innerText.includes('Error')) {
          showError();
        }
      } catch (e) {
        showError();
      }
    };

    // Abrir PDF al hacer click en botón
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const pdfUrl = button.getAttribute('data-pdf');
        if (iframe && pdfUrl) {
          iframe.style.display = 'block';
          errorMessage.style.display = 'none';
          iframe.src = pdfUrl;
          viewer.classList.add('active');
        }
      });
    });

    // Reintentar carga del PDF
    retryBtn.addEventListener('click', () => {
      if (iframe.src) {
        iframe.style.display = 'block';
        errorMessage.style.display = 'none';
        iframe.src = iframe.src; // Recargar
      }
    });

    // Cerrar visor con botón
    closeBtn.addEventListener('click', closeViewer);

    // Cerrar visor al hacer click fuera del contenido
    viewer.addEventListener('click', (event) => {
      if (event.target === viewer) {
        closeViewer();
      }
    });

    // Mostrar mensaje si no hay noticias
    if (!noticiasGrid || noticiasGrid.children.length === 0) {
      if (emptyMessage) emptyMessage.style.display = 'block';
      if (noticiasGrid) noticiasGrid.style.display = 'none';
    } else {
      if (emptyMessage) emptyMessage.style.display = 'none';
      if (noticiasGrid) noticiasGrid.style.display = 'grid';
    }
  }
}