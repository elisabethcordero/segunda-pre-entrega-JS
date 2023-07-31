
class Producto {

    constructor(marca, modelo, color, precio, stock){
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.precio = precio
        this.stock = stock
    }

    obtenerPrecioConDescuento () {
        let resultado = 0
        if (this.precio >= 30000)
            resultado = this.precio / 1.2;
        else
            resultado = this.precio / 1.1;

        return resultado.toFixed(2)
    }

    obtenerDatos () {
        return `${this.marca} ${this.modelo}\t\tPrecio: ${this.obtenerPrecioConDescuento()}\tStock: ${this.stock}\tColor: ${this.color}`
    }
}

class Deposito {
    productos = []

    constructor() {

    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    listarProductos(){
        console.log(`Todos los productos:`)
        for (let producto of this.productos) {
            console.log(producto.obtenerDatos())
        }
    }

    listarPorColor(color){
        const resultados = this.productos.filter(producto => producto.color === color)
        console.log(`Productos color: ${color}`)
        console.table(resultados);
    }
}

const producto1 = new Producto ("Epson", "73", "Negro", 10000, 25);
const producto2 = new Producto ("Epson", "196", "Cyan", 12000, 18);
const producto3 = new Producto ("Epson", "206", "Negro", 11000, 30);
const producto4 = new Producto ("HP", "60", "Negro", 25000, 11);
const producto5 = new Producto ("HP", "122", "Tricolor", 24000, 19);
const producto6 = new Producto ("HP", "711", "Negro", 45000, 8);


const deposito = new Deposito();

deposito.agregarProducto(producto1);
deposito.agregarProducto(producto2);
deposito.agregarProducto(producto3);
deposito.agregarProducto(producto4);
deposito.agregarProducto(producto5);
deposito.agregarProducto(producto6);

deposito.listarProductos()
deposito.listarPorColor("Negro")