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

public class MateriasDto {

    private long id;
    private String nombre;
    private List<EstudianteDto> estudiantes;
}
