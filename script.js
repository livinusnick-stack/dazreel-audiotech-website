document.addEventListener('DOMContentLoaded', () => {
  // Maya trigger interaction placeholder
  const mayaButtons = document.querySelectorAll('#mayaTrigger, .maya-card');

  mayaButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert("Initializing Maya Voice Assistant... (Vapi connection pending)");
    });
  });
});
