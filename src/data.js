/* Manejo de data */
window.data = {
    filterData: (data, condition) =>{
      let filterData = data.filter(condition);
      return filterData;   
      
    },
    sortData:(data, sortBy, sortOrder) =>{
      let sortedData;
      //Condición si el usuario quiere ordenar por peso o altura
      if (sortBy==='weight' || sortBy==='height'){
        sortedData = data.sort((a,b) =>{
          //split= extrae la información que se encuentra antes del espacio (string), guardandola en una variable
          let aSplit=a[sortBy].split(" ");
          let bSplit=b[sortBy].split(" ");
          //Los string debo transformarlos a numero, usando parseFloat
          return parseFloat(aSplit[0])-parseFloat(bSplit[0]);
        });
        //Condición si el usuario quiere ordenar por nombre y numero
      }else{      
        sortedData = data.sort((a,b) =>{
          return a[sortBy].localeCompare(b[sortBy]);
        });
      }
      
      if (sortOrder === "desc"){
        sortedData.reverse();
      }
      return sortedData;
    },
  
    computeStats:(data) =>{
      let count=new Array;
      
      count.push(["Bug",(data.filter((pokemon)=>{
        return pokemon.type.includes("Bug")})).length]);
  
      count.push(["Dark",(data.filter((pokemon)=>{
        return pokemon.type.includes("Dark")})).length]);
  
      count.push(["Dragon",(data.filter((pokemon)=>{
        return pokemon.type.includes("Dragon")})).length]);
  
      count.push(["Electric",(data.filter((pokemon)=>{
        return pokemon.type.includes("Electric")})).length]);
  
      count.push(["Fairy",(data.filter((pokemon)=>{
        return pokemon.type.includes("Fairy")})).length]);
  
      count.push(["Fighting",(data.filter((pokemon)=>{
        return pokemon.type.includes("Figting")})).length]);
  
      count.push(["Fire",(data.filter((pokemon)=>{
        return pokemon.type.includes("Fire")})).length]);
  
      count.push(["Flying",(data.filter((pokemon)=>{
        return pokemon.type.includes("Flying")})).length]);
  
      count.push(["Ghost",(data.filter((pokemon)=>{
        return pokemon.type.includes("Ghost")})).length]);
  
      count.push(["Grass",(data.filter((pokemon)=>{
        return pokemon.type.includes("Grass")})).length]);
  
      count.push(["Ground",(data.filter((pokemon)=>{
        return pokemon.type.includes("Ground")})).length]);
  
      count.push(["Ice",(data.filter((pokemon)=>{
        return pokemon.type.includes("Ice")})).length]);
  
      count.push(["Normal",(data.filter((pokemon)=>{
        return pokemon.type.includes("Normal")})).length]);
  
      count.push(["Poison",(data.filter((pokemon)=>{
        return pokemon.type.includes("Poison")})).length]);
  
      count.push(["Psychic",(data.filter((pokemon)=>{
        return pokemon.type.includes("Psychic")})).length]);
  
      count.push(["Rock",(data.filter((pokemon)=>{
        return pokemon.type.includes("Rock")})).length]);
  
      count.push(["Steel",(data.filter((pokemon)=>{
        return pokemon.type.includes("Steel")})).length]);
  
      count.push(["Water",(data.filter((pokemon)=>{
        return pokemon.type.includes("Water")})).length]);
         
      return count;
    }
  };