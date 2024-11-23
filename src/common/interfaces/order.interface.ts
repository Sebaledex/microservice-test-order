export interface IOrder extends Document {
  name: string;           // Nombre del producto
  price: number;          // Precio del producto
  stock: number;          // Cantidad en stock
  description: string;    // Descripción del producto
  //isActive: boolean;      // Indica si el producto está activo o no
  }