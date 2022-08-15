package dev.marco.example.springboot.models;

import javax.persistence.*;

@Entity
@Table(name = "placa")
public class PlacaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private String placa;
    private int digito;

    public PlacaModel(String placa) {
        this.placa = placa;
        this.digito = digito;
    }

    public PlacaModel() {
        this.placa = placa;
        this.digito = digito;
    }

    /**
     * @return the placa
     */
    public String getPlaca() {
        return placa;
    }

    /**
     * @param placa the placa to set
     */
    public void setPlaca(String placa) {
        this.placa = placa;
        String ultimo = placa.substring(placa.length() - 1);
        setDigito(Integer.parseInt(ultimo));
    }

    /**
     * @return the digito
     */
    public int getDigito() {
        return digito;
    }

    /**
     * @param digito the digito to set
     */
    public void setDigito(int digito) {
        this.digito = digito;
    }
}

