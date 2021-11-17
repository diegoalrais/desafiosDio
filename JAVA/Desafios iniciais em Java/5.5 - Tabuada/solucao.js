/*
******
Leia 1 valor inteiro N (2 < N < 1000). A seguir, mostre a tabuada de N:      
1 x N = N      2 x N = 2N        ...       10 x N = 10N

Entrada
A entrada contém um valor inteiro N (2 < N < 1000).

Saída
Imprima a tabuada de N, conforme o exemplo fornecido.
*******
*/

import java.io.IOException;
import java.util.Scanner;

public class Teste {
	
	public static void main(String[] args) throws IOException {
    	Scanner leitor = new Scanner(System.in);
    	int N = leitor.nextInt();
    	
    	for(int i = 1; i <= 10; i++){
    	  System.out.println(i + " x " + N +"  =  " + (i * N));
    	}
    	
    /*	System.out.println("1 x " + N + " = " + (N * 1));
    	System.out.println("2 x " + N + " = " + (N * 2));
    	System.out.println("3 x " + N + " = " + (         ));
    	System.out.println("4 x " + N + " = " + (         ));
    	System.out.println("5 x " + N + " = " + (         ));
    	System.out.println(                                          ));
    	System.out.println(                                          ));
    	System.out.println(                                          ));
    	System.out.println(                                          ));
    	System.out.println("10 x " + N + " = " + (N * 10));*/
	}
	
}