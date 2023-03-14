export const convertColor = (typeColor, typeNewColor, cor)=>{
  if (typeColor==='RGB' && typeNewColor==='HSV') return rgbToHsv(cor);
  else if (typeColor==='RGB' && typeNewColor==='CMYK') return rgbToCmyk(cor);
  else if (typeColor==='RGB' && typeNewColor==='Escala de Cinza') return rgbToGray(cor);
  else if(typeColor==='HSV' && typeNewColor==='RGB') return hsvToRgb(cor);
  else if (typeColor==='CMYK' && typeNewColor==='RGB') return cmykToRgb(cor);
}

const hsvToRgb = (cor)=> {
  let aux= cor.split(',')
  let H=0,S=0,V=0,C=0,X=0,m=0,auxR=0, auxG=0,auxB=0,R=0,G=0,B=0;
  H= parseInt(aux[0]);
  S= (aux[1]);  
  V= (aux[2]);
  if (aux.length!==3 || H<0 || H>360 || S<0 || S>100 || V<0 || V>100 ) return 'Valor incorreto'
  for(let i=0; i<aux.length; i++) {
    aux[i].trim()
    aux[i] = Number(aux[i])
    if (typeof(aux[i])!=='number') return 'Valor incorreto'
  }
  S=S/100;
  V=V/100;
  C= V*S;
  X = C * (1-Math.abs((H/60)%2-1));
  m = V-C;

  if (H<60){
    auxR = C;
    auxG = X;
    auxB= 0;
  }
  else if (H<120){
    auxR = X;
    auxG = C;
    auxB = 0;
  }
  else if (H<180){
    auxR = 0;
    auxG = C;
    auxB= X;
  }
  else if (H<240){
    auxR = 0;
    auxG = X;
    auxB= C;
  }
  else if (H<300){
    auxR = X;
    auxG = 0;
    auxB= C;
  }
  else if (H<360){
    auxR = C;
    auxG = 0;
    auxB= X;
  }

  R = Math.round((auxR+m)*255);
  G = Math.round((auxG+m)*255);
  B = Math.round((auxB+m)*255);
  return `R = ${R}, G = ${G}, B = ${B}`
}

const rgbToHsv = (cor)=>{
  let aux= cor.split(',')
  let H=0, S=0, V=0, R=0, G=0,B=0, auxR=0, auxG=0, auxB=0, max=0, min=0, delta=0;
  if (aux.length!==3) return  'Valor incorreto'
  for(let i=0; i<aux.length; i++){
    aux[i].trim()
    aux[i] = Number(aux[i]);
    if (parseInt(aux[i])>255 || parseInt(aux[i])<0 || typeof(aux[i])!=='number') return 'Valor incorreto'
  }
  R= parseInt(aux[0]);
  G= parseInt(aux[1]);
  B= parseInt(aux[2]);
  auxR =R/255;
  auxG= G/255;
  auxB= B/255;
  max = Math.max(auxR, auxG, auxB);
  min = Math.min(auxR, auxG, auxB);
  delta = max-min;
  if (delta===0)H=0;
  else if (max === auxR && auxG>=auxB)H = Math.round(60 * ((auxG-auxB)/delta)+ 0)
  else if (max === auxR && auxG<auxB)H = Math.round(60 * ((auxG-auxB)/delta) + 360)
  else if (max===auxG)H = Math.round(60 * ((auxB-auxR)/delta) + 120)
  else if (max===auxB)H = Math.round(60 * ((auxR-auxG)/delta) + 240)
  
  S = max===0 ?0 : Math.round((delta/max)*1000)/10;
  V = (max*100).toFixed(1);
  return `H = ${H}, S= ${S}%, G= ${V}%`;
}

const rgbToCmyk = (cor)=>{
  let aux= cor.split(',')
  let R=0,G=0,B=0, auxR=0, auxG=0, auxB=0, K=0,C=0,M=0,Y=0;
  if (aux.length!==3) return  'Valor incorreto'
  for(let i=0; i<aux.length; i++){
    aux[i].trim()
    aux[i] = Number(aux[i]);
    if (parseInt(aux[i])>255 || parseInt(aux[i])<0 || typeof(aux[i])!=='number') return 'Valor incorreto'
  }
  R= parseInt(aux[0]);
  G= parseInt(aux[1]);
  B= parseInt(aux[2]);
  auxR=R/255;
  auxG=G/255;
  auxB=B/255;

  K= 1-Math.max(auxR, auxG, auxB);
  C = Math.round((1-auxR-K)/(1-K)*100);
  M =  Math.round((1-auxG-K)/(1-K)*100);
  Y = Math.round((1-auxB-K)/(1-K)*100);
  K= Math.round(K*100)
  return `C = ${C}%, M = ${M}%, Y = ${Y}%, K = ${K}%`;
}

const cmykToRgb = (cor)=>{
  let aux= cor.split(',')
  let R=0,G=0,B=0, C=0, M=0, Y=0,K=0;
  if (aux.length!==4) return  'Valor incorreto'
  for(let i=0; i<aux.length; i++){
    aux[i].trim();
    aux[i] = Number(aux[i]);
    if (parseInt(aux[i])>100 || parseInt(aux[i])<0 || typeof(aux[i])!=='number') return 'Valor incorreto'
  }
  C= parseInt(aux[0])/100;
  M= parseInt(aux[1])/100;
  Y= parseInt(aux[2])/100;
  K = parseInt(aux[3])/100;

  R=Math.round(255*(1-C)*(1-K))
  G=Math.round(255*(1-M)*(1-K))
  B=Math.round(255*(1-Y)*(1-K))

  return `R = ${R}, G = ${G}, B= ${B}`
}

const rgbToGray = (cor)=>{
  let aux= cor.split(',')
  let soma=0;
  if (aux.length!==3) return  'Valor incorreto'
  for(let i=0; i<aux.length; i++){
    aux[i].trim()
    aux[i] = Number(aux[i]);
    if (parseInt(aux[i])>255 || parseInt(aux[i])<0 || typeof(aux[i])!=='number') return 'Valor incorreto'
    else soma +=parseInt(aux[i]);
  }
  return `${Math.round(soma/3)}`;
}