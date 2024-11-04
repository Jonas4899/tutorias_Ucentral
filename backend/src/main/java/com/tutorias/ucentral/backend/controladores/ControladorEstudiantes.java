package com.tutorias.ucentral.backend.controladores;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.tutorias.ucentral.backend.dto.EstudianteDto;
import com.tutorias.ucentral.backend.servicios.ServicioEstudiantes;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping("/api/estudiantes")
@CrossOrigin(origins = "${spring.webmvc.cors.allowed-origins}",
                methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class ControladorEstudiantes {

    private ServicioEstudiantes servicioEstudiantes;

    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<EstudianteDto>registrar(@Validated @RequestBody EstudianteDto estudianteDto){
        estudianteDto = servicioEstudiantes.registrar(estudianteDto);

        return new ResponseEntity<>(estudianteDto, HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<EstudianteDto>> listarEstudiantes(){
        return ResponseEntity.ok(servicioEstudiantes.listarEstudiante());
    }
}
