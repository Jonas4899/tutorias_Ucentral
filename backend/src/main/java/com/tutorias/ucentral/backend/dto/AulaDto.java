package com.tutorias.ucentral.backend.dto;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString

public class AulaDto {
    
    private String numero;
    private long capacidad;
}
