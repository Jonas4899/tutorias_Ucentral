package com.tutorias.ucentral.backend.servicios;

import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;
import lombok.AllArgsConstructor;
import java.util.List;

import com.tutorias.ucentral.backend.dto.UsuarioDto;
import com.tutorias.ucentral.backend.repositorios.RepositorioUsuarios;

@Service
@AllArgsConstructor
public class ServicioUsuarios {
    
    private ModelMapper modelMapper;

    private final RepositorioUsuarios repoUsuarios;
   
    public List<UsuarioDto> listarUsuario(){
        TypeToken<List<UsuarioDto>> typeToken = new TypeToken<>(){};
        return modelMapper.map(repoUsuarios.findAll(),typeToken.getType());
    }
}
