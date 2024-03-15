import { Routes } from '@angular/router';
import { FornecedoresConsultaComponent } from './components/pages/fornecedores-consulta/fornecedores-consulta.component';
import { ProdutosConsultaComponent } from './components/pages/produtos-consulta/produtos-consulta.component';
import { ProdutosCadastroComponent } from './components/pages/produtos-cadastro/produtos-cadastro.component';
import { ProdutosEdicaoComponent } from './components/pages/produtos-edicao/produtos-edicao.component';

export const routes: Routes = [
    {
        path: 'pages/fornecedores-consulta',
        component: FornecedoresConsultaComponent
    },
    {
        path: 'pages/produtos-consulta',
        component: ProdutosConsultaComponent
    },
    {
        path: 'pages/produtos-cadastro',
        component: ProdutosCadastroComponent
    },
    {
        path: 'pages/produtos-edicao',
        component: ProdutosEdicaoComponent
    },
    {
        path: '',//url raiz do projeto
        pathMatch: 'full',
        redirectTo: '/pages/produtos-consulta'
    }
];
