package com.tutorias.ucentral.backend.dto;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import jakarta.validation.constraints.NotBlank;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString

public class ProfesorDto extends UsuarioDto{
    
    @NotBlank(message = "La especialidad del profesor no debe ser nula")
    private String especialidad;
}
