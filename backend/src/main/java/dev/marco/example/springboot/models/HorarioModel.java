package dev.marco.example.springboot.models;
import javax.persistence.*;

@Entity
@Table(name = "horario")
public class HorarioModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private String horario;
    private int hora;

    public void Horario(String horario) {
        this.horario = horario;
    }

    public void Horario() {
        this.horario = horario;
        this.hora = hora;
    }

    /**
     * @return the horario
     */
    public String getHorario() {
        return horario;
    }

    /**
     * @param horario the horario to set
     */
    public void setHorario(String horario) {
        this.horario = horario;
    }

    /**
     * @return the hora
     */
    public int getHora() {
        String[] parts = horario.split(":");
        String tiempo = parts[0] + parts[1];
        hora = Integer.parseInt(tiempo);
        return hora;
    }

    /**
     * @param hora the hora to set
     */
    public void setHora(int hora) {
        this.hora = hora;
    }

}
