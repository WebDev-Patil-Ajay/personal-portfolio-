import java.util.Scanner;

class Tarnary {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter Employee Name:");
        String name = sc.nextLine();

        System.out.println("Enter Salary:");
        int salary = sc.nextInt();

        // Ternary Operator use
        String taxStatus = (salary > 25000) ? "Tax Applicable" : "No Tax";

        // Relational + Logical use
        String employeeType = (salary >= 40000) ? "Senior Employee" : "Junior Employee";

        System.out.println("------ Employee Details ------");
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
        System.out.println("Tax Status: " + taxStatus);
        System.out.println("Employee Type: " + employeeType);
    }
}
