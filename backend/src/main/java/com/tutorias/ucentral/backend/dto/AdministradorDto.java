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

public class AdministradorDto extends UsuarioDto{
    
    @NotBlank(message = "El username no debe ser nulo")
    private String username;
}
