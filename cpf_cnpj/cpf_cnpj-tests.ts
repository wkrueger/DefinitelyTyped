/// <reference path="cpf_cnpj.d.ts"/>

import { CPF, CNPJ } from 'cpf_cnpj';

CPF.isValid("532.820.857-96");
CPF.strip("532.820.857-96");
CPF.format("53282085796");
CPF.generate(true); // generate formatted number
CPF.generate(); // generate unformatted number

//==========================================================

CNPJ.isValid("41.381.074/6738-65");
CNPJ.strip("41.381.074/6738-65");
CNPJ.format("41381074673865");
CNPJ.generate(true); // generate formatted number
CNPJ.generate(); // generate unformatted number