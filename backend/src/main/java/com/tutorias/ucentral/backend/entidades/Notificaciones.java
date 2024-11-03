package com.tutorias.ucentral.backend.entidades;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import jakarta.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Notificaciones")
@Table(name = "NOTIFICACIONES")
public class Notificaciones implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_NOTIFICACIONES")
    @SequenceGenerator(name = "SEQ_NOTIFICACIONES",sequenceName = "SEQ_NOTIFICACIONES",allocationSize = 1)
    @Column(name = "NOT_ID",nullable = false)
    private long id;

    @Column(name = "NOT_MENSAJE",nullable = false)
    private String mensaje;

    @Column(name = "NOT_FECHAENVIO",nullable = false)
    private String fecha;
}
