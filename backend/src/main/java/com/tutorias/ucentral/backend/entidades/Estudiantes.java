package com.tutorias.ucentral.backend.entidades;

import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@Inheritance
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Estudiantes")
@Table(name = "ESTUDIANTES")
public class Estudiantes extends Usuarios{
    
    @Id
    @Column(name = "EST_ID",nullable = false)
    private String id;

    @Column(name = "EST_MATRICULA",nullable = false)
    private String matricula;

    @ManyToMany(mappedBy = "estudiantes", fetch = FetchType.EAGER)
    private List<Materias> materias;

}