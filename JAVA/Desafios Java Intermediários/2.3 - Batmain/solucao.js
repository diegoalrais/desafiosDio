/**
 Entrada
A primeira linha da entrada é composta por um número inteiro T que indica a quantidade de casos de testes. Cada caso de teste é composto por uma cadeia de caracteres de tamanho N (1 < N < 26). Todos os caracteres são letras maiúsculas ou minúsculas do alfabeto inglês.

Saída
Caso o vilão alguma vez já foi capturado pelo Batmain, imprima Y. Caso contrário, imprima N. Nesse caso, por simplicidade, assumiremos que qualquer cadeia de caracteres é um vilão válido e já capturado pelo Batmain, ok?

*/
import java.util.Scanner;

public class DesafioDIO {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        
        int T = scan.nextInt();
        
        int viloesCapturados = 0; 
        while(viloesCapturados < T) {
            String vilao = scan.next();
            //TODO: Imprima "Y" na linha abaixo, pois já temos o vilão em mãos ;-)
            System.out.println("Y"); 
            viloesCapturados++;
        }       
    }
}