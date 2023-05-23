import { Component, OnInit } from '@angular/core';
import { ClientService } from '../clients.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Client } from '../clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  Clients: Client[] = [];
  isEditing: boolean = false;
  formGroupClient: FormGroup;
  myDrop: any;

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder
  ) {
    this.formGroupClient = this.formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      location: [''],
      cpf: [''],
      crime: [''],
      popularity: [''],
      frequency: [''],
    });
  }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe({
      next: (data) => (this.Clients = data),
    });
  }

  save() {
    if (this.isEditing) {
      this.clientService.edit(this.formGroupClient.value).subscribe({
        next: () => {
          this.loadClients();
          this.formGroupClient.reset();
          this.isEditing = false;
        },
      });
    } else {
      this.clientService.save(this.formGroupClient.value).subscribe({
        next: (data) => {
          this.Clients.push(data);
          this.formGroupClient.reset();
        },
      });
    }
  }

  edit(client: Client) {
    this.formGroupClient.setValue(client);
    this.isEditing = true;
  }

  delete(client: Client) {
    this.clientService.delete(client).subscribe({
      next: () => this.loadClients(),
    });
  }

  clean() {
    this.formGroupClient.reset();
    this.isEditing = false;
  }
}
