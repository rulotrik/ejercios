/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cantabria;

/**
 *
 * @author DAW208
 */

public class UsuSandskill {
    
    String nombre, apellidos, procedencia;
    int edad;

    public UsuSandskill(String nombre, String apellidos, int edad, String procedencia) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.procedencia = procedencia;
        this.edad = edad;
    }

    UsuSandskill() {
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getProcedencia() {
        return procedencia;
    }

    public void setProcedencia(String procedencia) {
        this.procedencia = procedencia;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }
    
    
    
}
