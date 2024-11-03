package com.tutorias.ucentral.backend.dto;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import jakarta.validation.constraints.NotBlank;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString

public class UsuarioDto {
    
    @NotBlank(message = "El nombre del usuario es obligatorio")
    private String nombre;
    @NotBlank(message = "La identificación del usuario es obligaria")
    private long id;
    @NotBlank(message = "La fecha de nacimiento del usuario es obligatoria")
    private String fechaNacimiento;
    @NotBlank(message = "El numero telefonico del usuario es obligatorio")
    private long numero;
    @NotBlank(message = "El correo electronico del usuario es obligatorio")
    private String correo;

}
