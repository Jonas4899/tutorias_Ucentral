package com.tutorias.ucentral.backend.servicios;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;

import com.tutorias.ucentral.backend.dto.EvaluacionDto;
import com.tutorias.ucentral.backend.entidades.Evaluaciones;
import com.tutorias.ucentral.backend.repositorios.RepositorioEvaluaciones;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class ServicioEvaluaciones {

    private ModelMapper modelMapper;
    private final RepositorioEvaluaciones repoEvaluaciones;

    public EvaluacionDto registrar(EvaluacionDto evaluacionDto){

        Evaluaciones evaluacion = repoEvaluaciones.save(modelMapper.map(evaluacionDto,Evaluaciones.class));
        return modelMapper.map(evaluacion, EvaluacionDto.class);
    }

    public List<EvaluacionDto> listarTutorias(){
        TypeToken<List<EvaluacionDto>> typeToken = new TypeToken<>(){};
        return modelMapper.map(repoEvaluaciones.findAll(),typeToken.getType());
    }
    
}
