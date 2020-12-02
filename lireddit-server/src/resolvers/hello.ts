import { expr } from "@mikro-orm/core";

import { Query, Resolver } from "type-graphql";
@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello() {
    return "henlo";
  }
}
