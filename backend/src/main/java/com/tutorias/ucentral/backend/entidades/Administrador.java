package com.tutorias.ucentral.backend.entidades;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@Inheritance
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Administradores")
@Table(name = "ADMINISTRADORES")

public class Administrador extends Usuarios {
    
    @Id
    @Column(name = "ADM_ID", nullable = false)
    private long id;

    @Column(name = "ADM_USER",nullable = false)
    private String username;
}
