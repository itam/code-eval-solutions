public class Main{
    public static void main(String []args){
        String currentRow = "";
    
        for(int i = 1; i <= 12; i++) {
            for(int j = 1; j <= 12; j++) {
                currentRow += (String.format("%4d", (j * i)));
            }
            System.out.println(currentRow);
            currentRow = "";
        }
    }
}
