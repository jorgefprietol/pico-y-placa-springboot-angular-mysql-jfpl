package dev.marco.example.springboot.models;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Locale;

@Entity
@Table(name = "fecha")
public class FechaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private String fecha;
    private String dia;

    public void Fecha(String fecha) {
        this.fecha = fecha;
    }

    public FechaModel() {
    }

    public void Fecha() {
        this.fecha = fecha;
        this.dia = dia;
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
        SimpleDateFormat formatoFecha = new SimpleDateFormat("dd-MM-yyyy", Locale.ENGLISH);
        Date fechaActual = null;
        try {
            fechaActual = formatoFecha.parse(fecha);
        } catch (ParseException e) {
            System.err.println("No se ha podido parsear la fecha.");
            e.printStackTrace();
        }
        GregorianCalendar fechaCalendario = new GregorianCalendar();
        assert fechaActual != null;
        fechaCalendario.setTime(fechaActual);
        String holidays = "23-08-2022,16-08-2022,06-09-2022";
        String[] feriados = holidays.split(",");
        int diaSemana = fechaCalendario.get(Calendar.DAY_OF_WEEK);
        for (String s : feriados) {
            if (fecha.equals(s)) {
                diaSemana = 8;
            }
        }

        switch (diaSemana) {
            case 1:
                setDia("Domingo");
                break;
            case 2:
                setDia("Lunes");
                break;
            case 3:
                setDia("Martes");
                break;
            case 4:
                setDia("Miércoles");
                break;
            case 5:
                setDia("Jueves");
                break;
            case 6:
                setDia("Viernes");
                break;
            case 7:
                setDia("Sábado");
                break;
            case 8:
                setDia("Feriado");
                break;
            default:
                break;
        }
    }

    /**
     * @return the dia
     */
    public String getDia() {
        return dia;
    }

    /**
     * @param dia the dia to set
     */
    public void setDia(String dia) {
        this.dia = dia;
    }
}

