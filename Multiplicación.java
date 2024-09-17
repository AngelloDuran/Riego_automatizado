import java.util.Scanner;
class Multiplicación{
	public static void main(String[] args){
	Scanner n=new Scanner(System.in);
		System.out.println("Ingresa un primer numero:");
	int a=n.nextInt();
		System.out.println("Ingrese un segundo numero:");
	int b=n.nextInt();
	int r=a*b;
	System.out.println("El resultado de la operación es:"+r);
}
}
