function getDocIndex()
{
    const docButton = document.getElementById('Doctor_Portal');
    docButton.addEventListener('click', () => {
    window.location.href = '/doc';
    });
}

function getPatientIndex() 
{
    const patientButton = document.getElementById('Patient_Portal');
    patientButton.addEventListener('click', () => {
    window.location = '/patient';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    getDocIndex();
    getPatientIndex();
  });