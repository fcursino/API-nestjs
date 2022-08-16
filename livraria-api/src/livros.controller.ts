import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController {

    constructor(private livrosService: LivrosService) {

    }

    @Get()
    async obterTodos(): Promise<Livro[]> {
        return this.livrosService.obterTodos()
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Livro> {
        return this.livrosService.obterUm(params.id)
    }

    @Post()
    async criar(@Body() livro: Livro) {
       this.livrosService.criar(livro)
    }

    @Put()
    async atualizar(@Body() livro: Livro): Promise<[number]> {
        return this.livrosService.atualizar(livro)
    }

    @Delete(':id')
    async excluir(@Param() params) {
        this.livrosService.excluir(params.id)
    }

}