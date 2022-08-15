package dev.marco.example.springboot.controllers;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Locale;
import java.util.Optional;

import dev.marco.example.springboot.models.AutoModel;
import dev.marco.example.springboot.models.ValidarModel;
import dev.marco.example.springboot.services.AutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/auto")
@RestController
public class AutoController {
    @Autowired
    AutoService autoService;
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping()
    public ArrayList<AutoModel> obtenerAutos() {
        return autoService.obtenerAutos();
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping()
    public AutoModel guardarAuto(@RequestBody AutoModel auto){
        return this.autoService.guardarAuto(auto);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "/{id}")
    public Optional<AutoModel> obtenerAutoPorId(@PathVariable("id") Long id) {
        return this.autoService.obtenerPorId(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/query")
    public ResponseEntity<String> obtenerAutoPorPlaca(@RequestParam("placa") String placa, @RequestParam("fecha") String fecha, @RequestParam("hora") String hora) throws ParseException {
        SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy HH:mm", Locale.ENGLISH);
        Date parsedDate = format.parse(fecha + " " + hora);
        Date dateIn = parsedDate;
        Date dateToday = new Date();

        if(dateIn.before(dateToday)){
            return ResponseEntity.ok("{\"success\":1, \"data\": \"Fecha de consulta "+dateIn+" anterior a la Fecha actual "+dateToday+ "\"}");
        }

        ArrayList<AutoModel> data = this.autoService.obtenerPorPlaca(placa);
        if(data.size() > 0 ){
            ValidarModel verPicoPlaca = new ValidarModel(placa, fecha, hora);
            return ResponseEntity.ok("{\"success\":1, \"data\": \""+verPicoPlaca.imprimir()+ " - Chasis: " + data.get(0).getChasis() + " - Color: " +  data.get(0).getColor() + " - Marca: " +  data.get(0).getMarca() + " - Modelo: " +  data.get(0).getModelo() +"\"}");
        }
        return ResponseEntity.ok("{\"success\":1, \"data\": \"Placa No Registrada en el sistema\"}");

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping(path = "/{id}")
    public boolean eliminarPorId(@PathVariable("id") Long id) {
        boolean ok = this.autoService.eliminarAuto(id);
        if(ok){
            return true;
        }else{
            return false;
        }
    }
    
}
