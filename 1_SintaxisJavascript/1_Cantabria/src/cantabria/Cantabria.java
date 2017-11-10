package cantabria;

import java.util.ArrayList;
import java.util.Scanner;

/**
 * @author DAW208
 *
 * Para poner a prueba sus conocimientos previos deberá realizar un programa en
 * Java que permita gestionar los miembros del equipo de sandkills. De cada
 * sandkill se almacenará su nombre y apellidos, edad y procedencia. El programa
 * permitirá que se puedan añadir y borrar sandkills, así como modificar los
 * datos de un sandkill en concreto. También se podrán mostrar todos los
 * sandkills de lalista, el número total de sandkills, la media de su edad y
 * buscar todos los sandkills que procedan de un lugar en concreto.
 */
public class Cantabria {

    static Scanner teclado = new Scanner(System.in);
    public static ArrayList<UsuSandskill> arrayusuSandskill = new ArrayList<>();
    public static UsuSandskill objUsu = new UsuSandskill();

    public static void main(String[] args) {
        menu();
    }

    private static void alta() {
        //Variables de apoyo
        String nombre, apellidos, procedencia;
        int edad;

        //Comprueba el tamaño del array
        int auxInt;
        String aux;

        System.out.println("Introduzca el nombre");
        aux = teclado.nextLine();
        nombre = aux;

        System.out.println("Introduzca el apellido");
        aux = teclado.nextLine();
        apellidos = aux;

        System.out.println("Introduzca la edad");
        auxInt = teclado.nextInt();
        edad = auxInt;

        System.out.println("Introduzca la procedencia");
        aux = teclado.next();
        procedencia = aux;

        // Añadimos el objeto al arraylist
        arrayusuSandskill.add(new UsuSandskill(nombre, apellidos, edad, procedencia));

    }

    private static void modificar() {

        int auxID = -1;
        int auxInt;
        String aux;
        boolean estado = false;

        System.out.println("Introduzca el nombre del usuario que desea modificar: ");
        aux = teclado.nextLine();

        for (int i = 0; i < arrayusuSandskill.size(); i++) {

            if (aux.equals(arrayusuSandskill.get(i).getNombre())) {

                auxID = i;

                estado = true;

                System.out.println("Introduzca el nuevo nombre: ");
                aux = teclado.nextLine();
                arrayusuSandskill.get(auxID).setNombre(aux);

                System.out.println("Introduzca el nuevo apellido: ");
                aux = teclado.nextLine();
                arrayusuSandskill.get(auxID).setApellidos(aux);

                System.out.println("Introduzca la nueva edad: ");
                auxInt = teclado.nextInt();
                arrayusuSandskill.get(auxID).setEdad(auxInt);

                System.out.println("Introduzca la nueva procedencia: ");
                aux = teclado.nextLine();
                arrayusuSandskill.get(auxID).setProcedencia(aux);

                System.out.println("------------------------------  EXITO EN LA MODIFICACION");
            }

            if (estado == false) {
                System.out.println("No existe ningun nombre en la base de datos");
                menu();
            }
        }

    }

    private static void eliminar() {

        int auxID = -1;
        int auxInt;
        String aux;
        boolean estado = false;

        System.out.println("Introduzca el nombre del usuario que desea eliminar: ");
        aux = teclado.nextLine();

        for (int i = 0; i < arrayusuSandskill.size(); i++) {

            if (aux.equals(arrayusuSandskill.get(i).getNombre())) {

                auxID = i;
                estado = true;

                arrayusuSandskill.remove(i);

                System.out.println("------------------------------  EXITO EN LA ELIMINACION");

            }

            if (estado == false) {
                System.out.println("No existe ningun nombre en la base de datos");
                menu();
            }
        }

    }

    private static void consulta() {

        for (int i = 0; i < arrayusuSandskill.size(); i++) {
            System.out.println("Nombre: " + arrayusuSandskill.get(i).getNombre());
            System.out.println("Apellidos: " + arrayusuSandskill.get(i).getApellidos());
            System.out.println("Edad: " + arrayusuSandskill.get(i).getEdad());
            System.out.println("Procedencia: " + arrayusuSandskill.get(i).getProcedencia());
            System.out.println("---------------------------------------------------------------------------");
        }

        System.out.println("Cantidad de miembros: " + arrayusuSandskill.size());
    }

    private static void consultaParam() {

        int auxID = -1;
        int auxInt;
        String aux;
        boolean estado = false;

        System.out.println("Introduce la procedencia de los Sandskill a mostrar: ");
        aux = teclado.nextLine();

        for (int i = 0; i < arrayusuSandskill.size(); i++) {

            if (aux.equals(arrayusuSandskill.get(i).getProcedencia())) {

                auxID = i;
                estado = true;

                System.out.println("Nombre: " + arrayusuSandskill.get(i).getNombre());
                System.out.println("Apellidos: " + arrayusuSandskill.get(i).getApellidos());
                System.out.println("Edad: " + arrayusuSandskill.get(i).getEdad());
                System.out.println("Procedencia: " + arrayusuSandskill.get(i).getProcedencia());

            }

            if (estado == false) {
                System.out.println("No existe ningun miembro de esa procedencia");
                menu();
            }
        }

    }

    private static void mediaEdad() {

        int aux = 0;
        int media;

        for (int i = 0; i < arrayusuSandskill.size(); i++) {

            aux = aux + arrayusuSandskill.get(i).getEdad();

        }

        media = aux / arrayusuSandskill.size();
        System.out.println("Media de edad: " + media);
    }

    private static void menu() {

        // Menu
        int select = -1;

        while (select != 0) {
            try {
                System.out.printf("\n");
                System.out.printf("Que desea hacer\n\n"
                        + "1. Alta de sandkill\n"
                        + "2. Modificar sandkill\n"
                        + "3. Eliminar sandkill\n"
                        + "4. Consulta de sandkill\n"
                        + "5. Consulta parametrizada por lugar de sandkill\n"
                        + "6. Media de edad de sandkill\n"
                        + "0. Salir del programa");
                System.out.printf("\n");
                System.out.printf("\n");

                //Recoger una variable por consola y parsea
                System.out.printf("Opción: ");
                select = Integer.parseInt(teclado.nextLine());
                System.out.printf("\n");

                switch (select) {
                    case 1:
                        alta();
                        break;
                    case 2:
                        modificar();
                        break;
                    case 3:
                        eliminar();
                        break;
                    case 4:
                        consulta();
                        break;
                    case 5:
                        consultaParam();
                        break;
                    case 6:
                        mediaEdad();
                        break;
                    case 0:
                        System.out.printf("Terminando ejecución del programa.");
                        System.exit(0);
                        break;
                    default:
                        System.out.printf("Número no reconocido");
                        System.out.printf("\n");
                        break;
                }

                System.out.printf("\n");

            } catch (Exception e) {
                System.out.printf("- Error -");
            }
        }

    }

}
