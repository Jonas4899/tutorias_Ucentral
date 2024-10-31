package com.tutorias.ucentral.backend.entidades;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Usuarios")
@Table(name = "USUARIOS")
public class Usuarios {
    
    @Id
    @Column(name = "USU_ID", nullable = false)
    private long id;

    @Column(name = "USU_NOMBRE", nullable = false)
    private String nombre;

    @Column(name = "USU_NACIMIENTO",nullable = false)
    private String fechaNacimiento;
    
    @Column(name = "USU_NUMERO",nullable = false)
    private long numero;

    @Column(name = "USU_EMAIL",nullable = false)
    private String correo;

    @Column(name = "USU_CONTRA",nullable = false)
    private String password;


    
}
