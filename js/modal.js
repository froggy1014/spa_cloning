const modal = document.querySelector('#modal');
  const closeModal = document.querySelector('.close_button');
  const openModal = document.querySelector('.open_button');
  const iframe = document.querySelector('#iframe');

function Modalshow(thisId){
    if (thisId === 'review_1'){
      console.log(thisId);
      iframe.setAttribute('src','https://www.youtube.com/embed/7Vf64vYeSwo')
      modal.showModal();
    }
    else if(thisId === 'review_2'){
      console.log(thisId);
      iframe.setAttribute('src','https://www.youtube.com/embed/yS1A2ELIwgg')
      modal.showModal();
    }
    else if(thisId === 'review_3'){
      console.log(thisId);
      iframe.setAttribute('src','https://www.youtube.com/embed/Cnr5tHZXI5g')
      modal.showModal();
    }
}

  closeModal.addEventListener('click', ()=> {
    iframe.setAttribute('src','')
    modal.close();
  })
