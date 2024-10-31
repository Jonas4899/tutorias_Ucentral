package com.tutorias.ucentral.backend.entidades;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@Inheritance
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Profesores")
@Table(name = "PROFESORES")

public class Profesores extends Usuarios{
    
    @Id
    @Column(name = "PRO_ID",nullable = false)
    private String id;

    @Column(name = "PRO_NOMBRE",nullable = false)
    private String nombre;


}
