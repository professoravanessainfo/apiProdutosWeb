import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

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
    
    this.httpClient.get(`${environment.apiProdutos}/produtos`)
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
