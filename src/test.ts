// type ProgrammingLanguage = {
//     name: string;
//   };

//   function identity<T>(value: T): T {
//     return value;
//   }

// abstract class IBaseRepo<RT> {
//     abstract Get(): RT;
// }

// abstract class IProductRepo extends IBaseRepo<string> {
//     abstract GetProduct(): string;
// }

// abstract class BaseRepo<RT> implements IBaseRepo<RT> {
//     Get(): RT {
//         throw new Error("Method not implemented.");
//     }
// }

// class ProductRepo extends BaseRepo<string> implements IProductRepo {
//     constructor(parameters) {
//         super();
//     }

//     GetProduct(): string {
//         this.Get();


//         return "";
//     }
// }

// class Service {
//     constructor(private readonly repo: IProductRepo) {
//         this.repo.Get();
//     }
// }

//   const result = identity<ProgrammingLanguage>({ name: "TypeScript" });