package com.tutorias.ucentral.backend.servicios;

import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;

import com.tutorias.ucentral.backend.dto.EstudianteDto;
import com.tutorias.ucentral.backend.entidades.Estudiantes;
import com.tutorias.ucentral.backend.repositorios.RepositorioEstudiantes;
import com.tutorias.ucentral.backend.repositorios.RepositorioUsuarios;

import org.modelmapper.ModelMapper;
import java.util.List;

@Service
public class ServicioEstudiantes extends ServicioUsuarios {
    
    private ModelMapper modelMapper;
    private final RepositorioEstudiantes repoEstudiantes;

    public ServicioEstudiantes(ModelMapper modelMapper, RepositorioUsuarios repoUsuarios, RepositorioEstudiantes repoEstudiantes) {
        super(modelMapper, repoUsuarios); // Llama al constructor de la clase base correctamente
        this.repoEstudiantes = repoEstudiantes;
    }

    public EstudianteDto registrar(EstudianteDto estudianteDto){
        Estudiantes estudiante = repoEstudiantes.save(modelMapper.map(estudianteDto, Estudiantes.class));
        return modelMapper.map(estudiante, EstudianteDto.class);
    }

    public List<EstudianteDto> listarEstudiante(){
        TypeToken<List<EstudianteDto>> typeToken = new TypeToken<>(){};
        return modelMapper.map(repoEstudiantes.findAll(),typeToken.getType());
    }
}
