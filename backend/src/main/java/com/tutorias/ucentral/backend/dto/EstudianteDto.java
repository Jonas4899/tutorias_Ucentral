package com.tutorias.ucentral.backend.dto;


import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import java.util.List;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class EstudianteDto extends UsuarioDto{

    private String matricula;
    private List<MateriasDto> materias;
    private List<TutoriasDto> tutorias;    
    
}
