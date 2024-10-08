//classe de modulo do aplicativo, responsável por administrar todos os modulos da aplicação

import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { PessoaModule } from './usuario/pessoa.module'; // Verifique o caminho correto

@Module({
  imports: [UsuarioModule, PessoaModule],
})
export class AppModule {}


