import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Company } from "../classes/company";

@Injectable({
  providedIn: "root",
})

export class CompanyService {

    constructor(private http: HttpClient) {}
    //get all companies from API endpoint https://localhost:7178/api/CompnyControllers
    getAllCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>("https://localhost:7178/api/CompnyControllers");
    }
}