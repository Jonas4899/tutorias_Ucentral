package com.tutorias.ucentral.backend.dto;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class HorarioDto {
    
    private String dia;
    private String horaInicio;
    private String horaFin;
    private boolean estado;
}
