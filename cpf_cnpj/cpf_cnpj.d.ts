interface CPF {

    isValid : ( cpf : string ) => boolean;
    strip : ( cpf : string ) => string;
    format : ( cpf : string ) => string;
    generate : ( isFormatted? : boolean ) => string;

}

interface CNPJ {

    isValid : ( cpf : string ) => boolean;
    strip : ( cpf : string ) => string;
    format : ( cpf : string ) => string;
    generate : ( isFormatted? : boolean ) => string;

}

//nodejs
declare module "cpf_cnpj" {

	export var CPF: CPF;
	export var CNPJ: CNPJ;

}

//browser
declare var CPF: CPF;
declare var CNPJ: CNPJ;