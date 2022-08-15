package dev.marco.example.springboot.models;

import javax.persistence.*;

@Entity
@Table(name = "auto")
public class AutoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    private String placa;
    private String color;
    private String modelo;
    private String chasis;
    private String serialmotor;
    private String marca;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getChasis() {
        return chasis;
    }

    public void setChasis(String chasis) {
        this.chasis = chasis;
    }

    public String getSerialmotor() {
        return serialmotor;
    }

    public void setSerialmotor(String serialmotor) {
        this.serialmotor = serialmotor;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

}
