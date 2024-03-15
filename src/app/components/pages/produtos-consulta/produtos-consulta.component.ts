import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-consulta',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './produtos-consulta.component.html',
  styleUrl: './produtos-consulta.component.css'
})
export class ProdutosConsultaComponent implements OnInit{
 
  produtos: any[] = []

  constructor(
    private httpClient: HttpClient
  ){

  }

  ngOnInit(): void {
    
    this.httpClient.get('http://localhost:8081/api/produtos')
    .subscribe(
      {
        next: (data) => {
          //console.log(data);
          this.produtos = data as any[];
        },
        error: (e) => {
          console.log(e.error);
        }
      }
    )

  }

}
