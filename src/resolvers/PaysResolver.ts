import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Pays } from "../entities/Pays.ts";
import { AppDataSource } from "../ormconfig";

@Resolver()
export class PaysResolver {
    private paysRepository = AppDataSource.getRepository(Pays);

    // On récupère la liste de tous les pays
    @Query(() => [Pays])
    async paysList() {
        return this.paysRepository.find();
    }

    // On récupère un pays par son code
    @Query(() => Pays, { nullable: true })
    async pays(@Arg("code") code: string) {
        return this.paysRepository.findOneBy({ code });
    }

    // On récupère la liste des pays d'un continent
    @Query(() => [Pays])
    async paysParContinent(@Arg("codeContinent") codeContinent: string) {
        return this.paysRepository.findBy({ codeContinent });
    }

    // On ajoute un pays [code, nom, emoji, code du continent]
    @Mutation(() => Pays)
    async addPays(
        @Arg("code") code: string,
        @Arg("nom") nom: string,
        @Arg("emoji") emoji: string,
        @Arg("codeContinent") codeContinent: string
    ): Promise<Pays> {
        const pays = this.paysRepository.create({ code, nom, emoji, codeContinent });
        return this.paysRepository.save(pays);
    }
}