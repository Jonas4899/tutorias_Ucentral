package com.tutorias.ucentral.backend.entidades;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import lombok.Data;
import lombok.AllArgsConstructor;
import java.io.Serializable;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Tutorias")
@Table(name = "TUTORIAS")
public class Tutorias implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_TUTORIAS")
    @SequenceGenerator(name = "SEQ_TUTORIAS",sequenceName = "SEQ_TUTORIAS",allocationSize = 1)
    @Column(name = "TUT_ID",nullable = false)
    private long id;

    @Column(name = "TUT_TEMA",nullable = false)
    private String tema;

    @Column(name = "TUT_FECHA",nullable = false)
    private String fecha;

    @Column(name = "TUT_HORA",nullable = false)
    private String hora;

    @Column(name = "TUT_TIPO",nullable = false)
    private String tipo;

    @Column(name = "TUT_ESTADO",nullable = false)
    private String estado;

    @Column(name = "TUT_NUMESTUDIANTES",nullable = false)
    private long numestudiantes;

    @ManyToMany(mappedBy = "tutorias", fetch = FetchType.EAGER)
    private List<Estudiantes> estudiantes;
}
