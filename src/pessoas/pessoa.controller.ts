// src/pessoa/pessoa.controller.ts
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { PessoasArmazenadas } from './pessoa.dm';
import { PessoaEntity } from './pessoa.entity';
import { CriarPessoaDto } from './dto/criarpessoa.dto';

@Controller('/pessoas')
export class PessoaController {
  constructor(private pessoasArmazenadas: PessoasArmazenadas) {}

  @Post()
  async criaPessoa(@Body() dadosPessoa: CriarPessoaDto) {
    const novaPessoa = new PessoaEntity(
      uuid(), 
      dadosPessoa.nome, 
      dadosPessoa.nascimento, 
      dadosPessoa.pais
    );
    this.pessoasArmazenadas.adicionarPessoa(novaPessoa);
    return { mensagem: 'Pessoa criada', pessoa: novaPessoa };        
  }

  @Put('/:id')
  async alteraPessoa(@Body() dadosNovos: Partial<PessoaEntity>, @Param('id') id: string) {
    const pessoaAlterada = this.pessoasArmazenadas.alterarPessoa(id, dadosNovos);
    return { mensagem: 'Alteração efetuada', pessoa: pessoaAlterada };        
  }

  @Get('/:id')
  async retornaPessoaId(@Param('id') id: string) {
    const pessoa = this.pessoasArmazenadas.pesquisarPorId(id);
    return { pessoa };
  }

  @Get()
  async retornaPessoas() {
    const listaPessoas = this.pessoasArmazenadas.listarPessoas();
    return { pessoas: listaPessoas };
  }

  @Delete('/:id')
  async removePessoa(@Param('id') id: string) {
    const pessoaRemovida = this.pessoasArmazenadas.removerPessoa(id);
    return { mensagem: 'Exclusão efetuada', pessoa: pessoaRemovida };        
  }

  @Get('/ano/:ano')
  async retornaPessoasPorAno(@Param('ano') ano: number) {
    const pessoas = this.pessoasArmazenadas.pesquisarPorAnoNascimento(ano);
    return { pessoas };
  }
}
