const $ = (element) => document.querySelector(element);

$("input").addEventListener("change", (event) => {
  const archivos = Object.values(event.target.files);

  archivos.forEach((item) => {
    console.table(item.name, item.name.split(".").pop());
  });

  archivos.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      // console.log(event);
    };
    reader.readAsText(file);
  });
});
