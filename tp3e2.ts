interface Tarea {
    id: number
    descripcion: string
    completada: boolean
  }
  
  class ListaTareas {
    public tareas: Tarea[]

    constructor() {
      this.tareas = []
    }
  
    agregarUnaTarea(tarea: Tarea): void {
      this.tareas.push(tarea)
    }
  
    marcarTareaCompleta(id: number): void {
      let tarea = this.buscarTareaPorId(id)
      if (tarea) {
        tarea.completada = true
      }
    }
    listarTareas(): void {
        this.tareas.forEach((tarea) => {
          console.log(`ID: ${tarea.id} - Descripción: ${tarea.descripcion} - Completada: ${tarea.completada}`)
        })
      }
    
      public buscarTareaPorId(id: number): Tarea | undefined {
        return this.tareas.find((tarea) => tarea.id == id )
      }
    }
    const lista = new ListaTareas()


lista.agregarUnaTarea({ id: 1, descripcion: "tpPrgramacion", completada: false })
lista.agregarUnaTarea({ id: 2, descripcion: "parcial de redes", completada: true })
lista.agregarUnaTarea({ id: 3, descripcion: "sistema operativo ", completada: false })

lista.marcarTareaCompleta(2)


lista.listarTareas()