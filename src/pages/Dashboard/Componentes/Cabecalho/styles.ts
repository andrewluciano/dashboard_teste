import { styled } from '@stitches/react';

import { Printer , ShareNetwork } from '@phosphor-icons/react';

export const Container = styled("div", {
  position:'relative',
  marginTop:'-60px',
  display: "flex",
  flexWrap:'wrap',
  flexDirection: "row",  
  backgroundColor:'#333',
  borderRadius:'10px',
  boxSizing:'border-box',
  padding:'20px',
  width: '100%',
  height:'50%',
  gap:'10px',
  boxShadow:'0 0 10px rgba(0,0,0,0.1)',
  color:'#fff',
  variants:{
    direcao:{
      vertical:{
        flexDirection: "column",  
      }
    }
  }
});

export const TituloPagina = styled("h1", {
  fontSize:'1.5rem',
  color:'#f4f4f4',
  margin:'0',
  padding:'0',
  flex:'2'
});
export const Imprimir = styled(Printer, {
  display:'flex',
  fontSize:'0.5rem',
  margin:'0',
  width:'30px',
  height:'30px',
  maxWidth:'30px',
  cursor:'pointer',
  backgroundColor: '#f4f4f4',
  borderRadius:'100%',
  color:'#333',
  boxSizing:'border-box',
  padding:'5px',
  flex:'1'
  
});
export const Compartilhar = styled(ShareNetwork , {
  display:'flex',
  fontSize:'0.5rem',
  margin:'0',
  width:'30px',
  height:'30px',
  maxWidth:'30px',
  cursor:'pointer',
  backgroundColor: '#f4f4f4',
  borderRadius:'100%',
  color:'#333',
  boxSizing:'border-box',
  padding:'5px',
  flex:'1'
  
});



