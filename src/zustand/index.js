import create from 'zustand'
export const useProduct = create(set => ({
isLogin:false,

handleUserLogin: (user) => set({isLogin:user}),

  products:[],
  handleProduct: (newProduct) => set({ products:[...newProduct]}),
  
  row:{},
  handleSelectedRow: (selectedRow) => set({row:selectedRow}),
  
  orders :[
    {
      name:"Reza Habibi",
      code:"3278482",
      item:34,
      price:333,
      date:"1401-02-03"
    },
    {
      name:"Kazem Habibi",
      code:"3278482",
      item:34,
      price:333,
      date:"1401-02-03"
    },
    {
      name:"Qasem Habibi",
      code:"3278482",
      item:34,
      price:333,
      date:"1401-02-03"
    }
  ],
}))




