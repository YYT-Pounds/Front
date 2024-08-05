import TableManager from "./table-manager.ts"
import Table from "./index.vue"

const defineTable = <Model>(Manager: TableManager<Model>): TableManager<Model> => {
    return Manager
}

export {defineTable, Table}