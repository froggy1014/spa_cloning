window.addEventListener('resize', ()=>{
  var width = screen.width;
  const free_class_btn = document.querySelector('.sparta_free_class_btn')
  const free_class_btn_small = document.querySelector('.sparta_free_class_btn_small')

  console.log('width = '+ width)

  if (width >= 1024)
  {
    free_class_btn_small.classList.remove('active');
    free_class_btn_small.classList.add("hide");
    free_class_btn.classList.add("active");
  }
  else 
  {
    free_class_btn_small.classList.add("active");
    free_class_btn.classList.remove('active');
    free_class_btn.classList.add("hide");
  }

})