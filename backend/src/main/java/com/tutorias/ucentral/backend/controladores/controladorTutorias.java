package com.tutorias.ucentral.backend.controladores;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.tutorias.ucentral.backend.dto.TutoriasDto;
import com.tutorias.ucentral.backend.servicios.ServicioTutorias;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping("api/tutorias")
@CrossOrigin(origins = "${spring.webmvc.cors.allowed-origins}",
            methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class controladorTutorias {

    private ServicioTutorias servicioTutorias;

    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<TutoriasDto>registrar(@Validated @RequestBody TutoriasDto tutoriasDto){
        tutoriasDto = servicioTutorias.registrar(tutoriasDto);

        return new ResponseEntity<>(tutoriasDto, HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<TutoriasDto>> listarTutorias(){
        return ResponseEntity.ok(servicioTutorias.listarTutorias());
    }
    
}
