
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.12.1
 * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
 */
Prisma.prismaVersion = {
  client: "5.12.1",
  engine: "473ed3124229e22d881cb7addf559799debae1ab"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.FasilitetScalarFieldEnum = {
  fasilitetNr: 'fasilitetNr',
  navn: 'navn',
  pris: 'pris'
};

exports.Prisma.PlassScalarFieldEnum = {
  plassNr: 'plassNr',
  fasilitetNrId: 'fasilitetNrId'
};

exports.Prisma.BrukerScalarFieldEnum = {
  brukerNr: 'brukerNr',
  fornavn: 'fornavn',
  etternavn: 'etternavn',
  epost: 'epost',
  telefon: 'telefon',
  passord: 'passord'
};

exports.Prisma.SoneScalarFieldEnum = {
  soneNr: 'soneNr',
  sonenavn: 'sonenavn'
};

exports.Prisma.UtleietjenesteScalarFieldEnum = {
  utleieTjenesteNr: 'utleieTjenesteNr',
  tjenestenavn: 'tjenestenavn',
  dagerTilgj: 'dagerTilgj',
  tilgjTid: 'tilgjTid',
  pris: 'pris'
};

exports.Prisma.ReservasjonScalarFieldEnum = {
  reservasjonNr: 'reservasjonNr',
  brukerNrId: 'brukerNrId',
  soneNrId: 'soneNrId',
  plassNrId: 'plassNrId',
  fraDato: 'fraDato',
  tilDato: 'tilDato'
};

exports.Prisma.ReservasjonUtleietjenesteScalarFieldEnum = {
  antall: 'antall',
  utleieTjenesteNr: 'utleieTjenesteNr',
  reservasjonNr: 'reservasjonNr'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  Fasilitet: 'Fasilitet',
  Plass: 'Plass',
  Bruker: 'Bruker',
  Sone: 'Sone',
  Utleietjeneste: 'Utleietjeneste',
  Reservasjon: 'Reservasjon',
  ReservasjonUtleietjeneste: 'ReservasjonUtleietjeneste'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Yusuf\\Documents\\app2000nypro\\nycamping\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.12.1",
  "engineVersion": "473ed3124229e22d881cb7addf559799debae1ab",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "ciName": "Vercel",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "POSTGRES_PRISMA_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\r\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\r\n\r\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\r\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\r\n\r\ngenerator client {\r\n  provider = \"prisma-client-js\"\r\n  output   = \"./generated/client\"\r\n}\r\n\r\ndatasource db {\r\n  provider     = \"postgresql\"\r\n  url          = env(\"POSTGRES_PRISMA_URL\")\r\n  directUrl = env(\"POSTGRES_URL_NON_POOLING\")\r\n}\r\n\r\nmodel Fasilitet {\r\n  fasilitetNr Int    @id @default(autoincrement())\r\n  navn        String\r\n  pris        Int\r\n\r\n  plasser Plass[]\r\n}\r\n\r\nmodel Plass {\r\n  plassNr       Int @id @default(autoincrement())\r\n  fasilitetNrId Int\r\n\r\n  fasilitet     Fasilitet     @relation(fields: [fasilitetNrId], references: [fasilitetNr])\r\n  reservasjoner Reservasjon[]\r\n}\r\n\r\nmodel Bruker {\r\n  brukerNr      Int           @id @default(autoincrement())\r\n  fornavn       String\r\n  etternavn     String\r\n  epost         String\r\n  telefon       String\r\n  passord       String\r\n  reservasjoner Reservasjon[]\r\n}\r\n\r\nmodel Sone {\r\n  soneNr        Int           @id @default(autoincrement())\r\n  sonenavn      String\r\n  reservasjoner Reservasjon[]\r\n}\r\n\r\nmodel Utleietjeneste {\r\n  utleieTjenesteNr Int    @id @default(autoincrement())\r\n  tjenestenavn     String\r\n  dagerTilgj       String\r\n  tilgjTid         String\r\n  pris             Int\r\n\r\n  reservasjonUtleietjeneste ReservasjonUtleietjeneste[]\r\n}\r\n\r\nmodel Reservasjon {\r\n  reservasjonNr Int    @id @default(autoincrement())\r\n  brukerNrId    Int\r\n  soneNrId      Int\r\n  plassNrId     Int\r\n  fraDato       String\r\n  tilDato       String\r\n\r\n  bruker Bruker @relation(fields: [brukerNrId], references: [brukerNr])\r\n  sone   Sone   @relation(fields: [soneNrId], references: [soneNr])\r\n  plass  Plass  @relation(fields: [plassNrId], references: [plassNr])\r\n\r\n  reservasjonUtleietjeneste ReservasjonUtleietjeneste[]\r\n}\r\n\r\nmodel ReservasjonUtleietjeneste {\r\n  antall           Int\r\n  utleieTjenesteNr Int\r\n  reservasjonNr    Int\r\n\r\n  utleietjeneste Utleietjeneste @relation(fields: [utleieTjenesteNr], references: [utleieTjenesteNr])\r\n  reservasjon    Reservasjon    @relation(fields: [reservasjonNr], references: [reservasjonNr])\r\n\r\n  @@unique([reservasjonNr, utleieTjenesteNr])\r\n}\r\n",
  "inlineSchemaHash": "3b774f922a48872c769a624b4be1b16976b9410afdeb9c1f3f1777a301c53584",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Fasilitet\":{\"dbName\":null,\"fields\":[{\"name\":\"fasilitetNr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"navn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pris\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plasser\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Plass\",\"relationName\":\"FasilitetToPlass\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Plass\":{\"dbName\":null,\"fields\":[{\"name\":\"plassNr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fasilitetNrId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fasilitet\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fasilitet\",\"relationName\":\"FasilitetToPlass\",\"relationFromFields\":[\"fasilitetNrId\"],\"relationToFields\":[\"fasilitetNr\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservasjoner\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservasjon\",\"relationName\":\"PlassToReservasjon\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Bruker\":{\"dbName\":null,\"fields\":[{\"name\":\"brukerNr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fornavn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etternavn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"epost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passord\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservasjoner\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservasjon\",\"relationName\":\"BrukerToReservasjon\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Sone\":{\"dbName\":null,\"fields\":[{\"name\":\"soneNr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sonenavn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservasjoner\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservasjon\",\"relationName\":\"ReservasjonToSone\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Utleietjeneste\":{\"dbName\":null,\"fields\":[{\"name\":\"utleieTjenesteNr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tjenestenavn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dagerTilgj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tilgjTid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pris\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservasjonUtleietjeneste\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ReservasjonUtleietjeneste\",\"relationName\":\"ReservasjonUtleietjenesteToUtleietjeneste\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Reservasjon\":{\"dbName\":null,\"fields\":[{\"name\":\"reservasjonNr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brukerNrId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"soneNrId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plassNrId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fraDato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tilDato\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruker\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bruker\",\"relationName\":\"BrukerToReservasjon\",\"relationFromFields\":[\"brukerNrId\"],\"relationToFields\":[\"brukerNr\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sone\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sone\",\"relationName\":\"ReservasjonToSone\",\"relationFromFields\":[\"soneNrId\"],\"relationToFields\":[\"soneNr\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plass\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Plass\",\"relationName\":\"PlassToReservasjon\",\"relationFromFields\":[\"plassNrId\"],\"relationToFields\":[\"plassNr\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservasjonUtleietjeneste\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ReservasjonUtleietjeneste\",\"relationName\":\"ReservasjonToReservasjonUtleietjeneste\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ReservasjonUtleietjeneste\":{\"dbName\":null,\"fields\":[{\"name\":\"antall\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utleieTjenesteNr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservasjonNr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utleietjeneste\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Utleietjeneste\",\"relationName\":\"ReservasjonUtleietjenesteToUtleietjeneste\",\"relationFromFields\":[\"utleieTjenesteNr\"],\"relationToFields\":[\"utleieTjenesteNr\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservasjon\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservasjon\",\"relationName\":\"ReservasjonToReservasjonUtleietjeneste\",\"relationFromFields\":[\"reservasjonNr\"],\"relationToFields\":[\"reservasjonNr\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"reservasjonNr\",\"utleieTjenesteNr\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"reservasjonNr\",\"utleieTjenesteNr\"]}],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    POSTGRES_PRISMA_URL: typeof globalThis !== 'undefined' && globalThis['POSTGRES_PRISMA_URL'] || typeof process !== 'undefined' && process.env && process.env.POSTGRES_PRISMA_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

