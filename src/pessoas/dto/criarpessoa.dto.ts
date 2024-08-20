// src/pessoa/dto/criarpessoa.dto.ts
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CriarPessoaDto {
  @IsString()
  @IsNotEmpty({ message: 'Campo ID não pode ser vazio' })
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo Nome não pode ser vazio' })
  nome: string;

  @IsNumber()
  nascimento: number;

  @IsString()
  @IsNotEmpty({ message: 'Campo País não pode ser vazio' })
  pais: string;
}
