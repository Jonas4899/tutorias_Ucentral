package com.tutorias.ucentral.backend.entidades;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;



@NoArgsConstructor
@AllArgsConstructor
@Entity
@DiscriminatorValue("ADMINISTRADOR") 
public class Administrador extends Usuarios {
    
    @Column(name = "ADM_USER",nullable = false)
    private String username;
}
