function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload   
   = () => resolve(reader.result);
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
        console.log(base64String);
        // Do something with the base64 string
        base64Photo = base64String;
      })
      .catch(error => {
        console.error('Error converting image to base64:', error);
      });
  });

function addField(group){
    let rm = document.createElement('span');
    rm.innerHTML = '&#x274c;';
    rm.style.textAlign = 'right';
    rm.style.width = '90%';
    rm.style.cursor ='pointer';
    let set = document.getElementById(group);
    rm.onclick = () => {
        set.querySelectorAll('.added').forEach(el => el.remove());
    };
    const template = document.querySelectorAll(`#${group} .template`);    
    const tmp = [];
    template.forEach(el => tmp.push(el.cloneNode(true)));
    tmp.forEach(el => el.classList.remove('template'));
    tmp.forEach(el => el.classList.add("added"));
    tmp.forEach(el => el.setAttribute("name", `${el.name}-2`));
    rm.classList.add("added");
    set.insertBefore(rm, set.lastElementChild);
    tmp.forEach(el => set.insertBefore(el, set.lastElementChild));
}

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