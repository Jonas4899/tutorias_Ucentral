package com.tutorias.ucentral.backend.entidades;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Entity
@DiscriminatorValue("PROFESOR")
public class Profesores extends Usuarios{
    
    @Column(name = "PRO_ESPECIALIDAD",nullable = false)
    private String especialidad;

    
}
