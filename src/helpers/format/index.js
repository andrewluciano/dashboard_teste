/* eslint-disable */

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import IMask from 'imask';

export const getUTCDate = (dateString = Date.now()) => {
  const date = new Date(dateString);

  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
};

export const currency = value => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
  return formatter.format(value);
};

const phoneRegExp = /(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;

export const maskPhoneParagrafo = (value) => {
  if (value) {


    if (value.toString().search(phoneRegExp) !== -1) {
      console.log('Formated');
    }

    const v = value.toString().length;


    if(v >= 10){
      let masked = [];

      masked = IMask.createMask({
        mask: '(00) 00000-0000',
      });

      if (v === 10) {
        console.log('residencia');
        masked = IMask.createMask({
          mask: '(00) 0000-0000',
        });

      }


      if (v >= 11 && v <= 12){
        console.log('celular');
        if(v === 11){
          masked = IMask.createMask({
            mask: '(00) 00000-0000',
          });
        }

        if(v === 12){
          masked = IMask.createMask({
            mask: '(000) 00000-0000',
          });
        }
      }

      masked.resolve(value.toString());
      // if (type === 'masked') {
      //   console.log(masked.value);
        return masked.value;
      // }
      // return masked.unmaskedValue;
    }

    return value
  }
    return value;
}

export const maskPhone = (value, type = 'masked') => {

  console.log('conteudo mascara');
  console.log(value);
  if (value) {


    if (value.toString().search(phoneRegExp) !== -1) {
      console.log('Formated');
    }

    const v = value.toString().length;


    if(v >= 10){
      let masked = [];

      masked = IMask.createMask({
        mask: '(00) 00000-0000',
      });

      if (v === 10) {
        console.log('residencia');
        masked = IMask.createMask({
          mask: '(00) 0000-0000',
        });

      }


      if (v >= 11 && v <= 12){
        console.log('celular');
        if(v === 11){
          masked = IMask.createMask({
            mask: '(00) 00000-0000',
          });
        }

        if(v === 12){
          masked = IMask.createMask({
            mask: '(000) 00000-0000',
          });
        }
      }

      masked.resolve(value.toString());
      if (type === 'masked') {
        console.log(masked.value);
        return masked.value;
      }
      return masked.unmaskedValue;
    }

    return value
  }
    return value;
}



export const maskCNPJ = (value, type = 'masked') => {
  if (value) {
    const masked = IMask.createMask({
      mask: '00.000.000/0000-00',
    });
    masked.resolve(value.toString());
    if (type === 'masked') {
      return masked.value;
    }
    return masked.unmaskedValue;
  }
  return '';
};

export const countRecords = data => {
  if (Array.isArray(data)) {
    return data.length;
  }
  return Object.keys(data).length;
};

export const dotToComma = value => {
  return value.toString().replace('.', ',');
};

export const dotToCommaDecimals = (value, decimal, withPercent) => {
  const val = value.toFixed(decimal);
  if(withPercent){
      const percent = val.toString().replace('.', ',');
      return `${percent} %`;
  }
  return val.toString().replace('.', ',');
};

export const dateTime = value => {
  const result = format(new Date(value), 'dd/MM/yyyy HH:mm');
  return result;
};

// 04 Abr, 2022
export const dateTimeGestao = value => {
//   const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
  const result = format(new Date(value), 'dd MMM, yyyy' , { locale: ptBR });
  return result ;
};

export const dateTimeSeconds = value => {

  const result = format(new Date(value), 'dd/MM/yyyy HH:mm:ss');
  const v = result.split(' ');
  const r = `${v[0]} às ${v[1]}`;
  return r;
};

export const date = value => {
  // const localTime = format(new Date(value), 'dd/MM/yyyy'); // returns local time
  // const utcTime = format(getUTCDate(value), 'dd/MM/yyyy'); // returns UTC time

  const result = format(new Date(value), 'dd/MM/yyyy');

  return result;
};

export const pmpTemMaisDeDuasCasasDecimais = pmp => {
  const casasDecimaisPmp = pmp.toString().split('.')[1];
  return casasDecimaisPmp && casasDecimaisPmp.length > 2;
};


export const convertDate = (value) => {
  if(value && typeof value === 'string'){
    const v1 = value.split('/');
    return `${v1[2]}-${v1[1]}-${v1[0]}`
  }
  return ''
}

export const revertDate = (value) => {
  if(value && typeof value === 'string'){
    const v1 = value.split('-');
    return `${v1[2]}/${v1[1]}/${v1[0]}`
  }
  return ''
}

