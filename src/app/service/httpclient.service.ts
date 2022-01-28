import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  getEmployees() {
    return this.httpClient.get<Employee[]>("https://testwebapp4321.azurewebsites.net/employees");
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>(
      "https://testwebapp4321.azurewebsites.net/employees" + "/" + employee.empId
    );
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>(
      "https://testwebapp4321.azurewebsites.net/employees",
      employee
    );
  }
}
