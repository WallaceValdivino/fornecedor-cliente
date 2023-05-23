import { SupplierService } from '../suppliers.service';

import { Component, OnInit } from '@angular/core';

import {Supplier } from '../suppliers';

import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-suppliers',

  templateUrl: './suppliers.component.html',

  styleUrls: ['./suppliers.component.css'],
})
export class SuppliersComponent implements OnInit {
  Suppliers: Supplier[] = [];
isEditing : boolean = false;
  formGroupSupplier : FormGroup;

  constructor(
    private SupplierService: SupplierService,
    private formsBuilder: FormBuilder
  ) {
    this.formGroupSupplier = formsBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      location: [''],
      cpf: [''],
      examination: [''],
      commentary: ['']
    });
  }

  ngOnInit(): void {
    this.loadSuppliers();
  }

  loadSuppliers() {
    this.SupplierService.getSuppliers().subscribe({
      next: (data) => (this.Suppliers = data),
    });
  }

  save() {
if(this.isEditing){
  this.SupplierService.edit(this.formGroupSupplier.value).subscribe({
next: () =>{
  this.loadSuppliers();
  this.formGroupSupplier.reset();
  this.isEditing = false;
}
  })
}
else{


    this.SupplierService.save(this.formGroupSupplier.value).subscribe(
      {
        next: data =>{ this.Suppliers.push(data);
        this.formGroupSupplier.reset();

        }
      }
    )
  }
}

  edit(Supplier : Supplier){
this.formGroupSupplier.setValue(Supplier);
this.isEditing = true;
  }

  delete(Supplier : Supplier){
    this.SupplierService.delete(Supplier).subscribe({

      next: () => this.loadSuppliers()
    })
  }

  clean(){
    this.formGroupSupplier.reset();
this.isEditing = false;
  }
}

