// src/pessoa/pessoa.module.ts
import { Module } from '@nestjs/common';
import { PessoaController } from './pessoa.controller';
import { PessoasArmazenadas } from './pessoa.dm';

@Module({
  controllers: [PessoaController],
  providers: [PessoasArmazenadas],
  exports: [PessoasArmazenadas],
})
export class PessoaModule {}
