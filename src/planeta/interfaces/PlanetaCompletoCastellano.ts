interface Personacastellano {
    nombre: string,
    altura: string,
    masa_corporal: string,
    color_cabello: string,
    color_piel: string,
    color_ojos: string,
    cumpleanios: string,
    genero: string,
    fecha_creacion: string,
    fecha_edicion: string,
    url: string
}
interface PeliculaCastellano {
    titulo: string,
    episodio: string,
    descripcion: string,
    director: string,
    productor: string,
    fecha_entrega: string,
    fecha_creacion: string,
    fecha_edicion: string,
    url: string
}

export interface PlanetaCompletoCastellano {
    nombre: string;
    periodo_rotacion: string;
    periodo_orbita: string;
    diametro: string;
    clima: string;
    gravedad: string;
    terreno: string;
    indicador_agua: string;
    poblacion: string;
    habitantes: Personacastellano[];
    pelicilas: PeliculaCastellano[];
    fecha_creacion: string;
    fecha_edicion: string;
    url: string;
}
