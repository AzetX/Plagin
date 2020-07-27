class Dropdow {
  constructor(selector, options){
      this.$el = document.querySelector(selector)
      this.items = options.items

      this.$el.querySelector('.dropdown_label').textContent = this.items[0].label
 
      this.$el.addEventListener('click', event=>{
          if(event.target.classList.contains('dropdown_label')){
       if (this.$el.classList.contains('open')){
       this.close()
       }
       else{
        this.open()
       }
    }
    else if(event.target.tagName.toLowerCase()=== 'li'){
       this.selector(event.target.dataset.id)
    }
      })
      
      const itemsHTML = this.items.map( i=> {
        return `<li  data-id = '${i.id}'>${i.label}</li>`
      }).join('')
      
      this.$el.querySelector('.dropdown_menu').insertAdjacentHTML('afterbegin', itemsHTML)





    }


    selector(id){
      const items = this.items.find(i=> i.id === id)
      this.$el.querySelector('.dropdown_label').textContent = items.label 
      this.close()
    }

  open(){
      this.$el.classList.add('open')
  }

  close(){
    this.$el.classList.remove('open')
  }

}



const dropdow =  new Dropdow('#dropdown' ,{
    items:[
        {label:'Москва', id: 'msk'},
        {label:'Санкт-Петербург', id: 'spb'},
        {label: 'Новосибирск', id: 'nsk'},
        {label: 'Краснодар', id: 'krdr'}
    ]
})