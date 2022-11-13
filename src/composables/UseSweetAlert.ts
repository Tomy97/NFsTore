import Swal, { SweetAlertIcon } from 'sweetalert2'

export const UseSweetAlert = () =>
  Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timerProgressBar: false,
    timer: 1500,
  })
