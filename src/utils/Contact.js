const Contacto = () => {
  const form = document.querySelector(".formulario");
  form.addEventListener("submit", handleSubmit);

  async function handleSubmit(e) {
    e.preventDefault();
    const formu = new FormData(this);
    const response = await fetch(this.action, {
      method: this.method,
      body: formu,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      form.reset();
      alert("Datos Enviados");
    }
  }
};

export default Contacto;
