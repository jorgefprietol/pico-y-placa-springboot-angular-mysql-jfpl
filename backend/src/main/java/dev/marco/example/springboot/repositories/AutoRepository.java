package dev.marco.example.springboot.repositories;

import java.util.ArrayList;

import dev.marco.example.springboot.models.AutoModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AutoRepository extends CrudRepository<AutoModel, Long > {
    public abstract ArrayList<AutoModel> findByPlaca(String placa);
}
