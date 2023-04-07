const nombre=localStorage.getItem('nombre')
const apellido=localStorage.getItem('apellido')


const nombreCompleto=document.getElementById('nombreCompleto')
nombreCompleto.textContent=nombre+" "+apellido



$.ajax({
    url: 'datos.php',
    type: 'GET',
    success: function(response) {
      console.log(response);
    },
    error: function(xhr, status, error) {
      console.error(error);
    }
});
  