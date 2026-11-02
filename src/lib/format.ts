const dateFormatter = new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric" });

/** Formatea una fecha AAAA-MM-DD como «15 de noviembre de 2026». */
export const formatDate = (isoDate: string) => dateFormatter.format(new Date(`${isoDate}T12:00:00`));
