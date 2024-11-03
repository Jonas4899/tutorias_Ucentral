package com.tutorias.ucentral.backend.entidades;

import java.util.List;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Materias")
@Table(name = "MATERIAS")
public class Materias {
    
    @Id
    @Column(name = "MAT_ID",nullable = false)
    private long id;

    @Column(name = "MAT_NOMBRE",nullable = false)
    private String nombre;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinTable(
        name = "estudiante_materia",
        joinColumns = @JoinColumn(name = "mat_id", referencedColumnName = "MAT_ID"),
        inverseJoinColumns = @JoinColumn(name = "est_id", referencedColumnName = "EST_ID")
    )
    private List<Estudiantes> estudiantes;
}
