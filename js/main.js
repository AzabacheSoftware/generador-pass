// main.js

// Verificar si el evento beforeinstallprompt está disponible
if ('onbeforeinstallprompt' in window) {
  // Escuchar el evento DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    // Obtener el botón de instalación
    const installButton = document.getElementById('install-button');

    // Verificar si el botón existe
    if (installButton) {
      // Mostrar la alerta de instalación
      window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault(); // Prevenir que se muestre la ventana de instalación automáticamente
        
        // Crear la alerta personalizada con SweetAlert2
        Swal.fire({
          title: 'Instalar la aplicación',
          text: '¿Deseas instalar esta aplicación en tu dispositivo?',
          icon: 'info',
          showCancelButton: true,
          confirmButtonText: 'Instalar',
          cancelButtonText: 'Cancelar',
          width: '350px', // Ajustar el ancho de la alerta
          padding: '10px', // Ajustar el padding interno de la alerta
          customClass: {
            title: 'swal-title',
            content: 'swal-text',
            confirmButton: 'swal-button',
            cancelButton: 'swal-button'
          }
          
        }).then((result) => {
          if (result.isConfirmed) {
            installButton.style.display = 'none'; // Ocultar el botón de instalación
            event.prompt(); // Mostrar la ventana de instalación cuando se confirme la alerta
          }
        });
      });

      // Mostrar el botón de instalación
      installButton.style.display = 'block';
    }
  });
}

  
  
 