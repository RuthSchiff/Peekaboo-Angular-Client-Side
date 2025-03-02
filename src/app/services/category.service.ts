import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../classes/category";

@Injectable({
  providedIn: "root",
})

export class CategoryService {

    constructor(private http: HttpClient) {}
    //get category from category in the server
    getAllCategories(): Observable<Category[]> {
        return this.http.get<Category[]>("https://localhost:7178/api/CategoryControllers");
    }
}