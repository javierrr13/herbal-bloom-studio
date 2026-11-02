// Contenido biográfico de María de la Fuente.
// Solo deben añadirse datos confirmados por ella (formación, trayectoria, especialidades…).
// Mientras `bio` esté vacío, la web muestra únicamente la información verificada.
//
// Fotografía: basta con guardar el archivo como src/assets/img/maria-de-la-fuente.(jpg|jpeg|png|webp).
// Se detecta automáticamente; si no existe, se muestra el panel tipográfico con sus iniciales.

const photos = import.meta.glob<string>("/src/assets/img/maria-de-la-fuente.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

export const maria: { photo?: string; bio: string[] } = {
  photo: Object.values(photos)[0],
  bio: [],
};
