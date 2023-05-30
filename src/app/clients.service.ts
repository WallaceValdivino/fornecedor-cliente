import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Client } from './clients';
import { Supplier } from './suppliers';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
   url = "http://localhost:3000";
  constructor(private http: HttpClient) {}
  getClients(): Observable<Client[]>{
  return this.http.get<[Client]>(`${this.url}/clients`);
  }
  save_client(Client: Client): Observable<Client>{
    return this.http.post<Client>(`${this.url}/clients`, Client);

  }
  edit_client(Client: Client): Observable<Client>{
    return this.http.put<Client>(`${this.url}/clients/${Client.id}`, Client);
  }
  delete_client(Client: Client): Observable<void>{
    return this.http.delete<void>(`${this.url}/clients/${Client.id}`);

  }
  getSuppliers(): Observable<Supplier[]>{
  return this.http.get<[Supplier]>(`${this.url}/suppliers`);;
  }
  save_supplier(Supplier: Supplier): Observable<Supplier>{
    return this.http.post<Supplier>(`${this.url}/suppliers`, Supplier);

  }
  edit_supplier(Supplier: Supplier): Observable<Supplier>{
    return this.http.put<Supplier>(`${this.url}/suppliers/${Supplier.id}`, Supplier);
  }
  delete_supplier(Supplier: Supplier): Observable<void>{
    return this.http.delete<void>(`${this.url}/suppliers/${Supplier.id}`);

  }

}
