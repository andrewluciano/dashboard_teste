import { styled } from '@stitches/react';

export const Container = styled("div", {
  display: "flex",
  flexDirection: "row",  
  backgroundColor:'#FFF',
  borderRadius:'10px',
  boxSizing:'border-box',
  padding:'34px',
  width: '100%',
  height:'50%',
  boxShadow:'0 0 10px rgba(0,0,0,0.1)',
  variants:{
    direcao:{
      vertical:{
        flexDirection: "column",  
      }
    }
  }
});

export const ContainerNoticia = styled("div", {
  position:'relative',
  display: "flex",
  flexWrap:'wrap',
  boxSizing:'border-box',
  padding:'0 0 20px 0',

});

export const Noticia = styled("article", {
  position:'relative',
  display: "flex",
  flexWrap:'wrap',
  flexDirection:'row',
  boxSizing:'border-box',
  width: '100%',
  gap:'15px',  
  color:'#333',
  justifyContent:'center',
  padding:'40px 0 40px 0',
  alignItems:'center',
  '&:last-child':{
    '&:after' : {  
      display:'none'
    },
  },
  '&:nth-of-type(1)':{
    padding:'0px 0 40px 0',
  },
  '&:after' : {
    position:'absolute',
    content:'',
    width:'80%',
    height:'1px',
    backgroundColor:'#D9D9D9',
    bottom:'0px',
    left:'50%',
    transform:'translateX(-50%)',    
  }
});
export const Imagem = styled("div", {
  display:'flex',
  width:'75px',
  height:'75px',
  img:{
    borderRadius:'100%',
  }

})

export const AreaTexto = styled("div", {
  position:'relative',
  display: "flex",
  flexDirection: "column",  
  gap:'10px',
  flex:'2'

})


export const TituloNoticia  = styled("h2", {
  fontSize:'1rem',
  fontWeight:'bold',
  margin:'0'
});
export const Olho = styled("p", {
  margin:'0',
  fontSize:'0.875rem',
  fontWeight:'100'
   
});
