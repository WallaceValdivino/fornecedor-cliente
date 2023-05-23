import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from './suppliers';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
   url = "http://localhost:3000/suppliers";
  constructor(private http: HttpClient) {}
  getSuppliers(): Observable<Supplier[]>{
  return this.http.get<[Supplier]>(this.url);
  }
  save(Supplier: Supplier): Observable<Supplier>{
    return this.http.post<Supplier>(this.url, Supplier);

  }
  edit(Supplier: Supplier): Observable<Supplier>{
    return this.http.put<Supplier>(`${this.url}/${Supplier.id}`, Supplier);
  }
  delete(Supplier: Supplier): Observable<void>{
    return this.http.delete<void>(`${this.url}/${Supplier.id}`);

  }


}
