import { Movie } from "../entity/Movie";
import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from "type-graphql";

@InputType()
class MovieInput {
  @Field(()=>String, {nullable:true})
  title?: string
  
  @Field(()=>Int, {nullable:true})
  minutes?: number
}

@Resolver()
export class MovieResolver {
  @Mutation(()=> Movie)
  async createMovie(
    @Arg("title")
    title: string,
    @Arg("minutes", ()=>Int)
    minutes: number
  ){
    const movie = await Movie.create({title,minutes}).save()
    return movie
  }

  @Mutation(()=>Movie)
  async updateMovie(@Arg('id') id: number, @Arg('input', ()=>MovieInput) input: MovieInput){
    await Movie.update({id},input)
    return true
  }

  @Mutation(()=>Boolean)
  async deleteMovie(@Arg('id', ()=>Int) id: number){
    await Movie.delete({id})
    return true
  }

  @Query(()=>[Movie])
  movies(){
    return Movie.find({})
  }
}