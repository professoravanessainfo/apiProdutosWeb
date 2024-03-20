import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-fornecedores-consulta',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './fornecedores-consulta.component.html',
  styleUrl: './fornecedores-consulta.component.css'
})
export class FornecedoresConsultaComponent implements OnInit {

  fornecedores: any[] = []//array de objetos

  //método
  constructor(
    private httpClient: HttpClient
  ){

  }

  //funcao executada quando o componente é aberto
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //requisicao get para a api
    this.httpClient.get(`${environment.apiProdutos}/fornecedores`)
    .subscribe( //capturando o retorno da chamada da API
        {
          //capturar o retorno de sucesso da API
          next: (data) => {
            //armazenar os dados obtidos da api na variavel data
            this.fornecedores = data as any[];
          },
          //capturar o retorno de erro da API
          error: (e) => {
            console.log(e.error);
          }
        }
      );

  }

}
