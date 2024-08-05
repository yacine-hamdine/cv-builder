function addField(group){
    let n = Math.round(Math.random()*100000000);
    let rm = document.createElement('span');
    rm.innerHTML = '&#x274c;';
    rm.style.textAlign = 'right';
    rm.style.width = '90%';
    rm.style.cursor ='pointer';
    rm.classList.add(`added-${n}`);
    rm.onclick = () => {
        set.querySelectorAll(`.added-${n}`).forEach(el => el.remove());
    };
    let set = document.getElementById(group);
    const template = document.querySelectorAll(`#${group} .template`);    
    const tmp = [];
    template.forEach(el => tmp.push(el.cloneNode(true)));
    tmp.forEach(el => {
      el.value = '';
      el.classList.remove('template');
      el.classList.add(`added-${n}`);
      el.classList.add(`added-${n}`);
      el.setAttribute("name", `${el.name}-2`);
      set.insertBefore(el, set.lastElementChild);
    });
    set.insertBefore(rm, set.querySelector(`.added-${n}`));
}

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload   = () => resolve(reader.result);
    reader.onerror = error => reject(error);   

  });
}

let base64Photo = '';

// Example usage:
const input = document.getElementById('photo');
input.addEventListener('change', (event) => {
  const file = event.target.files[0];
  convertToBase64(file)
    .then(base64String => {
      // Do something with the base64 string
      base64Photo = base64String;
    })
    .catch(error => {
      console.error('Error converting image to base64:', error);
    });
});

function convertFormDataToKeyValuePairs(form) {
    const formData = new FormData(form);
    const data = {};
  
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
  
    return data;
}

function submitData(){
    const form = document.getElementById('data');
    const data = convertFormDataToKeyValuePairs(form);
    /*for(data.key in data){
        localStorage.setItem(data.key, data[data.key]);
    }*/
   data["photo"] = {format: input.value.split('.')[1], encoding: "base64", data: base64Photo};
   localStorage.setItem("data", JSON.stringify(data));
}