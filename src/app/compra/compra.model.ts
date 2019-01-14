class CompraModel {
  constructor(
    public address: string,
    public number: number,
    public optionalAddress: string,
    public paymentOption: string,
    public itensCompra: ItemCompraModel[] = []
  ) { }
}

class ItemCompraModel {
  constructor(
    public quantidade: number,
    public idItem: string
  ) { }
}

export {CompraModel, ItemCompraModel}
