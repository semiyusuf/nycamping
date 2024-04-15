
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Fasilitet
 * 
 */
export type Fasilitet = $Result.DefaultSelection<Prisma.$FasilitetPayload>
/**
 * Model Plass
 * 
 */
export type Plass = $Result.DefaultSelection<Prisma.$PlassPayload>
/**
 * Model Bruker
 * 
 */
export type Bruker = $Result.DefaultSelection<Prisma.$BrukerPayload>
/**
 * Model Sone
 * 
 */
export type Sone = $Result.DefaultSelection<Prisma.$SonePayload>
/**
 * Model Utleietjeneste
 * 
 */
export type Utleietjeneste = $Result.DefaultSelection<Prisma.$UtleietjenestePayload>
/**
 * Model Reservasjon
 * 
 */
export type Reservasjon = $Result.DefaultSelection<Prisma.$ReservasjonPayload>
/**
 * Model ReservasjonUtleietjeneste
 * 
 */
export type ReservasjonUtleietjeneste = $Result.DefaultSelection<Prisma.$ReservasjonUtleietjenestePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Fasilitets
 * const fasilitets = await prisma.fasilitet.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Fasilitets
   * const fasilitets = await prisma.fasilitet.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.fasilitet`: Exposes CRUD operations for the **Fasilitet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fasilitets
    * const fasilitets = await prisma.fasilitet.findMany()
    * ```
    */
  get fasilitet(): Prisma.FasilitetDelegate<ExtArgs>;

  /**
   * `prisma.plass`: Exposes CRUD operations for the **Plass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plasses
    * const plasses = await prisma.plass.findMany()
    * ```
    */
  get plass(): Prisma.PlassDelegate<ExtArgs>;

  /**
   * `prisma.bruker`: Exposes CRUD operations for the **Bruker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brukers
    * const brukers = await prisma.bruker.findMany()
    * ```
    */
  get bruker(): Prisma.BrukerDelegate<ExtArgs>;

  /**
   * `prisma.sone`: Exposes CRUD operations for the **Sone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sones
    * const sones = await prisma.sone.findMany()
    * ```
    */
  get sone(): Prisma.SoneDelegate<ExtArgs>;

  /**
   * `prisma.utleietjeneste`: Exposes CRUD operations for the **Utleietjeneste** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utleietjenestes
    * const utleietjenestes = await prisma.utleietjeneste.findMany()
    * ```
    */
  get utleietjeneste(): Prisma.UtleietjenesteDelegate<ExtArgs>;

  /**
   * `prisma.reservasjon`: Exposes CRUD operations for the **Reservasjon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservasjons
    * const reservasjons = await prisma.reservasjon.findMany()
    * ```
    */
  get reservasjon(): Prisma.ReservasjonDelegate<ExtArgs>;

  /**
   * `prisma.reservasjonUtleietjeneste`: Exposes CRUD operations for the **ReservasjonUtleietjeneste** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReservasjonUtleietjenestes
    * const reservasjonUtleietjenestes = await prisma.reservasjonUtleietjeneste.findMany()
    * ```
    */
  get reservasjonUtleietjeneste(): Prisma.ReservasjonUtleietjenesteDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Fasilitet: 'Fasilitet',
    Plass: 'Plass',
    Bruker: 'Bruker',
    Sone: 'Sone',
    Utleietjeneste: 'Utleietjeneste',
    Reservasjon: 'Reservasjon',
    ReservasjonUtleietjeneste: 'ReservasjonUtleietjeneste'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'fasilitet' | 'plass' | 'bruker' | 'sone' | 'utleietjeneste' | 'reservasjon' | 'reservasjonUtleietjeneste'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Fasilitet: {
        payload: Prisma.$FasilitetPayload<ExtArgs>
        fields: Prisma.FasilitetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FasilitetFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FasilitetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FasilitetFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FasilitetPayload>
          }
          findFirst: {
            args: Prisma.FasilitetFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FasilitetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FasilitetFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FasilitetPayload>
          }
          findMany: {
            args: Prisma.FasilitetFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FasilitetPayload>[]
          }
          create: {
            args: Prisma.FasilitetCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FasilitetPayload>
          }
          createMany: {
            args: Prisma.FasilitetCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FasilitetDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FasilitetPayload>
          }
          update: {
            args: Prisma.FasilitetUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FasilitetPayload>
          }
          deleteMany: {
            args: Prisma.FasilitetDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FasilitetUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FasilitetUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FasilitetPayload>
          }
          aggregate: {
            args: Prisma.FasilitetAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFasilitet>
          }
          groupBy: {
            args: Prisma.FasilitetGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FasilitetGroupByOutputType>[]
          }
          count: {
            args: Prisma.FasilitetCountArgs<ExtArgs>,
            result: $Utils.Optional<FasilitetCountAggregateOutputType> | number
          }
        }
      }
      Plass: {
        payload: Prisma.$PlassPayload<ExtArgs>
        fields: Prisma.PlassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlassFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlassFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlassPayload>
          }
          findFirst: {
            args: Prisma.PlassFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlassFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlassPayload>
          }
          findMany: {
            args: Prisma.PlassFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlassPayload>[]
          }
          create: {
            args: Prisma.PlassCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlassPayload>
          }
          createMany: {
            args: Prisma.PlassCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlassDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlassPayload>
          }
          update: {
            args: Prisma.PlassUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlassPayload>
          }
          deleteMany: {
            args: Prisma.PlassDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlassUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlassUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlassPayload>
          }
          aggregate: {
            args: Prisma.PlassAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlass>
          }
          groupBy: {
            args: Prisma.PlassGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlassGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlassCountArgs<ExtArgs>,
            result: $Utils.Optional<PlassCountAggregateOutputType> | number
          }
        }
      }
      Bruker: {
        payload: Prisma.$BrukerPayload<ExtArgs>
        fields: Prisma.BrukerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrukerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrukerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrukerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrukerPayload>
          }
          findFirst: {
            args: Prisma.BrukerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrukerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrukerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrukerPayload>
          }
          findMany: {
            args: Prisma.BrukerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrukerPayload>[]
          }
          create: {
            args: Prisma.BrukerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrukerPayload>
          }
          createMany: {
            args: Prisma.BrukerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BrukerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrukerPayload>
          }
          update: {
            args: Prisma.BrukerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrukerPayload>
          }
          deleteMany: {
            args: Prisma.BrukerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BrukerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BrukerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrukerPayload>
          }
          aggregate: {
            args: Prisma.BrukerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBruker>
          }
          groupBy: {
            args: Prisma.BrukerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BrukerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrukerCountArgs<ExtArgs>,
            result: $Utils.Optional<BrukerCountAggregateOutputType> | number
          }
        }
      }
      Sone: {
        payload: Prisma.$SonePayload<ExtArgs>
        fields: Prisma.SoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SoneFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SoneFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SonePayload>
          }
          findFirst: {
            args: Prisma.SoneFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SoneFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SonePayload>
          }
          findMany: {
            args: Prisma.SoneFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SonePayload>[]
          }
          create: {
            args: Prisma.SoneCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SonePayload>
          }
          createMany: {
            args: Prisma.SoneCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SoneDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SonePayload>
          }
          update: {
            args: Prisma.SoneUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SonePayload>
          }
          deleteMany: {
            args: Prisma.SoneDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SoneUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SoneUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SonePayload>
          }
          aggregate: {
            args: Prisma.SoneAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSone>
          }
          groupBy: {
            args: Prisma.SoneGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.SoneCountArgs<ExtArgs>,
            result: $Utils.Optional<SoneCountAggregateOutputType> | number
          }
        }
      }
      Utleietjeneste: {
        payload: Prisma.$UtleietjenestePayload<ExtArgs>
        fields: Prisma.UtleietjenesteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtleietjenesteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtleietjenestePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtleietjenesteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtleietjenestePayload>
          }
          findFirst: {
            args: Prisma.UtleietjenesteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtleietjenestePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtleietjenesteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtleietjenestePayload>
          }
          findMany: {
            args: Prisma.UtleietjenesteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtleietjenestePayload>[]
          }
          create: {
            args: Prisma.UtleietjenesteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtleietjenestePayload>
          }
          createMany: {
            args: Prisma.UtleietjenesteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UtleietjenesteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtleietjenestePayload>
          }
          update: {
            args: Prisma.UtleietjenesteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtleietjenestePayload>
          }
          deleteMany: {
            args: Prisma.UtleietjenesteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UtleietjenesteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UtleietjenesteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtleietjenestePayload>
          }
          aggregate: {
            args: Prisma.UtleietjenesteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUtleietjeneste>
          }
          groupBy: {
            args: Prisma.UtleietjenesteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UtleietjenesteGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtleietjenesteCountArgs<ExtArgs>,
            result: $Utils.Optional<UtleietjenesteCountAggregateOutputType> | number
          }
        }
      }
      Reservasjon: {
        payload: Prisma.$ReservasjonPayload<ExtArgs>
        fields: Prisma.ReservasjonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservasjonFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservasjonFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonPayload>
          }
          findFirst: {
            args: Prisma.ReservasjonFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservasjonFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonPayload>
          }
          findMany: {
            args: Prisma.ReservasjonFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonPayload>[]
          }
          create: {
            args: Prisma.ReservasjonCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonPayload>
          }
          createMany: {
            args: Prisma.ReservasjonCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReservasjonDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonPayload>
          }
          update: {
            args: Prisma.ReservasjonUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonPayload>
          }
          deleteMany: {
            args: Prisma.ReservasjonDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReservasjonUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReservasjonUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonPayload>
          }
          aggregate: {
            args: Prisma.ReservasjonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReservasjon>
          }
          groupBy: {
            args: Prisma.ReservasjonGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReservasjonGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservasjonCountArgs<ExtArgs>,
            result: $Utils.Optional<ReservasjonCountAggregateOutputType> | number
          }
        }
      }
      ReservasjonUtleietjeneste: {
        payload: Prisma.$ReservasjonUtleietjenestePayload<ExtArgs>
        fields: Prisma.ReservasjonUtleietjenesteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservasjonUtleietjenesteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonUtleietjenestePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservasjonUtleietjenesteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonUtleietjenestePayload>
          }
          findFirst: {
            args: Prisma.ReservasjonUtleietjenesteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonUtleietjenestePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservasjonUtleietjenesteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonUtleietjenestePayload>
          }
          findMany: {
            args: Prisma.ReservasjonUtleietjenesteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonUtleietjenestePayload>[]
          }
          create: {
            args: Prisma.ReservasjonUtleietjenesteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonUtleietjenestePayload>
          }
          createMany: {
            args: Prisma.ReservasjonUtleietjenesteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReservasjonUtleietjenesteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonUtleietjenestePayload>
          }
          update: {
            args: Prisma.ReservasjonUtleietjenesteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonUtleietjenestePayload>
          }
          deleteMany: {
            args: Prisma.ReservasjonUtleietjenesteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReservasjonUtleietjenesteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReservasjonUtleietjenesteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasjonUtleietjenestePayload>
          }
          aggregate: {
            args: Prisma.ReservasjonUtleietjenesteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReservasjonUtleietjeneste>
          }
          groupBy: {
            args: Prisma.ReservasjonUtleietjenesteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReservasjonUtleietjenesteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservasjonUtleietjenesteCountArgs<ExtArgs>,
            result: $Utils.Optional<ReservasjonUtleietjenesteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FasilitetCountOutputType
   */

  export type FasilitetCountOutputType = {
    plasser: number
  }

  export type FasilitetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plasser?: boolean | FasilitetCountOutputTypeCountPlasserArgs
  }

  // Custom InputTypes

  /**
   * FasilitetCountOutputType without action
   */
  export type FasilitetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FasilitetCountOutputType
     */
    select?: FasilitetCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FasilitetCountOutputType without action
   */
  export type FasilitetCountOutputTypeCountPlasserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlassWhereInput
  }



  /**
   * Count Type PlassCountOutputType
   */

  export type PlassCountOutputType = {
    reservasjoner: number
  }

  export type PlassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservasjoner?: boolean | PlassCountOutputTypeCountReservasjonerArgs
  }

  // Custom InputTypes

  /**
   * PlassCountOutputType without action
   */
  export type PlassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlassCountOutputType
     */
    select?: PlassCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlassCountOutputType without action
   */
  export type PlassCountOutputTypeCountReservasjonerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasjonWhereInput
  }



  /**
   * Count Type BrukerCountOutputType
   */

  export type BrukerCountOutputType = {
    reservasjoner: number
  }

  export type BrukerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservasjoner?: boolean | BrukerCountOutputTypeCountReservasjonerArgs
  }

  // Custom InputTypes

  /**
   * BrukerCountOutputType without action
   */
  export type BrukerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrukerCountOutputType
     */
    select?: BrukerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BrukerCountOutputType without action
   */
  export type BrukerCountOutputTypeCountReservasjonerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasjonWhereInput
  }



  /**
   * Count Type SoneCountOutputType
   */

  export type SoneCountOutputType = {
    reservasjoner: number
  }

  export type SoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservasjoner?: boolean | SoneCountOutputTypeCountReservasjonerArgs
  }

  // Custom InputTypes

  /**
   * SoneCountOutputType without action
   */
  export type SoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoneCountOutputType
     */
    select?: SoneCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SoneCountOutputType without action
   */
  export type SoneCountOutputTypeCountReservasjonerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasjonWhereInput
  }



  /**
   * Count Type UtleietjenesteCountOutputType
   */

  export type UtleietjenesteCountOutputType = {
    reservasjonUtleietjeneste: number
  }

  export type UtleietjenesteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservasjonUtleietjeneste?: boolean | UtleietjenesteCountOutputTypeCountReservasjonUtleietjenesteArgs
  }

  // Custom InputTypes

  /**
   * UtleietjenesteCountOutputType without action
   */
  export type UtleietjenesteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtleietjenesteCountOutputType
     */
    select?: UtleietjenesteCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UtleietjenesteCountOutputType without action
   */
  export type UtleietjenesteCountOutputTypeCountReservasjonUtleietjenesteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasjonUtleietjenesteWhereInput
  }



  /**
   * Count Type ReservasjonCountOutputType
   */

  export type ReservasjonCountOutputType = {
    reservasjonUtleietjeneste: number
  }

  export type ReservasjonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservasjonUtleietjeneste?: boolean | ReservasjonCountOutputTypeCountReservasjonUtleietjenesteArgs
  }

  // Custom InputTypes

  /**
   * ReservasjonCountOutputType without action
   */
  export type ReservasjonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservasjonCountOutputType
     */
    select?: ReservasjonCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ReservasjonCountOutputType without action
   */
  export type ReservasjonCountOutputTypeCountReservasjonUtleietjenesteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasjonUtleietjenesteWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Fasilitet
   */

  export type AggregateFasilitet = {
    _count: FasilitetCountAggregateOutputType | null
    _avg: FasilitetAvgAggregateOutputType | null
    _sum: FasilitetSumAggregateOutputType | null
    _min: FasilitetMinAggregateOutputType | null
    _max: FasilitetMaxAggregateOutputType | null
  }

  export type FasilitetAvgAggregateOutputType = {
    fasilitetNr: number | null
    pris: number | null
  }

  export type FasilitetSumAggregateOutputType = {
    fasilitetNr: number | null
    pris: number | null
  }

  export type FasilitetMinAggregateOutputType = {
    fasilitetNr: number | null
    navn: string | null
    pris: number | null
  }

  export type FasilitetMaxAggregateOutputType = {
    fasilitetNr: number | null
    navn: string | null
    pris: number | null
  }

  export type FasilitetCountAggregateOutputType = {
    fasilitetNr: number
    navn: number
    pris: number
    _all: number
  }


  export type FasilitetAvgAggregateInputType = {
    fasilitetNr?: true
    pris?: true
  }

  export type FasilitetSumAggregateInputType = {
    fasilitetNr?: true
    pris?: true
  }

  export type FasilitetMinAggregateInputType = {
    fasilitetNr?: true
    navn?: true
    pris?: true
  }

  export type FasilitetMaxAggregateInputType = {
    fasilitetNr?: true
    navn?: true
    pris?: true
  }

  export type FasilitetCountAggregateInputType = {
    fasilitetNr?: true
    navn?: true
    pris?: true
    _all?: true
  }

  export type FasilitetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fasilitet to aggregate.
     */
    where?: FasilitetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fasilitets to fetch.
     */
    orderBy?: FasilitetOrderByWithRelationInput | FasilitetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FasilitetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fasilitets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fasilitets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fasilitets
    **/
    _count?: true | FasilitetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FasilitetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FasilitetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FasilitetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FasilitetMaxAggregateInputType
  }

  export type GetFasilitetAggregateType<T extends FasilitetAggregateArgs> = {
        [P in keyof T & keyof AggregateFasilitet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFasilitet[P]>
      : GetScalarType<T[P], AggregateFasilitet[P]>
  }




  export type FasilitetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FasilitetWhereInput
    orderBy?: FasilitetOrderByWithAggregationInput | FasilitetOrderByWithAggregationInput[]
    by: FasilitetScalarFieldEnum[] | FasilitetScalarFieldEnum
    having?: FasilitetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FasilitetCountAggregateInputType | true
    _avg?: FasilitetAvgAggregateInputType
    _sum?: FasilitetSumAggregateInputType
    _min?: FasilitetMinAggregateInputType
    _max?: FasilitetMaxAggregateInputType
  }

  export type FasilitetGroupByOutputType = {
    fasilitetNr: number
    navn: string
    pris: number
    _count: FasilitetCountAggregateOutputType | null
    _avg: FasilitetAvgAggregateOutputType | null
    _sum: FasilitetSumAggregateOutputType | null
    _min: FasilitetMinAggregateOutputType | null
    _max: FasilitetMaxAggregateOutputType | null
  }

  type GetFasilitetGroupByPayload<T extends FasilitetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FasilitetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FasilitetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FasilitetGroupByOutputType[P]>
            : GetScalarType<T[P], FasilitetGroupByOutputType[P]>
        }
      >
    >


  export type FasilitetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fasilitetNr?: boolean
    navn?: boolean
    pris?: boolean
    plasser?: boolean | Fasilitet$plasserArgs<ExtArgs>
    _count?: boolean | FasilitetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fasilitet"]>

  export type FasilitetSelectScalar = {
    fasilitetNr?: boolean
    navn?: boolean
    pris?: boolean
  }

  export type FasilitetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plasser?: boolean | Fasilitet$plasserArgs<ExtArgs>
    _count?: boolean | FasilitetCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FasilitetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fasilitet"
    objects: {
      plasser: Prisma.$PlassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      fasilitetNr: number
      navn: string
      pris: number
    }, ExtArgs["result"]["fasilitet"]>
    composites: {}
  }


  type FasilitetGetPayload<S extends boolean | null | undefined | FasilitetDefaultArgs> = $Result.GetResult<Prisma.$FasilitetPayload, S>

  type FasilitetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FasilitetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FasilitetCountAggregateInputType | true
    }

  export interface FasilitetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fasilitet'], meta: { name: 'Fasilitet' } }
    /**
     * Find zero or one Fasilitet that matches the filter.
     * @param {FasilitetFindUniqueArgs} args - Arguments to find a Fasilitet
     * @example
     * // Get one Fasilitet
     * const fasilitet = await prisma.fasilitet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FasilitetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FasilitetFindUniqueArgs<ExtArgs>>
    ): Prisma__FasilitetClient<$Result.GetResult<Prisma.$FasilitetPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Fasilitet that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FasilitetFindUniqueOrThrowArgs} args - Arguments to find a Fasilitet
     * @example
     * // Get one Fasilitet
     * const fasilitet = await prisma.fasilitet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FasilitetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FasilitetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FasilitetClient<$Result.GetResult<Prisma.$FasilitetPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Fasilitet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitetFindFirstArgs} args - Arguments to find a Fasilitet
     * @example
     * // Get one Fasilitet
     * const fasilitet = await prisma.fasilitet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FasilitetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FasilitetFindFirstArgs<ExtArgs>>
    ): Prisma__FasilitetClient<$Result.GetResult<Prisma.$FasilitetPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Fasilitet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitetFindFirstOrThrowArgs} args - Arguments to find a Fasilitet
     * @example
     * // Get one Fasilitet
     * const fasilitet = await prisma.fasilitet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FasilitetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FasilitetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FasilitetClient<$Result.GetResult<Prisma.$FasilitetPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fasilitets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fasilitets
     * const fasilitets = await prisma.fasilitet.findMany()
     * 
     * // Get first 10 Fasilitets
     * const fasilitets = await prisma.fasilitet.findMany({ take: 10 })
     * 
     * // Only select the `fasilitetNr`
     * const fasilitetWithFasilitetNrOnly = await prisma.fasilitet.findMany({ select: { fasilitetNr: true } })
     * 
    **/
    findMany<T extends FasilitetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FasilitetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FasilitetPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Fasilitet.
     * @param {FasilitetCreateArgs} args - Arguments to create a Fasilitet.
     * @example
     * // Create one Fasilitet
     * const Fasilitet = await prisma.fasilitet.create({
     *   data: {
     *     // ... data to create a Fasilitet
     *   }
     * })
     * 
    **/
    create<T extends FasilitetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FasilitetCreateArgs<ExtArgs>>
    ): Prisma__FasilitetClient<$Result.GetResult<Prisma.$FasilitetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fasilitets.
     *     @param {FasilitetCreateManyArgs} args - Arguments to create many Fasilitets.
     *     @example
     *     // Create many Fasilitets
     *     const fasilitet = await prisma.fasilitet.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FasilitetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FasilitetCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fasilitet.
     * @param {FasilitetDeleteArgs} args - Arguments to delete one Fasilitet.
     * @example
     * // Delete one Fasilitet
     * const Fasilitet = await prisma.fasilitet.delete({
     *   where: {
     *     // ... filter to delete one Fasilitet
     *   }
     * })
     * 
    **/
    delete<T extends FasilitetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FasilitetDeleteArgs<ExtArgs>>
    ): Prisma__FasilitetClient<$Result.GetResult<Prisma.$FasilitetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Fasilitet.
     * @param {FasilitetUpdateArgs} args - Arguments to update one Fasilitet.
     * @example
     * // Update one Fasilitet
     * const fasilitet = await prisma.fasilitet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FasilitetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FasilitetUpdateArgs<ExtArgs>>
    ): Prisma__FasilitetClient<$Result.GetResult<Prisma.$FasilitetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fasilitets.
     * @param {FasilitetDeleteManyArgs} args - Arguments to filter Fasilitets to delete.
     * @example
     * // Delete a few Fasilitets
     * const { count } = await prisma.fasilitet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FasilitetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FasilitetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fasilitets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fasilitets
     * const fasilitet = await prisma.fasilitet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FasilitetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FasilitetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fasilitet.
     * @param {FasilitetUpsertArgs} args - Arguments to update or create a Fasilitet.
     * @example
     * // Update or create a Fasilitet
     * const fasilitet = await prisma.fasilitet.upsert({
     *   create: {
     *     // ... data to create a Fasilitet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fasilitet we want to update
     *   }
     * })
    **/
    upsert<T extends FasilitetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FasilitetUpsertArgs<ExtArgs>>
    ): Prisma__FasilitetClient<$Result.GetResult<Prisma.$FasilitetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Fasilitets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitetCountArgs} args - Arguments to filter Fasilitets to count.
     * @example
     * // Count the number of Fasilitets
     * const count = await prisma.fasilitet.count({
     *   where: {
     *     // ... the filter for the Fasilitets we want to count
     *   }
     * })
    **/
    count<T extends FasilitetCountArgs>(
      args?: Subset<T, FasilitetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FasilitetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fasilitet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FasilitetAggregateArgs>(args: Subset<T, FasilitetAggregateArgs>): Prisma.PrismaPromise<GetFasilitetAggregateType<T>>

    /**
     * Group by Fasilitet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FasilitetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FasilitetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FasilitetGroupByArgs['orderBy'] }
        : { orderBy?: FasilitetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FasilitetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFasilitetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fasilitet model
   */
  readonly fields: FasilitetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fasilitet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FasilitetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    plasser<T extends Fasilitet$plasserArgs<ExtArgs> = {}>(args?: Subset<T, Fasilitet$plasserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlassPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Fasilitet model
   */ 
  interface FasilitetFieldRefs {
    readonly fasilitetNr: FieldRef<"Fasilitet", 'Int'>
    readonly navn: FieldRef<"Fasilitet", 'String'>
    readonly pris: FieldRef<"Fasilitet", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Fasilitet findUnique
   */
  export type FasilitetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitet
     */
    select?: FasilitetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FasilitetInclude<ExtArgs> | null
    /**
     * Filter, which Fasilitet to fetch.
     */
    where: FasilitetWhereUniqueInput
  }


  /**
   * Fasilitet findUniqueOrThrow
   */
  export type FasilitetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitet
     */
    select?: FasilitetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FasilitetInclude<ExtArgs> | null
    /**
     * Filter, which Fasilitet to fetch.
     */
    where: FasilitetWhereUniqueInput
  }


  /**
   * Fasilitet findFirst
   */
  export type FasilitetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitet
     */
    select?: FasilitetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FasilitetInclude<ExtArgs> | null
    /**
     * Filter, which Fasilitet to fetch.
     */
    where?: FasilitetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fasilitets to fetch.
     */
    orderBy?: FasilitetOrderByWithRelationInput | FasilitetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fasilitets.
     */
    cursor?: FasilitetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fasilitets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fasilitets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fasilitets.
     */
    distinct?: FasilitetScalarFieldEnum | FasilitetScalarFieldEnum[]
  }


  /**
   * Fasilitet findFirstOrThrow
   */
  export type FasilitetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitet
     */
    select?: FasilitetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FasilitetInclude<ExtArgs> | null
    /**
     * Filter, which Fasilitet to fetch.
     */
    where?: FasilitetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fasilitets to fetch.
     */
    orderBy?: FasilitetOrderByWithRelationInput | FasilitetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fasilitets.
     */
    cursor?: FasilitetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fasilitets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fasilitets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fasilitets.
     */
    distinct?: FasilitetScalarFieldEnum | FasilitetScalarFieldEnum[]
  }


  /**
   * Fasilitet findMany
   */
  export type FasilitetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitet
     */
    select?: FasilitetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FasilitetInclude<ExtArgs> | null
    /**
     * Filter, which Fasilitets to fetch.
     */
    where?: FasilitetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fasilitets to fetch.
     */
    orderBy?: FasilitetOrderByWithRelationInput | FasilitetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fasilitets.
     */
    cursor?: FasilitetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fasilitets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fasilitets.
     */
    skip?: number
    distinct?: FasilitetScalarFieldEnum | FasilitetScalarFieldEnum[]
  }


  /**
   * Fasilitet create
   */
  export type FasilitetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitet
     */
    select?: FasilitetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FasilitetInclude<ExtArgs> | null
    /**
     * The data needed to create a Fasilitet.
     */
    data: XOR<FasilitetCreateInput, FasilitetUncheckedCreateInput>
  }


  /**
   * Fasilitet createMany
   */
  export type FasilitetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fasilitets.
     */
    data: FasilitetCreateManyInput | FasilitetCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Fasilitet update
   */
  export type FasilitetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitet
     */
    select?: FasilitetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FasilitetInclude<ExtArgs> | null
    /**
     * The data needed to update a Fasilitet.
     */
    data: XOR<FasilitetUpdateInput, FasilitetUncheckedUpdateInput>
    /**
     * Choose, which Fasilitet to update.
     */
    where: FasilitetWhereUniqueInput
  }


  /**
   * Fasilitet updateMany
   */
  export type FasilitetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fasilitets.
     */
    data: XOR<FasilitetUpdateManyMutationInput, FasilitetUncheckedUpdateManyInput>
    /**
     * Filter which Fasilitets to update
     */
    where?: FasilitetWhereInput
  }


  /**
   * Fasilitet upsert
   */
  export type FasilitetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitet
     */
    select?: FasilitetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FasilitetInclude<ExtArgs> | null
    /**
     * The filter to search for the Fasilitet to update in case it exists.
     */
    where: FasilitetWhereUniqueInput
    /**
     * In case the Fasilitet found by the `where` argument doesn't exist, create a new Fasilitet with this data.
     */
    create: XOR<FasilitetCreateInput, FasilitetUncheckedCreateInput>
    /**
     * In case the Fasilitet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FasilitetUpdateInput, FasilitetUncheckedUpdateInput>
  }


  /**
   * Fasilitet delete
   */
  export type FasilitetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitet
     */
    select?: FasilitetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FasilitetInclude<ExtArgs> | null
    /**
     * Filter which Fasilitet to delete.
     */
    where: FasilitetWhereUniqueInput
  }


  /**
   * Fasilitet deleteMany
   */
  export type FasilitetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fasilitets to delete
     */
    where?: FasilitetWhereInput
  }


  /**
   * Fasilitet.plasser
   */
  export type Fasilitet$plasserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plass
     */
    select?: PlassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlassInclude<ExtArgs> | null
    where?: PlassWhereInput
    orderBy?: PlassOrderByWithRelationInput | PlassOrderByWithRelationInput[]
    cursor?: PlassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlassScalarFieldEnum | PlassScalarFieldEnum[]
  }


  /**
   * Fasilitet without action
   */
  export type FasilitetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fasilitet
     */
    select?: FasilitetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FasilitetInclude<ExtArgs> | null
  }



  /**
   * Model Plass
   */

  export type AggregatePlass = {
    _count: PlassCountAggregateOutputType | null
    _avg: PlassAvgAggregateOutputType | null
    _sum: PlassSumAggregateOutputType | null
    _min: PlassMinAggregateOutputType | null
    _max: PlassMaxAggregateOutputType | null
  }

  export type PlassAvgAggregateOutputType = {
    plassNr: number | null
    fasilitetNrId: number | null
  }

  export type PlassSumAggregateOutputType = {
    plassNr: number | null
    fasilitetNrId: number | null
  }

  export type PlassMinAggregateOutputType = {
    plassNr: number | null
    fasilitetNrId: number | null
  }

  export type PlassMaxAggregateOutputType = {
    plassNr: number | null
    fasilitetNrId: number | null
  }

  export type PlassCountAggregateOutputType = {
    plassNr: number
    fasilitetNrId: number
    _all: number
  }


  export type PlassAvgAggregateInputType = {
    plassNr?: true
    fasilitetNrId?: true
  }

  export type PlassSumAggregateInputType = {
    plassNr?: true
    fasilitetNrId?: true
  }

  export type PlassMinAggregateInputType = {
    plassNr?: true
    fasilitetNrId?: true
  }

  export type PlassMaxAggregateInputType = {
    plassNr?: true
    fasilitetNrId?: true
  }

  export type PlassCountAggregateInputType = {
    plassNr?: true
    fasilitetNrId?: true
    _all?: true
  }

  export type PlassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plass to aggregate.
     */
    where?: PlassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plasses to fetch.
     */
    orderBy?: PlassOrderByWithRelationInput | PlassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plasses
    **/
    _count?: true | PlassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlassMaxAggregateInputType
  }

  export type GetPlassAggregateType<T extends PlassAggregateArgs> = {
        [P in keyof T & keyof AggregatePlass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlass[P]>
      : GetScalarType<T[P], AggregatePlass[P]>
  }




  export type PlassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlassWhereInput
    orderBy?: PlassOrderByWithAggregationInput | PlassOrderByWithAggregationInput[]
    by: PlassScalarFieldEnum[] | PlassScalarFieldEnum
    having?: PlassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlassCountAggregateInputType | true
    _avg?: PlassAvgAggregateInputType
    _sum?: PlassSumAggregateInputType
    _min?: PlassMinAggregateInputType
    _max?: PlassMaxAggregateInputType
  }

  export type PlassGroupByOutputType = {
    plassNr: number
    fasilitetNrId: number
    _count: PlassCountAggregateOutputType | null
    _avg: PlassAvgAggregateOutputType | null
    _sum: PlassSumAggregateOutputType | null
    _min: PlassMinAggregateOutputType | null
    _max: PlassMaxAggregateOutputType | null
  }

  type GetPlassGroupByPayload<T extends PlassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlassGroupByOutputType[P]>
            : GetScalarType<T[P], PlassGroupByOutputType[P]>
        }
      >
    >


  export type PlassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    plassNr?: boolean
    fasilitetNrId?: boolean
    fasilitet?: boolean | FasilitetDefaultArgs<ExtArgs>
    reservasjoner?: boolean | Plass$reservasjonerArgs<ExtArgs>
    _count?: boolean | PlassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plass"]>

  export type PlassSelectScalar = {
    plassNr?: boolean
    fasilitetNrId?: boolean
  }

  export type PlassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fasilitet?: boolean | FasilitetDefaultArgs<ExtArgs>
    reservasjoner?: boolean | Plass$reservasjonerArgs<ExtArgs>
    _count?: boolean | PlassCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PlassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plass"
    objects: {
      fasilitet: Prisma.$FasilitetPayload<ExtArgs>
      reservasjoner: Prisma.$ReservasjonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      plassNr: number
      fasilitetNrId: number
    }, ExtArgs["result"]["plass"]>
    composites: {}
  }


  type PlassGetPayload<S extends boolean | null | undefined | PlassDefaultArgs> = $Result.GetResult<Prisma.$PlassPayload, S>

  type PlassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlassFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlassCountAggregateInputType | true
    }

  export interface PlassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plass'], meta: { name: 'Plass' } }
    /**
     * Find zero or one Plass that matches the filter.
     * @param {PlassFindUniqueArgs} args - Arguments to find a Plass
     * @example
     * // Get one Plass
     * const plass = await prisma.plass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlassFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlassFindUniqueArgs<ExtArgs>>
    ): Prisma__PlassClient<$Result.GetResult<Prisma.$PlassPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Plass that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlassFindUniqueOrThrowArgs} args - Arguments to find a Plass
     * @example
     * // Get one Plass
     * const plass = await prisma.plass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlassFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlassFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlassClient<$Result.GetResult<Prisma.$PlassPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Plass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlassFindFirstArgs} args - Arguments to find a Plass
     * @example
     * // Get one Plass
     * const plass = await prisma.plass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlassFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlassFindFirstArgs<ExtArgs>>
    ): Prisma__PlassClient<$Result.GetResult<Prisma.$PlassPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Plass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlassFindFirstOrThrowArgs} args - Arguments to find a Plass
     * @example
     * // Get one Plass
     * const plass = await prisma.plass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlassFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlassFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlassClient<$Result.GetResult<Prisma.$PlassPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Plasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlassFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plasses
     * const plasses = await prisma.plass.findMany()
     * 
     * // Get first 10 Plasses
     * const plasses = await prisma.plass.findMany({ take: 10 })
     * 
     * // Only select the `plassNr`
     * const plassWithPlassNrOnly = await prisma.plass.findMany({ select: { plassNr: true } })
     * 
    **/
    findMany<T extends PlassFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlassFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlassPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Plass.
     * @param {PlassCreateArgs} args - Arguments to create a Plass.
     * @example
     * // Create one Plass
     * const Plass = await prisma.plass.create({
     *   data: {
     *     // ... data to create a Plass
     *   }
     * })
     * 
    **/
    create<T extends PlassCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlassCreateArgs<ExtArgs>>
    ): Prisma__PlassClient<$Result.GetResult<Prisma.$PlassPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Plasses.
     *     @param {PlassCreateManyArgs} args - Arguments to create many Plasses.
     *     @example
     *     // Create many Plasses
     *     const plass = await prisma.plass.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlassCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlassCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plass.
     * @param {PlassDeleteArgs} args - Arguments to delete one Plass.
     * @example
     * // Delete one Plass
     * const Plass = await prisma.plass.delete({
     *   where: {
     *     // ... filter to delete one Plass
     *   }
     * })
     * 
    **/
    delete<T extends PlassDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlassDeleteArgs<ExtArgs>>
    ): Prisma__PlassClient<$Result.GetResult<Prisma.$PlassPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Plass.
     * @param {PlassUpdateArgs} args - Arguments to update one Plass.
     * @example
     * // Update one Plass
     * const plass = await prisma.plass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlassUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlassUpdateArgs<ExtArgs>>
    ): Prisma__PlassClient<$Result.GetResult<Prisma.$PlassPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Plasses.
     * @param {PlassDeleteManyArgs} args - Arguments to filter Plasses to delete.
     * @example
     * // Delete a few Plasses
     * const { count } = await prisma.plass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlassDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlassDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plasses
     * const plass = await prisma.plass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlassUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlassUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plass.
     * @param {PlassUpsertArgs} args - Arguments to update or create a Plass.
     * @example
     * // Update or create a Plass
     * const plass = await prisma.plass.upsert({
     *   create: {
     *     // ... data to create a Plass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plass we want to update
     *   }
     * })
    **/
    upsert<T extends PlassUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlassUpsertArgs<ExtArgs>>
    ): Prisma__PlassClient<$Result.GetResult<Prisma.$PlassPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Plasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlassCountArgs} args - Arguments to filter Plasses to count.
     * @example
     * // Count the number of Plasses
     * const count = await prisma.plass.count({
     *   where: {
     *     // ... the filter for the Plasses we want to count
     *   }
     * })
    **/
    count<T extends PlassCountArgs>(
      args?: Subset<T, PlassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlassAggregateArgs>(args: Subset<T, PlassAggregateArgs>): Prisma.PrismaPromise<GetPlassAggregateType<T>>

    /**
     * Group by Plass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlassGroupByArgs['orderBy'] }
        : { orderBy?: PlassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plass model
   */
  readonly fields: PlassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fasilitet<T extends FasilitetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FasilitetDefaultArgs<ExtArgs>>): Prisma__FasilitetClient<$Result.GetResult<Prisma.$FasilitetPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    reservasjoner<T extends Plass$reservasjonerArgs<ExtArgs> = {}>(args?: Subset<T, Plass$reservasjonerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasjonPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Plass model
   */ 
  interface PlassFieldRefs {
    readonly plassNr: FieldRef<"Plass", 'Int'>
    readonly fasilitetNrId: FieldRef<"Plass", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Plass findUnique
   */
  export type PlassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plass
     */
    select?: PlassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlassInclude<ExtArgs> | null
    /**
     * Filter, which Plass to fetch.
     */
    where: PlassWhereUniqueInput
  }


  /**
   * Plass findUniqueOrThrow
   */
  export type PlassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plass
     */
    select?: PlassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlassInclude<ExtArgs> | null
    /**
     * Filter, which Plass to fetch.
     */
    where: PlassWhereUniqueInput
  }


  /**
   * Plass findFirst
   */
  export type PlassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plass
     */
    select?: PlassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlassInclude<ExtArgs> | null
    /**
     * Filter, which Plass to fetch.
     */
    where?: PlassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plasses to fetch.
     */
    orderBy?: PlassOrderByWithRelationInput | PlassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plasses.
     */
    cursor?: PlassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plasses.
     */
    distinct?: PlassScalarFieldEnum | PlassScalarFieldEnum[]
  }


  /**
   * Plass findFirstOrThrow
   */
  export type PlassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plass
     */
    select?: PlassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlassInclude<ExtArgs> | null
    /**
     * Filter, which Plass to fetch.
     */
    where?: PlassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plasses to fetch.
     */
    orderBy?: PlassOrderByWithRelationInput | PlassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plasses.
     */
    cursor?: PlassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plasses.
     */
    distinct?: PlassScalarFieldEnum | PlassScalarFieldEnum[]
  }


  /**
   * Plass findMany
   */
  export type PlassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plass
     */
    select?: PlassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlassInclude<ExtArgs> | null
    /**
     * Filter, which Plasses to fetch.
     */
    where?: PlassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plasses to fetch.
     */
    orderBy?: PlassOrderByWithRelationInput | PlassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plasses.
     */
    cursor?: PlassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plasses.
     */
    skip?: number
    distinct?: PlassScalarFieldEnum | PlassScalarFieldEnum[]
  }


  /**
   * Plass create
   */
  export type PlassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plass
     */
    select?: PlassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlassInclude<ExtArgs> | null
    /**
     * The data needed to create a Plass.
     */
    data: XOR<PlassCreateInput, PlassUncheckedCreateInput>
  }


  /**
   * Plass createMany
   */
  export type PlassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plasses.
     */
    data: PlassCreateManyInput | PlassCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Plass update
   */
  export type PlassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plass
     */
    select?: PlassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlassInclude<ExtArgs> | null
    /**
     * The data needed to update a Plass.
     */
    data: XOR<PlassUpdateInput, PlassUncheckedUpdateInput>
    /**
     * Choose, which Plass to update.
     */
    where: PlassWhereUniqueInput
  }


  /**
   * Plass updateMany
   */
  export type PlassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plasses.
     */
    data: XOR<PlassUpdateManyMutationInput, PlassUncheckedUpdateManyInput>
    /**
     * Filter which Plasses to update
     */
    where?: PlassWhereInput
  }


  /**
   * Plass upsert
   */
  export type PlassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plass
     */
    select?: PlassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlassInclude<ExtArgs> | null
    /**
     * The filter to search for the Plass to update in case it exists.
     */
    where: PlassWhereUniqueInput
    /**
     * In case the Plass found by the `where` argument doesn't exist, create a new Plass with this data.
     */
    create: XOR<PlassCreateInput, PlassUncheckedCreateInput>
    /**
     * In case the Plass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlassUpdateInput, PlassUncheckedUpdateInput>
  }


  /**
   * Plass delete
   */
  export type PlassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plass
     */
    select?: PlassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlassInclude<ExtArgs> | null
    /**
     * Filter which Plass to delete.
     */
    where: PlassWhereUniqueInput
  }


  /**
   * Plass deleteMany
   */
  export type PlassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plasses to delete
     */
    where?: PlassWhereInput
  }


  /**
   * Plass.reservasjoner
   */
  export type Plass$reservasjonerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasjon
     */
    select?: ReservasjonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonInclude<ExtArgs> | null
    where?: ReservasjonWhereInput
    orderBy?: ReservasjonOrderByWithRelationInput | ReservasjonOrderByWithRelationInput[]
    cursor?: ReservasjonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasjonScalarFieldEnum | ReservasjonScalarFieldEnum[]
  }


  /**
   * Plass without action
   */
  export type PlassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plass
     */
    select?: PlassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlassInclude<ExtArgs> | null
  }



  /**
   * Model Bruker
   */

  export type AggregateBruker = {
    _count: BrukerCountAggregateOutputType | null
    _avg: BrukerAvgAggregateOutputType | null
    _sum: BrukerSumAggregateOutputType | null
    _min: BrukerMinAggregateOutputType | null
    _max: BrukerMaxAggregateOutputType | null
  }

  export type BrukerAvgAggregateOutputType = {
    brukerNr: number | null
  }

  export type BrukerSumAggregateOutputType = {
    brukerNr: number | null
  }

  export type BrukerMinAggregateOutputType = {
    brukerNr: number | null
    fornavn: string | null
    etternavn: string | null
    epost: string | null
    telefon: string | null
    passord: string | null
  }

  export type BrukerMaxAggregateOutputType = {
    brukerNr: number | null
    fornavn: string | null
    etternavn: string | null
    epost: string | null
    telefon: string | null
    passord: string | null
  }

  export type BrukerCountAggregateOutputType = {
    brukerNr: number
    fornavn: number
    etternavn: number
    epost: number
    telefon: number
    passord: number
    _all: number
  }


  export type BrukerAvgAggregateInputType = {
    brukerNr?: true
  }

  export type BrukerSumAggregateInputType = {
    brukerNr?: true
  }

  export type BrukerMinAggregateInputType = {
    brukerNr?: true
    fornavn?: true
    etternavn?: true
    epost?: true
    telefon?: true
    passord?: true
  }

  export type BrukerMaxAggregateInputType = {
    brukerNr?: true
    fornavn?: true
    etternavn?: true
    epost?: true
    telefon?: true
    passord?: true
  }

  export type BrukerCountAggregateInputType = {
    brukerNr?: true
    fornavn?: true
    etternavn?: true
    epost?: true
    telefon?: true
    passord?: true
    _all?: true
  }

  export type BrukerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bruker to aggregate.
     */
    where?: BrukerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brukers to fetch.
     */
    orderBy?: BrukerOrderByWithRelationInput | BrukerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrukerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brukers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brukers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brukers
    **/
    _count?: true | BrukerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrukerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrukerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrukerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrukerMaxAggregateInputType
  }

  export type GetBrukerAggregateType<T extends BrukerAggregateArgs> = {
        [P in keyof T & keyof AggregateBruker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBruker[P]>
      : GetScalarType<T[P], AggregateBruker[P]>
  }




  export type BrukerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrukerWhereInput
    orderBy?: BrukerOrderByWithAggregationInput | BrukerOrderByWithAggregationInput[]
    by: BrukerScalarFieldEnum[] | BrukerScalarFieldEnum
    having?: BrukerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrukerCountAggregateInputType | true
    _avg?: BrukerAvgAggregateInputType
    _sum?: BrukerSumAggregateInputType
    _min?: BrukerMinAggregateInputType
    _max?: BrukerMaxAggregateInputType
  }

  export type BrukerGroupByOutputType = {
    brukerNr: number
    fornavn: string
    etternavn: string
    epost: string
    telefon: string
    passord: string
    _count: BrukerCountAggregateOutputType | null
    _avg: BrukerAvgAggregateOutputType | null
    _sum: BrukerSumAggregateOutputType | null
    _min: BrukerMinAggregateOutputType | null
    _max: BrukerMaxAggregateOutputType | null
  }

  type GetBrukerGroupByPayload<T extends BrukerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrukerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrukerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrukerGroupByOutputType[P]>
            : GetScalarType<T[P], BrukerGroupByOutputType[P]>
        }
      >
    >


  export type BrukerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    brukerNr?: boolean
    fornavn?: boolean
    etternavn?: boolean
    epost?: boolean
    telefon?: boolean
    passord?: boolean
    reservasjoner?: boolean | Bruker$reservasjonerArgs<ExtArgs>
    _count?: boolean | BrukerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bruker"]>

  export type BrukerSelectScalar = {
    brukerNr?: boolean
    fornavn?: boolean
    etternavn?: boolean
    epost?: boolean
    telefon?: boolean
    passord?: boolean
  }

  export type BrukerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservasjoner?: boolean | Bruker$reservasjonerArgs<ExtArgs>
    _count?: boolean | BrukerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BrukerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bruker"
    objects: {
      reservasjoner: Prisma.$ReservasjonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      brukerNr: number
      fornavn: string
      etternavn: string
      epost: string
      telefon: string
      passord: string
    }, ExtArgs["result"]["bruker"]>
    composites: {}
  }


  type BrukerGetPayload<S extends boolean | null | undefined | BrukerDefaultArgs> = $Result.GetResult<Prisma.$BrukerPayload, S>

  type BrukerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BrukerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BrukerCountAggregateInputType | true
    }

  export interface BrukerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bruker'], meta: { name: 'Bruker' } }
    /**
     * Find zero or one Bruker that matches the filter.
     * @param {BrukerFindUniqueArgs} args - Arguments to find a Bruker
     * @example
     * // Get one Bruker
     * const bruker = await prisma.bruker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BrukerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BrukerFindUniqueArgs<ExtArgs>>
    ): Prisma__BrukerClient<$Result.GetResult<Prisma.$BrukerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bruker that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BrukerFindUniqueOrThrowArgs} args - Arguments to find a Bruker
     * @example
     * // Get one Bruker
     * const bruker = await prisma.bruker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BrukerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrukerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BrukerClient<$Result.GetResult<Prisma.$BrukerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bruker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrukerFindFirstArgs} args - Arguments to find a Bruker
     * @example
     * // Get one Bruker
     * const bruker = await prisma.bruker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BrukerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BrukerFindFirstArgs<ExtArgs>>
    ): Prisma__BrukerClient<$Result.GetResult<Prisma.$BrukerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bruker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrukerFindFirstOrThrowArgs} args - Arguments to find a Bruker
     * @example
     * // Get one Bruker
     * const bruker = await prisma.bruker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BrukerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrukerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BrukerClient<$Result.GetResult<Prisma.$BrukerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Brukers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrukerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brukers
     * const brukers = await prisma.bruker.findMany()
     * 
     * // Get first 10 Brukers
     * const brukers = await prisma.bruker.findMany({ take: 10 })
     * 
     * // Only select the `brukerNr`
     * const brukerWithBrukerNrOnly = await prisma.bruker.findMany({ select: { brukerNr: true } })
     * 
    **/
    findMany<T extends BrukerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrukerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrukerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bruker.
     * @param {BrukerCreateArgs} args - Arguments to create a Bruker.
     * @example
     * // Create one Bruker
     * const Bruker = await prisma.bruker.create({
     *   data: {
     *     // ... data to create a Bruker
     *   }
     * })
     * 
    **/
    create<T extends BrukerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BrukerCreateArgs<ExtArgs>>
    ): Prisma__BrukerClient<$Result.GetResult<Prisma.$BrukerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Brukers.
     *     @param {BrukerCreateManyArgs} args - Arguments to create many Brukers.
     *     @example
     *     // Create many Brukers
     *     const bruker = await prisma.bruker.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BrukerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrukerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bruker.
     * @param {BrukerDeleteArgs} args - Arguments to delete one Bruker.
     * @example
     * // Delete one Bruker
     * const Bruker = await prisma.bruker.delete({
     *   where: {
     *     // ... filter to delete one Bruker
     *   }
     * })
     * 
    **/
    delete<T extends BrukerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BrukerDeleteArgs<ExtArgs>>
    ): Prisma__BrukerClient<$Result.GetResult<Prisma.$BrukerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bruker.
     * @param {BrukerUpdateArgs} args - Arguments to update one Bruker.
     * @example
     * // Update one Bruker
     * const bruker = await prisma.bruker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BrukerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BrukerUpdateArgs<ExtArgs>>
    ): Prisma__BrukerClient<$Result.GetResult<Prisma.$BrukerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Brukers.
     * @param {BrukerDeleteManyArgs} args - Arguments to filter Brukers to delete.
     * @example
     * // Delete a few Brukers
     * const { count } = await prisma.bruker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BrukerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrukerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brukers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrukerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brukers
     * const bruker = await prisma.bruker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BrukerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BrukerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bruker.
     * @param {BrukerUpsertArgs} args - Arguments to update or create a Bruker.
     * @example
     * // Update or create a Bruker
     * const bruker = await prisma.bruker.upsert({
     *   create: {
     *     // ... data to create a Bruker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bruker we want to update
     *   }
     * })
    **/
    upsert<T extends BrukerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BrukerUpsertArgs<ExtArgs>>
    ): Prisma__BrukerClient<$Result.GetResult<Prisma.$BrukerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Brukers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrukerCountArgs} args - Arguments to filter Brukers to count.
     * @example
     * // Count the number of Brukers
     * const count = await prisma.bruker.count({
     *   where: {
     *     // ... the filter for the Brukers we want to count
     *   }
     * })
    **/
    count<T extends BrukerCountArgs>(
      args?: Subset<T, BrukerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrukerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bruker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrukerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrukerAggregateArgs>(args: Subset<T, BrukerAggregateArgs>): Prisma.PrismaPromise<GetBrukerAggregateType<T>>

    /**
     * Group by Bruker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrukerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrukerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrukerGroupByArgs['orderBy'] }
        : { orderBy?: BrukerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrukerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrukerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bruker model
   */
  readonly fields: BrukerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bruker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrukerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    reservasjoner<T extends Bruker$reservasjonerArgs<ExtArgs> = {}>(args?: Subset<T, Bruker$reservasjonerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasjonPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Bruker model
   */ 
  interface BrukerFieldRefs {
    readonly brukerNr: FieldRef<"Bruker", 'Int'>
    readonly fornavn: FieldRef<"Bruker", 'String'>
    readonly etternavn: FieldRef<"Bruker", 'String'>
    readonly epost: FieldRef<"Bruker", 'String'>
    readonly telefon: FieldRef<"Bruker", 'String'>
    readonly passord: FieldRef<"Bruker", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Bruker findUnique
   */
  export type BrukerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bruker
     */
    select?: BrukerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrukerInclude<ExtArgs> | null
    /**
     * Filter, which Bruker to fetch.
     */
    where: BrukerWhereUniqueInput
  }


  /**
   * Bruker findUniqueOrThrow
   */
  export type BrukerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bruker
     */
    select?: BrukerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrukerInclude<ExtArgs> | null
    /**
     * Filter, which Bruker to fetch.
     */
    where: BrukerWhereUniqueInput
  }


  /**
   * Bruker findFirst
   */
  export type BrukerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bruker
     */
    select?: BrukerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrukerInclude<ExtArgs> | null
    /**
     * Filter, which Bruker to fetch.
     */
    where?: BrukerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brukers to fetch.
     */
    orderBy?: BrukerOrderByWithRelationInput | BrukerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brukers.
     */
    cursor?: BrukerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brukers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brukers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brukers.
     */
    distinct?: BrukerScalarFieldEnum | BrukerScalarFieldEnum[]
  }


  /**
   * Bruker findFirstOrThrow
   */
  export type BrukerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bruker
     */
    select?: BrukerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrukerInclude<ExtArgs> | null
    /**
     * Filter, which Bruker to fetch.
     */
    where?: BrukerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brukers to fetch.
     */
    orderBy?: BrukerOrderByWithRelationInput | BrukerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brukers.
     */
    cursor?: BrukerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brukers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brukers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brukers.
     */
    distinct?: BrukerScalarFieldEnum | BrukerScalarFieldEnum[]
  }


  /**
   * Bruker findMany
   */
  export type BrukerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bruker
     */
    select?: BrukerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrukerInclude<ExtArgs> | null
    /**
     * Filter, which Brukers to fetch.
     */
    where?: BrukerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brukers to fetch.
     */
    orderBy?: BrukerOrderByWithRelationInput | BrukerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brukers.
     */
    cursor?: BrukerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brukers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brukers.
     */
    skip?: number
    distinct?: BrukerScalarFieldEnum | BrukerScalarFieldEnum[]
  }


  /**
   * Bruker create
   */
  export type BrukerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bruker
     */
    select?: BrukerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrukerInclude<ExtArgs> | null
    /**
     * The data needed to create a Bruker.
     */
    data: XOR<BrukerCreateInput, BrukerUncheckedCreateInput>
  }


  /**
   * Bruker createMany
   */
  export type BrukerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brukers.
     */
    data: BrukerCreateManyInput | BrukerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Bruker update
   */
  export type BrukerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bruker
     */
    select?: BrukerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrukerInclude<ExtArgs> | null
    /**
     * The data needed to update a Bruker.
     */
    data: XOR<BrukerUpdateInput, BrukerUncheckedUpdateInput>
    /**
     * Choose, which Bruker to update.
     */
    where: BrukerWhereUniqueInput
  }


  /**
   * Bruker updateMany
   */
  export type BrukerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brukers.
     */
    data: XOR<BrukerUpdateManyMutationInput, BrukerUncheckedUpdateManyInput>
    /**
     * Filter which Brukers to update
     */
    where?: BrukerWhereInput
  }


  /**
   * Bruker upsert
   */
  export type BrukerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bruker
     */
    select?: BrukerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrukerInclude<ExtArgs> | null
    /**
     * The filter to search for the Bruker to update in case it exists.
     */
    where: BrukerWhereUniqueInput
    /**
     * In case the Bruker found by the `where` argument doesn't exist, create a new Bruker with this data.
     */
    create: XOR<BrukerCreateInput, BrukerUncheckedCreateInput>
    /**
     * In case the Bruker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrukerUpdateInput, BrukerUncheckedUpdateInput>
  }


  /**
   * Bruker delete
   */
  export type BrukerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bruker
     */
    select?: BrukerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrukerInclude<ExtArgs> | null
    /**
     * Filter which Bruker to delete.
     */
    where: BrukerWhereUniqueInput
  }


  /**
   * Bruker deleteMany
   */
  export type BrukerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brukers to delete
     */
    where?: BrukerWhereInput
  }


  /**
   * Bruker.reservasjoner
   */
  export type Bruker$reservasjonerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasjon
     */
    select?: ReservasjonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonInclude<ExtArgs> | null
    where?: ReservasjonWhereInput
    orderBy?: ReservasjonOrderByWithRelationInput | ReservasjonOrderByWithRelationInput[]
    cursor?: ReservasjonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasjonScalarFieldEnum | ReservasjonScalarFieldEnum[]
  }


  /**
   * Bruker without action
   */
  export type BrukerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bruker
     */
    select?: BrukerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrukerInclude<ExtArgs> | null
  }



  /**
   * Model Sone
   */

  export type AggregateSone = {
    _count: SoneCountAggregateOutputType | null
    _avg: SoneAvgAggregateOutputType | null
    _sum: SoneSumAggregateOutputType | null
    _min: SoneMinAggregateOutputType | null
    _max: SoneMaxAggregateOutputType | null
  }

  export type SoneAvgAggregateOutputType = {
    soneNr: number | null
  }

  export type SoneSumAggregateOutputType = {
    soneNr: number | null
  }

  export type SoneMinAggregateOutputType = {
    soneNr: number | null
    sonenavn: string | null
  }

  export type SoneMaxAggregateOutputType = {
    soneNr: number | null
    sonenavn: string | null
  }

  export type SoneCountAggregateOutputType = {
    soneNr: number
    sonenavn: number
    _all: number
  }


  export type SoneAvgAggregateInputType = {
    soneNr?: true
  }

  export type SoneSumAggregateInputType = {
    soneNr?: true
  }

  export type SoneMinAggregateInputType = {
    soneNr?: true
    sonenavn?: true
  }

  export type SoneMaxAggregateInputType = {
    soneNr?: true
    sonenavn?: true
  }

  export type SoneCountAggregateInputType = {
    soneNr?: true
    sonenavn?: true
    _all?: true
  }

  export type SoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sone to aggregate.
     */
    where?: SoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sones to fetch.
     */
    orderBy?: SoneOrderByWithRelationInput | SoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sones
    **/
    _count?: true | SoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoneMaxAggregateInputType
  }

  export type GetSoneAggregateType<T extends SoneAggregateArgs> = {
        [P in keyof T & keyof AggregateSone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSone[P]>
      : GetScalarType<T[P], AggregateSone[P]>
  }




  export type SoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoneWhereInput
    orderBy?: SoneOrderByWithAggregationInput | SoneOrderByWithAggregationInput[]
    by: SoneScalarFieldEnum[] | SoneScalarFieldEnum
    having?: SoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoneCountAggregateInputType | true
    _avg?: SoneAvgAggregateInputType
    _sum?: SoneSumAggregateInputType
    _min?: SoneMinAggregateInputType
    _max?: SoneMaxAggregateInputType
  }

  export type SoneGroupByOutputType = {
    soneNr: number
    sonenavn: string
    _count: SoneCountAggregateOutputType | null
    _avg: SoneAvgAggregateOutputType | null
    _sum: SoneSumAggregateOutputType | null
    _min: SoneMinAggregateOutputType | null
    _max: SoneMaxAggregateOutputType | null
  }

  type GetSoneGroupByPayload<T extends SoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoneGroupByOutputType[P]>
            : GetScalarType<T[P], SoneGroupByOutputType[P]>
        }
      >
    >


  export type SoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    soneNr?: boolean
    sonenavn?: boolean
    reservasjoner?: boolean | Sone$reservasjonerArgs<ExtArgs>
    _count?: boolean | SoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sone"]>

  export type SoneSelectScalar = {
    soneNr?: boolean
    sonenavn?: boolean
  }

  export type SoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservasjoner?: boolean | Sone$reservasjonerArgs<ExtArgs>
    _count?: boolean | SoneCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sone"
    objects: {
      reservasjoner: Prisma.$ReservasjonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      soneNr: number
      sonenavn: string
    }, ExtArgs["result"]["sone"]>
    composites: {}
  }


  type SoneGetPayload<S extends boolean | null | undefined | SoneDefaultArgs> = $Result.GetResult<Prisma.$SonePayload, S>

  type SoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SoneFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SoneCountAggregateInputType | true
    }

  export interface SoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sone'], meta: { name: 'Sone' } }
    /**
     * Find zero or one Sone that matches the filter.
     * @param {SoneFindUniqueArgs} args - Arguments to find a Sone
     * @example
     * // Get one Sone
     * const sone = await prisma.sone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SoneFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SoneFindUniqueArgs<ExtArgs>>
    ): Prisma__SoneClient<$Result.GetResult<Prisma.$SonePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Sone that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SoneFindUniqueOrThrowArgs} args - Arguments to find a Sone
     * @example
     * // Get one Sone
     * const sone = await prisma.sone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SoneFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SoneFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SoneClient<$Result.GetResult<Prisma.$SonePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Sone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoneFindFirstArgs} args - Arguments to find a Sone
     * @example
     * // Get one Sone
     * const sone = await prisma.sone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SoneFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SoneFindFirstArgs<ExtArgs>>
    ): Prisma__SoneClient<$Result.GetResult<Prisma.$SonePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Sone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoneFindFirstOrThrowArgs} args - Arguments to find a Sone
     * @example
     * // Get one Sone
     * const sone = await prisma.sone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SoneFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SoneFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SoneClient<$Result.GetResult<Prisma.$SonePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoneFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sones
     * const sones = await prisma.sone.findMany()
     * 
     * // Get first 10 Sones
     * const sones = await prisma.sone.findMany({ take: 10 })
     * 
     * // Only select the `soneNr`
     * const soneWithSoneNrOnly = await prisma.sone.findMany({ select: { soneNr: true } })
     * 
    **/
    findMany<T extends SoneFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SoneFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SonePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Sone.
     * @param {SoneCreateArgs} args - Arguments to create a Sone.
     * @example
     * // Create one Sone
     * const Sone = await prisma.sone.create({
     *   data: {
     *     // ... data to create a Sone
     *   }
     * })
     * 
    **/
    create<T extends SoneCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SoneCreateArgs<ExtArgs>>
    ): Prisma__SoneClient<$Result.GetResult<Prisma.$SonePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sones.
     *     @param {SoneCreateManyArgs} args - Arguments to create many Sones.
     *     @example
     *     // Create many Sones
     *     const sone = await prisma.sone.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SoneCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SoneCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sone.
     * @param {SoneDeleteArgs} args - Arguments to delete one Sone.
     * @example
     * // Delete one Sone
     * const Sone = await prisma.sone.delete({
     *   where: {
     *     // ... filter to delete one Sone
     *   }
     * })
     * 
    **/
    delete<T extends SoneDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SoneDeleteArgs<ExtArgs>>
    ): Prisma__SoneClient<$Result.GetResult<Prisma.$SonePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Sone.
     * @param {SoneUpdateArgs} args - Arguments to update one Sone.
     * @example
     * // Update one Sone
     * const sone = await prisma.sone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SoneUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SoneUpdateArgs<ExtArgs>>
    ): Prisma__SoneClient<$Result.GetResult<Prisma.$SonePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sones.
     * @param {SoneDeleteManyArgs} args - Arguments to filter Sones to delete.
     * @example
     * // Delete a few Sones
     * const { count } = await prisma.sone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SoneDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SoneDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sones
     * const sone = await prisma.sone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SoneUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SoneUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sone.
     * @param {SoneUpsertArgs} args - Arguments to update or create a Sone.
     * @example
     * // Update or create a Sone
     * const sone = await prisma.sone.upsert({
     *   create: {
     *     // ... data to create a Sone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sone we want to update
     *   }
     * })
    **/
    upsert<T extends SoneUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SoneUpsertArgs<ExtArgs>>
    ): Prisma__SoneClient<$Result.GetResult<Prisma.$SonePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoneCountArgs} args - Arguments to filter Sones to count.
     * @example
     * // Count the number of Sones
     * const count = await prisma.sone.count({
     *   where: {
     *     // ... the filter for the Sones we want to count
     *   }
     * })
    **/
    count<T extends SoneCountArgs>(
      args?: Subset<T, SoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SoneAggregateArgs>(args: Subset<T, SoneAggregateArgs>): Prisma.PrismaPromise<GetSoneAggregateType<T>>

    /**
     * Group by Sone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SoneGroupByArgs['orderBy'] }
        : { orderBy?: SoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sone model
   */
  readonly fields: SoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    reservasjoner<T extends Sone$reservasjonerArgs<ExtArgs> = {}>(args?: Subset<T, Sone$reservasjonerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasjonPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Sone model
   */ 
  interface SoneFieldRefs {
    readonly soneNr: FieldRef<"Sone", 'Int'>
    readonly sonenavn: FieldRef<"Sone", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Sone findUnique
   */
  export type SoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sone
     */
    select?: SoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoneInclude<ExtArgs> | null
    /**
     * Filter, which Sone to fetch.
     */
    where: SoneWhereUniqueInput
  }


  /**
   * Sone findUniqueOrThrow
   */
  export type SoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sone
     */
    select?: SoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoneInclude<ExtArgs> | null
    /**
     * Filter, which Sone to fetch.
     */
    where: SoneWhereUniqueInput
  }


  /**
   * Sone findFirst
   */
  export type SoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sone
     */
    select?: SoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoneInclude<ExtArgs> | null
    /**
     * Filter, which Sone to fetch.
     */
    where?: SoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sones to fetch.
     */
    orderBy?: SoneOrderByWithRelationInput | SoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sones.
     */
    cursor?: SoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sones.
     */
    distinct?: SoneScalarFieldEnum | SoneScalarFieldEnum[]
  }


  /**
   * Sone findFirstOrThrow
   */
  export type SoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sone
     */
    select?: SoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoneInclude<ExtArgs> | null
    /**
     * Filter, which Sone to fetch.
     */
    where?: SoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sones to fetch.
     */
    orderBy?: SoneOrderByWithRelationInput | SoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sones.
     */
    cursor?: SoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sones.
     */
    distinct?: SoneScalarFieldEnum | SoneScalarFieldEnum[]
  }


  /**
   * Sone findMany
   */
  export type SoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sone
     */
    select?: SoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoneInclude<ExtArgs> | null
    /**
     * Filter, which Sones to fetch.
     */
    where?: SoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sones to fetch.
     */
    orderBy?: SoneOrderByWithRelationInput | SoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sones.
     */
    cursor?: SoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sones.
     */
    skip?: number
    distinct?: SoneScalarFieldEnum | SoneScalarFieldEnum[]
  }


  /**
   * Sone create
   */
  export type SoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sone
     */
    select?: SoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Sone.
     */
    data: XOR<SoneCreateInput, SoneUncheckedCreateInput>
  }


  /**
   * Sone createMany
   */
  export type SoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sones.
     */
    data: SoneCreateManyInput | SoneCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Sone update
   */
  export type SoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sone
     */
    select?: SoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Sone.
     */
    data: XOR<SoneUpdateInput, SoneUncheckedUpdateInput>
    /**
     * Choose, which Sone to update.
     */
    where: SoneWhereUniqueInput
  }


  /**
   * Sone updateMany
   */
  export type SoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sones.
     */
    data: XOR<SoneUpdateManyMutationInput, SoneUncheckedUpdateManyInput>
    /**
     * Filter which Sones to update
     */
    where?: SoneWhereInput
  }


  /**
   * Sone upsert
   */
  export type SoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sone
     */
    select?: SoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Sone to update in case it exists.
     */
    where: SoneWhereUniqueInput
    /**
     * In case the Sone found by the `where` argument doesn't exist, create a new Sone with this data.
     */
    create: XOR<SoneCreateInput, SoneUncheckedCreateInput>
    /**
     * In case the Sone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SoneUpdateInput, SoneUncheckedUpdateInput>
  }


  /**
   * Sone delete
   */
  export type SoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sone
     */
    select?: SoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoneInclude<ExtArgs> | null
    /**
     * Filter which Sone to delete.
     */
    where: SoneWhereUniqueInput
  }


  /**
   * Sone deleteMany
   */
  export type SoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sones to delete
     */
    where?: SoneWhereInput
  }


  /**
   * Sone.reservasjoner
   */
  export type Sone$reservasjonerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasjon
     */
    select?: ReservasjonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonInclude<ExtArgs> | null
    where?: ReservasjonWhereInput
    orderBy?: ReservasjonOrderByWithRelationInput | ReservasjonOrderByWithRelationInput[]
    cursor?: ReservasjonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasjonScalarFieldEnum | ReservasjonScalarFieldEnum[]
  }


  /**
   * Sone without action
   */
  export type SoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sone
     */
    select?: SoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SoneInclude<ExtArgs> | null
  }



  /**
   * Model Utleietjeneste
   */

  export type AggregateUtleietjeneste = {
    _count: UtleietjenesteCountAggregateOutputType | null
    _avg: UtleietjenesteAvgAggregateOutputType | null
    _sum: UtleietjenesteSumAggregateOutputType | null
    _min: UtleietjenesteMinAggregateOutputType | null
    _max: UtleietjenesteMaxAggregateOutputType | null
  }

  export type UtleietjenesteAvgAggregateOutputType = {
    utleieTjenesteNr: number | null
    pris: number | null
  }

  export type UtleietjenesteSumAggregateOutputType = {
    utleieTjenesteNr: number | null
    pris: number | null
  }

  export type UtleietjenesteMinAggregateOutputType = {
    utleieTjenesteNr: number | null
    tjenestenavn: string | null
    dagerTilgj: string | null
    tilgjTid: string | null
    pris: number | null
  }

  export type UtleietjenesteMaxAggregateOutputType = {
    utleieTjenesteNr: number | null
    tjenestenavn: string | null
    dagerTilgj: string | null
    tilgjTid: string | null
    pris: number | null
  }

  export type UtleietjenesteCountAggregateOutputType = {
    utleieTjenesteNr: number
    tjenestenavn: number
    dagerTilgj: number
    tilgjTid: number
    pris: number
    _all: number
  }


  export type UtleietjenesteAvgAggregateInputType = {
    utleieTjenesteNr?: true
    pris?: true
  }

  export type UtleietjenesteSumAggregateInputType = {
    utleieTjenesteNr?: true
    pris?: true
  }

  export type UtleietjenesteMinAggregateInputType = {
    utleieTjenesteNr?: true
    tjenestenavn?: true
    dagerTilgj?: true
    tilgjTid?: true
    pris?: true
  }

  export type UtleietjenesteMaxAggregateInputType = {
    utleieTjenesteNr?: true
    tjenestenavn?: true
    dagerTilgj?: true
    tilgjTid?: true
    pris?: true
  }

  export type UtleietjenesteCountAggregateInputType = {
    utleieTjenesteNr?: true
    tjenestenavn?: true
    dagerTilgj?: true
    tilgjTid?: true
    pris?: true
    _all?: true
  }

  export type UtleietjenesteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utleietjeneste to aggregate.
     */
    where?: UtleietjenesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utleietjenestes to fetch.
     */
    orderBy?: UtleietjenesteOrderByWithRelationInput | UtleietjenesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtleietjenesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utleietjenestes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utleietjenestes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utleietjenestes
    **/
    _count?: true | UtleietjenesteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtleietjenesteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtleietjenesteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtleietjenesteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtleietjenesteMaxAggregateInputType
  }

  export type GetUtleietjenesteAggregateType<T extends UtleietjenesteAggregateArgs> = {
        [P in keyof T & keyof AggregateUtleietjeneste]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtleietjeneste[P]>
      : GetScalarType<T[P], AggregateUtleietjeneste[P]>
  }




  export type UtleietjenesteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtleietjenesteWhereInput
    orderBy?: UtleietjenesteOrderByWithAggregationInput | UtleietjenesteOrderByWithAggregationInput[]
    by: UtleietjenesteScalarFieldEnum[] | UtleietjenesteScalarFieldEnum
    having?: UtleietjenesteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtleietjenesteCountAggregateInputType | true
    _avg?: UtleietjenesteAvgAggregateInputType
    _sum?: UtleietjenesteSumAggregateInputType
    _min?: UtleietjenesteMinAggregateInputType
    _max?: UtleietjenesteMaxAggregateInputType
  }

  export type UtleietjenesteGroupByOutputType = {
    utleieTjenesteNr: number
    tjenestenavn: string
    dagerTilgj: string
    tilgjTid: string
    pris: number
    _count: UtleietjenesteCountAggregateOutputType | null
    _avg: UtleietjenesteAvgAggregateOutputType | null
    _sum: UtleietjenesteSumAggregateOutputType | null
    _min: UtleietjenesteMinAggregateOutputType | null
    _max: UtleietjenesteMaxAggregateOutputType | null
  }

  type GetUtleietjenesteGroupByPayload<T extends UtleietjenesteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtleietjenesteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtleietjenesteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtleietjenesteGroupByOutputType[P]>
            : GetScalarType<T[P], UtleietjenesteGroupByOutputType[P]>
        }
      >
    >


  export type UtleietjenesteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utleieTjenesteNr?: boolean
    tjenestenavn?: boolean
    dagerTilgj?: boolean
    tilgjTid?: boolean
    pris?: boolean
    reservasjonUtleietjeneste?: boolean | Utleietjeneste$reservasjonUtleietjenesteArgs<ExtArgs>
    _count?: boolean | UtleietjenesteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utleietjeneste"]>

  export type UtleietjenesteSelectScalar = {
    utleieTjenesteNr?: boolean
    tjenestenavn?: boolean
    dagerTilgj?: boolean
    tilgjTid?: boolean
    pris?: boolean
  }

  export type UtleietjenesteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservasjonUtleietjeneste?: boolean | Utleietjeneste$reservasjonUtleietjenesteArgs<ExtArgs>
    _count?: boolean | UtleietjenesteCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UtleietjenestePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utleietjeneste"
    objects: {
      reservasjonUtleietjeneste: Prisma.$ReservasjonUtleietjenestePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      utleieTjenesteNr: number
      tjenestenavn: string
      dagerTilgj: string
      tilgjTid: string
      pris: number
    }, ExtArgs["result"]["utleietjeneste"]>
    composites: {}
  }


  type UtleietjenesteGetPayload<S extends boolean | null | undefined | UtleietjenesteDefaultArgs> = $Result.GetResult<Prisma.$UtleietjenestePayload, S>

  type UtleietjenesteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UtleietjenesteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UtleietjenesteCountAggregateInputType | true
    }

  export interface UtleietjenesteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utleietjeneste'], meta: { name: 'Utleietjeneste' } }
    /**
     * Find zero or one Utleietjeneste that matches the filter.
     * @param {UtleietjenesteFindUniqueArgs} args - Arguments to find a Utleietjeneste
     * @example
     * // Get one Utleietjeneste
     * const utleietjeneste = await prisma.utleietjeneste.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UtleietjenesteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UtleietjenesteFindUniqueArgs<ExtArgs>>
    ): Prisma__UtleietjenesteClient<$Result.GetResult<Prisma.$UtleietjenestePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Utleietjeneste that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UtleietjenesteFindUniqueOrThrowArgs} args - Arguments to find a Utleietjeneste
     * @example
     * // Get one Utleietjeneste
     * const utleietjeneste = await prisma.utleietjeneste.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UtleietjenesteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UtleietjenesteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UtleietjenesteClient<$Result.GetResult<Prisma.$UtleietjenestePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Utleietjeneste that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtleietjenesteFindFirstArgs} args - Arguments to find a Utleietjeneste
     * @example
     * // Get one Utleietjeneste
     * const utleietjeneste = await prisma.utleietjeneste.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UtleietjenesteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UtleietjenesteFindFirstArgs<ExtArgs>>
    ): Prisma__UtleietjenesteClient<$Result.GetResult<Prisma.$UtleietjenestePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Utleietjeneste that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtleietjenesteFindFirstOrThrowArgs} args - Arguments to find a Utleietjeneste
     * @example
     * // Get one Utleietjeneste
     * const utleietjeneste = await prisma.utleietjeneste.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UtleietjenesteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UtleietjenesteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UtleietjenesteClient<$Result.GetResult<Prisma.$UtleietjenestePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Utleietjenestes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtleietjenesteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utleietjenestes
     * const utleietjenestes = await prisma.utleietjeneste.findMany()
     * 
     * // Get first 10 Utleietjenestes
     * const utleietjenestes = await prisma.utleietjeneste.findMany({ take: 10 })
     * 
     * // Only select the `utleieTjenesteNr`
     * const utleietjenesteWithUtleieTjenesteNrOnly = await prisma.utleietjeneste.findMany({ select: { utleieTjenesteNr: true } })
     * 
    **/
    findMany<T extends UtleietjenesteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UtleietjenesteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtleietjenestePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Utleietjeneste.
     * @param {UtleietjenesteCreateArgs} args - Arguments to create a Utleietjeneste.
     * @example
     * // Create one Utleietjeneste
     * const Utleietjeneste = await prisma.utleietjeneste.create({
     *   data: {
     *     // ... data to create a Utleietjeneste
     *   }
     * })
     * 
    **/
    create<T extends UtleietjenesteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UtleietjenesteCreateArgs<ExtArgs>>
    ): Prisma__UtleietjenesteClient<$Result.GetResult<Prisma.$UtleietjenestePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Utleietjenestes.
     *     @param {UtleietjenesteCreateManyArgs} args - Arguments to create many Utleietjenestes.
     *     @example
     *     // Create many Utleietjenestes
     *     const utleietjeneste = await prisma.utleietjeneste.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UtleietjenesteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UtleietjenesteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Utleietjeneste.
     * @param {UtleietjenesteDeleteArgs} args - Arguments to delete one Utleietjeneste.
     * @example
     * // Delete one Utleietjeneste
     * const Utleietjeneste = await prisma.utleietjeneste.delete({
     *   where: {
     *     // ... filter to delete one Utleietjeneste
     *   }
     * })
     * 
    **/
    delete<T extends UtleietjenesteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UtleietjenesteDeleteArgs<ExtArgs>>
    ): Prisma__UtleietjenesteClient<$Result.GetResult<Prisma.$UtleietjenestePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Utleietjeneste.
     * @param {UtleietjenesteUpdateArgs} args - Arguments to update one Utleietjeneste.
     * @example
     * // Update one Utleietjeneste
     * const utleietjeneste = await prisma.utleietjeneste.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UtleietjenesteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UtleietjenesteUpdateArgs<ExtArgs>>
    ): Prisma__UtleietjenesteClient<$Result.GetResult<Prisma.$UtleietjenestePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Utleietjenestes.
     * @param {UtleietjenesteDeleteManyArgs} args - Arguments to filter Utleietjenestes to delete.
     * @example
     * // Delete a few Utleietjenestes
     * const { count } = await prisma.utleietjeneste.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UtleietjenesteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UtleietjenesteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utleietjenestes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtleietjenesteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utleietjenestes
     * const utleietjeneste = await prisma.utleietjeneste.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UtleietjenesteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UtleietjenesteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Utleietjeneste.
     * @param {UtleietjenesteUpsertArgs} args - Arguments to update or create a Utleietjeneste.
     * @example
     * // Update or create a Utleietjeneste
     * const utleietjeneste = await prisma.utleietjeneste.upsert({
     *   create: {
     *     // ... data to create a Utleietjeneste
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utleietjeneste we want to update
     *   }
     * })
    **/
    upsert<T extends UtleietjenesteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UtleietjenesteUpsertArgs<ExtArgs>>
    ): Prisma__UtleietjenesteClient<$Result.GetResult<Prisma.$UtleietjenestePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Utleietjenestes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtleietjenesteCountArgs} args - Arguments to filter Utleietjenestes to count.
     * @example
     * // Count the number of Utleietjenestes
     * const count = await prisma.utleietjeneste.count({
     *   where: {
     *     // ... the filter for the Utleietjenestes we want to count
     *   }
     * })
    **/
    count<T extends UtleietjenesteCountArgs>(
      args?: Subset<T, UtleietjenesteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtleietjenesteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utleietjeneste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtleietjenesteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UtleietjenesteAggregateArgs>(args: Subset<T, UtleietjenesteAggregateArgs>): Prisma.PrismaPromise<GetUtleietjenesteAggregateType<T>>

    /**
     * Group by Utleietjeneste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtleietjenesteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UtleietjenesteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtleietjenesteGroupByArgs['orderBy'] }
        : { orderBy?: UtleietjenesteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UtleietjenesteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtleietjenesteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utleietjeneste model
   */
  readonly fields: UtleietjenesteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utleietjeneste.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtleietjenesteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    reservasjonUtleietjeneste<T extends Utleietjeneste$reservasjonUtleietjenesteArgs<ExtArgs> = {}>(args?: Subset<T, Utleietjeneste$reservasjonUtleietjenesteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasjonUtleietjenestePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Utleietjeneste model
   */ 
  interface UtleietjenesteFieldRefs {
    readonly utleieTjenesteNr: FieldRef<"Utleietjeneste", 'Int'>
    readonly tjenestenavn: FieldRef<"Utleietjeneste", 'String'>
    readonly dagerTilgj: FieldRef<"Utleietjeneste", 'String'>
    readonly tilgjTid: FieldRef<"Utleietjeneste", 'String'>
    readonly pris: FieldRef<"Utleietjeneste", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Utleietjeneste findUnique
   */
  export type UtleietjenesteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utleietjeneste
     */
    select?: UtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtleietjenesteInclude<ExtArgs> | null
    /**
     * Filter, which Utleietjeneste to fetch.
     */
    where: UtleietjenesteWhereUniqueInput
  }


  /**
   * Utleietjeneste findUniqueOrThrow
   */
  export type UtleietjenesteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utleietjeneste
     */
    select?: UtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtleietjenesteInclude<ExtArgs> | null
    /**
     * Filter, which Utleietjeneste to fetch.
     */
    where: UtleietjenesteWhereUniqueInput
  }


  /**
   * Utleietjeneste findFirst
   */
  export type UtleietjenesteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utleietjeneste
     */
    select?: UtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtleietjenesteInclude<ExtArgs> | null
    /**
     * Filter, which Utleietjeneste to fetch.
     */
    where?: UtleietjenesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utleietjenestes to fetch.
     */
    orderBy?: UtleietjenesteOrderByWithRelationInput | UtleietjenesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utleietjenestes.
     */
    cursor?: UtleietjenesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utleietjenestes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utleietjenestes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utleietjenestes.
     */
    distinct?: UtleietjenesteScalarFieldEnum | UtleietjenesteScalarFieldEnum[]
  }


  /**
   * Utleietjeneste findFirstOrThrow
   */
  export type UtleietjenesteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utleietjeneste
     */
    select?: UtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtleietjenesteInclude<ExtArgs> | null
    /**
     * Filter, which Utleietjeneste to fetch.
     */
    where?: UtleietjenesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utleietjenestes to fetch.
     */
    orderBy?: UtleietjenesteOrderByWithRelationInput | UtleietjenesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utleietjenestes.
     */
    cursor?: UtleietjenesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utleietjenestes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utleietjenestes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utleietjenestes.
     */
    distinct?: UtleietjenesteScalarFieldEnum | UtleietjenesteScalarFieldEnum[]
  }


  /**
   * Utleietjeneste findMany
   */
  export type UtleietjenesteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utleietjeneste
     */
    select?: UtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtleietjenesteInclude<ExtArgs> | null
    /**
     * Filter, which Utleietjenestes to fetch.
     */
    where?: UtleietjenesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utleietjenestes to fetch.
     */
    orderBy?: UtleietjenesteOrderByWithRelationInput | UtleietjenesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utleietjenestes.
     */
    cursor?: UtleietjenesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utleietjenestes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utleietjenestes.
     */
    skip?: number
    distinct?: UtleietjenesteScalarFieldEnum | UtleietjenesteScalarFieldEnum[]
  }


  /**
   * Utleietjeneste create
   */
  export type UtleietjenesteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utleietjeneste
     */
    select?: UtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtleietjenesteInclude<ExtArgs> | null
    /**
     * The data needed to create a Utleietjeneste.
     */
    data: XOR<UtleietjenesteCreateInput, UtleietjenesteUncheckedCreateInput>
  }


  /**
   * Utleietjeneste createMany
   */
  export type UtleietjenesteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utleietjenestes.
     */
    data: UtleietjenesteCreateManyInput | UtleietjenesteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Utleietjeneste update
   */
  export type UtleietjenesteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utleietjeneste
     */
    select?: UtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtleietjenesteInclude<ExtArgs> | null
    /**
     * The data needed to update a Utleietjeneste.
     */
    data: XOR<UtleietjenesteUpdateInput, UtleietjenesteUncheckedUpdateInput>
    /**
     * Choose, which Utleietjeneste to update.
     */
    where: UtleietjenesteWhereUniqueInput
  }


  /**
   * Utleietjeneste updateMany
   */
  export type UtleietjenesteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utleietjenestes.
     */
    data: XOR<UtleietjenesteUpdateManyMutationInput, UtleietjenesteUncheckedUpdateManyInput>
    /**
     * Filter which Utleietjenestes to update
     */
    where?: UtleietjenesteWhereInput
  }


  /**
   * Utleietjeneste upsert
   */
  export type UtleietjenesteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utleietjeneste
     */
    select?: UtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtleietjenesteInclude<ExtArgs> | null
    /**
     * The filter to search for the Utleietjeneste to update in case it exists.
     */
    where: UtleietjenesteWhereUniqueInput
    /**
     * In case the Utleietjeneste found by the `where` argument doesn't exist, create a new Utleietjeneste with this data.
     */
    create: XOR<UtleietjenesteCreateInput, UtleietjenesteUncheckedCreateInput>
    /**
     * In case the Utleietjeneste was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtleietjenesteUpdateInput, UtleietjenesteUncheckedUpdateInput>
  }


  /**
   * Utleietjeneste delete
   */
  export type UtleietjenesteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utleietjeneste
     */
    select?: UtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtleietjenesteInclude<ExtArgs> | null
    /**
     * Filter which Utleietjeneste to delete.
     */
    where: UtleietjenesteWhereUniqueInput
  }


  /**
   * Utleietjeneste deleteMany
   */
  export type UtleietjenesteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utleietjenestes to delete
     */
    where?: UtleietjenesteWhereInput
  }


  /**
   * Utleietjeneste.reservasjonUtleietjeneste
   */
  export type Utleietjeneste$reservasjonUtleietjenesteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservasjonUtleietjeneste
     */
    select?: ReservasjonUtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonUtleietjenesteInclude<ExtArgs> | null
    where?: ReservasjonUtleietjenesteWhereInput
    orderBy?: ReservasjonUtleietjenesteOrderByWithRelationInput | ReservasjonUtleietjenesteOrderByWithRelationInput[]
    cursor?: ReservasjonUtleietjenesteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasjonUtleietjenesteScalarFieldEnum | ReservasjonUtleietjenesteScalarFieldEnum[]
  }


  /**
   * Utleietjeneste without action
   */
  export type UtleietjenesteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utleietjeneste
     */
    select?: UtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtleietjenesteInclude<ExtArgs> | null
  }



  /**
   * Model Reservasjon
   */

  export type AggregateReservasjon = {
    _count: ReservasjonCountAggregateOutputType | null
    _avg: ReservasjonAvgAggregateOutputType | null
    _sum: ReservasjonSumAggregateOutputType | null
    _min: ReservasjonMinAggregateOutputType | null
    _max: ReservasjonMaxAggregateOutputType | null
  }

  export type ReservasjonAvgAggregateOutputType = {
    reservasjonNr: number | null
    brukerNrId: number | null
    soneNrId: number | null
    plassNrId: number | null
  }

  export type ReservasjonSumAggregateOutputType = {
    reservasjonNr: number | null
    brukerNrId: number | null
    soneNrId: number | null
    plassNrId: number | null
  }

  export type ReservasjonMinAggregateOutputType = {
    reservasjonNr: number | null
    brukerNrId: number | null
    soneNrId: number | null
    plassNrId: number | null
    fraDato: string | null
    tilDato: string | null
  }

  export type ReservasjonMaxAggregateOutputType = {
    reservasjonNr: number | null
    brukerNrId: number | null
    soneNrId: number | null
    plassNrId: number | null
    fraDato: string | null
    tilDato: string | null
  }

  export type ReservasjonCountAggregateOutputType = {
    reservasjonNr: number
    brukerNrId: number
    soneNrId: number
    plassNrId: number
    fraDato: number
    tilDato: number
    _all: number
  }


  export type ReservasjonAvgAggregateInputType = {
    reservasjonNr?: true
    brukerNrId?: true
    soneNrId?: true
    plassNrId?: true
  }

  export type ReservasjonSumAggregateInputType = {
    reservasjonNr?: true
    brukerNrId?: true
    soneNrId?: true
    plassNrId?: true
  }

  export type ReservasjonMinAggregateInputType = {
    reservasjonNr?: true
    brukerNrId?: true
    soneNrId?: true
    plassNrId?: true
    fraDato?: true
    tilDato?: true
  }

  export type ReservasjonMaxAggregateInputType = {
    reservasjonNr?: true
    brukerNrId?: true
    soneNrId?: true
    plassNrId?: true
    fraDato?: true
    tilDato?: true
  }

  export type ReservasjonCountAggregateInputType = {
    reservasjonNr?: true
    brukerNrId?: true
    soneNrId?: true
    plassNrId?: true
    fraDato?: true
    tilDato?: true
    _all?: true
  }

  export type ReservasjonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservasjon to aggregate.
     */
    where?: ReservasjonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservasjons to fetch.
     */
    orderBy?: ReservasjonOrderByWithRelationInput | ReservasjonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservasjonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservasjons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservasjons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservasjons
    **/
    _count?: true | ReservasjonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservasjonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservasjonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservasjonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservasjonMaxAggregateInputType
  }

  export type GetReservasjonAggregateType<T extends ReservasjonAggregateArgs> = {
        [P in keyof T & keyof AggregateReservasjon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservasjon[P]>
      : GetScalarType<T[P], AggregateReservasjon[P]>
  }




  export type ReservasjonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasjonWhereInput
    orderBy?: ReservasjonOrderByWithAggregationInput | ReservasjonOrderByWithAggregationInput[]
    by: ReservasjonScalarFieldEnum[] | ReservasjonScalarFieldEnum
    having?: ReservasjonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservasjonCountAggregateInputType | true
    _avg?: ReservasjonAvgAggregateInputType
    _sum?: ReservasjonSumAggregateInputType
    _min?: ReservasjonMinAggregateInputType
    _max?: ReservasjonMaxAggregateInputType
  }

  export type ReservasjonGroupByOutputType = {
    reservasjonNr: number
    brukerNrId: number
    soneNrId: number
    plassNrId: number
    fraDato: string
    tilDato: string
    _count: ReservasjonCountAggregateOutputType | null
    _avg: ReservasjonAvgAggregateOutputType | null
    _sum: ReservasjonSumAggregateOutputType | null
    _min: ReservasjonMinAggregateOutputType | null
    _max: ReservasjonMaxAggregateOutputType | null
  }

  type GetReservasjonGroupByPayload<T extends ReservasjonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservasjonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservasjonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservasjonGroupByOutputType[P]>
            : GetScalarType<T[P], ReservasjonGroupByOutputType[P]>
        }
      >
    >


  export type ReservasjonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reservasjonNr?: boolean
    brukerNrId?: boolean
    soneNrId?: boolean
    plassNrId?: boolean
    fraDato?: boolean
    tilDato?: boolean
    bruker?: boolean | BrukerDefaultArgs<ExtArgs>
    sone?: boolean | SoneDefaultArgs<ExtArgs>
    plass?: boolean | PlassDefaultArgs<ExtArgs>
    reservasjonUtleietjeneste?: boolean | Reservasjon$reservasjonUtleietjenesteArgs<ExtArgs>
    _count?: boolean | ReservasjonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservasjon"]>

  export type ReservasjonSelectScalar = {
    reservasjonNr?: boolean
    brukerNrId?: boolean
    soneNrId?: boolean
    plassNrId?: boolean
    fraDato?: boolean
    tilDato?: boolean
  }

  export type ReservasjonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bruker?: boolean | BrukerDefaultArgs<ExtArgs>
    sone?: boolean | SoneDefaultArgs<ExtArgs>
    plass?: boolean | PlassDefaultArgs<ExtArgs>
    reservasjonUtleietjeneste?: boolean | Reservasjon$reservasjonUtleietjenesteArgs<ExtArgs>
    _count?: boolean | ReservasjonCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ReservasjonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservasjon"
    objects: {
      bruker: Prisma.$BrukerPayload<ExtArgs>
      sone: Prisma.$SonePayload<ExtArgs>
      plass: Prisma.$PlassPayload<ExtArgs>
      reservasjonUtleietjeneste: Prisma.$ReservasjonUtleietjenestePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      reservasjonNr: number
      brukerNrId: number
      soneNrId: number
      plassNrId: number
      fraDato: string
      tilDato: string
    }, ExtArgs["result"]["reservasjon"]>
    composites: {}
  }


  type ReservasjonGetPayload<S extends boolean | null | undefined | ReservasjonDefaultArgs> = $Result.GetResult<Prisma.$ReservasjonPayload, S>

  type ReservasjonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservasjonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservasjonCountAggregateInputType | true
    }

  export interface ReservasjonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservasjon'], meta: { name: 'Reservasjon' } }
    /**
     * Find zero or one Reservasjon that matches the filter.
     * @param {ReservasjonFindUniqueArgs} args - Arguments to find a Reservasjon
     * @example
     * // Get one Reservasjon
     * const reservasjon = await prisma.reservasjon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReservasjonFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasjonFindUniqueArgs<ExtArgs>>
    ): Prisma__ReservasjonClient<$Result.GetResult<Prisma.$ReservasjonPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reservasjon that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReservasjonFindUniqueOrThrowArgs} args - Arguments to find a Reservasjon
     * @example
     * // Get one Reservasjon
     * const reservasjon = await prisma.reservasjon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReservasjonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasjonFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReservasjonClient<$Result.GetResult<Prisma.$ReservasjonPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reservasjon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasjonFindFirstArgs} args - Arguments to find a Reservasjon
     * @example
     * // Get one Reservasjon
     * const reservasjon = await prisma.reservasjon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReservasjonFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasjonFindFirstArgs<ExtArgs>>
    ): Prisma__ReservasjonClient<$Result.GetResult<Prisma.$ReservasjonPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reservasjon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasjonFindFirstOrThrowArgs} args - Arguments to find a Reservasjon
     * @example
     * // Get one Reservasjon
     * const reservasjon = await prisma.reservasjon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReservasjonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasjonFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReservasjonClient<$Result.GetResult<Prisma.$ReservasjonPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reservasjons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasjonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservasjons
     * const reservasjons = await prisma.reservasjon.findMany()
     * 
     * // Get first 10 Reservasjons
     * const reservasjons = await prisma.reservasjon.findMany({ take: 10 })
     * 
     * // Only select the `reservasjonNr`
     * const reservasjonWithReservasjonNrOnly = await prisma.reservasjon.findMany({ select: { reservasjonNr: true } })
     * 
    **/
    findMany<T extends ReservasjonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasjonFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasjonPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reservasjon.
     * @param {ReservasjonCreateArgs} args - Arguments to create a Reservasjon.
     * @example
     * // Create one Reservasjon
     * const Reservasjon = await prisma.reservasjon.create({
     *   data: {
     *     // ... data to create a Reservasjon
     *   }
     * })
     * 
    **/
    create<T extends ReservasjonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasjonCreateArgs<ExtArgs>>
    ): Prisma__ReservasjonClient<$Result.GetResult<Prisma.$ReservasjonPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reservasjons.
     *     @param {ReservasjonCreateManyArgs} args - Arguments to create many Reservasjons.
     *     @example
     *     // Create many Reservasjons
     *     const reservasjon = await prisma.reservasjon.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReservasjonCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasjonCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservasjon.
     * @param {ReservasjonDeleteArgs} args - Arguments to delete one Reservasjon.
     * @example
     * // Delete one Reservasjon
     * const Reservasjon = await prisma.reservasjon.delete({
     *   where: {
     *     // ... filter to delete one Reservasjon
     *   }
     * })
     * 
    **/
    delete<T extends ReservasjonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasjonDeleteArgs<ExtArgs>>
    ): Prisma__ReservasjonClient<$Result.GetResult<Prisma.$ReservasjonPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reservasjon.
     * @param {ReservasjonUpdateArgs} args - Arguments to update one Reservasjon.
     * @example
     * // Update one Reservasjon
     * const reservasjon = await prisma.reservasjon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReservasjonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasjonUpdateArgs<ExtArgs>>
    ): Prisma__ReservasjonClient<$Result.GetResult<Prisma.$ReservasjonPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reservasjons.
     * @param {ReservasjonDeleteManyArgs} args - Arguments to filter Reservasjons to delete.
     * @example
     * // Delete a few Reservasjons
     * const { count } = await prisma.reservasjon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReservasjonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasjonDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservasjons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasjonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservasjons
     * const reservasjon = await prisma.reservasjon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReservasjonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasjonUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservasjon.
     * @param {ReservasjonUpsertArgs} args - Arguments to update or create a Reservasjon.
     * @example
     * // Update or create a Reservasjon
     * const reservasjon = await prisma.reservasjon.upsert({
     *   create: {
     *     // ... data to create a Reservasjon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservasjon we want to update
     *   }
     * })
    **/
    upsert<T extends ReservasjonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasjonUpsertArgs<ExtArgs>>
    ): Prisma__ReservasjonClient<$Result.GetResult<Prisma.$ReservasjonPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reservasjons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasjonCountArgs} args - Arguments to filter Reservasjons to count.
     * @example
     * // Count the number of Reservasjons
     * const count = await prisma.reservasjon.count({
     *   where: {
     *     // ... the filter for the Reservasjons we want to count
     *   }
     * })
    **/
    count<T extends ReservasjonCountArgs>(
      args?: Subset<T, ReservasjonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservasjonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservasjon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasjonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservasjonAggregateArgs>(args: Subset<T, ReservasjonAggregateArgs>): Prisma.PrismaPromise<GetReservasjonAggregateType<T>>

    /**
     * Group by Reservasjon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasjonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservasjonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservasjonGroupByArgs['orderBy'] }
        : { orderBy?: ReservasjonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservasjonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservasjonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservasjon model
   */
  readonly fields: ReservasjonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservasjon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservasjonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bruker<T extends BrukerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrukerDefaultArgs<ExtArgs>>): Prisma__BrukerClient<$Result.GetResult<Prisma.$BrukerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    sone<T extends SoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SoneDefaultArgs<ExtArgs>>): Prisma__SoneClient<$Result.GetResult<Prisma.$SonePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    plass<T extends PlassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlassDefaultArgs<ExtArgs>>): Prisma__PlassClient<$Result.GetResult<Prisma.$PlassPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    reservasjonUtleietjeneste<T extends Reservasjon$reservasjonUtleietjenesteArgs<ExtArgs> = {}>(args?: Subset<T, Reservasjon$reservasjonUtleietjenesteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasjonUtleietjenestePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Reservasjon model
   */ 
  interface ReservasjonFieldRefs {
    readonly reservasjonNr: FieldRef<"Reservasjon", 'Int'>
    readonly brukerNrId: FieldRef<"Reservasjon", 'Int'>
    readonly soneNrId: FieldRef<"Reservasjon", 'Int'>
    readonly plassNrId: FieldRef<"Reservasjon", 'Int'>
    readonly fraDato: FieldRef<"Reservasjon", 'String'>
    readonly tilDato: FieldRef<"Reservasjon", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Reservasjon findUnique
   */
  export type ReservasjonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasjon
     */
    select?: ReservasjonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonInclude<ExtArgs> | null
    /**
     * Filter, which Reservasjon to fetch.
     */
    where: ReservasjonWhereUniqueInput
  }


  /**
   * Reservasjon findUniqueOrThrow
   */
  export type ReservasjonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasjon
     */
    select?: ReservasjonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonInclude<ExtArgs> | null
    /**
     * Filter, which Reservasjon to fetch.
     */
    where: ReservasjonWhereUniqueInput
  }


  /**
   * Reservasjon findFirst
   */
  export type ReservasjonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasjon
     */
    select?: ReservasjonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonInclude<ExtArgs> | null
    /**
     * Filter, which Reservasjon to fetch.
     */
    where?: ReservasjonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservasjons to fetch.
     */
    orderBy?: ReservasjonOrderByWithRelationInput | ReservasjonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservasjons.
     */
    cursor?: ReservasjonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservasjons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservasjons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservasjons.
     */
    distinct?: ReservasjonScalarFieldEnum | ReservasjonScalarFieldEnum[]
  }


  /**
   * Reservasjon findFirstOrThrow
   */
  export type ReservasjonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasjon
     */
    select?: ReservasjonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonInclude<ExtArgs> | null
    /**
     * Filter, which Reservasjon to fetch.
     */
    where?: ReservasjonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservasjons to fetch.
     */
    orderBy?: ReservasjonOrderByWithRelationInput | ReservasjonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservasjons.
     */
    cursor?: ReservasjonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservasjons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservasjons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservasjons.
     */
    distinct?: ReservasjonScalarFieldEnum | ReservasjonScalarFieldEnum[]
  }


  /**
   * Reservasjon findMany
   */
  export type ReservasjonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasjon
     */
    select?: ReservasjonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonInclude<ExtArgs> | null
    /**
     * Filter, which Reservasjons to fetch.
     */
    where?: ReservasjonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservasjons to fetch.
     */
    orderBy?: ReservasjonOrderByWithRelationInput | ReservasjonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservasjons.
     */
    cursor?: ReservasjonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservasjons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservasjons.
     */
    skip?: number
    distinct?: ReservasjonScalarFieldEnum | ReservasjonScalarFieldEnum[]
  }


  /**
   * Reservasjon create
   */
  export type ReservasjonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasjon
     */
    select?: ReservasjonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservasjon.
     */
    data: XOR<ReservasjonCreateInput, ReservasjonUncheckedCreateInput>
  }


  /**
   * Reservasjon createMany
   */
  export type ReservasjonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservasjons.
     */
    data: ReservasjonCreateManyInput | ReservasjonCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Reservasjon update
   */
  export type ReservasjonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasjon
     */
    select?: ReservasjonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservasjon.
     */
    data: XOR<ReservasjonUpdateInput, ReservasjonUncheckedUpdateInput>
    /**
     * Choose, which Reservasjon to update.
     */
    where: ReservasjonWhereUniqueInput
  }


  /**
   * Reservasjon updateMany
   */
  export type ReservasjonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservasjons.
     */
    data: XOR<ReservasjonUpdateManyMutationInput, ReservasjonUncheckedUpdateManyInput>
    /**
     * Filter which Reservasjons to update
     */
    where?: ReservasjonWhereInput
  }


  /**
   * Reservasjon upsert
   */
  export type ReservasjonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasjon
     */
    select?: ReservasjonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservasjon to update in case it exists.
     */
    where: ReservasjonWhereUniqueInput
    /**
     * In case the Reservasjon found by the `where` argument doesn't exist, create a new Reservasjon with this data.
     */
    create: XOR<ReservasjonCreateInput, ReservasjonUncheckedCreateInput>
    /**
     * In case the Reservasjon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservasjonUpdateInput, ReservasjonUncheckedUpdateInput>
  }


  /**
   * Reservasjon delete
   */
  export type ReservasjonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasjon
     */
    select?: ReservasjonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonInclude<ExtArgs> | null
    /**
     * Filter which Reservasjon to delete.
     */
    where: ReservasjonWhereUniqueInput
  }


  /**
   * Reservasjon deleteMany
   */
  export type ReservasjonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservasjons to delete
     */
    where?: ReservasjonWhereInput
  }


  /**
   * Reservasjon.reservasjonUtleietjeneste
   */
  export type Reservasjon$reservasjonUtleietjenesteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservasjonUtleietjeneste
     */
    select?: ReservasjonUtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonUtleietjenesteInclude<ExtArgs> | null
    where?: ReservasjonUtleietjenesteWhereInput
    orderBy?: ReservasjonUtleietjenesteOrderByWithRelationInput | ReservasjonUtleietjenesteOrderByWithRelationInput[]
    cursor?: ReservasjonUtleietjenesteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasjonUtleietjenesteScalarFieldEnum | ReservasjonUtleietjenesteScalarFieldEnum[]
  }


  /**
   * Reservasjon without action
   */
  export type ReservasjonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasjon
     */
    select?: ReservasjonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonInclude<ExtArgs> | null
  }



  /**
   * Model ReservasjonUtleietjeneste
   */

  export type AggregateReservasjonUtleietjeneste = {
    _count: ReservasjonUtleietjenesteCountAggregateOutputType | null
    _avg: ReservasjonUtleietjenesteAvgAggregateOutputType | null
    _sum: ReservasjonUtleietjenesteSumAggregateOutputType | null
    _min: ReservasjonUtleietjenesteMinAggregateOutputType | null
    _max: ReservasjonUtleietjenesteMaxAggregateOutputType | null
  }

  export type ReservasjonUtleietjenesteAvgAggregateOutputType = {
    antall: number | null
    utleieTjenesteNr: number | null
    reservasjonNr: number | null
  }

  export type ReservasjonUtleietjenesteSumAggregateOutputType = {
    antall: number | null
    utleieTjenesteNr: number | null
    reservasjonNr: number | null
  }

  export type ReservasjonUtleietjenesteMinAggregateOutputType = {
    antall: number | null
    utleieTjenesteNr: number | null
    reservasjonNr: number | null
  }

  export type ReservasjonUtleietjenesteMaxAggregateOutputType = {
    antall: number | null
    utleieTjenesteNr: number | null
    reservasjonNr: number | null
  }

  export type ReservasjonUtleietjenesteCountAggregateOutputType = {
    antall: number
    utleieTjenesteNr: number
    reservasjonNr: number
    _all: number
  }


  export type ReservasjonUtleietjenesteAvgAggregateInputType = {
    antall?: true
    utleieTjenesteNr?: true
    reservasjonNr?: true
  }

  export type ReservasjonUtleietjenesteSumAggregateInputType = {
    antall?: true
    utleieTjenesteNr?: true
    reservasjonNr?: true
  }

  export type ReservasjonUtleietjenesteMinAggregateInputType = {
    antall?: true
    utleieTjenesteNr?: true
    reservasjonNr?: true
  }

  export type ReservasjonUtleietjenesteMaxAggregateInputType = {
    antall?: true
    utleieTjenesteNr?: true
    reservasjonNr?: true
  }

  export type ReservasjonUtleietjenesteCountAggregateInputType = {
    antall?: true
    utleieTjenesteNr?: true
    reservasjonNr?: true
    _all?: true
  }

  export type ReservasjonUtleietjenesteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservasjonUtleietjeneste to aggregate.
     */
    where?: ReservasjonUtleietjenesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservasjonUtleietjenestes to fetch.
     */
    orderBy?: ReservasjonUtleietjenesteOrderByWithRelationInput | ReservasjonUtleietjenesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservasjonUtleietjenesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservasjonUtleietjenestes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservasjonUtleietjenestes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReservasjonUtleietjenestes
    **/
    _count?: true | ReservasjonUtleietjenesteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservasjonUtleietjenesteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservasjonUtleietjenesteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservasjonUtleietjenesteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservasjonUtleietjenesteMaxAggregateInputType
  }

  export type GetReservasjonUtleietjenesteAggregateType<T extends ReservasjonUtleietjenesteAggregateArgs> = {
        [P in keyof T & keyof AggregateReservasjonUtleietjeneste]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservasjonUtleietjeneste[P]>
      : GetScalarType<T[P], AggregateReservasjonUtleietjeneste[P]>
  }




  export type ReservasjonUtleietjenesteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasjonUtleietjenesteWhereInput
    orderBy?: ReservasjonUtleietjenesteOrderByWithAggregationInput | ReservasjonUtleietjenesteOrderByWithAggregationInput[]
    by: ReservasjonUtleietjenesteScalarFieldEnum[] | ReservasjonUtleietjenesteScalarFieldEnum
    having?: ReservasjonUtleietjenesteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservasjonUtleietjenesteCountAggregateInputType | true
    _avg?: ReservasjonUtleietjenesteAvgAggregateInputType
    _sum?: ReservasjonUtleietjenesteSumAggregateInputType
    _min?: ReservasjonUtleietjenesteMinAggregateInputType
    _max?: ReservasjonUtleietjenesteMaxAggregateInputType
  }

  export type ReservasjonUtleietjenesteGroupByOutputType = {
    antall: number
    utleieTjenesteNr: number
    reservasjonNr: number
    _count: ReservasjonUtleietjenesteCountAggregateOutputType | null
    _avg: ReservasjonUtleietjenesteAvgAggregateOutputType | null
    _sum: ReservasjonUtleietjenesteSumAggregateOutputType | null
    _min: ReservasjonUtleietjenesteMinAggregateOutputType | null
    _max: ReservasjonUtleietjenesteMaxAggregateOutputType | null
  }

  type GetReservasjonUtleietjenesteGroupByPayload<T extends ReservasjonUtleietjenesteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservasjonUtleietjenesteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservasjonUtleietjenesteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservasjonUtleietjenesteGroupByOutputType[P]>
            : GetScalarType<T[P], ReservasjonUtleietjenesteGroupByOutputType[P]>
        }
      >
    >


  export type ReservasjonUtleietjenesteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    antall?: boolean
    utleieTjenesteNr?: boolean
    reservasjonNr?: boolean
    utleietjeneste?: boolean | UtleietjenesteDefaultArgs<ExtArgs>
    reservasjon?: boolean | ReservasjonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservasjonUtleietjeneste"]>

  export type ReservasjonUtleietjenesteSelectScalar = {
    antall?: boolean
    utleieTjenesteNr?: boolean
    reservasjonNr?: boolean
  }

  export type ReservasjonUtleietjenesteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utleietjeneste?: boolean | UtleietjenesteDefaultArgs<ExtArgs>
    reservasjon?: boolean | ReservasjonDefaultArgs<ExtArgs>
  }


  export type $ReservasjonUtleietjenestePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReservasjonUtleietjeneste"
    objects: {
      utleietjeneste: Prisma.$UtleietjenestePayload<ExtArgs>
      reservasjon: Prisma.$ReservasjonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      antall: number
      utleieTjenesteNr: number
      reservasjonNr: number
    }, ExtArgs["result"]["reservasjonUtleietjeneste"]>
    composites: {}
  }


  type ReservasjonUtleietjenesteGetPayload<S extends boolean | null | undefined | ReservasjonUtleietjenesteDefaultArgs> = $Result.GetResult<Prisma.$ReservasjonUtleietjenestePayload, S>

  type ReservasjonUtleietjenesteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservasjonUtleietjenesteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservasjonUtleietjenesteCountAggregateInputType | true
    }

  export interface ReservasjonUtleietjenesteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReservasjonUtleietjeneste'], meta: { name: 'ReservasjonUtleietjeneste' } }
    /**
     * Find zero or one ReservasjonUtleietjeneste that matches the filter.
     * @param {ReservasjonUtleietjenesteFindUniqueArgs} args - Arguments to find a ReservasjonUtleietjeneste
     * @example
     * // Get one ReservasjonUtleietjeneste
     * const reservasjonUtleietjeneste = await prisma.reservasjonUtleietjeneste.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReservasjonUtleietjenesteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasjonUtleietjenesteFindUniqueArgs<ExtArgs>>
    ): Prisma__ReservasjonUtleietjenesteClient<$Result.GetResult<Prisma.$ReservasjonUtleietjenestePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ReservasjonUtleietjeneste that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReservasjonUtleietjenesteFindUniqueOrThrowArgs} args - Arguments to find a ReservasjonUtleietjeneste
     * @example
     * // Get one ReservasjonUtleietjeneste
     * const reservasjonUtleietjeneste = await prisma.reservasjonUtleietjeneste.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReservasjonUtleietjenesteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasjonUtleietjenesteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReservasjonUtleietjenesteClient<$Result.GetResult<Prisma.$ReservasjonUtleietjenestePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ReservasjonUtleietjeneste that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasjonUtleietjenesteFindFirstArgs} args - Arguments to find a ReservasjonUtleietjeneste
     * @example
     * // Get one ReservasjonUtleietjeneste
     * const reservasjonUtleietjeneste = await prisma.reservasjonUtleietjeneste.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReservasjonUtleietjenesteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasjonUtleietjenesteFindFirstArgs<ExtArgs>>
    ): Prisma__ReservasjonUtleietjenesteClient<$Result.GetResult<Prisma.$ReservasjonUtleietjenestePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ReservasjonUtleietjeneste that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasjonUtleietjenesteFindFirstOrThrowArgs} args - Arguments to find a ReservasjonUtleietjeneste
     * @example
     * // Get one ReservasjonUtleietjeneste
     * const reservasjonUtleietjeneste = await prisma.reservasjonUtleietjeneste.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReservasjonUtleietjenesteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasjonUtleietjenesteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReservasjonUtleietjenesteClient<$Result.GetResult<Prisma.$ReservasjonUtleietjenestePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ReservasjonUtleietjenestes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasjonUtleietjenesteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReservasjonUtleietjenestes
     * const reservasjonUtleietjenestes = await prisma.reservasjonUtleietjeneste.findMany()
     * 
     * // Get first 10 ReservasjonUtleietjenestes
     * const reservasjonUtleietjenestes = await prisma.reservasjonUtleietjeneste.findMany({ take: 10 })
     * 
     * // Only select the `antall`
     * const reservasjonUtleietjenesteWithAntallOnly = await prisma.reservasjonUtleietjeneste.findMany({ select: { antall: true } })
     * 
    **/
    findMany<T extends ReservasjonUtleietjenesteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasjonUtleietjenesteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasjonUtleietjenestePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ReservasjonUtleietjeneste.
     * @param {ReservasjonUtleietjenesteCreateArgs} args - Arguments to create a ReservasjonUtleietjeneste.
     * @example
     * // Create one ReservasjonUtleietjeneste
     * const ReservasjonUtleietjeneste = await prisma.reservasjonUtleietjeneste.create({
     *   data: {
     *     // ... data to create a ReservasjonUtleietjeneste
     *   }
     * })
     * 
    **/
    create<T extends ReservasjonUtleietjenesteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasjonUtleietjenesteCreateArgs<ExtArgs>>
    ): Prisma__ReservasjonUtleietjenesteClient<$Result.GetResult<Prisma.$ReservasjonUtleietjenestePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ReservasjonUtleietjenestes.
     *     @param {ReservasjonUtleietjenesteCreateManyArgs} args - Arguments to create many ReservasjonUtleietjenestes.
     *     @example
     *     // Create many ReservasjonUtleietjenestes
     *     const reservasjonUtleietjeneste = await prisma.reservasjonUtleietjeneste.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReservasjonUtleietjenesteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasjonUtleietjenesteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReservasjonUtleietjeneste.
     * @param {ReservasjonUtleietjenesteDeleteArgs} args - Arguments to delete one ReservasjonUtleietjeneste.
     * @example
     * // Delete one ReservasjonUtleietjeneste
     * const ReservasjonUtleietjeneste = await prisma.reservasjonUtleietjeneste.delete({
     *   where: {
     *     // ... filter to delete one ReservasjonUtleietjeneste
     *   }
     * })
     * 
    **/
    delete<T extends ReservasjonUtleietjenesteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasjonUtleietjenesteDeleteArgs<ExtArgs>>
    ): Prisma__ReservasjonUtleietjenesteClient<$Result.GetResult<Prisma.$ReservasjonUtleietjenestePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ReservasjonUtleietjeneste.
     * @param {ReservasjonUtleietjenesteUpdateArgs} args - Arguments to update one ReservasjonUtleietjeneste.
     * @example
     * // Update one ReservasjonUtleietjeneste
     * const reservasjonUtleietjeneste = await prisma.reservasjonUtleietjeneste.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReservasjonUtleietjenesteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasjonUtleietjenesteUpdateArgs<ExtArgs>>
    ): Prisma__ReservasjonUtleietjenesteClient<$Result.GetResult<Prisma.$ReservasjonUtleietjenestePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ReservasjonUtleietjenestes.
     * @param {ReservasjonUtleietjenesteDeleteManyArgs} args - Arguments to filter ReservasjonUtleietjenestes to delete.
     * @example
     * // Delete a few ReservasjonUtleietjenestes
     * const { count } = await prisma.reservasjonUtleietjeneste.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReservasjonUtleietjenesteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasjonUtleietjenesteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservasjonUtleietjenestes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasjonUtleietjenesteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReservasjonUtleietjenestes
     * const reservasjonUtleietjeneste = await prisma.reservasjonUtleietjeneste.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReservasjonUtleietjenesteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasjonUtleietjenesteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReservasjonUtleietjeneste.
     * @param {ReservasjonUtleietjenesteUpsertArgs} args - Arguments to update or create a ReservasjonUtleietjeneste.
     * @example
     * // Update or create a ReservasjonUtleietjeneste
     * const reservasjonUtleietjeneste = await prisma.reservasjonUtleietjeneste.upsert({
     *   create: {
     *     // ... data to create a ReservasjonUtleietjeneste
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReservasjonUtleietjeneste we want to update
     *   }
     * })
    **/
    upsert<T extends ReservasjonUtleietjenesteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasjonUtleietjenesteUpsertArgs<ExtArgs>>
    ): Prisma__ReservasjonUtleietjenesteClient<$Result.GetResult<Prisma.$ReservasjonUtleietjenestePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ReservasjonUtleietjenestes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasjonUtleietjenesteCountArgs} args - Arguments to filter ReservasjonUtleietjenestes to count.
     * @example
     * // Count the number of ReservasjonUtleietjenestes
     * const count = await prisma.reservasjonUtleietjeneste.count({
     *   where: {
     *     // ... the filter for the ReservasjonUtleietjenestes we want to count
     *   }
     * })
    **/
    count<T extends ReservasjonUtleietjenesteCountArgs>(
      args?: Subset<T, ReservasjonUtleietjenesteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservasjonUtleietjenesteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReservasjonUtleietjeneste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasjonUtleietjenesteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservasjonUtleietjenesteAggregateArgs>(args: Subset<T, ReservasjonUtleietjenesteAggregateArgs>): Prisma.PrismaPromise<GetReservasjonUtleietjenesteAggregateType<T>>

    /**
     * Group by ReservasjonUtleietjeneste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasjonUtleietjenesteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservasjonUtleietjenesteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservasjonUtleietjenesteGroupByArgs['orderBy'] }
        : { orderBy?: ReservasjonUtleietjenesteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservasjonUtleietjenesteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservasjonUtleietjenesteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReservasjonUtleietjeneste model
   */
  readonly fields: ReservasjonUtleietjenesteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReservasjonUtleietjeneste.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservasjonUtleietjenesteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    utleietjeneste<T extends UtleietjenesteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtleietjenesteDefaultArgs<ExtArgs>>): Prisma__UtleietjenesteClient<$Result.GetResult<Prisma.$UtleietjenestePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    reservasjon<T extends ReservasjonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservasjonDefaultArgs<ExtArgs>>): Prisma__ReservasjonClient<$Result.GetResult<Prisma.$ReservasjonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ReservasjonUtleietjeneste model
   */ 
  interface ReservasjonUtleietjenesteFieldRefs {
    readonly antall: FieldRef<"ReservasjonUtleietjeneste", 'Int'>
    readonly utleieTjenesteNr: FieldRef<"ReservasjonUtleietjeneste", 'Int'>
    readonly reservasjonNr: FieldRef<"ReservasjonUtleietjeneste", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ReservasjonUtleietjeneste findUnique
   */
  export type ReservasjonUtleietjenesteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservasjonUtleietjeneste
     */
    select?: ReservasjonUtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonUtleietjenesteInclude<ExtArgs> | null
    /**
     * Filter, which ReservasjonUtleietjeneste to fetch.
     */
    where: ReservasjonUtleietjenesteWhereUniqueInput
  }


  /**
   * ReservasjonUtleietjeneste findUniqueOrThrow
   */
  export type ReservasjonUtleietjenesteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservasjonUtleietjeneste
     */
    select?: ReservasjonUtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonUtleietjenesteInclude<ExtArgs> | null
    /**
     * Filter, which ReservasjonUtleietjeneste to fetch.
     */
    where: ReservasjonUtleietjenesteWhereUniqueInput
  }


  /**
   * ReservasjonUtleietjeneste findFirst
   */
  export type ReservasjonUtleietjenesteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservasjonUtleietjeneste
     */
    select?: ReservasjonUtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonUtleietjenesteInclude<ExtArgs> | null
    /**
     * Filter, which ReservasjonUtleietjeneste to fetch.
     */
    where?: ReservasjonUtleietjenesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservasjonUtleietjenestes to fetch.
     */
    orderBy?: ReservasjonUtleietjenesteOrderByWithRelationInput | ReservasjonUtleietjenesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservasjonUtleietjenestes.
     */
    cursor?: ReservasjonUtleietjenesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservasjonUtleietjenestes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservasjonUtleietjenestes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservasjonUtleietjenestes.
     */
    distinct?: ReservasjonUtleietjenesteScalarFieldEnum | ReservasjonUtleietjenesteScalarFieldEnum[]
  }


  /**
   * ReservasjonUtleietjeneste findFirstOrThrow
   */
  export type ReservasjonUtleietjenesteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservasjonUtleietjeneste
     */
    select?: ReservasjonUtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonUtleietjenesteInclude<ExtArgs> | null
    /**
     * Filter, which ReservasjonUtleietjeneste to fetch.
     */
    where?: ReservasjonUtleietjenesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservasjonUtleietjenestes to fetch.
     */
    orderBy?: ReservasjonUtleietjenesteOrderByWithRelationInput | ReservasjonUtleietjenesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservasjonUtleietjenestes.
     */
    cursor?: ReservasjonUtleietjenesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservasjonUtleietjenestes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservasjonUtleietjenestes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservasjonUtleietjenestes.
     */
    distinct?: ReservasjonUtleietjenesteScalarFieldEnum | ReservasjonUtleietjenesteScalarFieldEnum[]
  }


  /**
   * ReservasjonUtleietjeneste findMany
   */
  export type ReservasjonUtleietjenesteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservasjonUtleietjeneste
     */
    select?: ReservasjonUtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonUtleietjenesteInclude<ExtArgs> | null
    /**
     * Filter, which ReservasjonUtleietjenestes to fetch.
     */
    where?: ReservasjonUtleietjenesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservasjonUtleietjenestes to fetch.
     */
    orderBy?: ReservasjonUtleietjenesteOrderByWithRelationInput | ReservasjonUtleietjenesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReservasjonUtleietjenestes.
     */
    cursor?: ReservasjonUtleietjenesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservasjonUtleietjenestes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservasjonUtleietjenestes.
     */
    skip?: number
    distinct?: ReservasjonUtleietjenesteScalarFieldEnum | ReservasjonUtleietjenesteScalarFieldEnum[]
  }


  /**
   * ReservasjonUtleietjeneste create
   */
  export type ReservasjonUtleietjenesteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservasjonUtleietjeneste
     */
    select?: ReservasjonUtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonUtleietjenesteInclude<ExtArgs> | null
    /**
     * The data needed to create a ReservasjonUtleietjeneste.
     */
    data: XOR<ReservasjonUtleietjenesteCreateInput, ReservasjonUtleietjenesteUncheckedCreateInput>
  }


  /**
   * ReservasjonUtleietjeneste createMany
   */
  export type ReservasjonUtleietjenesteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReservasjonUtleietjenestes.
     */
    data: ReservasjonUtleietjenesteCreateManyInput | ReservasjonUtleietjenesteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ReservasjonUtleietjeneste update
   */
  export type ReservasjonUtleietjenesteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservasjonUtleietjeneste
     */
    select?: ReservasjonUtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonUtleietjenesteInclude<ExtArgs> | null
    /**
     * The data needed to update a ReservasjonUtleietjeneste.
     */
    data: XOR<ReservasjonUtleietjenesteUpdateInput, ReservasjonUtleietjenesteUncheckedUpdateInput>
    /**
     * Choose, which ReservasjonUtleietjeneste to update.
     */
    where: ReservasjonUtleietjenesteWhereUniqueInput
  }


  /**
   * ReservasjonUtleietjeneste updateMany
   */
  export type ReservasjonUtleietjenesteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReservasjonUtleietjenestes.
     */
    data: XOR<ReservasjonUtleietjenesteUpdateManyMutationInput, ReservasjonUtleietjenesteUncheckedUpdateManyInput>
    /**
     * Filter which ReservasjonUtleietjenestes to update
     */
    where?: ReservasjonUtleietjenesteWhereInput
  }


  /**
   * ReservasjonUtleietjeneste upsert
   */
  export type ReservasjonUtleietjenesteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservasjonUtleietjeneste
     */
    select?: ReservasjonUtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonUtleietjenesteInclude<ExtArgs> | null
    /**
     * The filter to search for the ReservasjonUtleietjeneste to update in case it exists.
     */
    where: ReservasjonUtleietjenesteWhereUniqueInput
    /**
     * In case the ReservasjonUtleietjeneste found by the `where` argument doesn't exist, create a new ReservasjonUtleietjeneste with this data.
     */
    create: XOR<ReservasjonUtleietjenesteCreateInput, ReservasjonUtleietjenesteUncheckedCreateInput>
    /**
     * In case the ReservasjonUtleietjeneste was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservasjonUtleietjenesteUpdateInput, ReservasjonUtleietjenesteUncheckedUpdateInput>
  }


  /**
   * ReservasjonUtleietjeneste delete
   */
  export type ReservasjonUtleietjenesteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservasjonUtleietjeneste
     */
    select?: ReservasjonUtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonUtleietjenesteInclude<ExtArgs> | null
    /**
     * Filter which ReservasjonUtleietjeneste to delete.
     */
    where: ReservasjonUtleietjenesteWhereUniqueInput
  }


  /**
   * ReservasjonUtleietjeneste deleteMany
   */
  export type ReservasjonUtleietjenesteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservasjonUtleietjenestes to delete
     */
    where?: ReservasjonUtleietjenesteWhereInput
  }


  /**
   * ReservasjonUtleietjeneste without action
   */
  export type ReservasjonUtleietjenesteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservasjonUtleietjeneste
     */
    select?: ReservasjonUtleietjenesteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasjonUtleietjenesteInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FasilitetScalarFieldEnum: {
    fasilitetNr: 'fasilitetNr',
    navn: 'navn',
    pris: 'pris'
  };

  export type FasilitetScalarFieldEnum = (typeof FasilitetScalarFieldEnum)[keyof typeof FasilitetScalarFieldEnum]


  export const PlassScalarFieldEnum: {
    plassNr: 'plassNr',
    fasilitetNrId: 'fasilitetNrId'
  };

  export type PlassScalarFieldEnum = (typeof PlassScalarFieldEnum)[keyof typeof PlassScalarFieldEnum]


  export const BrukerScalarFieldEnum: {
    brukerNr: 'brukerNr',
    fornavn: 'fornavn',
    etternavn: 'etternavn',
    epost: 'epost',
    telefon: 'telefon',
    passord: 'passord'
  };

  export type BrukerScalarFieldEnum = (typeof BrukerScalarFieldEnum)[keyof typeof BrukerScalarFieldEnum]


  export const SoneScalarFieldEnum: {
    soneNr: 'soneNr',
    sonenavn: 'sonenavn'
  };

  export type SoneScalarFieldEnum = (typeof SoneScalarFieldEnum)[keyof typeof SoneScalarFieldEnum]


  export const UtleietjenesteScalarFieldEnum: {
    utleieTjenesteNr: 'utleieTjenesteNr',
    tjenestenavn: 'tjenestenavn',
    dagerTilgj: 'dagerTilgj',
    tilgjTid: 'tilgjTid',
    pris: 'pris'
  };

  export type UtleietjenesteScalarFieldEnum = (typeof UtleietjenesteScalarFieldEnum)[keyof typeof UtleietjenesteScalarFieldEnum]


  export const ReservasjonScalarFieldEnum: {
    reservasjonNr: 'reservasjonNr',
    brukerNrId: 'brukerNrId',
    soneNrId: 'soneNrId',
    plassNrId: 'plassNrId',
    fraDato: 'fraDato',
    tilDato: 'tilDato'
  };

  export type ReservasjonScalarFieldEnum = (typeof ReservasjonScalarFieldEnum)[keyof typeof ReservasjonScalarFieldEnum]


  export const ReservasjonUtleietjenesteScalarFieldEnum: {
    antall: 'antall',
    utleieTjenesteNr: 'utleieTjenesteNr',
    reservasjonNr: 'reservasjonNr'
  };

  export type ReservasjonUtleietjenesteScalarFieldEnum = (typeof ReservasjonUtleietjenesteScalarFieldEnum)[keyof typeof ReservasjonUtleietjenesteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FasilitetWhereInput = {
    AND?: FasilitetWhereInput | FasilitetWhereInput[]
    OR?: FasilitetWhereInput[]
    NOT?: FasilitetWhereInput | FasilitetWhereInput[]
    fasilitetNr?: IntFilter<"Fasilitet"> | number
    navn?: StringFilter<"Fasilitet"> | string
    pris?: IntFilter<"Fasilitet"> | number
    plasser?: PlassListRelationFilter
  }

  export type FasilitetOrderByWithRelationInput = {
    fasilitetNr?: SortOrder
    navn?: SortOrder
    pris?: SortOrder
    plasser?: PlassOrderByRelationAggregateInput
  }

  export type FasilitetWhereUniqueInput = Prisma.AtLeast<{
    fasilitetNr?: number
    AND?: FasilitetWhereInput | FasilitetWhereInput[]
    OR?: FasilitetWhereInput[]
    NOT?: FasilitetWhereInput | FasilitetWhereInput[]
    navn?: StringFilter<"Fasilitet"> | string
    pris?: IntFilter<"Fasilitet"> | number
    plasser?: PlassListRelationFilter
  }, "fasilitetNr">

  export type FasilitetOrderByWithAggregationInput = {
    fasilitetNr?: SortOrder
    navn?: SortOrder
    pris?: SortOrder
    _count?: FasilitetCountOrderByAggregateInput
    _avg?: FasilitetAvgOrderByAggregateInput
    _max?: FasilitetMaxOrderByAggregateInput
    _min?: FasilitetMinOrderByAggregateInput
    _sum?: FasilitetSumOrderByAggregateInput
  }

  export type FasilitetScalarWhereWithAggregatesInput = {
    AND?: FasilitetScalarWhereWithAggregatesInput | FasilitetScalarWhereWithAggregatesInput[]
    OR?: FasilitetScalarWhereWithAggregatesInput[]
    NOT?: FasilitetScalarWhereWithAggregatesInput | FasilitetScalarWhereWithAggregatesInput[]
    fasilitetNr?: IntWithAggregatesFilter<"Fasilitet"> | number
    navn?: StringWithAggregatesFilter<"Fasilitet"> | string
    pris?: IntWithAggregatesFilter<"Fasilitet"> | number
  }

  export type PlassWhereInput = {
    AND?: PlassWhereInput | PlassWhereInput[]
    OR?: PlassWhereInput[]
    NOT?: PlassWhereInput | PlassWhereInput[]
    plassNr?: IntFilter<"Plass"> | number
    fasilitetNrId?: IntFilter<"Plass"> | number
    fasilitet?: XOR<FasilitetRelationFilter, FasilitetWhereInput>
    reservasjoner?: ReservasjonListRelationFilter
  }

  export type PlassOrderByWithRelationInput = {
    plassNr?: SortOrder
    fasilitetNrId?: SortOrder
    fasilitet?: FasilitetOrderByWithRelationInput
    reservasjoner?: ReservasjonOrderByRelationAggregateInput
  }

  export type PlassWhereUniqueInput = Prisma.AtLeast<{
    plassNr?: number
    AND?: PlassWhereInput | PlassWhereInput[]
    OR?: PlassWhereInput[]
    NOT?: PlassWhereInput | PlassWhereInput[]
    fasilitetNrId?: IntFilter<"Plass"> | number
    fasilitet?: XOR<FasilitetRelationFilter, FasilitetWhereInput>
    reservasjoner?: ReservasjonListRelationFilter
  }, "plassNr">

  export type PlassOrderByWithAggregationInput = {
    plassNr?: SortOrder
    fasilitetNrId?: SortOrder
    _count?: PlassCountOrderByAggregateInput
    _avg?: PlassAvgOrderByAggregateInput
    _max?: PlassMaxOrderByAggregateInput
    _min?: PlassMinOrderByAggregateInput
    _sum?: PlassSumOrderByAggregateInput
  }

  export type PlassScalarWhereWithAggregatesInput = {
    AND?: PlassScalarWhereWithAggregatesInput | PlassScalarWhereWithAggregatesInput[]
    OR?: PlassScalarWhereWithAggregatesInput[]
    NOT?: PlassScalarWhereWithAggregatesInput | PlassScalarWhereWithAggregatesInput[]
    plassNr?: IntWithAggregatesFilter<"Plass"> | number
    fasilitetNrId?: IntWithAggregatesFilter<"Plass"> | number
  }

  export type BrukerWhereInput = {
    AND?: BrukerWhereInput | BrukerWhereInput[]
    OR?: BrukerWhereInput[]
    NOT?: BrukerWhereInput | BrukerWhereInput[]
    brukerNr?: IntFilter<"Bruker"> | number
    fornavn?: StringFilter<"Bruker"> | string
    etternavn?: StringFilter<"Bruker"> | string
    epost?: StringFilter<"Bruker"> | string
    telefon?: StringFilter<"Bruker"> | string
    passord?: StringFilter<"Bruker"> | string
    reservasjoner?: ReservasjonListRelationFilter
  }

  export type BrukerOrderByWithRelationInput = {
    brukerNr?: SortOrder
    fornavn?: SortOrder
    etternavn?: SortOrder
    epost?: SortOrder
    telefon?: SortOrder
    passord?: SortOrder
    reservasjoner?: ReservasjonOrderByRelationAggregateInput
  }

  export type BrukerWhereUniqueInput = Prisma.AtLeast<{
    brukerNr?: number
    AND?: BrukerWhereInput | BrukerWhereInput[]
    OR?: BrukerWhereInput[]
    NOT?: BrukerWhereInput | BrukerWhereInput[]
    fornavn?: StringFilter<"Bruker"> | string
    etternavn?: StringFilter<"Bruker"> | string
    epost?: StringFilter<"Bruker"> | string
    telefon?: StringFilter<"Bruker"> | string
    passord?: StringFilter<"Bruker"> | string
    reservasjoner?: ReservasjonListRelationFilter
  }, "brukerNr">

  export type BrukerOrderByWithAggregationInput = {
    brukerNr?: SortOrder
    fornavn?: SortOrder
    etternavn?: SortOrder
    epost?: SortOrder
    telefon?: SortOrder
    passord?: SortOrder
    _count?: BrukerCountOrderByAggregateInput
    _avg?: BrukerAvgOrderByAggregateInput
    _max?: BrukerMaxOrderByAggregateInput
    _min?: BrukerMinOrderByAggregateInput
    _sum?: BrukerSumOrderByAggregateInput
  }

  export type BrukerScalarWhereWithAggregatesInput = {
    AND?: BrukerScalarWhereWithAggregatesInput | BrukerScalarWhereWithAggregatesInput[]
    OR?: BrukerScalarWhereWithAggregatesInput[]
    NOT?: BrukerScalarWhereWithAggregatesInput | BrukerScalarWhereWithAggregatesInput[]
    brukerNr?: IntWithAggregatesFilter<"Bruker"> | number
    fornavn?: StringWithAggregatesFilter<"Bruker"> | string
    etternavn?: StringWithAggregatesFilter<"Bruker"> | string
    epost?: StringWithAggregatesFilter<"Bruker"> | string
    telefon?: StringWithAggregatesFilter<"Bruker"> | string
    passord?: StringWithAggregatesFilter<"Bruker"> | string
  }

  export type SoneWhereInput = {
    AND?: SoneWhereInput | SoneWhereInput[]
    OR?: SoneWhereInput[]
    NOT?: SoneWhereInput | SoneWhereInput[]
    soneNr?: IntFilter<"Sone"> | number
    sonenavn?: StringFilter<"Sone"> | string
    reservasjoner?: ReservasjonListRelationFilter
  }

  export type SoneOrderByWithRelationInput = {
    soneNr?: SortOrder
    sonenavn?: SortOrder
    reservasjoner?: ReservasjonOrderByRelationAggregateInput
  }

  export type SoneWhereUniqueInput = Prisma.AtLeast<{
    soneNr?: number
    AND?: SoneWhereInput | SoneWhereInput[]
    OR?: SoneWhereInput[]
    NOT?: SoneWhereInput | SoneWhereInput[]
    sonenavn?: StringFilter<"Sone"> | string
    reservasjoner?: ReservasjonListRelationFilter
  }, "soneNr">

  export type SoneOrderByWithAggregationInput = {
    soneNr?: SortOrder
    sonenavn?: SortOrder
    _count?: SoneCountOrderByAggregateInput
    _avg?: SoneAvgOrderByAggregateInput
    _max?: SoneMaxOrderByAggregateInput
    _min?: SoneMinOrderByAggregateInput
    _sum?: SoneSumOrderByAggregateInput
  }

  export type SoneScalarWhereWithAggregatesInput = {
    AND?: SoneScalarWhereWithAggregatesInput | SoneScalarWhereWithAggregatesInput[]
    OR?: SoneScalarWhereWithAggregatesInput[]
    NOT?: SoneScalarWhereWithAggregatesInput | SoneScalarWhereWithAggregatesInput[]
    soneNr?: IntWithAggregatesFilter<"Sone"> | number
    sonenavn?: StringWithAggregatesFilter<"Sone"> | string
  }

  export type UtleietjenesteWhereInput = {
    AND?: UtleietjenesteWhereInput | UtleietjenesteWhereInput[]
    OR?: UtleietjenesteWhereInput[]
    NOT?: UtleietjenesteWhereInput | UtleietjenesteWhereInput[]
    utleieTjenesteNr?: IntFilter<"Utleietjeneste"> | number
    tjenestenavn?: StringFilter<"Utleietjeneste"> | string
    dagerTilgj?: StringFilter<"Utleietjeneste"> | string
    tilgjTid?: StringFilter<"Utleietjeneste"> | string
    pris?: IntFilter<"Utleietjeneste"> | number
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteListRelationFilter
  }

  export type UtleietjenesteOrderByWithRelationInput = {
    utleieTjenesteNr?: SortOrder
    tjenestenavn?: SortOrder
    dagerTilgj?: SortOrder
    tilgjTid?: SortOrder
    pris?: SortOrder
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteOrderByRelationAggregateInput
  }

  export type UtleietjenesteWhereUniqueInput = Prisma.AtLeast<{
    utleieTjenesteNr?: number
    AND?: UtleietjenesteWhereInput | UtleietjenesteWhereInput[]
    OR?: UtleietjenesteWhereInput[]
    NOT?: UtleietjenesteWhereInput | UtleietjenesteWhereInput[]
    tjenestenavn?: StringFilter<"Utleietjeneste"> | string
    dagerTilgj?: StringFilter<"Utleietjeneste"> | string
    tilgjTid?: StringFilter<"Utleietjeneste"> | string
    pris?: IntFilter<"Utleietjeneste"> | number
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteListRelationFilter
  }, "utleieTjenesteNr">

  export type UtleietjenesteOrderByWithAggregationInput = {
    utleieTjenesteNr?: SortOrder
    tjenestenavn?: SortOrder
    dagerTilgj?: SortOrder
    tilgjTid?: SortOrder
    pris?: SortOrder
    _count?: UtleietjenesteCountOrderByAggregateInput
    _avg?: UtleietjenesteAvgOrderByAggregateInput
    _max?: UtleietjenesteMaxOrderByAggregateInput
    _min?: UtleietjenesteMinOrderByAggregateInput
    _sum?: UtleietjenesteSumOrderByAggregateInput
  }

  export type UtleietjenesteScalarWhereWithAggregatesInput = {
    AND?: UtleietjenesteScalarWhereWithAggregatesInput | UtleietjenesteScalarWhereWithAggregatesInput[]
    OR?: UtleietjenesteScalarWhereWithAggregatesInput[]
    NOT?: UtleietjenesteScalarWhereWithAggregatesInput | UtleietjenesteScalarWhereWithAggregatesInput[]
    utleieTjenesteNr?: IntWithAggregatesFilter<"Utleietjeneste"> | number
    tjenestenavn?: StringWithAggregatesFilter<"Utleietjeneste"> | string
    dagerTilgj?: StringWithAggregatesFilter<"Utleietjeneste"> | string
    tilgjTid?: StringWithAggregatesFilter<"Utleietjeneste"> | string
    pris?: IntWithAggregatesFilter<"Utleietjeneste"> | number
  }

  export type ReservasjonWhereInput = {
    AND?: ReservasjonWhereInput | ReservasjonWhereInput[]
    OR?: ReservasjonWhereInput[]
    NOT?: ReservasjonWhereInput | ReservasjonWhereInput[]
    reservasjonNr?: IntFilter<"Reservasjon"> | number
    brukerNrId?: IntFilter<"Reservasjon"> | number
    soneNrId?: IntFilter<"Reservasjon"> | number
    plassNrId?: IntFilter<"Reservasjon"> | number
    fraDato?: StringFilter<"Reservasjon"> | string
    tilDato?: StringFilter<"Reservasjon"> | string
    bruker?: XOR<BrukerRelationFilter, BrukerWhereInput>
    sone?: XOR<SoneRelationFilter, SoneWhereInput>
    plass?: XOR<PlassRelationFilter, PlassWhereInput>
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteListRelationFilter
  }

  export type ReservasjonOrderByWithRelationInput = {
    reservasjonNr?: SortOrder
    brukerNrId?: SortOrder
    soneNrId?: SortOrder
    plassNrId?: SortOrder
    fraDato?: SortOrder
    tilDato?: SortOrder
    bruker?: BrukerOrderByWithRelationInput
    sone?: SoneOrderByWithRelationInput
    plass?: PlassOrderByWithRelationInput
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteOrderByRelationAggregateInput
  }

  export type ReservasjonWhereUniqueInput = Prisma.AtLeast<{
    reservasjonNr?: number
    AND?: ReservasjonWhereInput | ReservasjonWhereInput[]
    OR?: ReservasjonWhereInput[]
    NOT?: ReservasjonWhereInput | ReservasjonWhereInput[]
    brukerNrId?: IntFilter<"Reservasjon"> | number
    soneNrId?: IntFilter<"Reservasjon"> | number
    plassNrId?: IntFilter<"Reservasjon"> | number
    fraDato?: StringFilter<"Reservasjon"> | string
    tilDato?: StringFilter<"Reservasjon"> | string
    bruker?: XOR<BrukerRelationFilter, BrukerWhereInput>
    sone?: XOR<SoneRelationFilter, SoneWhereInput>
    plass?: XOR<PlassRelationFilter, PlassWhereInput>
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteListRelationFilter
  }, "reservasjonNr">

  export type ReservasjonOrderByWithAggregationInput = {
    reservasjonNr?: SortOrder
    brukerNrId?: SortOrder
    soneNrId?: SortOrder
    plassNrId?: SortOrder
    fraDato?: SortOrder
    tilDato?: SortOrder
    _count?: ReservasjonCountOrderByAggregateInput
    _avg?: ReservasjonAvgOrderByAggregateInput
    _max?: ReservasjonMaxOrderByAggregateInput
    _min?: ReservasjonMinOrderByAggregateInput
    _sum?: ReservasjonSumOrderByAggregateInput
  }

  export type ReservasjonScalarWhereWithAggregatesInput = {
    AND?: ReservasjonScalarWhereWithAggregatesInput | ReservasjonScalarWhereWithAggregatesInput[]
    OR?: ReservasjonScalarWhereWithAggregatesInput[]
    NOT?: ReservasjonScalarWhereWithAggregatesInput | ReservasjonScalarWhereWithAggregatesInput[]
    reservasjonNr?: IntWithAggregatesFilter<"Reservasjon"> | number
    brukerNrId?: IntWithAggregatesFilter<"Reservasjon"> | number
    soneNrId?: IntWithAggregatesFilter<"Reservasjon"> | number
    plassNrId?: IntWithAggregatesFilter<"Reservasjon"> | number
    fraDato?: StringWithAggregatesFilter<"Reservasjon"> | string
    tilDato?: StringWithAggregatesFilter<"Reservasjon"> | string
  }

  export type ReservasjonUtleietjenesteWhereInput = {
    AND?: ReservasjonUtleietjenesteWhereInput | ReservasjonUtleietjenesteWhereInput[]
    OR?: ReservasjonUtleietjenesteWhereInput[]
    NOT?: ReservasjonUtleietjenesteWhereInput | ReservasjonUtleietjenesteWhereInput[]
    antall?: IntFilter<"ReservasjonUtleietjeneste"> | number
    utleieTjenesteNr?: IntFilter<"ReservasjonUtleietjeneste"> | number
    reservasjonNr?: IntFilter<"ReservasjonUtleietjeneste"> | number
    utleietjeneste?: XOR<UtleietjenesteRelationFilter, UtleietjenesteWhereInput>
    reservasjon?: XOR<ReservasjonRelationFilter, ReservasjonWhereInput>
  }

  export type ReservasjonUtleietjenesteOrderByWithRelationInput = {
    antall?: SortOrder
    utleieTjenesteNr?: SortOrder
    reservasjonNr?: SortOrder
    utleietjeneste?: UtleietjenesteOrderByWithRelationInput
    reservasjon?: ReservasjonOrderByWithRelationInput
  }

  export type ReservasjonUtleietjenesteWhereUniqueInput = Prisma.AtLeast<{
    reservasjonNr_utleieTjenesteNr?: ReservasjonUtleietjenesteReservasjonNrUtleieTjenesteNrCompoundUniqueInput
    AND?: ReservasjonUtleietjenesteWhereInput | ReservasjonUtleietjenesteWhereInput[]
    OR?: ReservasjonUtleietjenesteWhereInput[]
    NOT?: ReservasjonUtleietjenesteWhereInput | ReservasjonUtleietjenesteWhereInput[]
    antall?: IntFilter<"ReservasjonUtleietjeneste"> | number
    utleieTjenesteNr?: IntFilter<"ReservasjonUtleietjeneste"> | number
    reservasjonNr?: IntFilter<"ReservasjonUtleietjeneste"> | number
    utleietjeneste?: XOR<UtleietjenesteRelationFilter, UtleietjenesteWhereInput>
    reservasjon?: XOR<ReservasjonRelationFilter, ReservasjonWhereInput>
  }, "reservasjonNr_utleieTjenesteNr">

  export type ReservasjonUtleietjenesteOrderByWithAggregationInput = {
    antall?: SortOrder
    utleieTjenesteNr?: SortOrder
    reservasjonNr?: SortOrder
    _count?: ReservasjonUtleietjenesteCountOrderByAggregateInput
    _avg?: ReservasjonUtleietjenesteAvgOrderByAggregateInput
    _max?: ReservasjonUtleietjenesteMaxOrderByAggregateInput
    _min?: ReservasjonUtleietjenesteMinOrderByAggregateInput
    _sum?: ReservasjonUtleietjenesteSumOrderByAggregateInput
  }

  export type ReservasjonUtleietjenesteScalarWhereWithAggregatesInput = {
    AND?: ReservasjonUtleietjenesteScalarWhereWithAggregatesInput | ReservasjonUtleietjenesteScalarWhereWithAggregatesInput[]
    OR?: ReservasjonUtleietjenesteScalarWhereWithAggregatesInput[]
    NOT?: ReservasjonUtleietjenesteScalarWhereWithAggregatesInput | ReservasjonUtleietjenesteScalarWhereWithAggregatesInput[]
    antall?: IntWithAggregatesFilter<"ReservasjonUtleietjeneste"> | number
    utleieTjenesteNr?: IntWithAggregatesFilter<"ReservasjonUtleietjeneste"> | number
    reservasjonNr?: IntWithAggregatesFilter<"ReservasjonUtleietjeneste"> | number
  }

  export type FasilitetCreateInput = {
    navn: string
    pris: number
    plasser?: PlassCreateNestedManyWithoutFasilitetInput
  }

  export type FasilitetUncheckedCreateInput = {
    fasilitetNr?: number
    navn: string
    pris: number
    plasser?: PlassUncheckedCreateNestedManyWithoutFasilitetInput
  }

  export type FasilitetUpdateInput = {
    navn?: StringFieldUpdateOperationsInput | string
    pris?: IntFieldUpdateOperationsInput | number
    plasser?: PlassUpdateManyWithoutFasilitetNestedInput
  }

  export type FasilitetUncheckedUpdateInput = {
    fasilitetNr?: IntFieldUpdateOperationsInput | number
    navn?: StringFieldUpdateOperationsInput | string
    pris?: IntFieldUpdateOperationsInput | number
    plasser?: PlassUncheckedUpdateManyWithoutFasilitetNestedInput
  }

  export type FasilitetCreateManyInput = {
    fasilitetNr?: number
    navn: string
    pris: number
  }

  export type FasilitetUpdateManyMutationInput = {
    navn?: StringFieldUpdateOperationsInput | string
    pris?: IntFieldUpdateOperationsInput | number
  }

  export type FasilitetUncheckedUpdateManyInput = {
    fasilitetNr?: IntFieldUpdateOperationsInput | number
    navn?: StringFieldUpdateOperationsInput | string
    pris?: IntFieldUpdateOperationsInput | number
  }

  export type PlassCreateInput = {
    fasilitet: FasilitetCreateNestedOneWithoutPlasserInput
    reservasjoner?: ReservasjonCreateNestedManyWithoutPlassInput
  }

  export type PlassUncheckedCreateInput = {
    plassNr?: number
    fasilitetNrId: number
    reservasjoner?: ReservasjonUncheckedCreateNestedManyWithoutPlassInput
  }

  export type PlassUpdateInput = {
    fasilitet?: FasilitetUpdateOneRequiredWithoutPlasserNestedInput
    reservasjoner?: ReservasjonUpdateManyWithoutPlassNestedInput
  }

  export type PlassUncheckedUpdateInput = {
    plassNr?: IntFieldUpdateOperationsInput | number
    fasilitetNrId?: IntFieldUpdateOperationsInput | number
    reservasjoner?: ReservasjonUncheckedUpdateManyWithoutPlassNestedInput
  }

  export type PlassCreateManyInput = {
    plassNr?: number
    fasilitetNrId: number
  }

  export type PlassUpdateManyMutationInput = {

  }

  export type PlassUncheckedUpdateManyInput = {
    plassNr?: IntFieldUpdateOperationsInput | number
    fasilitetNrId?: IntFieldUpdateOperationsInput | number
  }

  export type BrukerCreateInput = {
    fornavn: string
    etternavn: string
    epost: string
    telefon: string
    passord: string
    reservasjoner?: ReservasjonCreateNestedManyWithoutBrukerInput
  }

  export type BrukerUncheckedCreateInput = {
    brukerNr?: number
    fornavn: string
    etternavn: string
    epost: string
    telefon: string
    passord: string
    reservasjoner?: ReservasjonUncheckedCreateNestedManyWithoutBrukerInput
  }

  export type BrukerUpdateInput = {
    fornavn?: StringFieldUpdateOperationsInput | string
    etternavn?: StringFieldUpdateOperationsInput | string
    epost?: StringFieldUpdateOperationsInput | string
    telefon?: StringFieldUpdateOperationsInput | string
    passord?: StringFieldUpdateOperationsInput | string
    reservasjoner?: ReservasjonUpdateManyWithoutBrukerNestedInput
  }

  export type BrukerUncheckedUpdateInput = {
    brukerNr?: IntFieldUpdateOperationsInput | number
    fornavn?: StringFieldUpdateOperationsInput | string
    etternavn?: StringFieldUpdateOperationsInput | string
    epost?: StringFieldUpdateOperationsInput | string
    telefon?: StringFieldUpdateOperationsInput | string
    passord?: StringFieldUpdateOperationsInput | string
    reservasjoner?: ReservasjonUncheckedUpdateManyWithoutBrukerNestedInput
  }

  export type BrukerCreateManyInput = {
    brukerNr?: number
    fornavn: string
    etternavn: string
    epost: string
    telefon: string
    passord: string
  }

  export type BrukerUpdateManyMutationInput = {
    fornavn?: StringFieldUpdateOperationsInput | string
    etternavn?: StringFieldUpdateOperationsInput | string
    epost?: StringFieldUpdateOperationsInput | string
    telefon?: StringFieldUpdateOperationsInput | string
    passord?: StringFieldUpdateOperationsInput | string
  }

  export type BrukerUncheckedUpdateManyInput = {
    brukerNr?: IntFieldUpdateOperationsInput | number
    fornavn?: StringFieldUpdateOperationsInput | string
    etternavn?: StringFieldUpdateOperationsInput | string
    epost?: StringFieldUpdateOperationsInput | string
    telefon?: StringFieldUpdateOperationsInput | string
    passord?: StringFieldUpdateOperationsInput | string
  }

  export type SoneCreateInput = {
    sonenavn: string
    reservasjoner?: ReservasjonCreateNestedManyWithoutSoneInput
  }

  export type SoneUncheckedCreateInput = {
    soneNr?: number
    sonenavn: string
    reservasjoner?: ReservasjonUncheckedCreateNestedManyWithoutSoneInput
  }

  export type SoneUpdateInput = {
    sonenavn?: StringFieldUpdateOperationsInput | string
    reservasjoner?: ReservasjonUpdateManyWithoutSoneNestedInput
  }

  export type SoneUncheckedUpdateInput = {
    soneNr?: IntFieldUpdateOperationsInput | number
    sonenavn?: StringFieldUpdateOperationsInput | string
    reservasjoner?: ReservasjonUncheckedUpdateManyWithoutSoneNestedInput
  }

  export type SoneCreateManyInput = {
    soneNr?: number
    sonenavn: string
  }

  export type SoneUpdateManyMutationInput = {
    sonenavn?: StringFieldUpdateOperationsInput | string
  }

  export type SoneUncheckedUpdateManyInput = {
    soneNr?: IntFieldUpdateOperationsInput | number
    sonenavn?: StringFieldUpdateOperationsInput | string
  }

  export type UtleietjenesteCreateInput = {
    tjenestenavn: string
    dagerTilgj: string
    tilgjTid: string
    pris: number
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteCreateNestedManyWithoutUtleietjenesteInput
  }

  export type UtleietjenesteUncheckedCreateInput = {
    utleieTjenesteNr?: number
    tjenestenavn: string
    dagerTilgj: string
    tilgjTid: string
    pris: number
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteUncheckedCreateNestedManyWithoutUtleietjenesteInput
  }

  export type UtleietjenesteUpdateInput = {
    tjenestenavn?: StringFieldUpdateOperationsInput | string
    dagerTilgj?: StringFieldUpdateOperationsInput | string
    tilgjTid?: StringFieldUpdateOperationsInput | string
    pris?: IntFieldUpdateOperationsInput | number
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteUpdateManyWithoutUtleietjenesteNestedInput
  }

  export type UtleietjenesteUncheckedUpdateInput = {
    utleieTjenesteNr?: IntFieldUpdateOperationsInput | number
    tjenestenavn?: StringFieldUpdateOperationsInput | string
    dagerTilgj?: StringFieldUpdateOperationsInput | string
    tilgjTid?: StringFieldUpdateOperationsInput | string
    pris?: IntFieldUpdateOperationsInput | number
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteUncheckedUpdateManyWithoutUtleietjenesteNestedInput
  }

  export type UtleietjenesteCreateManyInput = {
    utleieTjenesteNr?: number
    tjenestenavn: string
    dagerTilgj: string
    tilgjTid: string
    pris: number
  }

  export type UtleietjenesteUpdateManyMutationInput = {
    tjenestenavn?: StringFieldUpdateOperationsInput | string
    dagerTilgj?: StringFieldUpdateOperationsInput | string
    tilgjTid?: StringFieldUpdateOperationsInput | string
    pris?: IntFieldUpdateOperationsInput | number
  }

  export type UtleietjenesteUncheckedUpdateManyInput = {
    utleieTjenesteNr?: IntFieldUpdateOperationsInput | number
    tjenestenavn?: StringFieldUpdateOperationsInput | string
    dagerTilgj?: StringFieldUpdateOperationsInput | string
    tilgjTid?: StringFieldUpdateOperationsInput | string
    pris?: IntFieldUpdateOperationsInput | number
  }

  export type ReservasjonCreateInput = {
    fraDato: string
    tilDato: string
    bruker: BrukerCreateNestedOneWithoutReservasjonerInput
    sone: SoneCreateNestedOneWithoutReservasjonerInput
    plass: PlassCreateNestedOneWithoutReservasjonerInput
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteCreateNestedManyWithoutReservasjonInput
  }

  export type ReservasjonUncheckedCreateInput = {
    reservasjonNr?: number
    brukerNrId: number
    soneNrId: number
    plassNrId: number
    fraDato: string
    tilDato: string
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteUncheckedCreateNestedManyWithoutReservasjonInput
  }

  export type ReservasjonUpdateInput = {
    fraDato?: StringFieldUpdateOperationsInput | string
    tilDato?: StringFieldUpdateOperationsInput | string
    bruker?: BrukerUpdateOneRequiredWithoutReservasjonerNestedInput
    sone?: SoneUpdateOneRequiredWithoutReservasjonerNestedInput
    plass?: PlassUpdateOneRequiredWithoutReservasjonerNestedInput
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteUpdateManyWithoutReservasjonNestedInput
  }

  export type ReservasjonUncheckedUpdateInput = {
    reservasjonNr?: IntFieldUpdateOperationsInput | number
    brukerNrId?: IntFieldUpdateOperationsInput | number
    soneNrId?: IntFieldUpdateOperationsInput | number
    plassNrId?: IntFieldUpdateOperationsInput | number
    fraDato?: StringFieldUpdateOperationsInput | string
    tilDato?: StringFieldUpdateOperationsInput | string
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteUncheckedUpdateManyWithoutReservasjonNestedInput
  }

  export type ReservasjonCreateManyInput = {
    reservasjonNr?: number
    brukerNrId: number
    soneNrId: number
    plassNrId: number
    fraDato: string
    tilDato: string
  }

  export type ReservasjonUpdateManyMutationInput = {
    fraDato?: StringFieldUpdateOperationsInput | string
    tilDato?: StringFieldUpdateOperationsInput | string
  }

  export type ReservasjonUncheckedUpdateManyInput = {
    reservasjonNr?: IntFieldUpdateOperationsInput | number
    brukerNrId?: IntFieldUpdateOperationsInput | number
    soneNrId?: IntFieldUpdateOperationsInput | number
    plassNrId?: IntFieldUpdateOperationsInput | number
    fraDato?: StringFieldUpdateOperationsInput | string
    tilDato?: StringFieldUpdateOperationsInput | string
  }

  export type ReservasjonUtleietjenesteCreateInput = {
    antall: number
    utleietjeneste: UtleietjenesteCreateNestedOneWithoutReservasjonUtleietjenesteInput
    reservasjon: ReservasjonCreateNestedOneWithoutReservasjonUtleietjenesteInput
  }

  export type ReservasjonUtleietjenesteUncheckedCreateInput = {
    antall: number
    utleieTjenesteNr: number
    reservasjonNr: number
  }

  export type ReservasjonUtleietjenesteUpdateInput = {
    antall?: IntFieldUpdateOperationsInput | number
    utleietjeneste?: UtleietjenesteUpdateOneRequiredWithoutReservasjonUtleietjenesteNestedInput
    reservasjon?: ReservasjonUpdateOneRequiredWithoutReservasjonUtleietjenesteNestedInput
  }

  export type ReservasjonUtleietjenesteUncheckedUpdateInput = {
    antall?: IntFieldUpdateOperationsInput | number
    utleieTjenesteNr?: IntFieldUpdateOperationsInput | number
    reservasjonNr?: IntFieldUpdateOperationsInput | number
  }

  export type ReservasjonUtleietjenesteCreateManyInput = {
    antall: number
    utleieTjenesteNr: number
    reservasjonNr: number
  }

  export type ReservasjonUtleietjenesteUpdateManyMutationInput = {
    antall?: IntFieldUpdateOperationsInput | number
  }

  export type ReservasjonUtleietjenesteUncheckedUpdateManyInput = {
    antall?: IntFieldUpdateOperationsInput | number
    utleieTjenesteNr?: IntFieldUpdateOperationsInput | number
    reservasjonNr?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PlassListRelationFilter = {
    every?: PlassWhereInput
    some?: PlassWhereInput
    none?: PlassWhereInput
  }

  export type PlassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FasilitetCountOrderByAggregateInput = {
    fasilitetNr?: SortOrder
    navn?: SortOrder
    pris?: SortOrder
  }

  export type FasilitetAvgOrderByAggregateInput = {
    fasilitetNr?: SortOrder
    pris?: SortOrder
  }

  export type FasilitetMaxOrderByAggregateInput = {
    fasilitetNr?: SortOrder
    navn?: SortOrder
    pris?: SortOrder
  }

  export type FasilitetMinOrderByAggregateInput = {
    fasilitetNr?: SortOrder
    navn?: SortOrder
    pris?: SortOrder
  }

  export type FasilitetSumOrderByAggregateInput = {
    fasilitetNr?: SortOrder
    pris?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FasilitetRelationFilter = {
    is?: FasilitetWhereInput
    isNot?: FasilitetWhereInput
  }

  export type ReservasjonListRelationFilter = {
    every?: ReservasjonWhereInput
    some?: ReservasjonWhereInput
    none?: ReservasjonWhereInput
  }

  export type ReservasjonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlassCountOrderByAggregateInput = {
    plassNr?: SortOrder
    fasilitetNrId?: SortOrder
  }

  export type PlassAvgOrderByAggregateInput = {
    plassNr?: SortOrder
    fasilitetNrId?: SortOrder
  }

  export type PlassMaxOrderByAggregateInput = {
    plassNr?: SortOrder
    fasilitetNrId?: SortOrder
  }

  export type PlassMinOrderByAggregateInput = {
    plassNr?: SortOrder
    fasilitetNrId?: SortOrder
  }

  export type PlassSumOrderByAggregateInput = {
    plassNr?: SortOrder
    fasilitetNrId?: SortOrder
  }

  export type BrukerCountOrderByAggregateInput = {
    brukerNr?: SortOrder
    fornavn?: SortOrder
    etternavn?: SortOrder
    epost?: SortOrder
    telefon?: SortOrder
    passord?: SortOrder
  }

  export type BrukerAvgOrderByAggregateInput = {
    brukerNr?: SortOrder
  }

  export type BrukerMaxOrderByAggregateInput = {
    brukerNr?: SortOrder
    fornavn?: SortOrder
    etternavn?: SortOrder
    epost?: SortOrder
    telefon?: SortOrder
    passord?: SortOrder
  }

  export type BrukerMinOrderByAggregateInput = {
    brukerNr?: SortOrder
    fornavn?: SortOrder
    etternavn?: SortOrder
    epost?: SortOrder
    telefon?: SortOrder
    passord?: SortOrder
  }

  export type BrukerSumOrderByAggregateInput = {
    brukerNr?: SortOrder
  }

  export type SoneCountOrderByAggregateInput = {
    soneNr?: SortOrder
    sonenavn?: SortOrder
  }

  export type SoneAvgOrderByAggregateInput = {
    soneNr?: SortOrder
  }

  export type SoneMaxOrderByAggregateInput = {
    soneNr?: SortOrder
    sonenavn?: SortOrder
  }

  export type SoneMinOrderByAggregateInput = {
    soneNr?: SortOrder
    sonenavn?: SortOrder
  }

  export type SoneSumOrderByAggregateInput = {
    soneNr?: SortOrder
  }

  export type ReservasjonUtleietjenesteListRelationFilter = {
    every?: ReservasjonUtleietjenesteWhereInput
    some?: ReservasjonUtleietjenesteWhereInput
    none?: ReservasjonUtleietjenesteWhereInput
  }

  export type ReservasjonUtleietjenesteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtleietjenesteCountOrderByAggregateInput = {
    utleieTjenesteNr?: SortOrder
    tjenestenavn?: SortOrder
    dagerTilgj?: SortOrder
    tilgjTid?: SortOrder
    pris?: SortOrder
  }

  export type UtleietjenesteAvgOrderByAggregateInput = {
    utleieTjenesteNr?: SortOrder
    pris?: SortOrder
  }

  export type UtleietjenesteMaxOrderByAggregateInput = {
    utleieTjenesteNr?: SortOrder
    tjenestenavn?: SortOrder
    dagerTilgj?: SortOrder
    tilgjTid?: SortOrder
    pris?: SortOrder
  }

  export type UtleietjenesteMinOrderByAggregateInput = {
    utleieTjenesteNr?: SortOrder
    tjenestenavn?: SortOrder
    dagerTilgj?: SortOrder
    tilgjTid?: SortOrder
    pris?: SortOrder
  }

  export type UtleietjenesteSumOrderByAggregateInput = {
    utleieTjenesteNr?: SortOrder
    pris?: SortOrder
  }

  export type BrukerRelationFilter = {
    is?: BrukerWhereInput
    isNot?: BrukerWhereInput
  }

  export type SoneRelationFilter = {
    is?: SoneWhereInput
    isNot?: SoneWhereInput
  }

  export type PlassRelationFilter = {
    is?: PlassWhereInput
    isNot?: PlassWhereInput
  }

  export type ReservasjonCountOrderByAggregateInput = {
    reservasjonNr?: SortOrder
    brukerNrId?: SortOrder
    soneNrId?: SortOrder
    plassNrId?: SortOrder
    fraDato?: SortOrder
    tilDato?: SortOrder
  }

  export type ReservasjonAvgOrderByAggregateInput = {
    reservasjonNr?: SortOrder
    brukerNrId?: SortOrder
    soneNrId?: SortOrder
    plassNrId?: SortOrder
  }

  export type ReservasjonMaxOrderByAggregateInput = {
    reservasjonNr?: SortOrder
    brukerNrId?: SortOrder
    soneNrId?: SortOrder
    plassNrId?: SortOrder
    fraDato?: SortOrder
    tilDato?: SortOrder
  }

  export type ReservasjonMinOrderByAggregateInput = {
    reservasjonNr?: SortOrder
    brukerNrId?: SortOrder
    soneNrId?: SortOrder
    plassNrId?: SortOrder
    fraDato?: SortOrder
    tilDato?: SortOrder
  }

  export type ReservasjonSumOrderByAggregateInput = {
    reservasjonNr?: SortOrder
    brukerNrId?: SortOrder
    soneNrId?: SortOrder
    plassNrId?: SortOrder
  }

  export type UtleietjenesteRelationFilter = {
    is?: UtleietjenesteWhereInput
    isNot?: UtleietjenesteWhereInput
  }

  export type ReservasjonRelationFilter = {
    is?: ReservasjonWhereInput
    isNot?: ReservasjonWhereInput
  }

  export type ReservasjonUtleietjenesteReservasjonNrUtleieTjenesteNrCompoundUniqueInput = {
    reservasjonNr: number
    utleieTjenesteNr: number
  }

  export type ReservasjonUtleietjenesteCountOrderByAggregateInput = {
    antall?: SortOrder
    utleieTjenesteNr?: SortOrder
    reservasjonNr?: SortOrder
  }

  export type ReservasjonUtleietjenesteAvgOrderByAggregateInput = {
    antall?: SortOrder
    utleieTjenesteNr?: SortOrder
    reservasjonNr?: SortOrder
  }

  export type ReservasjonUtleietjenesteMaxOrderByAggregateInput = {
    antall?: SortOrder
    utleieTjenesteNr?: SortOrder
    reservasjonNr?: SortOrder
  }

  export type ReservasjonUtleietjenesteMinOrderByAggregateInput = {
    antall?: SortOrder
    utleieTjenesteNr?: SortOrder
    reservasjonNr?: SortOrder
  }

  export type ReservasjonUtleietjenesteSumOrderByAggregateInput = {
    antall?: SortOrder
    utleieTjenesteNr?: SortOrder
    reservasjonNr?: SortOrder
  }

  export type PlassCreateNestedManyWithoutFasilitetInput = {
    create?: XOR<PlassCreateWithoutFasilitetInput, PlassUncheckedCreateWithoutFasilitetInput> | PlassCreateWithoutFasilitetInput[] | PlassUncheckedCreateWithoutFasilitetInput[]
    connectOrCreate?: PlassCreateOrConnectWithoutFasilitetInput | PlassCreateOrConnectWithoutFasilitetInput[]
    createMany?: PlassCreateManyFasilitetInputEnvelope
    connect?: PlassWhereUniqueInput | PlassWhereUniqueInput[]
  }

  export type PlassUncheckedCreateNestedManyWithoutFasilitetInput = {
    create?: XOR<PlassCreateWithoutFasilitetInput, PlassUncheckedCreateWithoutFasilitetInput> | PlassCreateWithoutFasilitetInput[] | PlassUncheckedCreateWithoutFasilitetInput[]
    connectOrCreate?: PlassCreateOrConnectWithoutFasilitetInput | PlassCreateOrConnectWithoutFasilitetInput[]
    createMany?: PlassCreateManyFasilitetInputEnvelope
    connect?: PlassWhereUniqueInput | PlassWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlassUpdateManyWithoutFasilitetNestedInput = {
    create?: XOR<PlassCreateWithoutFasilitetInput, PlassUncheckedCreateWithoutFasilitetInput> | PlassCreateWithoutFasilitetInput[] | PlassUncheckedCreateWithoutFasilitetInput[]
    connectOrCreate?: PlassCreateOrConnectWithoutFasilitetInput | PlassCreateOrConnectWithoutFasilitetInput[]
    upsert?: PlassUpsertWithWhereUniqueWithoutFasilitetInput | PlassUpsertWithWhereUniqueWithoutFasilitetInput[]
    createMany?: PlassCreateManyFasilitetInputEnvelope
    set?: PlassWhereUniqueInput | PlassWhereUniqueInput[]
    disconnect?: PlassWhereUniqueInput | PlassWhereUniqueInput[]
    delete?: PlassWhereUniqueInput | PlassWhereUniqueInput[]
    connect?: PlassWhereUniqueInput | PlassWhereUniqueInput[]
    update?: PlassUpdateWithWhereUniqueWithoutFasilitetInput | PlassUpdateWithWhereUniqueWithoutFasilitetInput[]
    updateMany?: PlassUpdateManyWithWhereWithoutFasilitetInput | PlassUpdateManyWithWhereWithoutFasilitetInput[]
    deleteMany?: PlassScalarWhereInput | PlassScalarWhereInput[]
  }

  export type PlassUncheckedUpdateManyWithoutFasilitetNestedInput = {
    create?: XOR<PlassCreateWithoutFasilitetInput, PlassUncheckedCreateWithoutFasilitetInput> | PlassCreateWithoutFasilitetInput[] | PlassUncheckedCreateWithoutFasilitetInput[]
    connectOrCreate?: PlassCreateOrConnectWithoutFasilitetInput | PlassCreateOrConnectWithoutFasilitetInput[]
    upsert?: PlassUpsertWithWhereUniqueWithoutFasilitetInput | PlassUpsertWithWhereUniqueWithoutFasilitetInput[]
    createMany?: PlassCreateManyFasilitetInputEnvelope
    set?: PlassWhereUniqueInput | PlassWhereUniqueInput[]
    disconnect?: PlassWhereUniqueInput | PlassWhereUniqueInput[]
    delete?: PlassWhereUniqueInput | PlassWhereUniqueInput[]
    connect?: PlassWhereUniqueInput | PlassWhereUniqueInput[]
    update?: PlassUpdateWithWhereUniqueWithoutFasilitetInput | PlassUpdateWithWhereUniqueWithoutFasilitetInput[]
    updateMany?: PlassUpdateManyWithWhereWithoutFasilitetInput | PlassUpdateManyWithWhereWithoutFasilitetInput[]
    deleteMany?: PlassScalarWhereInput | PlassScalarWhereInput[]
  }

  export type FasilitetCreateNestedOneWithoutPlasserInput = {
    create?: XOR<FasilitetCreateWithoutPlasserInput, FasilitetUncheckedCreateWithoutPlasserInput>
    connectOrCreate?: FasilitetCreateOrConnectWithoutPlasserInput
    connect?: FasilitetWhereUniqueInput
  }

  export type ReservasjonCreateNestedManyWithoutPlassInput = {
    create?: XOR<ReservasjonCreateWithoutPlassInput, ReservasjonUncheckedCreateWithoutPlassInput> | ReservasjonCreateWithoutPlassInput[] | ReservasjonUncheckedCreateWithoutPlassInput[]
    connectOrCreate?: ReservasjonCreateOrConnectWithoutPlassInput | ReservasjonCreateOrConnectWithoutPlassInput[]
    createMany?: ReservasjonCreateManyPlassInputEnvelope
    connect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
  }

  export type ReservasjonUncheckedCreateNestedManyWithoutPlassInput = {
    create?: XOR<ReservasjonCreateWithoutPlassInput, ReservasjonUncheckedCreateWithoutPlassInput> | ReservasjonCreateWithoutPlassInput[] | ReservasjonUncheckedCreateWithoutPlassInput[]
    connectOrCreate?: ReservasjonCreateOrConnectWithoutPlassInput | ReservasjonCreateOrConnectWithoutPlassInput[]
    createMany?: ReservasjonCreateManyPlassInputEnvelope
    connect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
  }

  export type FasilitetUpdateOneRequiredWithoutPlasserNestedInput = {
    create?: XOR<FasilitetCreateWithoutPlasserInput, FasilitetUncheckedCreateWithoutPlasserInput>
    connectOrCreate?: FasilitetCreateOrConnectWithoutPlasserInput
    upsert?: FasilitetUpsertWithoutPlasserInput
    connect?: FasilitetWhereUniqueInput
    update?: XOR<XOR<FasilitetUpdateToOneWithWhereWithoutPlasserInput, FasilitetUpdateWithoutPlasserInput>, FasilitetUncheckedUpdateWithoutPlasserInput>
  }

  export type ReservasjonUpdateManyWithoutPlassNestedInput = {
    create?: XOR<ReservasjonCreateWithoutPlassInput, ReservasjonUncheckedCreateWithoutPlassInput> | ReservasjonCreateWithoutPlassInput[] | ReservasjonUncheckedCreateWithoutPlassInput[]
    connectOrCreate?: ReservasjonCreateOrConnectWithoutPlassInput | ReservasjonCreateOrConnectWithoutPlassInput[]
    upsert?: ReservasjonUpsertWithWhereUniqueWithoutPlassInput | ReservasjonUpsertWithWhereUniqueWithoutPlassInput[]
    createMany?: ReservasjonCreateManyPlassInputEnvelope
    set?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    disconnect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    delete?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    connect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    update?: ReservasjonUpdateWithWhereUniqueWithoutPlassInput | ReservasjonUpdateWithWhereUniqueWithoutPlassInput[]
    updateMany?: ReservasjonUpdateManyWithWhereWithoutPlassInput | ReservasjonUpdateManyWithWhereWithoutPlassInput[]
    deleteMany?: ReservasjonScalarWhereInput | ReservasjonScalarWhereInput[]
  }

  export type ReservasjonUncheckedUpdateManyWithoutPlassNestedInput = {
    create?: XOR<ReservasjonCreateWithoutPlassInput, ReservasjonUncheckedCreateWithoutPlassInput> | ReservasjonCreateWithoutPlassInput[] | ReservasjonUncheckedCreateWithoutPlassInput[]
    connectOrCreate?: ReservasjonCreateOrConnectWithoutPlassInput | ReservasjonCreateOrConnectWithoutPlassInput[]
    upsert?: ReservasjonUpsertWithWhereUniqueWithoutPlassInput | ReservasjonUpsertWithWhereUniqueWithoutPlassInput[]
    createMany?: ReservasjonCreateManyPlassInputEnvelope
    set?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    disconnect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    delete?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    connect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    update?: ReservasjonUpdateWithWhereUniqueWithoutPlassInput | ReservasjonUpdateWithWhereUniqueWithoutPlassInput[]
    updateMany?: ReservasjonUpdateManyWithWhereWithoutPlassInput | ReservasjonUpdateManyWithWhereWithoutPlassInput[]
    deleteMany?: ReservasjonScalarWhereInput | ReservasjonScalarWhereInput[]
  }

  export type ReservasjonCreateNestedManyWithoutBrukerInput = {
    create?: XOR<ReservasjonCreateWithoutBrukerInput, ReservasjonUncheckedCreateWithoutBrukerInput> | ReservasjonCreateWithoutBrukerInput[] | ReservasjonUncheckedCreateWithoutBrukerInput[]
    connectOrCreate?: ReservasjonCreateOrConnectWithoutBrukerInput | ReservasjonCreateOrConnectWithoutBrukerInput[]
    createMany?: ReservasjonCreateManyBrukerInputEnvelope
    connect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
  }

  export type ReservasjonUncheckedCreateNestedManyWithoutBrukerInput = {
    create?: XOR<ReservasjonCreateWithoutBrukerInput, ReservasjonUncheckedCreateWithoutBrukerInput> | ReservasjonCreateWithoutBrukerInput[] | ReservasjonUncheckedCreateWithoutBrukerInput[]
    connectOrCreate?: ReservasjonCreateOrConnectWithoutBrukerInput | ReservasjonCreateOrConnectWithoutBrukerInput[]
    createMany?: ReservasjonCreateManyBrukerInputEnvelope
    connect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
  }

  export type ReservasjonUpdateManyWithoutBrukerNestedInput = {
    create?: XOR<ReservasjonCreateWithoutBrukerInput, ReservasjonUncheckedCreateWithoutBrukerInput> | ReservasjonCreateWithoutBrukerInput[] | ReservasjonUncheckedCreateWithoutBrukerInput[]
    connectOrCreate?: ReservasjonCreateOrConnectWithoutBrukerInput | ReservasjonCreateOrConnectWithoutBrukerInput[]
    upsert?: ReservasjonUpsertWithWhereUniqueWithoutBrukerInput | ReservasjonUpsertWithWhereUniqueWithoutBrukerInput[]
    createMany?: ReservasjonCreateManyBrukerInputEnvelope
    set?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    disconnect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    delete?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    connect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    update?: ReservasjonUpdateWithWhereUniqueWithoutBrukerInput | ReservasjonUpdateWithWhereUniqueWithoutBrukerInput[]
    updateMany?: ReservasjonUpdateManyWithWhereWithoutBrukerInput | ReservasjonUpdateManyWithWhereWithoutBrukerInput[]
    deleteMany?: ReservasjonScalarWhereInput | ReservasjonScalarWhereInput[]
  }

  export type ReservasjonUncheckedUpdateManyWithoutBrukerNestedInput = {
    create?: XOR<ReservasjonCreateWithoutBrukerInput, ReservasjonUncheckedCreateWithoutBrukerInput> | ReservasjonCreateWithoutBrukerInput[] | ReservasjonUncheckedCreateWithoutBrukerInput[]
    connectOrCreate?: ReservasjonCreateOrConnectWithoutBrukerInput | ReservasjonCreateOrConnectWithoutBrukerInput[]
    upsert?: ReservasjonUpsertWithWhereUniqueWithoutBrukerInput | ReservasjonUpsertWithWhereUniqueWithoutBrukerInput[]
    createMany?: ReservasjonCreateManyBrukerInputEnvelope
    set?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    disconnect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    delete?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    connect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    update?: ReservasjonUpdateWithWhereUniqueWithoutBrukerInput | ReservasjonUpdateWithWhereUniqueWithoutBrukerInput[]
    updateMany?: ReservasjonUpdateManyWithWhereWithoutBrukerInput | ReservasjonUpdateManyWithWhereWithoutBrukerInput[]
    deleteMany?: ReservasjonScalarWhereInput | ReservasjonScalarWhereInput[]
  }

  export type ReservasjonCreateNestedManyWithoutSoneInput = {
    create?: XOR<ReservasjonCreateWithoutSoneInput, ReservasjonUncheckedCreateWithoutSoneInput> | ReservasjonCreateWithoutSoneInput[] | ReservasjonUncheckedCreateWithoutSoneInput[]
    connectOrCreate?: ReservasjonCreateOrConnectWithoutSoneInput | ReservasjonCreateOrConnectWithoutSoneInput[]
    createMany?: ReservasjonCreateManySoneInputEnvelope
    connect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
  }

  export type ReservasjonUncheckedCreateNestedManyWithoutSoneInput = {
    create?: XOR<ReservasjonCreateWithoutSoneInput, ReservasjonUncheckedCreateWithoutSoneInput> | ReservasjonCreateWithoutSoneInput[] | ReservasjonUncheckedCreateWithoutSoneInput[]
    connectOrCreate?: ReservasjonCreateOrConnectWithoutSoneInput | ReservasjonCreateOrConnectWithoutSoneInput[]
    createMany?: ReservasjonCreateManySoneInputEnvelope
    connect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
  }

  export type ReservasjonUpdateManyWithoutSoneNestedInput = {
    create?: XOR<ReservasjonCreateWithoutSoneInput, ReservasjonUncheckedCreateWithoutSoneInput> | ReservasjonCreateWithoutSoneInput[] | ReservasjonUncheckedCreateWithoutSoneInput[]
    connectOrCreate?: ReservasjonCreateOrConnectWithoutSoneInput | ReservasjonCreateOrConnectWithoutSoneInput[]
    upsert?: ReservasjonUpsertWithWhereUniqueWithoutSoneInput | ReservasjonUpsertWithWhereUniqueWithoutSoneInput[]
    createMany?: ReservasjonCreateManySoneInputEnvelope
    set?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    disconnect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    delete?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    connect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    update?: ReservasjonUpdateWithWhereUniqueWithoutSoneInput | ReservasjonUpdateWithWhereUniqueWithoutSoneInput[]
    updateMany?: ReservasjonUpdateManyWithWhereWithoutSoneInput | ReservasjonUpdateManyWithWhereWithoutSoneInput[]
    deleteMany?: ReservasjonScalarWhereInput | ReservasjonScalarWhereInput[]
  }

  export type ReservasjonUncheckedUpdateManyWithoutSoneNestedInput = {
    create?: XOR<ReservasjonCreateWithoutSoneInput, ReservasjonUncheckedCreateWithoutSoneInput> | ReservasjonCreateWithoutSoneInput[] | ReservasjonUncheckedCreateWithoutSoneInput[]
    connectOrCreate?: ReservasjonCreateOrConnectWithoutSoneInput | ReservasjonCreateOrConnectWithoutSoneInput[]
    upsert?: ReservasjonUpsertWithWhereUniqueWithoutSoneInput | ReservasjonUpsertWithWhereUniqueWithoutSoneInput[]
    createMany?: ReservasjonCreateManySoneInputEnvelope
    set?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    disconnect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    delete?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    connect?: ReservasjonWhereUniqueInput | ReservasjonWhereUniqueInput[]
    update?: ReservasjonUpdateWithWhereUniqueWithoutSoneInput | ReservasjonUpdateWithWhereUniqueWithoutSoneInput[]
    updateMany?: ReservasjonUpdateManyWithWhereWithoutSoneInput | ReservasjonUpdateManyWithWhereWithoutSoneInput[]
    deleteMany?: ReservasjonScalarWhereInput | ReservasjonScalarWhereInput[]
  }

  export type ReservasjonUtleietjenesteCreateNestedManyWithoutUtleietjenesteInput = {
    create?: XOR<ReservasjonUtleietjenesteCreateWithoutUtleietjenesteInput, ReservasjonUtleietjenesteUncheckedCreateWithoutUtleietjenesteInput> | ReservasjonUtleietjenesteCreateWithoutUtleietjenesteInput[] | ReservasjonUtleietjenesteUncheckedCreateWithoutUtleietjenesteInput[]
    connectOrCreate?: ReservasjonUtleietjenesteCreateOrConnectWithoutUtleietjenesteInput | ReservasjonUtleietjenesteCreateOrConnectWithoutUtleietjenesteInput[]
    createMany?: ReservasjonUtleietjenesteCreateManyUtleietjenesteInputEnvelope
    connect?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
  }

  export type ReservasjonUtleietjenesteUncheckedCreateNestedManyWithoutUtleietjenesteInput = {
    create?: XOR<ReservasjonUtleietjenesteCreateWithoutUtleietjenesteInput, ReservasjonUtleietjenesteUncheckedCreateWithoutUtleietjenesteInput> | ReservasjonUtleietjenesteCreateWithoutUtleietjenesteInput[] | ReservasjonUtleietjenesteUncheckedCreateWithoutUtleietjenesteInput[]
    connectOrCreate?: ReservasjonUtleietjenesteCreateOrConnectWithoutUtleietjenesteInput | ReservasjonUtleietjenesteCreateOrConnectWithoutUtleietjenesteInput[]
    createMany?: ReservasjonUtleietjenesteCreateManyUtleietjenesteInputEnvelope
    connect?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
  }

  export type ReservasjonUtleietjenesteUpdateManyWithoutUtleietjenesteNestedInput = {
    create?: XOR<ReservasjonUtleietjenesteCreateWithoutUtleietjenesteInput, ReservasjonUtleietjenesteUncheckedCreateWithoutUtleietjenesteInput> | ReservasjonUtleietjenesteCreateWithoutUtleietjenesteInput[] | ReservasjonUtleietjenesteUncheckedCreateWithoutUtleietjenesteInput[]
    connectOrCreate?: ReservasjonUtleietjenesteCreateOrConnectWithoutUtleietjenesteInput | ReservasjonUtleietjenesteCreateOrConnectWithoutUtleietjenesteInput[]
    upsert?: ReservasjonUtleietjenesteUpsertWithWhereUniqueWithoutUtleietjenesteInput | ReservasjonUtleietjenesteUpsertWithWhereUniqueWithoutUtleietjenesteInput[]
    createMany?: ReservasjonUtleietjenesteCreateManyUtleietjenesteInputEnvelope
    set?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
    disconnect?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
    delete?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
    connect?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
    update?: ReservasjonUtleietjenesteUpdateWithWhereUniqueWithoutUtleietjenesteInput | ReservasjonUtleietjenesteUpdateWithWhereUniqueWithoutUtleietjenesteInput[]
    updateMany?: ReservasjonUtleietjenesteUpdateManyWithWhereWithoutUtleietjenesteInput | ReservasjonUtleietjenesteUpdateManyWithWhereWithoutUtleietjenesteInput[]
    deleteMany?: ReservasjonUtleietjenesteScalarWhereInput | ReservasjonUtleietjenesteScalarWhereInput[]
  }

  export type ReservasjonUtleietjenesteUncheckedUpdateManyWithoutUtleietjenesteNestedInput = {
    create?: XOR<ReservasjonUtleietjenesteCreateWithoutUtleietjenesteInput, ReservasjonUtleietjenesteUncheckedCreateWithoutUtleietjenesteInput> | ReservasjonUtleietjenesteCreateWithoutUtleietjenesteInput[] | ReservasjonUtleietjenesteUncheckedCreateWithoutUtleietjenesteInput[]
    connectOrCreate?: ReservasjonUtleietjenesteCreateOrConnectWithoutUtleietjenesteInput | ReservasjonUtleietjenesteCreateOrConnectWithoutUtleietjenesteInput[]
    upsert?: ReservasjonUtleietjenesteUpsertWithWhereUniqueWithoutUtleietjenesteInput | ReservasjonUtleietjenesteUpsertWithWhereUniqueWithoutUtleietjenesteInput[]
    createMany?: ReservasjonUtleietjenesteCreateManyUtleietjenesteInputEnvelope
    set?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
    disconnect?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
    delete?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
    connect?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
    update?: ReservasjonUtleietjenesteUpdateWithWhereUniqueWithoutUtleietjenesteInput | ReservasjonUtleietjenesteUpdateWithWhereUniqueWithoutUtleietjenesteInput[]
    updateMany?: ReservasjonUtleietjenesteUpdateManyWithWhereWithoutUtleietjenesteInput | ReservasjonUtleietjenesteUpdateManyWithWhereWithoutUtleietjenesteInput[]
    deleteMany?: ReservasjonUtleietjenesteScalarWhereInput | ReservasjonUtleietjenesteScalarWhereInput[]
  }

  export type BrukerCreateNestedOneWithoutReservasjonerInput = {
    create?: XOR<BrukerCreateWithoutReservasjonerInput, BrukerUncheckedCreateWithoutReservasjonerInput>
    connectOrCreate?: BrukerCreateOrConnectWithoutReservasjonerInput
    connect?: BrukerWhereUniqueInput
  }

  export type SoneCreateNestedOneWithoutReservasjonerInput = {
    create?: XOR<SoneCreateWithoutReservasjonerInput, SoneUncheckedCreateWithoutReservasjonerInput>
    connectOrCreate?: SoneCreateOrConnectWithoutReservasjonerInput
    connect?: SoneWhereUniqueInput
  }

  export type PlassCreateNestedOneWithoutReservasjonerInput = {
    create?: XOR<PlassCreateWithoutReservasjonerInput, PlassUncheckedCreateWithoutReservasjonerInput>
    connectOrCreate?: PlassCreateOrConnectWithoutReservasjonerInput
    connect?: PlassWhereUniqueInput
  }

  export type ReservasjonUtleietjenesteCreateNestedManyWithoutReservasjonInput = {
    create?: XOR<ReservasjonUtleietjenesteCreateWithoutReservasjonInput, ReservasjonUtleietjenesteUncheckedCreateWithoutReservasjonInput> | ReservasjonUtleietjenesteCreateWithoutReservasjonInput[] | ReservasjonUtleietjenesteUncheckedCreateWithoutReservasjonInput[]
    connectOrCreate?: ReservasjonUtleietjenesteCreateOrConnectWithoutReservasjonInput | ReservasjonUtleietjenesteCreateOrConnectWithoutReservasjonInput[]
    createMany?: ReservasjonUtleietjenesteCreateManyReservasjonInputEnvelope
    connect?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
  }

  export type ReservasjonUtleietjenesteUncheckedCreateNestedManyWithoutReservasjonInput = {
    create?: XOR<ReservasjonUtleietjenesteCreateWithoutReservasjonInput, ReservasjonUtleietjenesteUncheckedCreateWithoutReservasjonInput> | ReservasjonUtleietjenesteCreateWithoutReservasjonInput[] | ReservasjonUtleietjenesteUncheckedCreateWithoutReservasjonInput[]
    connectOrCreate?: ReservasjonUtleietjenesteCreateOrConnectWithoutReservasjonInput | ReservasjonUtleietjenesteCreateOrConnectWithoutReservasjonInput[]
    createMany?: ReservasjonUtleietjenesteCreateManyReservasjonInputEnvelope
    connect?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
  }

  export type BrukerUpdateOneRequiredWithoutReservasjonerNestedInput = {
    create?: XOR<BrukerCreateWithoutReservasjonerInput, BrukerUncheckedCreateWithoutReservasjonerInput>
    connectOrCreate?: BrukerCreateOrConnectWithoutReservasjonerInput
    upsert?: BrukerUpsertWithoutReservasjonerInput
    connect?: BrukerWhereUniqueInput
    update?: XOR<XOR<BrukerUpdateToOneWithWhereWithoutReservasjonerInput, BrukerUpdateWithoutReservasjonerInput>, BrukerUncheckedUpdateWithoutReservasjonerInput>
  }

  export type SoneUpdateOneRequiredWithoutReservasjonerNestedInput = {
    create?: XOR<SoneCreateWithoutReservasjonerInput, SoneUncheckedCreateWithoutReservasjonerInput>
    connectOrCreate?: SoneCreateOrConnectWithoutReservasjonerInput
    upsert?: SoneUpsertWithoutReservasjonerInput
    connect?: SoneWhereUniqueInput
    update?: XOR<XOR<SoneUpdateToOneWithWhereWithoutReservasjonerInput, SoneUpdateWithoutReservasjonerInput>, SoneUncheckedUpdateWithoutReservasjonerInput>
  }

  export type PlassUpdateOneRequiredWithoutReservasjonerNestedInput = {
    create?: XOR<PlassCreateWithoutReservasjonerInput, PlassUncheckedCreateWithoutReservasjonerInput>
    connectOrCreate?: PlassCreateOrConnectWithoutReservasjonerInput
    upsert?: PlassUpsertWithoutReservasjonerInput
    connect?: PlassWhereUniqueInput
    update?: XOR<XOR<PlassUpdateToOneWithWhereWithoutReservasjonerInput, PlassUpdateWithoutReservasjonerInput>, PlassUncheckedUpdateWithoutReservasjonerInput>
  }

  export type ReservasjonUtleietjenesteUpdateManyWithoutReservasjonNestedInput = {
    create?: XOR<ReservasjonUtleietjenesteCreateWithoutReservasjonInput, ReservasjonUtleietjenesteUncheckedCreateWithoutReservasjonInput> | ReservasjonUtleietjenesteCreateWithoutReservasjonInput[] | ReservasjonUtleietjenesteUncheckedCreateWithoutReservasjonInput[]
    connectOrCreate?: ReservasjonUtleietjenesteCreateOrConnectWithoutReservasjonInput | ReservasjonUtleietjenesteCreateOrConnectWithoutReservasjonInput[]
    upsert?: ReservasjonUtleietjenesteUpsertWithWhereUniqueWithoutReservasjonInput | ReservasjonUtleietjenesteUpsertWithWhereUniqueWithoutReservasjonInput[]
    createMany?: ReservasjonUtleietjenesteCreateManyReservasjonInputEnvelope
    set?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
    disconnect?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
    delete?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
    connect?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
    update?: ReservasjonUtleietjenesteUpdateWithWhereUniqueWithoutReservasjonInput | ReservasjonUtleietjenesteUpdateWithWhereUniqueWithoutReservasjonInput[]
    updateMany?: ReservasjonUtleietjenesteUpdateManyWithWhereWithoutReservasjonInput | ReservasjonUtleietjenesteUpdateManyWithWhereWithoutReservasjonInput[]
    deleteMany?: ReservasjonUtleietjenesteScalarWhereInput | ReservasjonUtleietjenesteScalarWhereInput[]
  }

  export type ReservasjonUtleietjenesteUncheckedUpdateManyWithoutReservasjonNestedInput = {
    create?: XOR<ReservasjonUtleietjenesteCreateWithoutReservasjonInput, ReservasjonUtleietjenesteUncheckedCreateWithoutReservasjonInput> | ReservasjonUtleietjenesteCreateWithoutReservasjonInput[] | ReservasjonUtleietjenesteUncheckedCreateWithoutReservasjonInput[]
    connectOrCreate?: ReservasjonUtleietjenesteCreateOrConnectWithoutReservasjonInput | ReservasjonUtleietjenesteCreateOrConnectWithoutReservasjonInput[]
    upsert?: ReservasjonUtleietjenesteUpsertWithWhereUniqueWithoutReservasjonInput | ReservasjonUtleietjenesteUpsertWithWhereUniqueWithoutReservasjonInput[]
    createMany?: ReservasjonUtleietjenesteCreateManyReservasjonInputEnvelope
    set?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
    disconnect?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
    delete?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
    connect?: ReservasjonUtleietjenesteWhereUniqueInput | ReservasjonUtleietjenesteWhereUniqueInput[]
    update?: ReservasjonUtleietjenesteUpdateWithWhereUniqueWithoutReservasjonInput | ReservasjonUtleietjenesteUpdateWithWhereUniqueWithoutReservasjonInput[]
    updateMany?: ReservasjonUtleietjenesteUpdateManyWithWhereWithoutReservasjonInput | ReservasjonUtleietjenesteUpdateManyWithWhereWithoutReservasjonInput[]
    deleteMany?: ReservasjonUtleietjenesteScalarWhereInput | ReservasjonUtleietjenesteScalarWhereInput[]
  }

  export type UtleietjenesteCreateNestedOneWithoutReservasjonUtleietjenesteInput = {
    create?: XOR<UtleietjenesteCreateWithoutReservasjonUtleietjenesteInput, UtleietjenesteUncheckedCreateWithoutReservasjonUtleietjenesteInput>
    connectOrCreate?: UtleietjenesteCreateOrConnectWithoutReservasjonUtleietjenesteInput
    connect?: UtleietjenesteWhereUniqueInput
  }

  export type ReservasjonCreateNestedOneWithoutReservasjonUtleietjenesteInput = {
    create?: XOR<ReservasjonCreateWithoutReservasjonUtleietjenesteInput, ReservasjonUncheckedCreateWithoutReservasjonUtleietjenesteInput>
    connectOrCreate?: ReservasjonCreateOrConnectWithoutReservasjonUtleietjenesteInput
    connect?: ReservasjonWhereUniqueInput
  }

  export type UtleietjenesteUpdateOneRequiredWithoutReservasjonUtleietjenesteNestedInput = {
    create?: XOR<UtleietjenesteCreateWithoutReservasjonUtleietjenesteInput, UtleietjenesteUncheckedCreateWithoutReservasjonUtleietjenesteInput>
    connectOrCreate?: UtleietjenesteCreateOrConnectWithoutReservasjonUtleietjenesteInput
    upsert?: UtleietjenesteUpsertWithoutReservasjonUtleietjenesteInput
    connect?: UtleietjenesteWhereUniqueInput
    update?: XOR<XOR<UtleietjenesteUpdateToOneWithWhereWithoutReservasjonUtleietjenesteInput, UtleietjenesteUpdateWithoutReservasjonUtleietjenesteInput>, UtleietjenesteUncheckedUpdateWithoutReservasjonUtleietjenesteInput>
  }

  export type ReservasjonUpdateOneRequiredWithoutReservasjonUtleietjenesteNestedInput = {
    create?: XOR<ReservasjonCreateWithoutReservasjonUtleietjenesteInput, ReservasjonUncheckedCreateWithoutReservasjonUtleietjenesteInput>
    connectOrCreate?: ReservasjonCreateOrConnectWithoutReservasjonUtleietjenesteInput
    upsert?: ReservasjonUpsertWithoutReservasjonUtleietjenesteInput
    connect?: ReservasjonWhereUniqueInput
    update?: XOR<XOR<ReservasjonUpdateToOneWithWhereWithoutReservasjonUtleietjenesteInput, ReservasjonUpdateWithoutReservasjonUtleietjenesteInput>, ReservasjonUncheckedUpdateWithoutReservasjonUtleietjenesteInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PlassCreateWithoutFasilitetInput = {
    reservasjoner?: ReservasjonCreateNestedManyWithoutPlassInput
  }

  export type PlassUncheckedCreateWithoutFasilitetInput = {
    plassNr?: number
    reservasjoner?: ReservasjonUncheckedCreateNestedManyWithoutPlassInput
  }

  export type PlassCreateOrConnectWithoutFasilitetInput = {
    where: PlassWhereUniqueInput
    create: XOR<PlassCreateWithoutFasilitetInput, PlassUncheckedCreateWithoutFasilitetInput>
  }

  export type PlassCreateManyFasilitetInputEnvelope = {
    data: PlassCreateManyFasilitetInput | PlassCreateManyFasilitetInput[]
    skipDuplicates?: boolean
  }

  export type PlassUpsertWithWhereUniqueWithoutFasilitetInput = {
    where: PlassWhereUniqueInput
    update: XOR<PlassUpdateWithoutFasilitetInput, PlassUncheckedUpdateWithoutFasilitetInput>
    create: XOR<PlassCreateWithoutFasilitetInput, PlassUncheckedCreateWithoutFasilitetInput>
  }

  export type PlassUpdateWithWhereUniqueWithoutFasilitetInput = {
    where: PlassWhereUniqueInput
    data: XOR<PlassUpdateWithoutFasilitetInput, PlassUncheckedUpdateWithoutFasilitetInput>
  }

  export type PlassUpdateManyWithWhereWithoutFasilitetInput = {
    where: PlassScalarWhereInput
    data: XOR<PlassUpdateManyMutationInput, PlassUncheckedUpdateManyWithoutFasilitetInput>
  }

  export type PlassScalarWhereInput = {
    AND?: PlassScalarWhereInput | PlassScalarWhereInput[]
    OR?: PlassScalarWhereInput[]
    NOT?: PlassScalarWhereInput | PlassScalarWhereInput[]
    plassNr?: IntFilter<"Plass"> | number
    fasilitetNrId?: IntFilter<"Plass"> | number
  }

  export type FasilitetCreateWithoutPlasserInput = {
    navn: string
    pris: number
  }

  export type FasilitetUncheckedCreateWithoutPlasserInput = {
    fasilitetNr?: number
    navn: string
    pris: number
  }

  export type FasilitetCreateOrConnectWithoutPlasserInput = {
    where: FasilitetWhereUniqueInput
    create: XOR<FasilitetCreateWithoutPlasserInput, FasilitetUncheckedCreateWithoutPlasserInput>
  }

  export type ReservasjonCreateWithoutPlassInput = {
    fraDato: string
    tilDato: string
    bruker: BrukerCreateNestedOneWithoutReservasjonerInput
    sone: SoneCreateNestedOneWithoutReservasjonerInput
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteCreateNestedManyWithoutReservasjonInput
  }

  export type ReservasjonUncheckedCreateWithoutPlassInput = {
    reservasjonNr?: number
    brukerNrId: number
    soneNrId: number
    fraDato: string
    tilDato: string
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteUncheckedCreateNestedManyWithoutReservasjonInput
  }

  export type ReservasjonCreateOrConnectWithoutPlassInput = {
    where: ReservasjonWhereUniqueInput
    create: XOR<ReservasjonCreateWithoutPlassInput, ReservasjonUncheckedCreateWithoutPlassInput>
  }

  export type ReservasjonCreateManyPlassInputEnvelope = {
    data: ReservasjonCreateManyPlassInput | ReservasjonCreateManyPlassInput[]
    skipDuplicates?: boolean
  }

  export type FasilitetUpsertWithoutPlasserInput = {
    update: XOR<FasilitetUpdateWithoutPlasserInput, FasilitetUncheckedUpdateWithoutPlasserInput>
    create: XOR<FasilitetCreateWithoutPlasserInput, FasilitetUncheckedCreateWithoutPlasserInput>
    where?: FasilitetWhereInput
  }

  export type FasilitetUpdateToOneWithWhereWithoutPlasserInput = {
    where?: FasilitetWhereInput
    data: XOR<FasilitetUpdateWithoutPlasserInput, FasilitetUncheckedUpdateWithoutPlasserInput>
  }

  export type FasilitetUpdateWithoutPlasserInput = {
    navn?: StringFieldUpdateOperationsInput | string
    pris?: IntFieldUpdateOperationsInput | number
  }

  export type FasilitetUncheckedUpdateWithoutPlasserInput = {
    fasilitetNr?: IntFieldUpdateOperationsInput | number
    navn?: StringFieldUpdateOperationsInput | string
    pris?: IntFieldUpdateOperationsInput | number
  }

  export type ReservasjonUpsertWithWhereUniqueWithoutPlassInput = {
    where: ReservasjonWhereUniqueInput
    update: XOR<ReservasjonUpdateWithoutPlassInput, ReservasjonUncheckedUpdateWithoutPlassInput>
    create: XOR<ReservasjonCreateWithoutPlassInput, ReservasjonUncheckedCreateWithoutPlassInput>
  }

  export type ReservasjonUpdateWithWhereUniqueWithoutPlassInput = {
    where: ReservasjonWhereUniqueInput
    data: XOR<ReservasjonUpdateWithoutPlassInput, ReservasjonUncheckedUpdateWithoutPlassInput>
  }

  export type ReservasjonUpdateManyWithWhereWithoutPlassInput = {
    where: ReservasjonScalarWhereInput
    data: XOR<ReservasjonUpdateManyMutationInput, ReservasjonUncheckedUpdateManyWithoutPlassInput>
  }

  export type ReservasjonScalarWhereInput = {
    AND?: ReservasjonScalarWhereInput | ReservasjonScalarWhereInput[]
    OR?: ReservasjonScalarWhereInput[]
    NOT?: ReservasjonScalarWhereInput | ReservasjonScalarWhereInput[]
    reservasjonNr?: IntFilter<"Reservasjon"> | number
    brukerNrId?: IntFilter<"Reservasjon"> | number
    soneNrId?: IntFilter<"Reservasjon"> | number
    plassNrId?: IntFilter<"Reservasjon"> | number
    fraDato?: StringFilter<"Reservasjon"> | string
    tilDato?: StringFilter<"Reservasjon"> | string
  }

  export type ReservasjonCreateWithoutBrukerInput = {
    fraDato: string
    tilDato: string
    sone: SoneCreateNestedOneWithoutReservasjonerInput
    plass: PlassCreateNestedOneWithoutReservasjonerInput
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteCreateNestedManyWithoutReservasjonInput
  }

  export type ReservasjonUncheckedCreateWithoutBrukerInput = {
    reservasjonNr?: number
    soneNrId: number
    plassNrId: number
    fraDato: string
    tilDato: string
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteUncheckedCreateNestedManyWithoutReservasjonInput
  }

  export type ReservasjonCreateOrConnectWithoutBrukerInput = {
    where: ReservasjonWhereUniqueInput
    create: XOR<ReservasjonCreateWithoutBrukerInput, ReservasjonUncheckedCreateWithoutBrukerInput>
  }

  export type ReservasjonCreateManyBrukerInputEnvelope = {
    data: ReservasjonCreateManyBrukerInput | ReservasjonCreateManyBrukerInput[]
    skipDuplicates?: boolean
  }

  export type ReservasjonUpsertWithWhereUniqueWithoutBrukerInput = {
    where: ReservasjonWhereUniqueInput
    update: XOR<ReservasjonUpdateWithoutBrukerInput, ReservasjonUncheckedUpdateWithoutBrukerInput>
    create: XOR<ReservasjonCreateWithoutBrukerInput, ReservasjonUncheckedCreateWithoutBrukerInput>
  }

  export type ReservasjonUpdateWithWhereUniqueWithoutBrukerInput = {
    where: ReservasjonWhereUniqueInput
    data: XOR<ReservasjonUpdateWithoutBrukerInput, ReservasjonUncheckedUpdateWithoutBrukerInput>
  }

  export type ReservasjonUpdateManyWithWhereWithoutBrukerInput = {
    where: ReservasjonScalarWhereInput
    data: XOR<ReservasjonUpdateManyMutationInput, ReservasjonUncheckedUpdateManyWithoutBrukerInput>
  }

  export type ReservasjonCreateWithoutSoneInput = {
    fraDato: string
    tilDato: string
    bruker: BrukerCreateNestedOneWithoutReservasjonerInput
    plass: PlassCreateNestedOneWithoutReservasjonerInput
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteCreateNestedManyWithoutReservasjonInput
  }

  export type ReservasjonUncheckedCreateWithoutSoneInput = {
    reservasjonNr?: number
    brukerNrId: number
    plassNrId: number
    fraDato: string
    tilDato: string
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteUncheckedCreateNestedManyWithoutReservasjonInput
  }

  export type ReservasjonCreateOrConnectWithoutSoneInput = {
    where: ReservasjonWhereUniqueInput
    create: XOR<ReservasjonCreateWithoutSoneInput, ReservasjonUncheckedCreateWithoutSoneInput>
  }

  export type ReservasjonCreateManySoneInputEnvelope = {
    data: ReservasjonCreateManySoneInput | ReservasjonCreateManySoneInput[]
    skipDuplicates?: boolean
  }

  export type ReservasjonUpsertWithWhereUniqueWithoutSoneInput = {
    where: ReservasjonWhereUniqueInput
    update: XOR<ReservasjonUpdateWithoutSoneInput, ReservasjonUncheckedUpdateWithoutSoneInput>
    create: XOR<ReservasjonCreateWithoutSoneInput, ReservasjonUncheckedCreateWithoutSoneInput>
  }

  export type ReservasjonUpdateWithWhereUniqueWithoutSoneInput = {
    where: ReservasjonWhereUniqueInput
    data: XOR<ReservasjonUpdateWithoutSoneInput, ReservasjonUncheckedUpdateWithoutSoneInput>
  }

  export type ReservasjonUpdateManyWithWhereWithoutSoneInput = {
    where: ReservasjonScalarWhereInput
    data: XOR<ReservasjonUpdateManyMutationInput, ReservasjonUncheckedUpdateManyWithoutSoneInput>
  }

  export type ReservasjonUtleietjenesteCreateWithoutUtleietjenesteInput = {
    antall: number
    reservasjon: ReservasjonCreateNestedOneWithoutReservasjonUtleietjenesteInput
  }

  export type ReservasjonUtleietjenesteUncheckedCreateWithoutUtleietjenesteInput = {
    antall: number
    reservasjonNr: number
  }

  export type ReservasjonUtleietjenesteCreateOrConnectWithoutUtleietjenesteInput = {
    where: ReservasjonUtleietjenesteWhereUniqueInput
    create: XOR<ReservasjonUtleietjenesteCreateWithoutUtleietjenesteInput, ReservasjonUtleietjenesteUncheckedCreateWithoutUtleietjenesteInput>
  }

  export type ReservasjonUtleietjenesteCreateManyUtleietjenesteInputEnvelope = {
    data: ReservasjonUtleietjenesteCreateManyUtleietjenesteInput | ReservasjonUtleietjenesteCreateManyUtleietjenesteInput[]
    skipDuplicates?: boolean
  }

  export type ReservasjonUtleietjenesteUpsertWithWhereUniqueWithoutUtleietjenesteInput = {
    where: ReservasjonUtleietjenesteWhereUniqueInput
    update: XOR<ReservasjonUtleietjenesteUpdateWithoutUtleietjenesteInput, ReservasjonUtleietjenesteUncheckedUpdateWithoutUtleietjenesteInput>
    create: XOR<ReservasjonUtleietjenesteCreateWithoutUtleietjenesteInput, ReservasjonUtleietjenesteUncheckedCreateWithoutUtleietjenesteInput>
  }

  export type ReservasjonUtleietjenesteUpdateWithWhereUniqueWithoutUtleietjenesteInput = {
    where: ReservasjonUtleietjenesteWhereUniqueInput
    data: XOR<ReservasjonUtleietjenesteUpdateWithoutUtleietjenesteInput, ReservasjonUtleietjenesteUncheckedUpdateWithoutUtleietjenesteInput>
  }

  export type ReservasjonUtleietjenesteUpdateManyWithWhereWithoutUtleietjenesteInput = {
    where: ReservasjonUtleietjenesteScalarWhereInput
    data: XOR<ReservasjonUtleietjenesteUpdateManyMutationInput, ReservasjonUtleietjenesteUncheckedUpdateManyWithoutUtleietjenesteInput>
  }

  export type ReservasjonUtleietjenesteScalarWhereInput = {
    AND?: ReservasjonUtleietjenesteScalarWhereInput | ReservasjonUtleietjenesteScalarWhereInput[]
    OR?: ReservasjonUtleietjenesteScalarWhereInput[]
    NOT?: ReservasjonUtleietjenesteScalarWhereInput | ReservasjonUtleietjenesteScalarWhereInput[]
    antall?: IntFilter<"ReservasjonUtleietjeneste"> | number
    utleieTjenesteNr?: IntFilter<"ReservasjonUtleietjeneste"> | number
    reservasjonNr?: IntFilter<"ReservasjonUtleietjeneste"> | number
  }

  export type BrukerCreateWithoutReservasjonerInput = {
    fornavn: string
    etternavn: string
    epost: string
    telefon: string
    passord: string
  }

  export type BrukerUncheckedCreateWithoutReservasjonerInput = {
    brukerNr?: number
    fornavn: string
    etternavn: string
    epost: string
    telefon: string
    passord: string
  }

  export type BrukerCreateOrConnectWithoutReservasjonerInput = {
    where: BrukerWhereUniqueInput
    create: XOR<BrukerCreateWithoutReservasjonerInput, BrukerUncheckedCreateWithoutReservasjonerInput>
  }

  export type SoneCreateWithoutReservasjonerInput = {
    sonenavn: string
  }

  export type SoneUncheckedCreateWithoutReservasjonerInput = {
    soneNr?: number
    sonenavn: string
  }

  export type SoneCreateOrConnectWithoutReservasjonerInput = {
    where: SoneWhereUniqueInput
    create: XOR<SoneCreateWithoutReservasjonerInput, SoneUncheckedCreateWithoutReservasjonerInput>
  }

  export type PlassCreateWithoutReservasjonerInput = {
    fasilitet: FasilitetCreateNestedOneWithoutPlasserInput
  }

  export type PlassUncheckedCreateWithoutReservasjonerInput = {
    plassNr?: number
    fasilitetNrId: number
  }

  export type PlassCreateOrConnectWithoutReservasjonerInput = {
    where: PlassWhereUniqueInput
    create: XOR<PlassCreateWithoutReservasjonerInput, PlassUncheckedCreateWithoutReservasjonerInput>
  }

  export type ReservasjonUtleietjenesteCreateWithoutReservasjonInput = {
    antall: number
    utleietjeneste: UtleietjenesteCreateNestedOneWithoutReservasjonUtleietjenesteInput
  }

  export type ReservasjonUtleietjenesteUncheckedCreateWithoutReservasjonInput = {
    antall: number
    utleieTjenesteNr: number
  }

  export type ReservasjonUtleietjenesteCreateOrConnectWithoutReservasjonInput = {
    where: ReservasjonUtleietjenesteWhereUniqueInput
    create: XOR<ReservasjonUtleietjenesteCreateWithoutReservasjonInput, ReservasjonUtleietjenesteUncheckedCreateWithoutReservasjonInput>
  }

  export type ReservasjonUtleietjenesteCreateManyReservasjonInputEnvelope = {
    data: ReservasjonUtleietjenesteCreateManyReservasjonInput | ReservasjonUtleietjenesteCreateManyReservasjonInput[]
    skipDuplicates?: boolean
  }

  export type BrukerUpsertWithoutReservasjonerInput = {
    update: XOR<BrukerUpdateWithoutReservasjonerInput, BrukerUncheckedUpdateWithoutReservasjonerInput>
    create: XOR<BrukerCreateWithoutReservasjonerInput, BrukerUncheckedCreateWithoutReservasjonerInput>
    where?: BrukerWhereInput
  }

  export type BrukerUpdateToOneWithWhereWithoutReservasjonerInput = {
    where?: BrukerWhereInput
    data: XOR<BrukerUpdateWithoutReservasjonerInput, BrukerUncheckedUpdateWithoutReservasjonerInput>
  }

  export type BrukerUpdateWithoutReservasjonerInput = {
    fornavn?: StringFieldUpdateOperationsInput | string
    etternavn?: StringFieldUpdateOperationsInput | string
    epost?: StringFieldUpdateOperationsInput | string
    telefon?: StringFieldUpdateOperationsInput | string
    passord?: StringFieldUpdateOperationsInput | string
  }

  export type BrukerUncheckedUpdateWithoutReservasjonerInput = {
    brukerNr?: IntFieldUpdateOperationsInput | number
    fornavn?: StringFieldUpdateOperationsInput | string
    etternavn?: StringFieldUpdateOperationsInput | string
    epost?: StringFieldUpdateOperationsInput | string
    telefon?: StringFieldUpdateOperationsInput | string
    passord?: StringFieldUpdateOperationsInput | string
  }

  export type SoneUpsertWithoutReservasjonerInput = {
    update: XOR<SoneUpdateWithoutReservasjonerInput, SoneUncheckedUpdateWithoutReservasjonerInput>
    create: XOR<SoneCreateWithoutReservasjonerInput, SoneUncheckedCreateWithoutReservasjonerInput>
    where?: SoneWhereInput
  }

  export type SoneUpdateToOneWithWhereWithoutReservasjonerInput = {
    where?: SoneWhereInput
    data: XOR<SoneUpdateWithoutReservasjonerInput, SoneUncheckedUpdateWithoutReservasjonerInput>
  }

  export type SoneUpdateWithoutReservasjonerInput = {
    sonenavn?: StringFieldUpdateOperationsInput | string
  }

  export type SoneUncheckedUpdateWithoutReservasjonerInput = {
    soneNr?: IntFieldUpdateOperationsInput | number
    sonenavn?: StringFieldUpdateOperationsInput | string
  }

  export type PlassUpsertWithoutReservasjonerInput = {
    update: XOR<PlassUpdateWithoutReservasjonerInput, PlassUncheckedUpdateWithoutReservasjonerInput>
    create: XOR<PlassCreateWithoutReservasjonerInput, PlassUncheckedCreateWithoutReservasjonerInput>
    where?: PlassWhereInput
  }

  export type PlassUpdateToOneWithWhereWithoutReservasjonerInput = {
    where?: PlassWhereInput
    data: XOR<PlassUpdateWithoutReservasjonerInput, PlassUncheckedUpdateWithoutReservasjonerInput>
  }

  export type PlassUpdateWithoutReservasjonerInput = {
    fasilitet?: FasilitetUpdateOneRequiredWithoutPlasserNestedInput
  }

  export type PlassUncheckedUpdateWithoutReservasjonerInput = {
    plassNr?: IntFieldUpdateOperationsInput | number
    fasilitetNrId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservasjonUtleietjenesteUpsertWithWhereUniqueWithoutReservasjonInput = {
    where: ReservasjonUtleietjenesteWhereUniqueInput
    update: XOR<ReservasjonUtleietjenesteUpdateWithoutReservasjonInput, ReservasjonUtleietjenesteUncheckedUpdateWithoutReservasjonInput>
    create: XOR<ReservasjonUtleietjenesteCreateWithoutReservasjonInput, ReservasjonUtleietjenesteUncheckedCreateWithoutReservasjonInput>
  }

  export type ReservasjonUtleietjenesteUpdateWithWhereUniqueWithoutReservasjonInput = {
    where: ReservasjonUtleietjenesteWhereUniqueInput
    data: XOR<ReservasjonUtleietjenesteUpdateWithoutReservasjonInput, ReservasjonUtleietjenesteUncheckedUpdateWithoutReservasjonInput>
  }

  export type ReservasjonUtleietjenesteUpdateManyWithWhereWithoutReservasjonInput = {
    where: ReservasjonUtleietjenesteScalarWhereInput
    data: XOR<ReservasjonUtleietjenesteUpdateManyMutationInput, ReservasjonUtleietjenesteUncheckedUpdateManyWithoutReservasjonInput>
  }

  export type UtleietjenesteCreateWithoutReservasjonUtleietjenesteInput = {
    tjenestenavn: string
    dagerTilgj: string
    tilgjTid: string
    pris: number
  }

  export type UtleietjenesteUncheckedCreateWithoutReservasjonUtleietjenesteInput = {
    utleieTjenesteNr?: number
    tjenestenavn: string
    dagerTilgj: string
    tilgjTid: string
    pris: number
  }

  export type UtleietjenesteCreateOrConnectWithoutReservasjonUtleietjenesteInput = {
    where: UtleietjenesteWhereUniqueInput
    create: XOR<UtleietjenesteCreateWithoutReservasjonUtleietjenesteInput, UtleietjenesteUncheckedCreateWithoutReservasjonUtleietjenesteInput>
  }

  export type ReservasjonCreateWithoutReservasjonUtleietjenesteInput = {
    fraDato: string
    tilDato: string
    bruker: BrukerCreateNestedOneWithoutReservasjonerInput
    sone: SoneCreateNestedOneWithoutReservasjonerInput
    plass: PlassCreateNestedOneWithoutReservasjonerInput
  }

  export type ReservasjonUncheckedCreateWithoutReservasjonUtleietjenesteInput = {
    reservasjonNr?: number
    brukerNrId: number
    soneNrId: number
    plassNrId: number
    fraDato: string
    tilDato: string
  }

  export type ReservasjonCreateOrConnectWithoutReservasjonUtleietjenesteInput = {
    where: ReservasjonWhereUniqueInput
    create: XOR<ReservasjonCreateWithoutReservasjonUtleietjenesteInput, ReservasjonUncheckedCreateWithoutReservasjonUtleietjenesteInput>
  }

  export type UtleietjenesteUpsertWithoutReservasjonUtleietjenesteInput = {
    update: XOR<UtleietjenesteUpdateWithoutReservasjonUtleietjenesteInput, UtleietjenesteUncheckedUpdateWithoutReservasjonUtleietjenesteInput>
    create: XOR<UtleietjenesteCreateWithoutReservasjonUtleietjenesteInput, UtleietjenesteUncheckedCreateWithoutReservasjonUtleietjenesteInput>
    where?: UtleietjenesteWhereInput
  }

  export type UtleietjenesteUpdateToOneWithWhereWithoutReservasjonUtleietjenesteInput = {
    where?: UtleietjenesteWhereInput
    data: XOR<UtleietjenesteUpdateWithoutReservasjonUtleietjenesteInput, UtleietjenesteUncheckedUpdateWithoutReservasjonUtleietjenesteInput>
  }

  export type UtleietjenesteUpdateWithoutReservasjonUtleietjenesteInput = {
    tjenestenavn?: StringFieldUpdateOperationsInput | string
    dagerTilgj?: StringFieldUpdateOperationsInput | string
    tilgjTid?: StringFieldUpdateOperationsInput | string
    pris?: IntFieldUpdateOperationsInput | number
  }

  export type UtleietjenesteUncheckedUpdateWithoutReservasjonUtleietjenesteInput = {
    utleieTjenesteNr?: IntFieldUpdateOperationsInput | number
    tjenestenavn?: StringFieldUpdateOperationsInput | string
    dagerTilgj?: StringFieldUpdateOperationsInput | string
    tilgjTid?: StringFieldUpdateOperationsInput | string
    pris?: IntFieldUpdateOperationsInput | number
  }

  export type ReservasjonUpsertWithoutReservasjonUtleietjenesteInput = {
    update: XOR<ReservasjonUpdateWithoutReservasjonUtleietjenesteInput, ReservasjonUncheckedUpdateWithoutReservasjonUtleietjenesteInput>
    create: XOR<ReservasjonCreateWithoutReservasjonUtleietjenesteInput, ReservasjonUncheckedCreateWithoutReservasjonUtleietjenesteInput>
    where?: ReservasjonWhereInput
  }

  export type ReservasjonUpdateToOneWithWhereWithoutReservasjonUtleietjenesteInput = {
    where?: ReservasjonWhereInput
    data: XOR<ReservasjonUpdateWithoutReservasjonUtleietjenesteInput, ReservasjonUncheckedUpdateWithoutReservasjonUtleietjenesteInput>
  }

  export type ReservasjonUpdateWithoutReservasjonUtleietjenesteInput = {
    fraDato?: StringFieldUpdateOperationsInput | string
    tilDato?: StringFieldUpdateOperationsInput | string
    bruker?: BrukerUpdateOneRequiredWithoutReservasjonerNestedInput
    sone?: SoneUpdateOneRequiredWithoutReservasjonerNestedInput
    plass?: PlassUpdateOneRequiredWithoutReservasjonerNestedInput
  }

  export type ReservasjonUncheckedUpdateWithoutReservasjonUtleietjenesteInput = {
    reservasjonNr?: IntFieldUpdateOperationsInput | number
    brukerNrId?: IntFieldUpdateOperationsInput | number
    soneNrId?: IntFieldUpdateOperationsInput | number
    plassNrId?: IntFieldUpdateOperationsInput | number
    fraDato?: StringFieldUpdateOperationsInput | string
    tilDato?: StringFieldUpdateOperationsInput | string
  }

  export type PlassCreateManyFasilitetInput = {
    plassNr?: number
  }

  export type PlassUpdateWithoutFasilitetInput = {
    reservasjoner?: ReservasjonUpdateManyWithoutPlassNestedInput
  }

  export type PlassUncheckedUpdateWithoutFasilitetInput = {
    plassNr?: IntFieldUpdateOperationsInput | number
    reservasjoner?: ReservasjonUncheckedUpdateManyWithoutPlassNestedInput
  }

  export type PlassUncheckedUpdateManyWithoutFasilitetInput = {
    plassNr?: IntFieldUpdateOperationsInput | number
  }

  export type ReservasjonCreateManyPlassInput = {
    reservasjonNr?: number
    brukerNrId: number
    soneNrId: number
    fraDato: string
    tilDato: string
  }

  export type ReservasjonUpdateWithoutPlassInput = {
    fraDato?: StringFieldUpdateOperationsInput | string
    tilDato?: StringFieldUpdateOperationsInput | string
    bruker?: BrukerUpdateOneRequiredWithoutReservasjonerNestedInput
    sone?: SoneUpdateOneRequiredWithoutReservasjonerNestedInput
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteUpdateManyWithoutReservasjonNestedInput
  }

  export type ReservasjonUncheckedUpdateWithoutPlassInput = {
    reservasjonNr?: IntFieldUpdateOperationsInput | number
    brukerNrId?: IntFieldUpdateOperationsInput | number
    soneNrId?: IntFieldUpdateOperationsInput | number
    fraDato?: StringFieldUpdateOperationsInput | string
    tilDato?: StringFieldUpdateOperationsInput | string
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteUncheckedUpdateManyWithoutReservasjonNestedInput
  }

  export type ReservasjonUncheckedUpdateManyWithoutPlassInput = {
    reservasjonNr?: IntFieldUpdateOperationsInput | number
    brukerNrId?: IntFieldUpdateOperationsInput | number
    soneNrId?: IntFieldUpdateOperationsInput | number
    fraDato?: StringFieldUpdateOperationsInput | string
    tilDato?: StringFieldUpdateOperationsInput | string
  }

  export type ReservasjonCreateManyBrukerInput = {
    reservasjonNr?: number
    soneNrId: number
    plassNrId: number
    fraDato: string
    tilDato: string
  }

  export type ReservasjonUpdateWithoutBrukerInput = {
    fraDato?: StringFieldUpdateOperationsInput | string
    tilDato?: StringFieldUpdateOperationsInput | string
    sone?: SoneUpdateOneRequiredWithoutReservasjonerNestedInput
    plass?: PlassUpdateOneRequiredWithoutReservasjonerNestedInput
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteUpdateManyWithoutReservasjonNestedInput
  }

  export type ReservasjonUncheckedUpdateWithoutBrukerInput = {
    reservasjonNr?: IntFieldUpdateOperationsInput | number
    soneNrId?: IntFieldUpdateOperationsInput | number
    plassNrId?: IntFieldUpdateOperationsInput | number
    fraDato?: StringFieldUpdateOperationsInput | string
    tilDato?: StringFieldUpdateOperationsInput | string
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteUncheckedUpdateManyWithoutReservasjonNestedInput
  }

  export type ReservasjonUncheckedUpdateManyWithoutBrukerInput = {
    reservasjonNr?: IntFieldUpdateOperationsInput | number
    soneNrId?: IntFieldUpdateOperationsInput | number
    plassNrId?: IntFieldUpdateOperationsInput | number
    fraDato?: StringFieldUpdateOperationsInput | string
    tilDato?: StringFieldUpdateOperationsInput | string
  }

  export type ReservasjonCreateManySoneInput = {
    reservasjonNr?: number
    brukerNrId: number
    plassNrId: number
    fraDato: string
    tilDato: string
  }

  export type ReservasjonUpdateWithoutSoneInput = {
    fraDato?: StringFieldUpdateOperationsInput | string
    tilDato?: StringFieldUpdateOperationsInput | string
    bruker?: BrukerUpdateOneRequiredWithoutReservasjonerNestedInput
    plass?: PlassUpdateOneRequiredWithoutReservasjonerNestedInput
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteUpdateManyWithoutReservasjonNestedInput
  }

  export type ReservasjonUncheckedUpdateWithoutSoneInput = {
    reservasjonNr?: IntFieldUpdateOperationsInput | number
    brukerNrId?: IntFieldUpdateOperationsInput | number
    plassNrId?: IntFieldUpdateOperationsInput | number
    fraDato?: StringFieldUpdateOperationsInput | string
    tilDato?: StringFieldUpdateOperationsInput | string
    reservasjonUtleietjeneste?: ReservasjonUtleietjenesteUncheckedUpdateManyWithoutReservasjonNestedInput
  }

  export type ReservasjonUncheckedUpdateManyWithoutSoneInput = {
    reservasjonNr?: IntFieldUpdateOperationsInput | number
    brukerNrId?: IntFieldUpdateOperationsInput | number
    plassNrId?: IntFieldUpdateOperationsInput | number
    fraDato?: StringFieldUpdateOperationsInput | string
    tilDato?: StringFieldUpdateOperationsInput | string
  }

  export type ReservasjonUtleietjenesteCreateManyUtleietjenesteInput = {
    antall: number
    reservasjonNr: number
  }

  export type ReservasjonUtleietjenesteUpdateWithoutUtleietjenesteInput = {
    antall?: IntFieldUpdateOperationsInput | number
    reservasjon?: ReservasjonUpdateOneRequiredWithoutReservasjonUtleietjenesteNestedInput
  }

  export type ReservasjonUtleietjenesteUncheckedUpdateWithoutUtleietjenesteInput = {
    antall?: IntFieldUpdateOperationsInput | number
    reservasjonNr?: IntFieldUpdateOperationsInput | number
  }

  export type ReservasjonUtleietjenesteUncheckedUpdateManyWithoutUtleietjenesteInput = {
    antall?: IntFieldUpdateOperationsInput | number
    reservasjonNr?: IntFieldUpdateOperationsInput | number
  }

  export type ReservasjonUtleietjenesteCreateManyReservasjonInput = {
    antall: number
    utleieTjenesteNr: number
  }

  export type ReservasjonUtleietjenesteUpdateWithoutReservasjonInput = {
    antall?: IntFieldUpdateOperationsInput | number
    utleietjeneste?: UtleietjenesteUpdateOneRequiredWithoutReservasjonUtleietjenesteNestedInput
  }

  export type ReservasjonUtleietjenesteUncheckedUpdateWithoutReservasjonInput = {
    antall?: IntFieldUpdateOperationsInput | number
    utleieTjenesteNr?: IntFieldUpdateOperationsInput | number
  }

  export type ReservasjonUtleietjenesteUncheckedUpdateManyWithoutReservasjonInput = {
    antall?: IntFieldUpdateOperationsInput | number
    utleieTjenesteNr?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FasilitetCountOutputTypeDefaultArgs instead
     */
    export type FasilitetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FasilitetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlassCountOutputTypeDefaultArgs instead
     */
    export type PlassCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlassCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrukerCountOutputTypeDefaultArgs instead
     */
    export type BrukerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrukerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SoneCountOutputTypeDefaultArgs instead
     */
    export type SoneCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SoneCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UtleietjenesteCountOutputTypeDefaultArgs instead
     */
    export type UtleietjenesteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UtleietjenesteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservasjonCountOutputTypeDefaultArgs instead
     */
    export type ReservasjonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservasjonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FasilitetDefaultArgs instead
     */
    export type FasilitetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FasilitetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlassDefaultArgs instead
     */
    export type PlassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlassDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrukerDefaultArgs instead
     */
    export type BrukerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrukerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SoneDefaultArgs instead
     */
    export type SoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SoneDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UtleietjenesteDefaultArgs instead
     */
    export type UtleietjenesteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UtleietjenesteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservasjonDefaultArgs instead
     */
    export type ReservasjonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservasjonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservasjonUtleietjenesteDefaultArgs instead
     */
    export type ReservasjonUtleietjenesteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservasjonUtleietjenesteDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}