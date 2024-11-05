package com.tutorias.ucentral.backend.dto;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Notificacion {
    
    private String mensaje;
    private String fecha;
}
