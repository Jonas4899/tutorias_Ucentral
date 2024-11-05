package com.tutorias.ucentral.backend.dto;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString

public class TutoriasDto {
    
    private String tema;
    private String nombre;
    private String fecha;
    private String hora;
    private String tipo;
    private String estado;
    private long numeroestudiante;
    private List<EstudianteDto> estudiantes;


}
