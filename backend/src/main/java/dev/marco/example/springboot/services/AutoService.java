package dev.marco.example.springboot.services;

import java.util.ArrayList;
import java.util.Optional;

import dev.marco.example.springboot.models.AutoModel;
import dev.marco.example.springboot.repositories.AutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AutoService {
    @Autowired
    AutoRepository autoRepository;

    public ArrayList<AutoModel> obtenerAutos(){
        return (ArrayList<AutoModel>) autoRepository.findAll();
    }

    public AutoModel guardarAuto(AutoModel auto){
        return autoRepository.save(auto);
    }

    public Optional<AutoModel> obtenerPorId(Long id){
        return autoRepository.findById(id);
    }

    public ArrayList<AutoModel> obtenerPorPlaca(String placa){
        return autoRepository.findByPlaca(placa);
    }

    public boolean eliminarAuto(Long id){
        try {
            autoRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}
