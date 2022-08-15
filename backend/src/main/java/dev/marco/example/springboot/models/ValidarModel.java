package dev.marco.example.springboot.models;

import javax.persistence.*;

@Entity
@Table(name = "validar")
public class ValidarModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private String placa;
    private String fecha;
    private String horario;

    @Transient
    FechaModel objFecha = new FechaModel();
    @Transient
    HorarioModel objHorario = new HorarioModel();
    @Transient
    PlacaModel objPlaca = new PlacaModel();

    public ValidarModel(String placa, String fecha, String horario) {
        this.placa = placa;
        this.fecha = fecha;
        this.horario = horario;
    }

    public PlacaModel getObjPlaca() {
        return objPlaca;
    }

    public HorarioModel getObjHorario() {
        return objHorario;
    }

    public FechaModel getObjFecha() {
        return objFecha;
    }

    public void PlacaModel(String placa, String fecha, String horario) {
        this.placa = placa;
        this.fecha = fecha;
        this.horario = horario;
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
    }

    /**
     * @return the fecha
     */
    public String getFecha() {
        return fecha;
    }

    /**
     * @param fecha the fecha to set
     */
    public void setFecha(String fecha) {
        this.fecha = fecha;
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

    public String imprimir() {
        // ingreso de placa
        objPlaca.setPlaca(placa);
        // ingreso de horario
        objHorario.setHorario(horario);
        // ingreso de fecha
        objFecha.setFecha(fecha);

        String msg = "";

        System.out.println(" Placa: " + placa
                + "\n Fecha: " + fecha + " Día: " + objFecha.getDia()
                + "\n Hora: " + horario);

        // ********************************************
        // VERIFICAR DATOS
        // ********************************************

        if (600 <= objHorario.getHora() && objHorario.getHora() <= 930 || 1600 <= objHorario.getHora() && objHorario.getHora() <= 2100) {

            switch (objFecha.getDia()) {
                case "Lunes":
                    if (objPlaca.getDigito() == 1 || objPlaca.getDigito() == 2) {
                        msg = "No puede circular, es Día y Hora de Pico y Placa ";
                    } else {
                        msg = "Puede circular el Día y Hora consultado ";
                    }
                    break;
                case "Martes":
                    if (objPlaca.getDigito() == 3 || objPlaca.getDigito() == 4) {
                        msg = "No puede circular, es Día y Hora de Pico y Placa ";
                    } else {
                        msg = "Puede circular el Día y Hora consultado ";
                    }
                    break;
                case "Miércoles":
                    if (objPlaca.getDigito() == 5 || objPlaca.getDigito() == 6) {
                        msg = "No puede circular, es Día y Hora de Pico y Placa ";
                    } else {
                        msg = "Puede circular el Día y Hora consultado ";
                    }
                    break;
                case "Jueves":
                    if (objPlaca.getDigito() == 7 || objPlaca.getDigito() == 8) {
                        msg = "No puede circular, es Día y Hora de Pico y Placa ";
                    } else {
                        msg = "Puede circular el Día y Hora consultado ";
                    }
                    break;
                case "Viernes":
                    if (objPlaca.getDigito() == 9 || objPlaca.getDigito() == 0) {
                        msg = "No puede circular, es Día y Hora de Pico y Placa ";
                    } else {
                        msg = "Puede circular el Día y Hora consultado ";
                    }
                    break;
                case "Sábado":
                    msg = "Puede Circular ya que su día es Sábado ";
                    break;
                case "Domingo":
                    msg = "Puede Circular ya que su día es Domingo ";
                    break;
                case "Feriado":
                    msg = "Puede Circular ya que su día es Feriado ";
                    break;
            }
        } else {
            msg = "Puede Circular el Horario está fuera del Pico y Placa";
        }
        msg = msg + "DATOS INGRESADOS EN EL SISTEMA"
                + " Placa: " + placa
                + " Fecha: " + fecha + " Día: " + objFecha.getDia()
                + " Hora: " + horario;
        return msg;
    }
}

