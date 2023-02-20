import java.util.Scanner;
public class MVPT1 {
    static int x ;
    static double array1[];
    static double array2[][];
    static double y[];

    static void Calculation () {
        double sum = 0;
        int i = 0, j = 0;
        for (int z = 0; z < 12; z++) { // for 12 months
            System.out.println(z+1 + ":");
            for (i = 0; i < x; i++) {
                for (j = 0; j < x; j++) {
                    y[j] = array1[j] * array2[j][i];
                    sum = sum + y[j];
                    if (j == x - 1) {
                        System.out.println(sum);
                    }
                }
                array1[i]= sum; // new value replace the old array1
                sum = 0;
            }
        }
    }
    public static void main(String[] args) {
        Scanner io = new Scanner(System.in);
        System.out.println("Please enter the number of comparatives : ");
        x = io.nextInt();
        array1 = new double[x];
        array2 = new double[x][x];
        y = new double [x];
        for(int k = 0; k < x; k++){
            System.out.printf("Please enter the %d divided value: \n", k+1);
            array1[k] = io.nextDouble();
        }
        for(int r = 0; r < x; r++) {
            for (int c = 0; c < x; c++) {
                System.out.println("Please Enter Input : ");
                array2[r][c] = io.nextDouble();
            }
        }
        Calculation ();
    }
}