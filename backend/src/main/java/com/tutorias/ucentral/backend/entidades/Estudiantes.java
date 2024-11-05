package com.tutorias.ucentral.backend.entidades;

import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Entity
@DiscriminatorValue("ESTUDIANTE") 
public class Estudiantes extends Usuarios{
    
    @Column(name = "EST_MATRICULA",nullable = false)
    private String matricula;

    @ManyToMany(mappedBy = "estudiantes", fetch = FetchType.EAGER)
    private List<Materias> materias;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinTable(
        name = "estudiante_tutoria",
        joinColumns = @JoinColumn(name = "USU_ID", referencedColumnName = "USU_ID"),
        inverseJoinColumns = @JoinColumn(name = "tut_id", referencedColumnName = "TUT_ID")
    )
    private List<Tutorias> tutorias;
}
