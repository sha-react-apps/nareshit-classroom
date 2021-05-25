interface ProductName{
    abstract function printName(): void;
}


abstract class ProductPrice{
    abstract function printPrice(): void;
}

class Product extends ProductPrice implements ProductName{

    override function printName():void {
        log "Product Name:: TV";
    }

    override function printPrice():void {
        log "Product Price:: 10000";
    }
}

class _Main{
    static function main(args:string[]): void {
        var tv = new Product();
        tv.printName();
        tv.printPrice();
    }
}