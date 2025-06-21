const Helpers = {
    diffPorcentagem: (total, value) => {
        const v = (value / total) * 100;
        return v.toFixed(2);
    },
    parsePorcentagem: (total, value) => {
        const totalM = parseFloat(total);
        const valueM = parseFloat(value);
        const result = ((totalM / valueM) * 100) - 100;
        if(value && total) {
            return result.toFixed(2);
        }
        return 0;
    },
    converterFloatReal: (value) => {
        let decimal = null;
        let inteiro = null, c = null, j = null;
        let aux = new Array();
        
        try {
          value = value.toFixed(2);
        } catch(e) {}
        
        if(!value) {
          return 0;
        }
        c = value.indexOf(".", 0);
        //encontrou o ponto na string
        if(c > 0){
           //separa as partes em inteiro e decimal
           inteiro = value.toString().substring(0, c);
           decimal = value.substring(c + 1, value.length);
        } else{
           inteiro = value;
        }
       
        //pega a parte inteiro de 3 em 3 partes
        for (j = inteiro.length, c = 0; j > 0; j-=3, c++){
            aux[c]=inteiro.substring(j-3,j);
        }
       
        //percorre a string acrescentando os pontos
        inteiro = "";
        for(c = aux.length-1; c >= 0; c--){
           inteiro += aux[c]+'.';
        }
        //retirando o ultimo ponto e finalizando a parte inteiro
       
        inteiro = inteiro.substring(0,inteiro.length-1);
       
        decimal = parseInt(decimal);
        if(isNaN(decimal)){
           decimal = "00";
        } else{
           decimal = "" + decimal;
           if(decimal.length === 1){
              decimal = "0" + decimal;
           }
        }
        value = inteiro + "," + decimal;
        return 'R$ ' + value;
    },
    today: () => {
        const date = new Date();
        let month = '';
        month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        return `${date.getDate()}/${month}/${date.getFullYear()}`
    },
    currency: (value) => {
        if(value) {
            value = value.replace(/\D/g, "");
            value = value.replace(/(\d)(\d{2})$/, "$1,$2");
            value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
            // e.currentTarget.value = value;
        }
        
        return value;
    },
    formatPhoneBR: (phone) => {
        phone = phone.replace(/\D/g, ""); // Remove tudo que não for número
        phone = phone.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca o DDD entre parênteses
        phone = phone.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona o traço no número
        return phone;
    },
    getTypeRole: (type) => {
        switch(type) {
            case "1":
                return 'SuperAdmin';
            case "2":
                return 'Administrador';
            case "3":
                return 'Operador';
            case "4":
                return 'Motorista';
            case "5":
                return 'Público';
            default:
                return 'Desconhecido';
        }
    },
    getListTypeRole: () => {
        return [
            { value: "1", label: 'SuperAdmin' },
            { value: "2", label: 'Administrador' },
            { value: "3", label: 'Operador' },
            { value: "4", label: 'Motorista' },
            { value: "5", label: 'Público' },
        ];
    }

};

export default Helpers;