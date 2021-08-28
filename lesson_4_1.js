
let s = '15';

class Worker {
    constructor(data) {
        this.data = data;
        this.units = '0';
        this.decimals = '0';
        this.hundreds = '0';
    }

    preparation() {
        console.log(this.data.length)
        if (this.data.length > 3) {
            console.log('Введите другое число');
            return;
        }
        switch (this.data.length) {
            case 3:
                this.units = this.data[2];
                this.decimals = this.data[1];
                this.hundreds = this.data[0];
                break;
            case 2:
                this.units = this.data[1];
                this.decimals = this.data[0];
                break;
            case 1:
                this.units = this.data[0];
        }
    }
}

const result = new Worker(s);
result.preparation();
console.log(result);

