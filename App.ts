import express from "express";
import produtoRoutes from "./routes/produto.routes";

const   app = express();

app.use(express.json());

app.use("./produtos", produtoRoutes);

app.listen(3000);

export interface ProdutoRespository {
    listar(): Promise<Produto[]>;

    buscarPorId(
        id: number
    ): Promise<Produto | null>;

    criar(
        produto: Produto
    ): Promise<Produto>;
}

class ProdutoRespositorySequelize
    implements ProdutoRespository {
        
        async listar(): Promise<Produto[]> {
            // Sequelize
        }

        async buscarPorId(
            id: number
        ): Promise<Produto | null> {
            //Sequelize
        }

        async criar(
            produto: Produto
        ): Promise<Produto> {
            //Sequelize
        }
            

    }