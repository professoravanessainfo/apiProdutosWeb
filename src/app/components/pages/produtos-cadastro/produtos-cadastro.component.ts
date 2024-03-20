import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './produtos-cadastro.component.html',
  styleUrl: './produtos-cadastro.component.css'
})
export class ProdutosCadastroComponent implements OnInit{
  
  fornecedores: any[] = [];

  constructor(
    private httpClient: HttpClient
  ){}

  //objeto para capturar o formulario
  form = new FormGroup({
    // campo nome da api
    nome: new FormControl('', [Validators.required, Validators.minLength(8)]),
    preco: new FormControl('', [Validators.required, Validators.min(1)]),
    quantidade: new FormControl('', [Validators.required, Validators.min(0)]),
    id_Fornecedor: new FormControl('', Validators.required)
  })

  //funcao para verificar se cada campo tem erro
  get f(){
    return this.form.controls;
  }

  //evento executado no momento em que o componente e aberto
  ngOnInit() : void{
    //fazendo chamada get para consulta de fornecedores
    this.httpClient.get(`${environment.apiProdutos}/fornecedores`)
    .subscribe(
      {
        next: (data) => {
          this.fornecedores = data as any[];
        },
        error: (e) => {
          console.log(e.error);
        }
      }
    )
  }

  //evento que será executado ao clicar no submit deste formulario
  onSubmit(): void{
    //console.log(this.form.value);
    this.httpClient.post(`${environment.apiProdutos}/produtos`,
      this.form.value, { responseType: 'text'} )
    .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (e) => {
          console.log(e.error);
        }
      });
    

  }
}
