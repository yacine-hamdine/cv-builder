function addField(group){
    let set = document.getElementById(group);
    const template = document.querySelectorAll(`#${group} .template`);    
    const tmp = [];
    template.forEach(el => tmp.push(el.cloneNode(true)));
    tmp.forEach(el => el.classList.remove('template'));
    tmp.forEach(el => set.insertBefore(el, set.lastElementChild));
}