// src/pessoa/pessoa.dm.ts
import { Injectable } from '@nestjs/common';
import { PessoaEntity } from './pessoa.entity';

@Injectable()
export class PessoasArmazenadas {
  private pessoas: PessoaEntity[] = [];

  adicionarPessoa(pessoa: PessoaEntity) {
    this.pessoas.push(pessoa);
  }

  pesquisarPorId(id: string): PessoaEntity {
    const pessoa = this.pessoas.find(p => p.id === id);
    if (!pessoa) {
      throw new Error('Pessoa não encontrada');
    }
    return pessoa;
  }

  alterarPessoa(id: string, dadosNovos: Partial<PessoaEntity>): PessoaEntity {
    const pessoa = this.pesquisarPorId(id);
    Object.assign(pessoa, dadosNovos);
    return pessoa;
  }

  removerPessoa(id: string): PessoaEntity {
    const pessoa = this.pesquisarPorId(id);
    this.pessoas = this.pessoas.filter(p => p.id !== id);
    return pessoa;
  }

  listarPessoas(): PessoaEntity[] {
    return this.pessoas;
  }

  pesquisarPorAnoNascimento(ano: number): PessoaEntity[] {
    return this.pessoas.filter(p => p.nascimento === ano);
  }
}
